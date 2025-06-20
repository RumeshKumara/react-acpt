import React, { useState } from "react";
import Nic from "../../assets/nic.png";

// Helper function to extract birthday and gender from NIC
function parseNIC(nic) {
  let year, days, gender, birthday;
  if (/^\d{9}[vVxX]$/.test(nic)) {
    // Old NIC format: 9 digits + letter
    year = parseInt("19" + nic.substring(0, 2), 10);
    days = parseInt(nic.substring(2, 5), 10);
  } else if (/^\d{12}$/.test(nic)) {
    // New NIC format: 12 digits
    year = parseInt(nic.substring(0, 4), 10);
    days = parseInt(nic.substring(4, 7), 10);
  } else {
    return { birthday: "Invalid NIC", gender: "Invalid NIC" };
  }
  gender = days > 500 ? "Female" : "Male";
  if (days > 500) days -= 500;

  // Days to date
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let month = 0,
    day = days;
  while (month < 12 && day > months[month]) {
    day -= months[month];
    month++;
  }
  if (month >= 12 || day < 1) return { birthday: "Invalid NIC", gender };
  birthday = `${year}-${String(month + 1).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;
  return { birthday, gender };
}

function NIC() {
  const [showForm, setShowForm] = useState(false);
  const [nic, setNic] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = () => setShowForm(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { birthday, gender } = parseNIC(nic.trim());
    setResult({ nic: nic.trim(), birthday, gender });
  };

  return (
    <div className="">
      <h1 className="text-4xl text-sky-500 font-bold text-center mt-20">
        Check NIC Details
      </h1>
      {!showForm ? (
        <div className="relative w-fit mx-auto mt-10 group">
          <div className="absolute inset-0 rounded-3xl bg-sky-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              className="px-4 py-2 bg-white text-sky-500 rounded-md font-semibold hover:bg-sky-100 transition-colors"
              onClick={handleButtonClick}
            >
              Check Details
            </button>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={Nic}
              alt="NIC"
              className=" h-full object-cover object-center w-[400px] "
            />
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow relative">
          {/* Back Icon */}
          <button
            className="absolute left-4 top-4 flex items-center text-sky-500 hover:text-sky-700"
            onClick={() => {
              setShowForm(false);
              setResult(null);
              setNic("");
            }}
            type="button"
            aria-label="Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          {/* NIC Image */}
          <div className="w-[200px] h-[120px] overflow-hidden rounded mx-auto mb-6 mt-2">
            <img
              src={Nic}
              alt="NIC"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-2 rounded-3xl"
          >
            <label className="font-semibold text-sky-700">
              Enter NIC Number:
              <input
                type="text"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="mt-2 p-2 border rounded-2xl w-full"
                required
              />
            </label>
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 transition-colors"
            >
              Submit
            </button>
          </form>
          {result && (
            <div>
              <div className="mt-3 bg-sky-50 p-4 rounded-3xl">
                <div>
                  <span className="text-sky-700 font-semibold text-sm">
                    NIC Number
                  </span>
                  <br /> {result.nic}
                </div>
              </div>
              <div className="mt-3 bg-sky-50 p-4 rounded-3xl">
                <div>
                  <span className="text-sky-700 font-semibold text-sm">
                    Birthday
                  </span>{" "}
                  <br /> {result.birthday}
                </div>
              </div>
              <div className="mt-3 bg-sky-50 p-4 rounded-3xl">
                {" "}
                <div>
                  <span className="text-sky-700 font-semibold text-sm">
                    Gender
                  </span>{" "}
                  <br /> {result.gender}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NIC;
