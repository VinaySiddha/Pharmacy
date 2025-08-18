import React, { useState } from 'react';

const Criteria3: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '3.1.1',
      qnQl: 'QnM',
      description:
        'Grants received from Government and non-governmental agencies for research projects, endowments, Chairs in the institution during the last five years (INR in Lakhs)',
      downloads: [{ name: 'Grants', url: 'public/uploads/pdfs/naac/quality/criteria3/3.1.1 Grants.pdf' }],
    },
    {
      sno: 2,
      metricNo: '3.2.1',
      qnQl: 'QlM',
      description:
        'Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge (patents filed, published, incubation centre facilities in the HEI to be considered)',
      downloads: [{ name: 'Additional Information', url: 'public/uploads/pdfs/naac/quality/criteria3/3.2.1 DISCREPTION.pdf' }],
    },
    {
      sno: 3,
      metricNo: '3.2.2',
      qnQl: 'QnM',
      description:
        'Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the last five years',
      downloads: [
        { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria3/Seminars and Workshops 2023-24.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria3/Seminars and Workshops 2022-23.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria3/Seminars and Workshops 2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria3/Seminars and Workshops 2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria3/Seminars and Workshops 2019-20.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '3.3.1',
      qnQl: 'QnM',
      description:
        'Number of research papers per teachers in the Journals notified on UGC website during the last five years',
      downloads: [
        { name: 'Link to Journal', url: 'public/uploads/pdfs/naac/quality/criteria3/3.3.1(2).pdf' },
        { name: 'Link to Published Papers', url: 'public/uploads/pdfs/naac/quality/criteria3/3.3.1(3).pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '3.3.2',
      qnQl: 'QnM',
      description:
        'Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years',
      downloads: [
        { name: 'List of Chapters/Books', url: 'public/uploads/pdfs/naac/quality/criteria3/3.3.2 (1).pdf' },
        { name: 'Copy of Cover Page', url: 'public/uploads/pdfs/naac/quality/criteria3/3.3.2(3) Cover Page.pdf' },
        { name: 'CoverPage, Table of Contents and First Page of choosen Publication along with weblink for books', url: 'public/uploads/pdfs/naac/quality/criteria3/3.3.2 Books Book Chapters and Publications (1) (1).pdf' },
      ],
    },
    {
      sno: 6,
      metricNo: '3.4.1',
      qnQl: 'QIM',
      description:
        'Extension activities are carried out in the neighbourhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the last five years.',
      downloads: [{ name: 'Additional Information', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.1(Discreption).pdf' }],
    },
    {
      sno: 7,
      metricNo: '3.4.2',
      qnQl: 'QIM',
      description:
        'Awards and recognitions received for extension activities from government / government recognised bodies',
      downloads: [{ name: 'Additional Information', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.2 (Awards and Recognitions).pdf' }],
    },
    {
      sno: 8,
      metricNo: '3.4.3',
      qnQl: 'QnM',
      description:
        'Number of extension and outreach Programmes conducted by the institution through NSS/ NCC/ Red Cross/ YRC etc., (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc.) and/or those organised in collaboration with industry, community and NGOs during the last five years',
      downloads: [
        {
          category: 'Circulars and Photos',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2023-24 circulars and Photos).pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2022-23 Circulars and Photos).pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2021-22 Circulars and Photos).pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2020-21 Circulars and Photos).pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2019-20 Circularts and Photos).pdf' },
          ],
        },
        {
          category: 'Reports and List of Participants',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2023-24 Reports).pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2022-23  Reports).pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2021-22 Report).pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2020-21 Report).pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria3/3.4.3 (2019-20 Reports).pdf' },
          ],
        },
      ],
    },
    {
      sno: 9,
      metricNo: '3.5.1',
      qnQl: 'QnM',
      description:
        'The number of MoUs, collaborations/linkages for Faculty exchange, Student exchange, Internship, Field trip, On-the-job training, research and other academic activities during the last five years',
      downloads: [
        { name: 'Summary of Functional MoUs', url: 'public/uploads/pdfs/naac/quality/criteria3/3.5.1 (1).pdf' },
        { name: 'List of year wise Activities', url: 'public/uploads/pdfs/naac/quality/criteria3/3.5.1 MOUs-merged.pdf' },
        { name: 'List and copies of MOU Documents', url: '#' },
        {
          category: 'Year wise MOUs',
          links: [
            { name: '2024', url: 'public/uploads/pdfs/naac/quality/criteria3/2024 MOU new.pdf' },
            { name: '2023', url: 'public/uploads/pdfs/naac/quality/criteria3/2023 MOU new_.pdf' },
            { name: '2022', url: 'public/uploads/pdfs/naac/quality/criteria3/2022 MOU new_.pdf' },
            { name: '2021', url: 'public/uploads/pdfs/naac/quality/criteria3/2021 MOU new_.pdf' },
            { name: '2020', url: 'public/uploads/pdfs/naac/quality/criteria3/2020 MOU New.pdf' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 3</h1>
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

export default Criteria3;
