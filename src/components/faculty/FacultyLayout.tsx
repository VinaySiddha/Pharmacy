import React from 'react';

interface FacultyMember {
  id: number;
  name: string;
  qualification: string;
  designation: string;
  profile: string;
}

interface FacultyLayoutProps {
  facultyMembers: FacultyMember[];
}

const designationColors: { [key: string]: string } = {
  'Professor & Principal': 'bg-blue-100 text-blue-800',
  'Professor & HOD': 'bg-green-100 text-green-800',
  'Assoc. Professor': 'bg-yellow-100 text-yellow-800',
  'Asst. Professor': 'bg-red-100 text-red-800',
  'Computer Applications': 'bg-purple-100 text-purple-800',
  'Bio Stat and Research Methodology': 'bg-pink-100 text-pink-800',
  'English': 'bg-indigo-100 text-indigo-800',
};

export const FacultyLayout: React.FC<FacultyLayoutProps> = ({ facultyMembers }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Faculty Details</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {facultyMembers.map((faculty, index) => (
                  <tr key={faculty.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{faculty.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{faculty.qualification}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          designationColors[faculty.designation] || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {faculty.designation}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                      <a href={faculty.profile} target="_blank" rel="noopener noreferrer">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};