import React, { useState } from 'react';

const Criteria6: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '6.1.1',
      qnQl: 'QlM',
      description:
        'The governance and leadership is in accordance with vision and mission of the institution and it is visible in various institutional practices such as decentralization and participation in the institutional governance',
      downloads: [
        { name: 'Vision', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1 vision.pdf' },
        { name: 'Board of Governing Body', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1 boardn of governing body.pdf' },
        { name: 'Governing Body Minutes of Meetings 2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1. GBC meetings 2023-24.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1. GBC meetings 2022-23.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1. GBC meetings 2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1 GBC meetings 2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.1 GBC meeting 2019-20.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '6.2.1',
      qnQl: 'QlM',
      description:
        'The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, deployment of institutional Strategic/ perspective/development plan etc.',
      downloads: [
        { name: 'Functions of Institution Bodies', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.1 functions of various institution bodies.pdf' },
        { name: 'Organogram', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.1 organogram.pdf' },
        { name: 'HR Policy', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.1. HR policy.pdf' },
        { name: 'Institutional Strategic Plan', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.1. institutional strategic plan.pdf' },
      ]
    },
    {
      sno: 3,
      metricNo: '6.2.2',
      qnQl: 'QlM',
      description:
        'Implementation of e-governance in areas of operation: Administration, Finance and Accounts, Student Admission and Support, Examination',
      downloads: [
        { name: 'Annual Report on e-Governance', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.2 annual report on e governance.pdf' },
        { name: 'E-CAP Audit Statement', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.2 ecap audit statement.pdf' },
        { name: 'Institution Implements e-Governance', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.2 institution implrments e governance.pdf' },
        { name: 'Screenshots', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.2. e-governanc screen shots.pdf' },
        { name: 'ERP Policy', url: 'public/uploads/pdfs/naac/quality/criteria6/6.2.2. ERP Policy.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '6.3.1',
      qnQl: 'QlM',
      description:
        'The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff',
      downloads: [
        { name: 'Paid Leaves', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.1 paid leaves-merged.pdf' },
        { name: 'ESI', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.1. ESI.pdf' },
        { name: 'Faculty EPF', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.1. faculty EPF.pdf' },
        { name: 'Faculty Appraisal Form', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.1 faculty appraisal form.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '6.3.2',
      qnQl: 'QnM',
      description:
        'Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years',
      downloads: [
        { name: 'Audit Report Reflecting Financial Assistance', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2. audit report reflecting financial assistance.pdf' },
        { name: 'Policy Document for Financial Assistance', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2. policy document for financial assistance.pdf' },
        { name: 'Financial Assistance 2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2 Financial Assistance- 2023-24.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2 Financial Assistance- 2022-23.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2 Financial Assistance- 2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2 Financial Assistance 2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.2 Financial Assistance 2019-20.pdf' },
      ],
    },
    {
      sno: 6,
      metricNo: '6.3.3',
      qnQl: 'QnM',
      description:
        'Percentage of teaching and non-teaching staff participating in Faculty Development Programmes (FDP), professional development/administrative training programs during the last five years',
      downloads: [
        { category: 'Brochures', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3 FDP brochures 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP brochures 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP brochures 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP brochures 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP brochures 2019-20.pdf' },
        ]},
        { category: 'Certificates', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP certificates 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3 FDP certificates 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP certificates 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP certificatesn 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3 FDP certificates 2019-20.pdf' },
        ]},
        { category: 'Reports', links: [
          { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP reports 2023-24.pdf' },
          { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP reports 2022-23.pdf' },
          { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP reports 2021-22.pdf' },
          { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP reports 2020-21.pdf' },
          { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3. FDP reports 2019-20.pdf' },
        ]},
        { name: 'FDP Participants Outside College', url: 'public/uploads/pdfs/naac/quality/criteria6/6.3.3 fdp participants outside college.pdf' },
      ],
    },
    {
      sno: 7,
      metricNo: '6.4.1',
      qnQl: 'QlM',
      description:
        'Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/non-government organizations) and it conducts financial audits regularly (internal and external)',
      downloads: [
        { name: 'External Audit Statements', url : '#'},
        { name:'2022-23' , url: 'public/uploads/pdfs/naac/quality/criteria6/6.4.1. audit report 2022-23.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.4.1 audit report 2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.4.1. audit report 2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.4.1. audit report 2019-20.pdf' },
        { name: '2018-19', url: 'public/uploads/pdfs/naac/quality/criteria6/6.4.1 audit report 2018-19.pdf' },
        { name: 'Audit Policy', url: 'public/uploads/pdfs/naac/quality/criteria6/6.4.1. audit policy.pdf' },
      ],
    },
    {
      sno: 8,
      metricNo: '6.5.1',
      qnQl: 'QlM',
      description:
        'Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities',
      downloads: [
        // { name: 'Audit Policy', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.1 audit policy.pdf' },
        { name: 'IQAC Formation', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.1 IQAC formation.pdf' },
        { name: 'IQAC Strategies', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.1 IQAC strategies.pdf' },
      ],
    },
    {
      sno: 9,
      metricNo: '6.5.2',
      qnQl: 'QnM',
      description:
        'Quality assurance initiatives of the institution include: Regular meeting of Internal Quality Assurance Cell (IQAC); Feedback collected, analysed and used for improvements, Collaborative quality initiatives with other institution(s)/ membership of international networks, Participation in NIRF, Any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA, ISO Certification etc.',
      downloads: [
        { name: 'NIRF 2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2 nirf 2023-24.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2 NIRF 2022.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2 NIRF 2021-22.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2. NIRF 2020-21.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2. NIRF 2019-20.pdf' },
        { name: 'ISO 14001', url: 'public/uploads/pdfs/naac/quality/criteria6/ISO 14001.pdf' },
        { name: 'ISO 21001', url: 'public/uploads/pdfs/naac/quality/criteria6/ISO 21001.pdf' },
        { name: 'ISO 50001', url: 'public/uploads/pdfs/naac/quality/criteria6/ISO 50001.pdf' },
        { name: 'Collaborative Quality Initiatives', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2. collaborative quality initiatives.pdf' },
        { name: 'Academic and Administrative Audits', url: 'public/uploads/pdfs/naac/quality/criteria6/6.5.2 academic and administrative audits.pdf' },
        { name: 'IQAC Meetings 2023-24', url: 'public/uploads/pdfs/naac/quality/criteria6/IQAC Meetings 2023.pdf' },
        { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria6/IQAC Meetings 2022.pdf' },
        { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria6/IQAC Meetings 2021.pdf' },
        { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria6/IQAC Meetings 2020.pdf' },
        { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria6/IQAC Meetings 2019.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 6</h1>
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
                          {'links' in download && Array.isArray(download.links) && download.links.map((link, j) => (
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
                        style={{ textAlign: "left" }}
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
                className="text-gray-500 hover:text-gray-700 text-left"
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

export default Criteria6;
