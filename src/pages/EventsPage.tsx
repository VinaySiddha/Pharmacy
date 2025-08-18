import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';

const EventsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  const eventsData = {
    '2024-2025': [
      {
        id: 'event-1',
        title: 'Our NSS students actively volunteered to support Aadmabandam charity trust in conducting Bharat Science Talent Test among school students in TPGudem.',
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-18%20at%2011.33.09%20AM%20(1).jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-18%20at%2011.33.09%20AM.jpeg',
        ],
      },
      {
        id: 'event-2',
        title: "International Women's Day Celebrations",
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.10%20PM.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.12%20PM.jpeg',
        ],
      },
      {
        id: 'event-3',
        title: 'Awareness Program on Suicide Prevention',
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.04%20PM.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.03%20PM%20(1).jpeg',
        ],
      },
      {
        id: 'event-4',
        title: 'Sports Week',
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.02%20PM.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.01%20PM.jpeg',
        ],
      },
      {
        id: 'event-5',
        title: 'Mega Cleanliness Drive',
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.30.57%20PM.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.30.58%20PM.jpeg',
        ],
      },
      {
        id: 'event-6',
        title: 'Swachhata Hi Seva',
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.00%20PM.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.01%20PM%20(1).jpeg',
        ],
      },
      {
        id: 'event-7',
        title: 'Plantation Programme',
        images: [
          'https://www.svips.ac.in/image/plant1.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.31.08%20PM.jpeg',
        ],
      },
      {
        id: 'event-8',
        title: 'International Yoga Day',
        images: [
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.30.56%20PM.jpeg',
          'https://www.svips.ac.in/image/WhatsApp%20Image%202024-07-05%20at%203.30.55%20PM.jpeg',
        ],
      },
       {
        id: 'event-9',
        title: 'National Pharmacy Week Celebrations',
        images: [
          'public/uploads/images/pharmacy week (1).jpeg',
          'public/uploads/images/pharmacy week (2).jpeg',
        ],
      },
       {
        id: 'event-10',
        title: 'Constitution Day Celebrations',
        images: [
          'public/uploads/images/constitut (1).jpeg',
          'public/uploads/images/constitut (2).jpeg',
        ],
      },
       {
        id: 'event-11',
        title: 'Medical Camp Celebrations',
        images: [
          'public/uploads/images/constitution (1).jpeg',
          'public/uploads/images/constitution (2).jpeg',
        ],
      },
    ],
    '2023-2024': [
      {
        id: 'tech-meetup',
        title: 'Tech Meetup 2024',
        description: 'Network with tech enthusiasts, attend workshops, and learn about the latest trends in technology.',
        date: 'March 15, 2024',
        time: '9:00 AM - 4:00 PM',
        location: 'Conference Hall A',
      },
      {
        id: 'pharma-seminar',
        title: 'Pharma Seminar',
        description: 'Learn about the latest advancements in the pharmaceutical industry from leading experts.',
        date: 'May 20, 2024',
        time: '10:00 AM - 3:00 PM',
        location: 'Seminar Hall B',
      },
    ],
  };

  const selectedEvents = eventsData[selectedYear];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest events happening at our institution. Stay updated and participate in cultural, sports, and academic activities.
            </p>
            <a
              href="/past-events"
              className="inline-flex items-center text-white font-semibold py-2 px-4 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition"
            >
              Our Activities <span className="ml-2">&gt;</span>
            </a>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src="https://gsbt.edu.in//wp-content/uploads/2023/12/17.11.2023-PHARMACEUTICAL-ABOUT-THE-DEPARTMENT-1.jpg"
              alt="Events Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Container */}
          <div className="bg-gray-100 w-full md:w-1/4 p-6 flex-shrink-0 h-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Event Years</h2>
            <nav className="space-y-4">
              {Object.keys(eventsData).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selectedYear === year
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Container */}
          <div className="w-full md:flex-grow p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedYear} Events</h3>
            {selectedYear === '2024-2025' ? (
              <div className="space-y-8">
                {selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white p-4 rounded-lg shadow-md flex flex-col"
                  >
                    <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">{event.title}</h4>
                    <div className="flex justify-center gap-4">
                      {event.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Event ${event.id} Image ${index + 1}`}
                          className="object-cover rounded-lg shadow-md"
                          style={{ width: '48%', height: 'auto' }} // Ensure two images fit side by side
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedEvents.map((event) => (
                  <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                    <p className="text-gray-500 mt-2">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-gray-500">
                      <strong>Time:</strong> {event.time}
                    </p>
                    <p className="text-gray-500">
                      <strong>Location:</strong> {event.location}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default EventsPage;