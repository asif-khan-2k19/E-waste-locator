import React from "react";
import Points from "../newComponents/Points";
import Navbar from "../newComponents/Navbar";
const TableRow = () => { 
  const data = [
    {
      name: "Mobile Phone",
      col2: ["Gold", "Palladium", "Silver", "Copper"],
      col3: [0.1, 0.02, 0.05, 1],
      col4: [10, 8, 5, 0.5],
    },
    {
      name: "Laptop",
      col2: ["Gold", "Palladium", "Silver", "Copper"],
      col3: [0.2, 0.04, 0.1, 2],
      col4: [10, 8, 5, 0.5],
    },
  ];

  return (
    <>
      <Navbar />
      <Points />
      <div className="max-w-2xl mx-auto mt-10 ">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Item Name</th>
              <th className="text-left py-2 px-4">Element</th>
              <th className="text-center py-2 px-4">
                Quantity
                <br /> (grams)
              </th>
              <th className="text-left py-2 px-4">Reward Points</th>
              <th className="text-left py-2 px-4">Total Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border-t py-2 px-4">{row.name}</td>
                <td className="border-t py-2 px-4">
                  <ul>
                    {row.col2.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </td>
                <td className="border-t py-2 px-4">
                  <ul>
                    {row.col3.map((quantity, idx) => (
                      <li key={idx}>{quantity}</li>
                    ))}
                  </ul>
                </td>
                <td className="border-t py-2 px-4">
                  <ul>
                    {row.col4.map((points, idx) => (
                      <li key={idx}>{points}</li>
                    ))}
                  </ul>
                </td>
                <td className="border-t py-2 px-4">
                  {row.col2.reduce(
                    (total, element, idx) =>
                      total + row.col3[idx] * row.col4[idx],
                    0
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRow;
