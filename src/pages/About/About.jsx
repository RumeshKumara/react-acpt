import React, { useEffect, useRef, useState } from "react";

function About() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!
        *******************
        Your email is ${email} and you are ${age} years old.
        you have '${
          agreed ? "agreed" : "not agreed"
        }' to the terms and conditions.
        *******************
        --------Your form has been submitted successfully.---------`);
  };
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We are a company dedicated to providing the best services to our
        customers.
      </p>

      <div className="flex items-center justify-center m-4 gap-4 border-t-1 border-b-1 border-black py-4">
        <button
          className="bg-purple-600 text-white rounded-full px-4 py-2"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          useRef
        </button>
        <button
          className="bg-black text-white rounded-full px-4 py-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-black text-white rounded-full px-4 py-2"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-red-500 text-white rounded-full px-4 py-2"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <p className="text-center">Current Count: {count}</p>
      </div>

      {/* Form Section */}

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md mx-auto p-10 bg-gray-200 rounded-3xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Information
        </h2>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-400 p-2 rounded-3xl w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 border-gray-400 rounded-3xl w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Age:
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="border p-2 border-gray-400 rounded-3xl w-full"
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <input
            type="checkbox"
            name=""
            id=""
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="">I agree to the terms and conditions</label>
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-3xl p-2 px-6 w-full  mt-8"
        >
          Submit
        </button>
      </form>

      {/* Visibility Toggle Section */}
      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 text-white rounded-full px-4 py-2"
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle Visibility
        </button>
        {isVisible && (
          <p className="mt-4 text-lg">This is a toggled message!</p>
        )}
      </div>
    </div>
  );
}

export default About;
