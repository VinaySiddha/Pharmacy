import React from 'react';

const DvvCriteria3: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 3</h1>
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
            <td className="border border-gray-300 px-4 py-2 text-center">3.1.1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Grants received from Government and non-governmental agencies for research projects, endowments, Chairs in the institution during the last five years (INR in Lakhs)
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria3/3.1.1 Grants.pdf" target="_blank" className="text-blue-600 hover:underline">Grants</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">3.2.2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR), and entrepreneurship during the last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/criteria3/Seminars and Workshops 2023-24.pdf" target="_blank" className="text-blue-600 hover:underline">2023-24</a></li>
                <li><a href="/uploads/naac/criteria3/Seminars and Workshops 2022-23.pdf" target="_blank" className="text-blue-600 hover:underline">2022-23</a></li>
                <li><a href="/uploads/naac/criteria3/Seminars and Workshops 2021-22.pdf" target="_blank" className="text-blue-600 hover:underline">2021-22</a></li>
                <li><a href="/uploads/naac/criteria3/Seminars and Workshops 2020-21.pdf" target="_blank" className="text-blue-600 hover:underline">2020-21</a></li>
                <li><a href="/uploads/naac/criteria3/Seminars and Workshops 2019-20.pdf" target="_blank" className="text-blue-600 hover:underline">2019-20</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">3.3.1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Number of research papers per teacher in the Journals notified on UGC website during the last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li><a href="/uploads/naac/dvv/3.3.1(2).pdf" target="_blank" className="text-blue-600 hover:underline">Research Papers</a></li>
              </ul>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DvvCriteria3;