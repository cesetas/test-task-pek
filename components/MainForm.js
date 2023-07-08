import React, { useEffect, useState } from "react";
import dbConnect from "../database/dbConnect";
import axios from "axios";

dbConnect();

function MainForm() {
  const initialValues = {
    equipmentCode: "",
    productionPlace: "",
    version: "",
    issueYear: "",
    serialNumber: "",
  };
  const [vin, setVin] = useState("");
  const [formData, setFormData] = useState(initialValues);
  const [isAddDisabled, setIsAddDisabled] = useState(true);

  useEffect(() => {
    console.log("form data updated");
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "version" && (value.length > 3 || isNaN(value))) {
      return; // Do not update the state if the Version value is not a 3-digit number
    }

    if (name === "issueYear" && (value.length > 2 || isNaN(value))) {
      return; // Do not update the state if the Year of Issue value is not a 2-digit number
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isSearchDisabled =
    !formData.version ||
    !formData.equipmentCode ||
    !formData.issueYear ||
    !formData.productionPlace;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { version, equipmentCode, issueYear, serialNumber, productionPlace } =
      formData;
    const concatenatedValue =
      version + equipmentCode + issueYear + serialNumber + productionPlace;
    const searchValue = version + equipmentCode + issueYear + productionPlace;
    setVin(concatenatedValue);
    setFormData(initialValues);
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    const { version, equipmentCode, issueYear, serialNumber, productionPlace } =
      formData;
    const concatenatedValue =
      version + equipmentCode + issueYear + serialNumber + productionPlace;
    const searchValue = version + equipmentCode + issueYear + productionPlace;

    try {
      await axios.post("/api/vins", {
        vinNumber: concatenatedValue,
        searchNumber: searchValue,
        serialNumber: serialNumber,
      });
      console.log("Vin submitted successfully!");
      setFormData(initialValues);
      setIsAddDisabled(true);
    } catch (error) {
      console.error("Error submitting Vin:", error);
    }
  };

  const handleSearchClick = async () => {
    const { version, equipmentCode, issueYear, productionPlace } = formData;
    const concatenatedValue =
      version + equipmentCode + issueYear + productionPlace;
    try {
      const response = await axios.get("/api/vins");
      const data = await response.data.data;

      const dataWithSearchingNums = await data.filter(
        (item) => item.searchNumber == concatenatedValue // + item.vinNumber.substring(16, 17);
      );

      const serialNumbers = await dataWithSearchingNums.map((item) =>
        parseInt(item.serialNumber)
      );

      if (serialNumbers.length > 0) {
        const lastSerialNum = Math.max(...serialNumbers) + 1;
        setFormData((prevFormData) => ({
          ...prevFormData,
          serialNumber: lastSerialNum.toString(),
        }));
        console.log("Searial num:", lastSerialNum);
        setIsAddDisabled(false);
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          serialNumber: "1000000",
        }));
        setIsAddDisabled(false);
        console.log("Searial num: 1000000");
      }

      console.log("Search results:", formData.serialNumber);
    } catch (error) {
      console.error("Error fetching VIN numbers:", error);
    }
    console.log("Search button clicked");
  };

  return (
    <div className="flex flex-col justify-center m-1 p-2 bg-yellow-500/80 rounded-xl text-lg text-yellow-500">
      <div className="p-1 rounded-xl bg-slate-900/80">
        <h1 className="text-center m-2 mb-4 font-bold text-2xl">
          VIN Generator
        </h1>
        <form onSubmit={handleSubmit} className="m-1 p-2">
          <div className="p-1 m-1">
            <label htmlFor="equipmentCode" className="mx-4">
              Equipment Code
            </label>
            <select
              className="mx-4 rounded-md p-2 text-slate-800 w-3/4"
              id="equipmentCode"
              name="equipmentCode"
              value={formData.equipmentCode}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="000">Base platform</option>
              <option value="014">Bumper</option>
              <option value="037">Drum Mulcher</option>
              <option value="036">Side Trimmer</option>
              <option value="038">Sprayer</option>
              <option value="027">Lawn Mower</option>
            </select>
          </div>
          <div className="p-1 m-1">
            <label htmlFor="productionPlace" className="mx-4">
              Place of Production
            </label>
            <select
              className="mx-4 rounded-md p-2 text-slate-800 w-3/4"
              id="productionPlace"
              name="productionPlace"
              value={formData.productionPlace}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="00">Slovenia</option>
              <option value="01">Turkey</option>
            </select>
          </div>
          <div className="p-1 m-1">
            <label htmlFor="version" className="mx-4">
              Version
            </label>
            <input
              className="mx-4 rounded-md px-2 p-1 font-semibold text-slate-800 w-3/4"
              type="number"
              id="version"
              name="version"
              value={formData.version}
              onChange={handleChange}
              required
              min={0}
              step={1}
              minLength={3} // Added minLength attribute to enforce a minimum length of 3 characters
              maxLength={3}
            />
          </div>

          <div className="p-1 m-1">
            <label htmlFor="issueYear" className="mx-4">
              Year of Issue
            </label>
            <input
              className="mx-4 rounded-md px-2 p-1 font-semibold text-slate-800 w-3/4"
              type="number"
              id="issueYear"
              name="issueYear"
              value={formData.issueYear}
              onChange={handleChange}
              required
              min={0}
              step={1}
              minLength={2}
              maxLength={2}
            />
          </div>

          <div className="p-1 m-1">
            <label htmlFor="serialNumber" className="mx-4">
              Serial Number
            </label>
            <input
              className="mx-4 rounded-md px-2 p-1 font-semibold text-slate-800 w-3/4"
              type="number"
              id="serialNumber"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              required
              min={0}
              step={1}
            />
          </div>

          <div className="p-1 mr-20 mt-2 flex justify-between">
            <button
              type="submit"
              className="mx-4 p-2 px-4 text-slate-900 font-bold rounded-2xl bg-yellow-500 hover:bg-slate-700 hover:text-yellow-500 hover:animate-pulse hover:ease-in-out hover:duration-500"
            >
              Generate
            </button>
            <button
              className={
                !isSearchDisabled
                  ? "mx-4 p-2 px-4 text-slate-900 font-bold rounded-2xl bg-yellow-500 hover:bg-slate-700 hover:text-yellow-500 hover:animate-pulse hover:ease-in-out hover:duration-500"
                  : "font-semibold"
              }
              type="button"
              onClick={handleSearchClick}
              disabled={isSearchDisabled}
            >
              Search
            </button>
            <button
              className={
                !isAddDisabled
                  ? "mx-4 p-2 px-4 text-slate-900 font-bold rounded-2xl bg-yellow-500 hover:bg-slate-700 hover:text-yellow-500 hover:animate-pulse hover:ease-in-out hover:duration-500"
                  : "font-semibold"
              }
              onClick={handleAdd}
              disabled={isAddDisabled}
            >
              Add
            </button>
          </div>
        </form>

        <div className="p-2  border-t-2 border-yellow-500">
          {/* <h1 className="text-center m-2 mb-4 font-bold text-xl underline">
            Manually generated VIN
          </h1> */}
          <h1 className="text-center m-2 mb-4 font-bold text-xl">{vin}</h1>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
