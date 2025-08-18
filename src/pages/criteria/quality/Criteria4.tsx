import React, { useState } from 'react';

const Criteria4: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '4.1.1',
      qnQl: 'QlM',
      description:
        'The Institution has adequate infrastructure and other facilities for teaching learning, viz., classrooms, laboratories, computing equipment, etc. ICT-enabled facilities such as smart class, LMS, etc. Facilities for cultural and sports activities, yoga centre, games (indoor and outdoor), gymnasium, auditorium, etc.',
      downloads: [
        { name: 'Physical Facilities-Classrooms & Labs', url: 'public/uploads/pdfs/naac/quality/criteria4/4.1Physical Facilities-Classroom & Labs.pdf' },
        { name: 'Physical Facilities-Gym, Yoga and Culturals', url: 'public/uploads/pdfs/naac/quality/criteria4/Physical Faciliies-Yoga,Gym & Culturals.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '4.1.2',
      qnQl: 'QnM',
      description:
        'Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years',
      downloads: [
        { category: 'Audited Statements', links: [
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria4/2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria4/2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria4/2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria4/2019-20.pdf' },
          { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria4/2018-19.pdf' },
        ]},
        { name: 'Budget Proposals (2019-24)', url: 'public/uploads/pdfs/naac/quality/criteria4/Budget Proposals(2019-24).pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '4.2.1',
      qnQl: 'QlM',
      description:
        'Library is automated with digital facilities using Integrated Library Management System (ILMS), adequate subscriptions to e-resources and journals are made. The library is optimally used by the faculty and students.',
      downloads: [
        { category: 'Library Books and e-Resources Invoices', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Bills-2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Bills-2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Bills-2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Bills-2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Bills-2019-20.pdf' },
        ]},
        { name: 'e-Resources', url: 'public/uploads/pdfs/naac/quality/criteria4/E-Resources.pdf' },
        { name: 'Library Transactions (2019-2024)', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Trasansactions (2019-2024).pdf' },
        { category: 'Library Visitors', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Visitors-2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Visitors 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Visitors2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Visitors-2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria4/Library Visitors-2019-20.pdf' },
        ]},
        { name: 'E-CAP Software', url: 'public/uploads/pdfs/naac/quality/criteria4/E-CAP Software.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '4.3.1',
      qnQl: 'QlM',
      description:
        'Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection.',
      downloads: [
        { name: 'CCTV Bills-2023-24', url: 'public/uploads/pdfs/naac/quality/criteria4/CCTV bills-2023-24.pdf' },
        { name: 'Internet Access & WiFi Bills', url: 'public/uploads/pdfs/naac/quality/criteria4/Internet access & WIFI-BILLS.pdf' },
        { name: 'IT Infrastructure Details', url: 'public/uploads/pdfs/naac/quality/criteria4/4.3.1-IT INFRASTRUCTURE DETAILS.pdf' },
        { name: 'Audit Reports (Internet Bills)', url: 'public/uploads/pdfs/naac/quality/criteria4/Audit Reports (Internet Bills).pdf' },
        { name: 'Proposals', url: 'public/uploads/pdfs/naac/quality/criteria4/Proposals.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '4.3.2',
      qnQl: 'QnM',
      description: 'Student – Computer ratio (Data for the latest completed academic year)',
      downloads: [
        { name: 'Student-Computer Ratio and Bills for Purchasing Stock Register', url: 'public/uploads/pdfs/naac/quality/criteria4/4.3.2-Student computer Ratio.pdf' },
      ],
    },
    {
      sno: 6,
      metricNo: '4.4.1',
      qnQl: 'QnM',
      description:
        'Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years (INR in lakhs)',
      downloads: [
        { category: 'Expenditure on Maintenance', links: [
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria4/2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria4/2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria4/2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria4/2019-20.pdf' },
          { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria4/2018-19.pdf' },
        ]},
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 4</h1>
      <div className="overflow-x-auto">
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
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-center">{row.sno}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{row.metricNo}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{row.qnQl}</td>
                <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.downloads.map((download, i) =>
                    'category' in download ? (
                      <div key={i} className="mb-2">
                        <p className="font-semibold">{download.category}:</p>
                        <ul className="list-disc list-inside">
                          {'links' in download && download.links.map((link, j) => (
                            <li key={j}>
                              <button
                                onClick={() => setSelectedPdf(link.url)}
                                className="text-blue-600 hover:underline"
                              >
                                {link.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <button
                        key={i}
                        onClick={() => setSelectedPdf(download.url)}
                        className="text-blue-600 hover:underline block text-left"
                      >
                        {download.name}
                      </button>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for PDF Viewer */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 h-3/4 rounded shadow-lg overflow-hidden relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b border-gray-300">
              <h2 className="text-lg font-semibold">PDF Viewer</h2>
              <button
                onClick={() => setSelectedPdf(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            {/* PDF Content */}
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Criteria4;
