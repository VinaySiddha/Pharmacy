import React, { useState } from 'react';

const Criteria1: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const tableData = [
    {
      sno: 1,
      metricNo: '1.1.1',
      qnQl: 'Ql',
      description:
        'The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment',
      downloads: [
        { name: 'Academic Regulations', url: 'public/uploads/pdfs/naac/quality/criteria1/Academic Regulations.pdf' },
        { name: 'Syllabus', url: 'public/uploads/pdfs/naac/quality/criteria1/SYLLABUS.pdf' },
        { name: 'Class Timetable', url: 'public/uploads/pdfs/naac/quality/criteria1/Class Time Tables.pdf' },
        { name: 'AU Academic Calendar', url: 'public/uploads/pdfs/naac/quality/criteria1/AU Academic Calenders.pdf' },
        { name: 'Institute Academic Schedules', url: 'public/uploads/pdfs/naac/quality/criteria1/Institute Academic Schedules.pdf' },
        { name: 'Mid Exam Timetable', url: 'public/uploads/pdfs/naac/quality/criteria1/Exam Cell Mid Exam Time Tables.pdf' },
        { name: 'Semester end Exam Timetables', url: 'public/uploads/pdfs/naac/quality/criteria1/Semester End Exam Time Tables.pdf' },
        { name: 'Project Review and Monitoring', url: 'public/uploads/pdfs/naac/quality/criteria1/Project Review and Monitoring.pdf' },
        { name: 'Faculty Workload', url: 'public/uploads/pdfs/naac/quality/criteria1/FACULTY WORK LOAD.pdf' },
        { name: 'Course File', url: 'public/uploads/pdfs/naac/quality/criteria1/COURSE FILE.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '1.2.1',
      qnQl: 'Qn',
      description:
        'Number of Add-on / Certificate / Value added programs offered during the last five years.',
      downloads: [
        {
          category: 'Brochures',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/2023-24_Broucher.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/2022-23_Broucher.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/2021-22_Broucher.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/2020-21_Broucher.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/2019-20_Broucher.pdf' },
          ],
        },
        {
          category: 'List of students enrolled with signatures',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/2023-24_ER.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/2022-23_ER.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/2021-22_ER.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/2020-21_ER.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/2019-20_ER.pdf' },
          ],
        },
        {
          category: 'Attendance sheet of students participating in the program',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/2023-24_ATT.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/2022-23_ATT.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/2021-22_ATT.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/2020-21_ATT.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/2019-20_ATT.pdf' },
          ],
        },
        {
          category: 'Summary report of programs',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/2023-24_PR.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/2022-23_PR.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/2021-22_PR.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/2020-21_PR.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/2019-20_PR.pdf' },
          ],
        },
        {
          category: 'Model Certificates Per Program',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/2023-24-certificates.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/2022-23_certificates.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/2021-22_certificates.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/2020-21_certificates.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/2019-20_certificates.pdf' },
          ],
        },
      ],
    },
    {
      sno: 3,
      metricNo: '1.2.2',
      qnQl: 'Qn',
      description:
        'Average percentage of students enrolled in Certificate/ Add-on/ Value added programs as against the total number of students during the last five years.',
      downloads: [
        { name: 'View', url: 'public/uploads/pdfs/naac/quality/criteria1/1.2.2.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '1.3.1',
      qnQl: 'Ql',
      description:
        'Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability into the Curriculum.',
      downloads: [
        { name: 'View', url: 'public/uploads/pdfs/naac/quality/criteria1/1.3.1.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '1.3.2',
      qnQl: 'Qn',
      description:
        'Percentage of students undertaking project work/field work/internships (Data for the latest completed academic year).',
      downloads: [
        { name: 'Project Work', url: 'public/uploads/pdfs/naac/quality/criteria1/Project works 1.3.pdf' },
        { name: 'Field work and Industrial Visits', url: 'public/uploads/pdfs/naac/quality/criteria1/Field Trips & Industrial Visits.pdf' },
        { name: 'Internships', url: 'public/uploads/pdfs/naac/quality/criteria1/Internships.pdf' },
        { name: 'Percentage of Students', url: 'public/uploads/pdfs/naac/quality/criteria1/Percentage.pdf' },
      ],
    },
    {
      sno: 6,
      metricNo: '1.4.1',
      qnQl: 'Qn',
      description:
        'Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc., and action taken report on the feedback is made available on institutional website (Yes or No).',
      downloads: [
        
        {
          category: 'Sample Filled in feedback forms from the stakeholders to be provided',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/Feed Back-2023-24.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/Feed Back-2022-23.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/Feed Back-2021-22.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/Feed Back-2020-21.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/Feed Back-2019-20.pdf' },
          ],
        },
        // {name: 'Action taken Report', url: 'public/uploads/pdfs/naac/quality/criteria1/Action_Taken_Report.pdf' },
        // { name: 'Document showing the communication with the affiliating University', url: 'public/uploads/pdfs/naac/quality/criteria1/University_Communication.pdf' },
        {
          category: 'Stakeholder feedback analysis report signed by the Principal to be provided',
          links: [
            { name: '2023-24', url: 'public/uploads/pdfs/naac/quality/criteria1/FAR-2023-24.pdf' },
            { name: '2022-23', url: 'public/uploads/pdfs/naac/quality/criteria1/FAR-2022-23.pdf' },
            { name: '2021-22', url: 'public/uploads/pdfs/naac/quality/criteria1/FAR-2021-22.pdf' },
            { name: '2020-21', url: 'public/uploads/pdfs/naac/quality/criteria1/FAR-2020-21.pdf' },
            { name: '2019-20', url: 'public/uploads/pdfs/naac/quality/criteria1/FAR-2019-20.pdf' },
          ],
        },
      ],
    },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 1</h1>
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
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {row.downloads.map((download, i) =>
                    'category' in download ? (
                      <div key={i} className="mb-2">
                        <p className="font-semibold">{download.category}:</p>
                        <ul className="list-disc list-inside">
                          {download.links.map((link, j) => (
                            <button
                              key={j}
                              onClick={() => setSelectedPdf(link.url)}
                              className="text-blue-600 hover:underline block mb-1"
                            >
                              {link.name}
                            </button>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <button
                        key={i}
                        onClick={() => setSelectedPdf(download.url)}
                        className="text-blue-600 hover:underline block"
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
                className="text-gray-500 hover:text-gray-700 "
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

export default Criteria1;
