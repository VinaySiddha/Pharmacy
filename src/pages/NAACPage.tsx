import React, { useState } from 'react';
// import DvvCriteria1 from './criteria/dvv/Criteria1'; // Import DVV criteria components
// import DvvCriteria2 from './criteria/dvv/Criteria2';
// import DvvCriteria3 from './criteria/dvv/Criteria3';
// import DvvCriteria4 from './criteria/dvv/Criteria4';
// import DvvCriteria5 from './criteria/dvv/Criteria5';
// import DvvCriteria6 from './criteria/dvv/Criteria6';
// import DvvCriteria7 from './criteria/dvv/Criteria7';

import QualityCriteria1 from './criteria/quality/Criteria1'; // Import Quality Indicator criteria components
import QualityCriteria2 from './criteria/quality/Criteria2';
import QualityCriteria3 from './criteria/quality/Criteria3';
import QualityCriteria4 from './criteria/quality/Criteria4';
import QualityCriteria5 from './criteria/quality/Criteria5';
import QualityCriteria6 from './criteria/quality/Criteria6';
import QualityCriteria7 from './criteria/quality/Criteria7';
import DvvCriteria1 from './criteria/dvv/Criteria1';
import DvvCriteria2 from './criteria/dvv/Criteria2';
import DvvCriteria3 from './criteria/dvv/Criteria3';
import DvvCriteria4 from './criteria/dvv/Criteria4';
import DvvCriteria5 from './criteria/dvv/Criteria5';
import DvvCriteria6 from './criteria/dvv/Criteria6';
import DvvCriteria7 from './criteria/dvv/Criteria7';

