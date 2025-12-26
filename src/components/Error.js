import React from 'react'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-12 bg-white shadow-md max-w-lg">
            <div className="text-7xl mb-6">😞</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-base text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <div className="bg-gray-100 border-l-4 border-[#fc8019] p-4 mb-8">
                <p className="text-gray-800 font-medium">{error.status} - {error.statusText}</p>
            </div>
            <a href="/" className="inline-block px-8 py-3 bg-[#fc8019] text-white font-semibold hover:bg-[#e87316] transition-colors">
                Go to Home
            </a>
        </div>
    </div>
  )
}

export default Error;