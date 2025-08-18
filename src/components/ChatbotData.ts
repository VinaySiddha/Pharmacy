interface ChatResponse {
  keywords: string[];
  response: string;
}

export const chatbotResponses: ChatResponse[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings','hai'],
    response: 'Hello! Welcome to Sri Vasavi Pharmacy College. How can I help you today?'
  },
  {
    keywords: ['principal'],
    response: 'The principal of Sri Vasavi Pharmacy College is Dr. Bhaskara Raju Vatchava. He is passionate about providing quality education and research in the field of pharmacy.'
  },
  {
    keywords: ['courses', 'programs', 'study', 'education'],
    response: 'We offer B.Pharmacy (4 years) and Pharm.D (6 years) programs. Would you like to know more about any specific course?'
  },
  {
    keywords: ['admission', 'apply', 'enroll', 'join'],
    response: 'For admissions, you can visit our college or apply online. The basic eligibility is Intermediate with BiPC. Would you like to know more about the admission process?'
  },
  {
    keywords: ['faculty', 'teachers', 'professors', 'staff'],
    response: 'We have highly qualified faculty members with extensive experience in pharmacy education and research. You can check our faculty page for detailed profiles.'
  },
  {
    keywords: ['facilities', 'infrastructure', 'campus'],
    response: 'Our campus features modern laboratories, a well-stocked library, computer labs, and research facilities. We also have separate hostels for boys and girls.'
  },
  {
    keywords: ['contact', 'location', 'address', 'reach'],
    response: 'You can reach us at [contact details]. Our campus is located at [address]. Would you like directions to reach us?'
  },
  {
    keywords: ['fees', 'cost', 'payment', 'expenses'],
    response: 'The fee structure varies for different programs. Please contact our administrative office for detailed fee information.'
  },
  {
    keywords: ['placements', 'jobs', 'career', 'opportunities'],
    response: 'We have excellent placement records with leading pharmaceutical companies. Our placement cell actively helps students in career development.'
  },
  {
    keywords: ['research', 'projects', 'publications'],
    response: 'Our college actively engages in research activities and has published numerous papers in reputed journals. We also have collaborations with industry partners.'
  },
  {
    keywords: ['hostel', 'accommodation', 'residence'],
    response: 'We provide separate hostel facilities for boys and girls with modern amenities and 24/7 security.'
  },
  {
    keywords: ['library', 'books', 'resources'],
    response: 'Our library is well-equipped with latest books, journals, and digital resources to support academic and research activities.'
  },
  {
    keywords: ['bye', 'goodbye', 'thank you', 'thanks'],
    response: 'Thank you for your interest in Sri Vasavi Pharmacy College. Feel free to reach out if you have any more questions!'
  }
];

export const defaultResponse = "I apologize, but I don't have specific information about that. Please contact our administrative office for more details or ask me something else about our college.";

export function findResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  for (const item of chatbotResponses) {
    if (item.keywords.some(keyword => input.includes(keyword))) {
      return item.response;
    }
  }
  
  return defaultResponse;
}