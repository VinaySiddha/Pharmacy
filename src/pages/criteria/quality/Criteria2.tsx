import React, { useState } from 'react';

const Criteria2: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '2.1.1',
      qnQl: 'QnM',
      description: 'Enrollment percentage',
      downloads: [
        { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria2/2.1.1. 2023-24 B.Pharm apsche.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria2/2.1.1. 2022-23 B.Pharm apsche.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria2/2.1.1. 2021-22 B.Pharm apsche.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria2/2.1.1. 2020-21 B.Pharm apsche.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria2/2.1.1. 2019-20 B.Pharm apsche.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '2.1.2',
      qnQl: 'QnM',
      description:
        'Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc.)',
      downloads: [
        { name: 'GO', url: 'public/uploads/pdfs/naac/quality/criteria2/2.pdf' },
        { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria2/Admission extract _2023-24.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria2/Admission extract _2022-23.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria2/Admission extract _2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria2/Admission extract _2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria2/Admission extract _2019-20.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '2.2.1',
      qnQl: 'QnM',
      description: 'Student- Full time teacher ratio (Data for the latest completed academic year)',
      downloads: [
        { name: 'View', url: 'public/uploads/pdfs/naac/quality/criteria2/2.2.1.documents.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '2.3.1',
      qnQl: 'QlM',
      description:
        'Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences using ICT tools',
      downloads: [
        { name: 'View', url: 'public/uploads/pdfs/naac/quality/criteria2/2.3.1 documents.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '2.4.1',
      qnQl: 'QnM',
      description: 'Percentage of full time teachers against sanctioned posts during the last five years',
      downloads: [
        { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria2/2.4.1 Faculty List For-2023-24.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria2/2.4.1 Faculty List For-2022-23.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria2/2.4.1 Faculty List For-2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria2/2.4.1 Faculty List For-2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria2/2.4.1 Faculty List For-2019-20.pdf' },
      ],
    },
    {
      sno: 7,
      metricNo: '2.5.1',
      qnQl: 'QIM',
      description:
        '2.5.1 Mechanism of internal/ external assessment is transparent, and the grievance redressal system is time- bound and efficient.',
      downloads: [
        {
          name: '2.5.1 Sample documents for student grievance in examinations',
          url: 'public/uploads/pdfs/naac/quality/criteria2/Sample documents for student grievance in examinations.pdf',
        },
      ],
    },
    {
      sno: 8,
      metricNo: '2.6.1',
      qnQl: 'QIM',
      description:
        'Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website and attainment of POs and COs are evaluated',
      downloads: [
        { name: 'CO of B.Pharm', url: "public/uploads/pdfs/naac/quality/criteria2/CO's of Bpharm.pdf" },
        { name: 'CO of M.Pharm Analysis', url: "public/uploads/pdfs/naac/quality/criteria2/CO's of M.Pharm Analysis.pdf" },
        { name: 'CO of M.Pharm Ceutics', url: "public/uploads/pdfs/naac/quality/criteria2/CO's of M.Pharm Pharmaceutics.pdf" },
        { name: 'CO of M.Pharm Cology', url: "public/uploads/pdfs/naac/quality/criteria2/CO's of M.Pharm Pharmacology.pdf" },
        { name: 'Program Outcomes', url: "public/uploads/pdfs/naac/quality/criteria2/PO's of B.Pharm.pdf" },
      ],
    },
    {
      sno: 9,
      metricNo: '2.6.2',
      qnQl: 'QnM',
      description: 'Attainment of POs and COs are evaluated',
      downloads: [
        {
          category: 'PO Attainment',
          links: [
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria2/PO Attainment-2023 batch.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria2/PO Attainment-2022 batch.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria2/PO Attainment-2021 batch.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria2/PO Attainment-2020 batch.pdf' },
            { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria2/PO Attainment-2019 batch.pdf' },
          ],
        },
      ],
    },
    {
      sno: 10,
      metricNo: '2.6.3',
      qnQl: 'QnM',
      description: 'Pass percentage of Students during last five years',
      downloads: [
        {
          category: 'Annual Reports',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria2/Annual Report -2023-2024.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria2/Annual Report -2022-2023.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria2/Annual Report- 2021-2022.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria2/Annual Report -2020-2021.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria2/Annual Report- 2019-2020.pdf' },
            { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria2/Annual Report- 2019-2020.pdf' },
          ],
        },
        {
          category: 'Certified Reports',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria2/Certified Reports- 2023-2024.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria2/Certified Reports- 2022-2023.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria2/Certified Reports- 2021-2022.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria2/Certified Reports- 2020-2021.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria2/Certified Reports- 2019-2020.pdf' },
            { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria2/Certified Reports- 2018-2019.pdf' },
          ],
        },
        // { name: 'Five Years Result Report', url: 'public/uploads/pdfs/naac/quality/criteria2/2.6.3 Five Years Result Report.pdf' },
      ],
    },
    {
      sno: 11,
      metricNo: '2.7.1',
      qnQl: 'QnM',
      description:
        'Online student satisfaction survey regarding teaching learning process (Online survey to be conducted)',
      downloads: [
        { category: 'Not specified in the provided text'}
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 2</h1>
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
                        className="text-blue-600 hover:underline block text-left mb-1"
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

export default Criteria2;
