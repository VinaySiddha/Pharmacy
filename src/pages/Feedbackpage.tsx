import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<string>(''); // State to track selected feedback
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    academicYear: '',
  }); // State to track form data
  const [step, setStep] = useState<number>(1); // State to track the current step (1: first form, 2: second form)
  const [questionResponses, setQuestionResponses] = useState<{ [key: string]: string }>({}); // State to track responses to questions

  const feedbackData: { [key: string]: string } = {
    'Student Feedback on Curriculum': 'This section contains student feedback on the curriculum.',
    'Student Feedback on Infrastructure': 'This section contains student feedback on the infrastructure.',
    'Faculty Feedback on Curriculum': 'This section contains faculty feedback on the curriculum.',
    'Faculty Feedback on Infrastructure': 'This section contains faculty feedback on the infrastructure.',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuestionResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFirstFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to the second form
  };

  const handleSecondFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('First Form Data:', formData);
    console.log('Question Responses:', questionResponses);
    alert('Feedback submitted successfully!');
    // Reset the forms
    setFormData({
      name: '',
      designation: '',
      academicYear: '',
    });
    setQuestionResponses({});
    setStep(1); // Reset to the first form
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3')`,
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Feedback</h1>
          <p className="mt-4 text-lg">
            Explore feedback from students and faculty on various aspects of the institution.
          </p>
        </div>
      </div>

      {/* Feedback Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Left Side Container */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold mb-4">Feedback Categories</h2>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Student Feedback on Curriculum' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Student Feedback on Curriculum');
              setStep(1);
            }}
          >
            <span className="text-blue-700 hover:underline block text-left">
              Student Feedback on Curriculum
            </span>
          </div>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Student Feedback on Infrastructure' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Student Feedback on Infrastructure');
              setStep(1);
            }}
          >
            <span className="text-blue-700 hover:underline block text-left">
              Student Feedback on Infrastructure
            </span>
          </div>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Faculty Feedback on Curriculum' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Faculty Feedback on Curriculum');
              setStep(1);
            }}
          >
            <span className="text-blue-700 hover:underline block text-left">
              Faculty Feedback on Curriculum
            </span>
          </div>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Faculty Feedback on Infrastructure' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Faculty Feedback on Infrastructure');
              setStep(1);
            }}
          >
            <span className="text-blue-700 hover:underline block text-left">
              Faculty Feedback on Infrastructure
            </span>
          </div>
        </div>

        {/* Right Side Container */}
        <div className="w-full md:w-3/4 bg-white p-4 shadow-md rounded-md min-h-[500px]">
          {selectedFeedback === 'Student Feedback on Curriculum' && (
            <iframe
              src="https://svips.ac.in/Feed/student.php"
              title="Student Feedback on Curriculum"
              className="w-full h-[600px] border rounded"
            />
          )}
          {selectedFeedback === 'Student Feedback on Infrastructure' && (
            <iframe
              src="https://svips.ac.in/Feed/Infrastructure.php"
              title="Student Feedback on Infrastructure"
              className="w-full h-[600px] border rounded"
            />
          )}
          {selectedFeedback === 'Faculty Feedback on Curriculum' && (
            <iframe
              src="https://svips.ac.in/Feed/faculty.php"
              title="Faculty Feedback on Curriculum"
              className="w-full h-[600px] border rounded"
            />
          )}
          {selectedFeedback === 'Faculty Feedback on Infrastructure' && (
            <iframe
              src="https://svips.ac.in/Feed/ifaculty.php"
              title="Faculty Feedback on Infrastructure"
              className="w-full h-[600px] border rounded"
            />
          )}
          {!selectedFeedback && (
            <div className="text-gray-500 text-center py-20">
              Please select a feedback category to view the form.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;