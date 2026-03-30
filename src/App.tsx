import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Error fetching message:', err);
        setMessage('Error loading message');
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">API Response:</h1>
        <p className="text-2xl text-blue-600 font-mono bg-blue-50 p-4 rounded-lg border border-blue-100">
          {message}
        </p>
      </div>
    </div>
  );
}
