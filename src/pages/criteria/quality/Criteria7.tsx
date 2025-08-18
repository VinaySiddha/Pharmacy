import React, { useState } from 'react';

const Criteria7: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '7.1.1',
      qnQl: 'QlM',
      description:
        'Gender Equity and celebration of days of National/International commemoration. Measures initiated by the Institution for the promotion of gender equity and Institutional initiatives to celebrate/organize national and international commemorative days, events, and festivals during the last five years.',
      downloads: [
        { name: 'Gender Sensitization', url: 'public/uploads/pdfs/naac/quality/criteria7/Gender Equity description.pdf' },
        { name: 'Gender Sensitization Activities', url: 'public/uploads/pdfs/naac/quality/criteria7/Gender Sesitization Activities During last five years-pages-2.pdf' },
        { name: 'Gender Audit', url: 'public/uploads/pdfs/naac/quality/criteria7/Gender audit.pdf' },
        { name: 'Gender Specific Facilities', url: 'public/uploads/pdfs/naac/quality/criteria7/Gender specific facilities.pdf' },
        { name: 'National and International Days', url: 'public/uploads/pdfs/naac/quality/criteria7/National days description.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '7.1.2',
      qnQl: 'QnM',
      description:
        'The Institution has facilities and initiatives for alternate sources of energy, waste management, water conservation, green campus initiatives, and disabled-friendly environment.',
      downloads: [
        { name: 'Policy Document', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.2 Policy documents.pdf' },
        { name: 'Bills', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.2 Bills.pdf' },
        { name: 'Geo-tagged Photographs', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.2 Geo tagged Photographs.pdf' },
        { name: 'Video of Facilities', url: 'public/uploads/pdfs/naac/quality/criteria7/video_20240723_161237_edit.mp4' },
        { name: 'Circulars and Reports', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.2 circulars and reports.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '7.1.3',
      qnQl: 'QnM',
      description:
        'Quality audits on environment and energy regularly undertaken by the Institution. Includes green audit, energy audit, clean and green campus initiatives, and beyond the campus environmental promotion activities.',
      downloads: [
        { name: 'Policy Document', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.3 Policy documents.pdf' },
        { name: 'Certificates', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.3 certificates.pdf' },
        { name: 'Beyond Campus Activities', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.3 Beyond the campus.pdf' },
        { name: 'Audit Reports', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.3 Audit reports.pdf' },
        { name: 'Green and Energy Audit Reports', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.3 Audit reports.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '7.1.4',
      qnQl: 'QlM',
      description:
        'Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and sensitization of students and employees to the constitutional obligations: values, rights, duties, and responsibilities of citizens (Within 500 words).',
      downloads: [
        { name: 'Institutional Efforts & Initiatives', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.4 Discription.pdf' },
        { name: 'Code of Conduct', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.4 Code of Conduct.pdf' },
        { name: 'Photographs', url: 'public/uploads/pdfs/naac/quality/criteria7/7.1.4 Photographs.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '7.2.1',
      qnQl: 'QlM',
      description:
        'Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual.',
      downloads: [
        { name: 'Best Practices-I', url: 'public/uploads/pdfs/naac/quality/criteria7/Best practice-1 description.pdf' },
        { name: 'Supporting Document for Best Practices-I', url: 'public/uploads/pdfs/naac/quality/criteria7/7.2 Best Practices-1 supporting document.pdf' },
        { name: 'Best Practices-II', url: 'public/uploads/pdfs/naac/quality/criteria7/Best practices-2 description.pdf' },
        { name: 'Supporting Document for Best Practices-II', url: 'public/uploads/pdfs/naac/quality/criteria7/7.2 Best Practices-2 supporting document.pdf' },
      ],
    },
    {
      sno: 6,
      metricNo: '7.3',
      qnQl: 'QlM',
      description:
        'Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words.',
      downloads: [
        { name: 'Institutional Distinctiveness', url: 'public/uploads/pdfs/naac/quality/criteria7/7.3 Discription.pdf' },
        { name: 'Supporting Document for Institutional Distinctiveness', url: 'public/uploads/pdfs/naac/quality/criteria7/7.3 Distinctiveness supporting data.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 7</h1>
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
                        <p className="font-semibold">{String(download.category)}:</p>
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

export default Criteria7;