const NAACPage: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [selectedCriteria, setSelectedCriteria] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile dropdown menu
  const [pdfUrl, setPdfUrl] = useState<string | null>(null); // State for the PDF URL to display in the modal

  const handlePdfView = (url: string) => {
    setPdfUrl(url);
  };

  const documents = [
    {
      id: 1,
      title: 'IIQA',
      content: 'IIQA Content',
      links: [
        { name: 'IIQA', url: 'public/naac/SRI_VASAVI_INSTITUTE_OF_PHARMACEUTICAL_SCIENCES_iiqa.pdf' },
        { name: 'Undertaking Form', url: 'public/naac/UNDERTAKING.pdf' },
        { name: 'Self Declaration', url: 'public/naac/SELF DECLARATION.pdf' },
      ],
    },
    {
      id: 2,
      title: 'RTI',
      content: 'RTI Content',
      links: [],
    },
    {
      id: 3,
      title: 'SSR',
      content: 'SSR Content',
      links: [
        { name: 'Self Study Report', url: 'public/uploads/pdfs/APCOGN101359 Dt 21 Sept 2024.pdf' },
      ],
    },
    {
      id: 4,
      title: 'Executive Summary',
      content: 'Executive Summary Content',
      links: [
        { name: 'Executive Summary Report', url: 'public/uploads/pdfs/APCOGN101359 Dt 21 Sept 2024.pdf' },
      ],
    },
    {
      id: 5,
      title: 'Profile',
      content: 'Profile Content',
      links: [
        { name: 'Institutional Profile', url: 'public/uploads/pdfs/APCOGN101359 Dt 21 Sept 2024.pdf' },
      ],
    },
    {
      id: 6,
      title: 'Extended Profile',
      content: 'Extended Profile Content',
      table: [
        {
          sno: 1,
          metricNo: '1.1',
          description: 'AU Approvals Students List',
          downloads: [
            { name: '2023-24', url: 'public/uploads/pdfs/au-approvals-2023-24.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/au-approvals-2022-23.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/au-approvals-2021-22.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/au-approvals-2020-21.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/au-approvals-2019-20.pdf' }
          ],
        },
        {
          sno: 2,
          metricNo: '2.1',
          description: 'List of Faculty during last five years',
          downloads: [{ name: 'View', url: 'public/uploads/pdfs/faculty-list.pdf' }],
        },
         {
          sno: 3,
          metricNo: '2.2',
          description: 'Faculty List',
          downloads: [
            { name: '2023-24', url: 'public/uploads/pdfs/au-approvals-2023-24.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/au-approvals-2022-23.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/au-approvals-2021-22.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/au-approvals-2020-21.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/au-approvals-2019-20.pdf' }
          ],
        },
        {
          sno: 4,
          metricNo: '3.1',
          description: 'Exp Statement excluding Salaries',
          downloads: [
            { name: 'View', url: 'public/uploads/pdfs/exp-statement.pdf' },
            { name: 'Financial Statement', url: 'public/uploads/pdfs/financial-statement.pdf' },
          ],
        },
      ],
    },
    {
      id: 7,
      title: 'Quality Indicator Metrics',
      content: 'Quality Indicator Metrics Content',
      criteria: [
        { id: 'criteria-i', title: 'CRITERIA-I', component: <QualityCriteria1 /> },
        { id: 'criteria-ii', title: 'CRITERIA-II', component: <QualityCriteria2 /> },
        { id: 'criteria-iii', title: 'CRITERIA-III', component: <QualityCriteria3 /> },
        { id: 'criteria-iv', title: 'CRITERIA-IV', component: <QualityCriteria4 /> },
        { id: 'criteria-v', title: 'CRITERIA-V', component: <QualityCriteria5 /> },
        { id: 'criteria-vi', title: 'CRITERIA-VI', component: <QualityCriteria6 /> },
        { id: 'criteria-vii', title: 'CRITERIA-VII', component: <QualityCriteria7 /> },
      ],
    },
    {
       id: 8,
      title: 'DVV Clarification Metrics',
      content: 'DVV Clarification Metrics Content',
      criteria: [
         { id: 'criteria-i', title: 'CRITERIA-I', component: <DvvCriteria1 /> },
         { id: 'criteria-ii', title: 'CRITERIA-II', component: <DvvCriteria2 /> },
         { id: 'criteria-iii', title: 'CRITERIA-III', component: <DvvCriteria3 /> },
         { id: 'criteria-iv', title: 'CRITERIA-IV', component: <DvvCriteria4 /> },
         { id: 'criteria-v', title: 'CRITERIA-V', component: <DvvCriteria5 /> },
         { id: 'criteria-vi', title: 'CRITERIA-VI', component: <DvvCriteria6 /> },
         { id: 'criteria-vii', title: 'CRITERIA-VII', component: <DvvCriteria7 /> },
       ],
    },
     {
       id: 9,
       title: 'Extended Profile Deviations',
       content: 'Extended Profile Deviations Content',
       table: [
         { name: 'CRITERIA-I', url: '/criteria/extended-profile-criteria-i' },
         { name: 'CRITERIA-II', url: '/criteria/extended-profile-criteria-ii' },
         { name: 'CRITERIA-III', url: '/criteria/extended-profile-criteria-iii' },
         { name: 'CRITERIA-IV', url: '/criteria/extended-profile-criteria-iv' },
         { name: 'CRITERIA-V', url: '/criteria/extended-profile-criteria-v' },
         { name: 'CRITERIA-VI', url: '/criteria/extended-profile-criteria-vi' },
         { name: 'CRITERIA-VII', url: '/criteria/extended-profile-criteria-vii' },
       ],
    },
    {
       id: 10,
       title: 'Metric Level Deviations',
       content: 'Metric Level Deviations Content',
       table: [
         { name: 'CRITERIA-I', url: '/criteria/metric-level-criteria-i' },
    { name: 'CRITERIA-II', url: '/criteria/metric-level-criteria-ii' },
         { name: 'CRITERIA-III', url: '/criteria/metric-level-criteria-iii' },
         { name: 'CRITERIA-IV', url: '/criteria/metric-level-criteria-iv' },
       { name: 'CRITERIA-V', url: '/criteria/metric-level-criteria-v' },
         { name: 'CRITERIA-VI', url: '/criteria/metric-level-criteria-vi' },
         { name: 'CRITERIA-VII', url: '/criteria/metric-level-criteria-vii' },
      ],
     },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NAAC</h1>
            <p className="text-lg md:text-xl"></p>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src="public/uploads/images/naac.png"
              alt="Faculty"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">NAAC</h2>
            <button
              className="md:hidden w-full text-left px-4 py-2 bg-gray-100 rounded-lg mb-4"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? 'Hide Menu' : 'Show Menu'}
            </button>
            <ul
              className={`space-y-2 ${menuOpen ? 'block' : 'hidden'} md:block`}
            >
              {documents.map((doc) => (
                <li key={doc.id}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      selectedDocument === doc.content
                        ? 'bg-blue-100 text-blue-600 font-semibold'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => {
                      setSelectedDocument(doc.content);
                      setSelectedCriteria(null); // Reset criteria selection
                      setMenuOpen(false); // Close menu on mobile
                    }}
                  >
                    {doc.title}
                  </button>
                </li>
              ))}
             
            </ul>
          </div>

          {/* Content Area */}
          <div className="col-span-3 bg-white p-6 rounded shadow">
            {selectedDocument === 'DVV Clarification Metrics Content' ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  DVV Clarification Metrics
                </h2>
                <ul className="space-y-2">
                  {documents
                    .find((doc) => doc.content === selectedDocument)
                    ?.criteria.map((criterion) => (
                      <li key={criterion.id}>
                        <button
                          className={`w-full text-left px-4 py-2 rounded-lg ${
                            selectedCriteria === criterion.id
                              ? 'bg-blue-100 text-blue-600 font-semibold'
                              : 'hover:bg-gray-100 text-gray-800'
                          }`}
                          onClick={() => setSelectedCriteria(criterion.id)}
                        >
                          {criterion.title}
                        </button>
                      </li>
                    ))}
                </ul>
                {selectedCriteria &&
                  documents
                    .find((doc) => doc.content === selectedDocument)
                    ?.criteria.find((criterion) => criterion.id === selectedCriteria)
                    ?.component}
              </div>
            ) : selectedDocument === 'Quality Indicator Metrics Content' ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Quality Indicator Metrics
                </h2>
                <ul className="space-y-2">
                  {documents
                    .find((doc) => doc.content === selectedDocument)
                    ?.criteria.map((criterion) => (
                      <li key={criterion.id}>
                        <button
                          className={`w-full text-left px-4 py-2 rounded-lg ${
                            selectedCriteria === criterion.id
                              ? 'bg-blue-100 text-blue-600 font-semibold'
                              : 'hover:bg-gray-100 text-gray-800'
                          }`}
                          onClick={() => setSelectedCriteria(criterion.id)}
                        >
                          {criterion.title}
                        </button>
                      </li>
                    ))}
                </ul>
                {selectedCriteria &&
                  documents
                    .find((doc) => doc.content === selectedDocument)
                    ?.criteria.find((criterion) => criterion.id === selectedCriteria)
                    ?.component}
              </div>
            ) : selectedDocument === 'Extended Profile Content' ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {documents.find((doc) => doc.content === selectedDocument)?.title}
                </h2>
                {/* Responsive Table for Extended Profile */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">S.No</th>
                        <th className="border border-gray-300 px-4 py-2">Metric No.</th>
                        <th className="border border-gray-300 px-4 py-2">Metric Description</th>
                        <th className="border border-gray-300 px-4 py-2">Downloads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents
                        .find((doc) => doc.content === selectedDocument)
                        ?.table.map((row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 text-center">{row.sno}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{row.metricNo}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc ml-4">
                                {row.downloads.map((download, i) => (
                                  <li key={i}>
                                    <button
                                      onClick={() => handlePdfView(download.url)} // Use the new function
                                      className="text-blue-600 hover:underline"
                                    >
                                      {download.name}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : selectedDocument ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {documents.find((doc) => doc.content === selectedDocument)?.title}
                </h2>
                <p className="text-gray-600 mb-4">{selectedDocument}</p>
                {/* Links for Selected Document */}
                {documents
                  .find((doc) => doc.content === selectedDocument)
                  ?.links.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handlePdfView(link.url)} // Use the new function
                      className="block text-blue-600 hover:underline mb-2"
                    >
                      {link.name}
                    </button>
                  ))}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to NAAC</h2>
                <p className="text-gray-600">
                  Select a document from the left to view its details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {pdfUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">PDF Viewer</h2>
              <button
                onClick={() => setPdfUrl(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
            <div className="p-4">
              <embed
                src={pdfUrl}
                type="application/pdf"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NAACPage;