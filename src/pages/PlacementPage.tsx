import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';

const PlacementPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('placement-cell');

  const sections = [
    {
      id: 'placement-cell',
      title: 'Placement Cell',
      content: `
        SRI VASAVI PHARMACY PLACEMENTS WING

        Welcome to Sri Vasavi Institute of Pharmaceutical Sciences Placements and Training Wing, where we mold aspiring pharmacists into industry-ready professionals.

        1. Our comprehensive program is designed to bridge the gap between academia and the dynamic pharmaceutical landscape, ensuring our students thrive in their careers.

        2. Through strategic partnerships with leading pharmaceutical companies, we offer unparalleled opportunities for internships, co-op placements, and full-time employment upon graduation. Our dedicated team provides personalized career guidance, resume workshops, and interview preparation to empower students to secure their dream jobs.

        3. With state-of-the-art facilities and hands-on training, we cultivate practical skills in drug formulation, clinical trials, regulatory affairs, and pharmacovigilance. Our industry-experienced faculty members impart invaluable insights and mentorship, preparing students to excel in a competitive market.

        Join us at the forefront of innovation and discovery, where every student is empowered to make a meaningful impact in the world of pharmacy.

        PLACEMENTS HEAD  
        Dr. P. Narayana Raju  

        PLACEMENT COORDINATOR  
        Mr. J.N.B. Indusekhar  
      `,
    },
    {
      id: 'highlights',
      title: 'Highlights',
      content: `
        1. Industry-Aligned Curriculum:  
           Our curriculum is meticulously crafted to meet the evolving demands of the pharmaceutical industry, ensuring that students graduate with the skills and knowledge sought after by employers.

        2. Extensive Network of Partnerships:  
           We boast strategic alliances with leading pharmaceutical companies, providing students with unparalleled access to internship, co-op, and placement opportunities in top-tier organizations.

        3. Personalized Career Guidance:  
           Our dedicated team of career advisors offers personalized support to students, helping them navigate their career paths, refine their professional profiles, and excel in interviews.
      `,
    },
    {
      id: 'alumni-interactions',
      title: 'Alumni Interactions',
      content: `
        Alumni interactions provide students with insights into the industry and career guidance. 
        Our alumni frequently visit the campus to share their experiences and mentor students.
      `,
      images: [
        'https://www.svips.ac.in/image/alumni1.jpeg',
        'https://www.svips.ac.in/image/8119f1b3-8d0c-4d94-a594-51351cb8d10d.jpg',
        
      ],
    },
    {
      id: 'guest-lectures',
      title: 'Guest Lectures',
      content: `
        We organize guest lectures by industry experts to help students stay updated with the latest trends and technologies. 
        These sessions provide valuable knowledge and networking opportunities.
      `,
      images: [
        
        'https://www.svips.ac.in/image/g1.jpg',
        'https://www.svips.ac.in/image/21dd5eb2-d760-4a5b-92b7-9fac3f7421cb.jpg',
      ],
    },
    {
      id: 'gallery',
      title: 'Placement Gallery',
      content: `
        Explore our gallery to see moments from our placement drives, alumni interactions, and guest lectures. 
        These images showcase the vibrant and professional environment at SVIPS.
      `,
      images: [
        'https://www.svips.ac.in/image/WhatsApp Image 2025-06-30 at 12.14.55 PM.jpeg',
        'https://www.svips.ac.in/image/WhatsApp Image 2025-06-30 at 12.18.24 PM.jpeg',
        'https://www.svips.ac.in/image/WhatsApp Image 2025-06-30 at 12.18.25 PM.jpeg',
        
      ],
    },
  ];

  const selectedSectionData = sections.find((section) => section.id === selectedSection);

  return (
    <PageTransition>
      {/* Hero Section */}

<section className="relative bg-blue-600 text-white py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Placements</h1>
      <p className="text-lg md:text-xl">
        Explore the placement opportunities, alumni interactions, and career guidance at SVIPS.
      </p>
    </div>
    <div className="absolute inset-0 z-0 opacity-50">
      <img
        src="public/uploads/images/placementsbg.png"
        alt="Placements Hero Background"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>


      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Vertical Container */}
          <div className="bg-gray-100 w-full md:w-1/3 p-6 flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Placement Sections</h2>
            <nav className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selectedSection === section.id
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Container */}
          <div className="w-full md:flex-grow p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedSectionData?.title}</h3>
            <p className="text-gray-600 whitespace-pre-line text-justify">{selectedSectionData?.content}</p>

            {/* Render Images if Available */}
            {selectedSectionData?.images && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {selectedSectionData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PlacementPage;