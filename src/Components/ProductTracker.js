import React, { useState, useMemo } from "react";
import ProgressBar from "./ProgressBar";

// Sample Data
const sampleJobs = [
  {
    id: 1,
    Product: "Fridge Repair",
    Review: "John Doe",
    Price: 150,
    Created: "2024-03-24",
    Availability: "In Progress",
  },
  {
    id: 2,
    Product: "Washer Fix",
    Review: "Jane Smith",
    Price: 100,
    Created: "2024-03-20",
    Availability: "Completed",
  },
  {
    id: 3,
    Product: "Oven Maintenance",
    Review: "Alice Johnson",
    Price: 80,
    Created: "2024-03-18",
    Availability: "Pending",
  },
  // Add more jobs...
];

function ProductTracker() {
  const [jobs, setJobs] = useState(sampleJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Filtered and Sorted Jobs
  const filteredJobs = useMemo(() => {
    let sortedJobs = jobs;
    if (sortConfig.key !== null) {
      sortedJobs = [...jobs].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "ascending" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }

    return sortedJobs.filter((job) =>
      Object.values(job).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [jobs, searchQuery, sortConfig]);

  // Handle Sorting
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-4 bg-slate-200 shadow w-full rounded-md ">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-full sm:w-auto border rounded focus:ring focus:ring-opacity-50 bg-slate-300"
        />
        {/* Add dropdown or additional controls if needed */}
      </div>
      <div className="overflow-x-auto rounded-lg ">
        <table className="min-w-full bg-white border-b rounded-lg">
          <thead className="bg-white ">
            <tr>
              <th
                className="text-left p-4 border-b-2 font-medium text-slate-400"
                onClick={() => requestSort("Product")}
              >
                Product
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-slate-400"
                onClick={() => requestSort("Review")}
              >
                Review
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-slate-400"
                onClick={() => requestSort("Price")}
              >
                Price
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-slate-400"
                onClick={() => requestSort("Created")}
              >
                Created
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-slate-400"
                onClick={() => requestSort("Availability")}
              >
                Availability
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{job.Product}</td>
                <td className="p-4 border-b">{job.Review}</td>
                <td className="p-4 border-b">${job.Price}</td>
                <td className="p-4 border-b">{job.Created}</td>
                <td className="p-4 border-b">
                  {/* Render the ProgressBar component for each job's progress */}
                  <ProgressBar progress={job.Availability} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add pagination here if needed */}
    </div>
  );
}

export default ProductTracker;
