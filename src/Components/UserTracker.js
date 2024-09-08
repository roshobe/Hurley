import React, { useState, useMemo } from "react";
import ProgressBar from "./ProgressBar";

// Sample Data
const sampleJobs = [
  {
    id: 1,
    job: "Fridge Repair",
    user: "John Doe",
    price: 150,
    dueDate: "2024-03-24",
    progress: "In Progress",
  },
  {
    id: 2,
    job: "Washer Fix",
    user: "Jane Smith",
    price: 100,
    dueDate: "2024-03-20",
    progress: "Completed",
  },
  {
    id: 3,
    job: "Oven Maintenance",
    user: "Alice Johnson",
    price: 80,
    dueDate: "2024-03-18",
    progress: "Pending",
  },
  // Add more jobs...
];

function UserTracker() {
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
    <div className="p-4 bg-slate-300 shadow w-full ">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-full sm:w-auto border rounded focus:ring focus:ring-opacity-50 bg-slate-500"
        />
        {/* Add dropdown or additional controls if needed */}
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white border-b rounded-lg">
          <thead className="bg-amber-500 ">
            <tr>
              <th
                className="text-left p-4 border-b-2 font-medium text-white"
                onClick={() => requestSort("job")}
              >
                Job
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-white"
                onClick={() => requestSort("user")}
              >
                User
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-white"
                onClick={() => requestSort("price")}
              >
                Price
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-white"
                onClick={() => requestSort("dueDate")}
              >
                Due Date
              </th>
              <th
                className="text-left p-4 border-b-2 font-medium text-white"
                onClick={() => requestSort("progress")}
              >
                Progress
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{job.job}</td>
                <td className="p-4 border-b">{job.user}</td>
                <td className="p-4 border-b">${job.price}</td>
                <td className="p-4 border-b">{job.dueDate}</td>
                <td className="p-4 border-b">
                  {/* Render the ProgressBar component for each job's progress */}
                  <ProgressBar progress={job.progress} />
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

export default UserTracker;
