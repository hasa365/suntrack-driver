import React, { useEffect, useState } from "react";

function App() {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/example")
      .then((res) => res.json())
      .then((data) => setExamples(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Fullstack App
      </h1>
      <p className="mt-4 text-lg text-gray-700 mb-4">
        This is a simple fullstack application using Node.js, React, Tailwind
        CSS, and Vite.
      </p>
      <h2 className="text-xl font-bold mb-4">Examples from Backend</h2>
      <ul className="list-disc list-inside">
        {examples.map((item, idx) => (
          <li key={idx} className="text-gray-800">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
