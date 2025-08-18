from flask import Flask, request, jsonify
import faiss
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
from PyPDF2 import PdfReader
from nltk.tokenize import sent_tokenize
import nltk
import openai  # Import OpenAI library

# Ensure the punkt tokenizer is downloaded
nltk.download('punkt_tab')

app = Flask(__name__)
CORS(app)

# Load the FAISS index
try:
    faiss_index = faiss.read_index("faiss_index.index")
    print("FAISS index loaded successfully.")
except Exception as e:
    print(f"Error loading FAISS index: {e}")
    faiss_index = None

# Load the embedding model
embedding_model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
print("Embedding model loaded successfully.")

# Load the Question-Answering model and tokenizer
qa_model_name = "distilbert-base-cased-distilled-squad"  # Use a QA model from Hugging Face
qa_tokenizer = AutoTokenizer.from_pretrained(qa_model_name)
qa_model = AutoModelForQuestionAnswering.from_pretrained(qa_model_name)
qa_pipeline = pipeline("question-answering", model=qa_model, tokenizer=qa_tokenizer)
print("Question-Answering model loaded successfully.")

# Function to retrieve relevant chunks dynamically from FAISS
def retrieve_relevant_chunks(query, faiss_index, all_chunks, n_retrievals=5):
    # Generate embedding for the query
    query_embedding = embedding_model.encode([query]).astype('float32').reshape(1, -1)

    # Perform FAISS search
    D, I = faiss_index.search(query_embedding, k=n_retrievals)  # Retrieve top n chunks

    # Retrieve the content of the relevant chunks
    retrieved_chunks = []
    for idx in I[0]:
        if idx < len(all_chunks):  # Ensure the index is valid
            chunk = " ".join(all_chunks[idx])  # Combine sentences into a single string
            print(f"Retrieved chunk for index {idx}: {chunk}")  # Debug: Print each retrieved chunk
            retrieved_chunks.append(chunk)
        else:
            print(f"Index {idx} is out of bounds for all_chunks.")
            retrieved_chunks.append(f"Chunk not found for index {idx}")

    return retrieved_chunks

# Function to extract text from PDFs and chunk it
def extract_and_chunk_pdfs(pdf_paths):
    all_chunks = []
    for pdf_path in pdf_paths:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        sentences = sent_tokenize(text)
        chunks = [sentences[i:i+3] for i in range(0, len(sentences), 3)]  # Chunking by 3 sentences
        all_chunks.extend(chunks)
    return all_chunks

# Reconstruct the chunks dynamically from the PDFs
pdf_paths = ["faculty.pdf", "ssr.pdf", "guideline-339-en.pdf"]  # Add paths to your PDF files
all_chunks = extract_and_chunk_pdfs(pdf_paths)
print(f"Reconstructed {len(all_chunks)} chunks.")

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "Message is required"}), 400

    # Process the user input and get a response
    if faiss_index:
        try:
            # Step 1: Retrieve relevant chunks
            relevant_chunks = retrieve_relevant_chunks(user_input, faiss_index, all_chunks, n_retrievals=5)
            print("Relevant Chunks:", relevant_chunks)  # Debug: Print all retrieved chunks

            # Step 2: Filter chunks for relevance
            filtered_chunks = [chunk for chunk in relevant_chunks if "principal" in chunk.lower()]
            if not filtered_chunks:
                filtered_chunks = relevant_chunks  # Fallback to all chunks if no specific match is found
            print("Filtered Chunks:", filtered_chunks)  # Debug: Print filtered chunks

            # Step 3: Prioritize the most relevant chunk
            prioritized_chunk = filtered_chunks[0] if filtered_chunks else " ".join(relevant_chunks)
            print("Prioritized Chunk for QA model:", prioritized_chunk)  # Debug: Print the prioritized chunk

            # Step 4: Use the QA model to extract the answer
            qa_input = {
                "question": user_input,
                "context": prioritized_chunk
            }
            answer = qa_pipeline(qa_input)
            print("Generated Answer:", answer["answer"])  # Debug: Print the generated answer
            response = answer["answer"]
        except Exception as e:
            print(f"Error during query: {e}")
            response = "An error occurred while processing your request."
    else:
        response = "FAISS index not loaded properly."

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)