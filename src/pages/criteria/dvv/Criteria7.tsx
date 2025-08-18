import React from 'react';

const DvvCriteria7: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex">
      {/* Left Sidebar Menu */}
     

      {/* Main Content */}
      <div className="w-3/4">
        {/* Page Banner */}
        

        {/* Table Content */}
        <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 7</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">Metric No.</th>
              <th className="border border-gray-300 px-4 py-2">Qn/Ql</th>
              <th className="border border-gray-300 px-4 py-2">Metric Description</th>
              <th className="border border-gray-300 px-4 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">7.1.2</td>
              <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
              <td className="border border-gray-300 px-4 py-2">
                The Institution has facilities and initiatives for:
                <ul className="list-disc ml-4">
                  <li>Alternate sources of energy and energy conservation measures</li>
                  <li>Management of the various types of degradable and non-degradable waste</li>
                  <li>Water conservation</li>
                  <li>Green campus initiatives</li>
                  <li>Disabled-friendly, barrier-free environment</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc ml-4">
                  <li><a href="/uploads/naac/criteria7/7.1.2 Policy documents.pdf" target="_blank" className="text-blue-600 hover:underline">Policy Document</a></li>
                  <li><a href="/uploads/naac/criteria7/7.1.2 Bills.pdf" target="_blank" className="text-blue-600 hover:underline">Bills</a></li>
                  <li><a href="/uploads/naac/criteria7/7.1.2 Geo tagged Photographs.pdf" target="_blank" className="text-blue-600 hover:underline">Geo tagged Photographs</a></li>
                  <li><a href="/uploads/naac/criteria7/video_20240723_161237_edit.mp4" target="_blank" className="text-blue-600 hover:underline">Video of the Facilities</a></li>
                  <li><a href="/uploads/naac/dvv/Images of disabled friendly.pdf" target="_blank" className="text-blue-600 hover:underline">Images of disabled friendly</a></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">2</td>
              <td className="border border-gray-300 px-4 py-2 text-center">7.1.3</td>
              <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
              <td className="border border-gray-300 px-4 py-2">
                Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following:
                <ul className="list-disc ml-4">
                  <li>Green audit / Environment audit</li>
                  <li>Energy audit</li>
                  <li>Clean and green campus initiatives</li>
                  <li>Beyond the campus environmental promotion activities</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc ml-4">
                  <li><a href="/uploads/naac/criteria7/7.1.3 Policy documents.pdf" target="_blank" className="text-blue-600 hover:underline">Policy Document</a></li>
                  <li><a href="/uploads/naac/criteria7/7.1.3 certificates.pdf" target="_blank" className="text-blue-600 hover:underline">Certificates</a></li>
                  <li><a href="/uploads/naac/criteria7/7.1.3 Beyond the campus.pdf" target="_blank" className="text-blue-600 hover:underline">Beyond the campus environmental promotion and sustainability activities</a></li>
                  <li><a href="/uploads/naac/criteria7/7.1.3 Audit reports.pdf" target="_blank" className="text-blue-600 hover:underline">Green and Energy Audit Reports</a></li>
                  <li><a href="/uploads/naac/dvv/Action taken reports and achievement.pdf" target="_blank" className="text-blue-600 hover:underline">Action taken reports and achievement</a></li>
                </ul>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      </div>
  );
};

export default DvvCriteria7;