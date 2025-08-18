import React, { useState } from 'react';

const Criteria5: React.FC = () => {
   const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '5.1.1',
      qnQl: 'QnM',
      description:
        'Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies during last five years',
      downloads: [
        { category: 'No. of students benefitted', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1 List of Beneficiary Students 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1 List of Beneficiary Students 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1 List of Beneficiary Students 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1 List of Beneficiary Students 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1 List of Beneficiary Students 2019-20.pdf' },
        ]},
        { category: 'Sanction Letters', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1. Sanction letters 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1. Sanction Letters 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1. Sanction Letters 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1. Sanction Letters 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1. Sanction Letters 2019-20.pdf' },
        ]},
        { name: 'Policy Documents', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.1.Policy Documents.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '5.1.2',
      qnQl: 'QnM',
      description:
        'Following capacity development and skills enhancement activities organized for improving student’s capability',
      downloads: [
        { name: 'List of students placed along with placement', target :'_blank'},
        { name: 'Soft Skills', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.2.1 Soft Skills.pdf' },
        { name: 'Language and Communication Skills', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.2.2 Language and Communication Skills.pdf' },
        { name: 'Life Skills', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.2.3 Life Skills.pdf' },
        { name: 'Awareness of trends in technology', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.2.4 Trends inTechnology.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '5.1.3',
      qnQl: 'QnM',
      description:
        'Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years',
      downloads: [
        { category: 'Activities organized', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.3. 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.3  2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.3  2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.3  2022-23.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.3. 2023-24.pdf' },
        ]},
      ],
    },
    {
      sno: 4,
      metricNo: '5.1.4',
      qnQl: 'QnM',
      description:
        'The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases',
      downloads: [
        { name: 'Policies', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.4 Policies_removed.pdf' },
        { name: 'Proofs', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.4 Proofs.pdf' },
        { name: 'Awareness', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.4 Awarness.pdf' },
        { name: 'Mechanisms', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.4 Mechanismas.pdf' },
        { name: 'Annual Report', url: 'public/uploads/pdfs/naac/quality/criteria5/5.1.4 Annual Report.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '5.2.1',
      qnQl: 'QnM',
      description:
        'Percentage of placement of outgoing students and students progressing to higher education during the last five years',
      downloads: [
        { category: 'List of students placed along with placement', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1.1.STUDENTS PLACEMENT 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1.1.STUDENTS PLACEMENT 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1.1.STUDENTS PLACEMENT 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1.1.STUDENTS PLACEMENT 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1.1.STUDENTS PLACEMENT 2019-20.pdf' },
        ]},
        { category: 'List of students progressing for Higher Education', links: [
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1. Progressing to higher education 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1. Progressing to higher education 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1. Progressing to higher education 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1.higher education 2019-20.pdf' },
          { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.1. Progressing to higher education 2018-19.pdf' },
        ]},
      ],
    },
    {
      sno: 6,
      metricNo: '5.2.2',
      qnQl: 'QnM',
      description:
        'Percentage of students qualifying in state/national/international level examinations during the last five years',
      downloads: [
        { category: 'Qualified list', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.2 Certificates of Competitive Examinations 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.2 Certificates of Competitive Examinations 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.2 Certificates of Competitive Examinations 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.2 Certificates of Competitive Examinations 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.2.2 Certificates of Competitive Examinations 2019-20.pdf' },
        ]},
      ],
    },
    {
      sno: 7,
      metricNo: '5.3.1',
      qnQl: 'QnM',
      description:
        'Number of awards/medals for outstanding performance in sports/cultural activities at University/state/national/international level (award for a team event should be counted as one) during the last five years',
      downloads: [
        { name: 'e-Copies of Awards & Certificates',target:'_blank'},
        { name: 'Student Awards & Medals', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.1 Student  Awards& medals.pdf' },
        { name: 'Inter College Certificates', url: 'public/uploads/pdfs/naac/quality/criteria5/Inter college Certificates.pdf' },
      ],
    },
    {
      sno: 8,
      metricNo: '5.3.2',
      qnQl: 'QnM',
      description:
        'Average number of sports and cultural programs in which students of the Institution participated during last five years',
      downloads: [
        { category: 'Circulars', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2 2023-24 Circulars.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2 2022-23 Circulars.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2 2021-22 Circulars.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2 2020-21 Circulars.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2 2019-20 Circulars.pdf' },
        ]},
        { category: 'List of participants', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/List of participents-2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/List of participents-2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/List of participents 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/List of participents 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/List of Participents -2019-20.pdf' },
        ]},
        { category: 'Reports', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/Reports-2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/Reports-2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/Reports-2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/Reports-2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/Reports-2019-20.pdf' },
        ]},
        { category: 'Certificates', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2-2023-24 Certificates.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2-2022-23 Certificates.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2-2021-22 Certificates.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2-2020-21 Certificates.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria5/5.3.2-2019-20 Certificates.pdf' },
        ]},
      ],
    },
    {
      sno: 9,
      metricNo: '5.4.1',
      qnQl: 'QlM',
      description:
        'There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services',
      downloads: [
        { name: 'Alumni Association', url: 'public/uploads/pdfs/naac/quality/criteria5/5.4 Alumni Engagement.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 5</h1>
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
                                className="text-blue-600 hover:underline text-left  "
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

export default Criteria5;
