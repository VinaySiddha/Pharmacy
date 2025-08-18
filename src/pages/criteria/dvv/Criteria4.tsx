import React from 'react';

const DvvCriteria4: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">DVV Clarification Metrics - Criteria 4</h1>
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
            <td className="border border-gray-300 px-4 py-2 text-center">4.1.2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li>
                  <a
                    href="/uploads/naac/dvv/4.1.2Expenditure for infrastructure development & augmentation excluding salary(2019-2023).pdf"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Expenditure for infrastructure development & augmentation excluding salary (2019-2024)
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">4.3.2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Student – Computer ratio (Data for the latest completed academic year)
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li>
                  <a
                    href="/uploads/naac/dvv/4.3.2 Number of computers available for students usage during latest completed academic year.pdf"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Number of computers available for students usage during latest completed academic year
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">4.4.1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">QnM</td>
            <td className="border border-gray-300 px-4 py-2">
              Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years (INR in Lakhs)
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-4">
                <li>
                  <a
                    href="/uploads/naac/dvv/4.4.1 Expenditure incurred on maintainence of Infrastructure (Physical & Academic facilities) 2019-24.pdf"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Expenditure incurred on maintenance of Infrastructure (Physical & Academic facilities) 2019-24
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DvvCriteria4;