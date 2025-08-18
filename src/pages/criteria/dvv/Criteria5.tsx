import React from 'react';

const DvvCriteria5: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 5</h1>
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
            <td className="border border-gray-300 px-4 py-2 text-center">5.1.1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies during last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">5.1.2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Following capacity development and skills enhancement activities organized for improving student’s capability
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria5/5.1.2.1 Soft Skills.pdf" target="_blank" className="text-blue-600 hover:underline">Soft Skills</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.2.2 Language and Communication Skills.pdf" target="_blank" className="text-blue-600 hover:underline">Language and Communication Skills</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.2.3 LIfe Skills.pdf" target="_blank" className="text-blue-600 hover:underline">Life Skills</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.2.4 Trends inTechnology.pdf" target="_blank" className="text-blue-600 hover:underline">Awareness of trends in technology</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">5.1.3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria5/5.1.3. 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.3  2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.3  2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.3   2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria5/5.1.3   2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DvvCriteria5;