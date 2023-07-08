import { useEffect, useState } from "react";
import axios from "axios";

export default function RecordedVins() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRecordedVins = async () => {
      try {
        const response = await axios.get("/api/vins");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecordedVins();
  }, [data]);

  return (
    <div className="flex flex-col justify-center m-1 mb-16 p-2 bg-slate-800 rounded-xl text-lg text-yellow-500 w-full">
      <h1 className="p-2 text-xl font-semibold text-center">
        Received VIN Table
      </h1>
      <table className="p-2 m-1 text-sm text-center">
        <thead className="border-b border-yellow-500 ">
          <tr>
            <th>#</th>
            <th>Version</th>
            <th>Equipment Code</th>
            <th>Year of issue</th>
            <th>Serial number</th>
            <th>Place of production</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.vinNumber.substring(0, 3)}</td>
              <td>{item.vinNumber.substring(3, 6)}</td>
              <td>{item.vinNumber.substring(6, 8)}</td>
              <td>{item.vinNumber.substring(8, 15)}</td>
              <td>{item.vinNumber.substring(15, 17)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
