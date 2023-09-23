import React, { useState } from "react";
import data from "./CenterList.json";
import { Accordion } from "flowbite-react";

const LocateFacility = () => {
  const [selectedValue, setSelectedValue] = useState("DELHI");
  const stateData = data[selectedValue];

  const handleDropdownChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  console.log("Fetching State", selectedValue + "...");

  return (
    <div className="mb-10">
      <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
        Select Your State
      </h2>
      <div className="flex justify-center">
        <select
          value={selectedValue}
          onChange={handleDropdownChange}
          className="rounded-lg"
        >
          <option value="DELHI">DELHI</option>
          <option value="KARNATAKA">KARNATAKA</option>
          <option value="MAHARASHTRA">MAHARASHTRA</option>
          <option value="TAMIL NADU">TAMIL NADU</option>
          <option value="GUJARAT">GUJARAT</option>
          <option value="HARYANA">HARYANA</option>
          <option value="TELANGANA">TELANGANA</option>
        </select>
      </div>
      {Object.keys(stateData).map((city) => (
        <div key={city} className="mx-5">
          <div
            className="p-3 my-4 text-lg text-white rounded-lg bg-green-400 dark:bg-gray-800 dark:text-green-400 text-center w-56 mx-auto"
            role="alert"
          >
            <span className="font-medium">{city}</span>
          </div>
          {Object.keys(stateData[city]).map((center) => (
            <Accordion
              key={center}
              className="max-w-screen-sm m-auto my-2"
            >
              <Accordion.Panel>
                <Accordion.Title>
                  {stateData[city][center].CompanyName}
                </Accordion.Title>
                <Accordion.Content className="bg-green-50">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-800">Phone : </span>
                    {stateData[city][center].Phone}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-800">Address : </span>
                    {stateData[city][center].Address}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LocateFacility;
