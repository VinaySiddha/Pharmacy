import React from 'react';

const DvvCriteria1: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 1</h1>
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
            <td className="border border-gray-300 px-4 py-2 text-center">1.2.1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QN</td>
            <td className="border border-gray-300 px-4 py-2">
              Number of Certificate/Value-added courses offered and online courses of MOOCs, SWAYAM, NPTEL, etc. (where the students of the institution have enrolled and successfully completed during the last five years)
            </td>
            <td className="border border-gray-300 px-4 py-2">
              List of students enrolled with signatures:
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria1/2023-24_ER.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria1/2022-23_ER.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria1/2021-22_ER.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria1/2020-21_ER.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria1/2019-20_ER.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
              <br />
              Curriculum of the Program:
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/dvv/Curriculum of Certificate programs 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/dvv/Curriculum of Certificate programs 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/dvv/Curriculum of Certificate programs 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/dvv/Curriculum of Certificate programs 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/dvv/Curriculum of Certificate programs 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
              <br />
              Assessment Procedures:
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/dvv/ap 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/dvv/ap 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/dvv/ap 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/dvv/ap 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/dvv/ap 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
              <br />
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria1/MOOC.pdf" target="_blank" className="text-blue-600 hover:underline">List of students enrolled with signatures and certificates in MOOC</a></li>
              </ul>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DvvCriteria1;