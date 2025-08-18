import React from 'react';

const DvvCriteria2: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 2</h1>
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
            <td className="border border-gray-300 px-4 py-2 text-center">2.1.1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Enrollment percentage
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Admitted Students List:
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria2/2.1.1. 2023-24 B.Pharm apsche.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. 2022-23 B.Pharm apsche.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. 2021-22 B.Pharm apsche.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. 2020-21 B.Pharm apsche.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. 2019-20 B.Pharm apsche.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
              <br />
              AICTE Approvals:
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria2/2.1.1.AICTE Approval 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1.AICTE Approval 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1.AICTE Approval 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1.AICTE Approval 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
              <br />
              AU Approvals:
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria2/2.1.1. AU Approval 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. AU Approval 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. AU Approval 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. AU Approval 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria2/2.1.1. AU Approval 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DvvCriteria2;