import React from 'react';

const DvvCriteria6: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 6</h1>
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
            <td className="border border-gray-300 px-4 py-2 text-center">6.2.2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QlM</td>
            <td className="border border-gray-300 px-4 py-2">
              Implementation of e-governance in areas of operation:
              <ul className="list-disc ml-4">
                <li>Administration</li>
                <li>Finance and Accounts</li>
                <li>Student Admission and Support</li>
                <li>Examination</li>
              </ul>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria6/6.2.2 annual report on e governance.pdf" target="_blank" className="text-blue-600 hover:underline">Annual Report on e-Governance</a></li>
                <li><a href="/uploads/naac/criteria6/6.2.2 ecap audit statement.pdf" target="_blank" className="text-blue-600 hover:underline">E-CAP Audit Statement</a></li>
                <li><a href="/uploads/naac/criteria6/6.2.2 institution implrments e governance.pdf" target="_blank" className="text-blue-600 hover:underline">Institution implements e-Governance</a></li>
                <li><a href="/uploads/naac/criteria6/6.2.2. e-governanc screen shots.pdf" target="_blank" className="text-blue-600 hover:underline">Screenshots</a></li>
                <li><a href="/uploads/naac/criteria6/6.2.2. ERP Policy.pdf" target="_blank" className="text-blue-600 hover:underline">ERP Policy</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">6.3.2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria6/6.3.2 Financial Assistance- 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.2 Financial Assistance- 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.2 Financial Assistance- 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.2 Financial Assistance 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.2 Financial Assistance 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">6.3.3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Percentage of teaching and non-teaching staff participating in Faculty Development Programmes (FDP), professional development/administrative training programs during the last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria6/6.3.3 FDP brochures 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.3 FDP brochures 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.3 FDP brochures 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.3 FDP brochures 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria6/6.3.3 FDP brochures 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DvvCriteria6;