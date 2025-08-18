import React, { useState } from 'react';
import { CommitteeLayout } from './CommitteeLayout';
import { committeeData } from './CommitteeData';
import { ChevronRight, ChevronDown } from 'lucide-react';
import PageTransition from '../PageTransition';
import SectionHeading from '../SectionHeading';

const CommitteesPage: React.FC = () => {
  const [selectedCommittee, setSelectedCommittee] = useState('anti-ragging');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const committees = [
    { id: 'iqac', name: 'IQAC' },
    { id: 'anti-ragging', name: 'Anti-Ragging Committee' },
    { id: 'anti-discrimination', name: 'Anti Discrimination Cell' },
    { id: 'grd', name: 'GRD Committee' },
    { id: 'library', name: 'Library Committee' },
    { id: 'animal-ethical', name: 'Institutional Animal Ethical' },
    { id: 'women-empowerment', name: 'Women Empowerment Cell' },
    { id: 'entrepreneurship', name: 'Entrepreneurship Cell' },
    { id: 'alumni', name: 'Alumni Association' },
    { id: 'st-sc-welfare', name: 'ST/SC Welfare Cell' },
    { id: 'minority', name: 'Minority Cell' },
    { id: 'student-mentoring', name: 'Students Mentoring Cell' },
    { id: 'examination', name: 'Examination Cell' },
    { id: 'r-and-d', name: 'R&D Cell' },
    { id: 'internal-complaint', name: 'Internal Complaint Cell' },
    { id: 'sc-st-obc', name: 'SC/ST/OBC Cell' }
  ];

  // Add error handling for undefined committee data
  const selectedCommitteeData = committeeData[selectedCommittee] || {
    title: 'Committee',
    description: 'Information not available',
    responsibilities: ['No responsibilities listed'],
    members: []
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Committees</h1>
            <p className="text-lg md:text-xl">Explore the various committees at our institution.</p>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src="https://media.istockphoto.com/id/1272326797/photo/executive-team-listening-to-contrary-views-from-colleague.jpg?s=612x612&w=0&k=20&c=C8gVcRVvdRmc-5no4Uan7jQE1xPB2oqQe_iYbsVooDg="
              alt="Committees"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Committees Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Committees"
            subtitle="Learn more about the various committees that help run our institution."
          />
          <div className="mt-12">
            {/* Dropdown Button */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-2 rounded-lg flex items-center justify-between bg-white shadow-lg"
              >
                <span className="text-xl font-bold text-gray-900">Committees</span>
                {isDropdownOpen ? (
                  <ChevronDown className="h-6 w-6 text-gray-600" />
                ) : (
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                )}
              </button>
              {isDropdownOpen && (
                <nav className="mt-2 space-y-2">
                  {committees.map((committee) => (
                    <button
                      key={committee.id}
                      onClick={() => {
                        setSelectedCommittee(committee.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                        selectedCommittee === committee.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{committee.name}</span>
                      <ChevronRight className={`h-4 w-4 ${
                        selectedCommittee === committee.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </button>
                  ))}
                </nav>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="hidden md:block md:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Committees</h2>
                  <nav className="space-y-2">
                    {committees.map((committee) => (
                      <button
                        key={committee.id}
                        onClick={() => setSelectedCommittee(committee.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                          selectedCommittee === committee.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{committee.name}</span>
                        <ChevronRight className={`h-4 w-4 ${
                          selectedCommittee === committee.id ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2">
                <CommitteeLayout {...selectedCommitteeData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CommitteesPage;