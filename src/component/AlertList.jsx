// AlertList.jsx
import React from 'react';
import AlertCard from './AlertCard';

const AlertList = ({ alerts = [], loading, error, pagination, currentPage, onPageChange }) => {
  // Debug log to check incoming props
  console.log('AlertList received props:', { alerts, loading, error, pagination, currentPage });

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center p-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  // Check if alerts exists and has items
  if (!alerts || !Array.isArray(alerts) || alerts.length === 0) {
    return (
      <div className="flex justify-center p-8">
        <p className="text-gray-500">No alerts found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Debug log to check what's being mapped */}
      {console.log('Mapping alerts:', alerts)}
      
      <div className="grid gap-6">
        {alerts.map((alert) => (
          <AlertCard 
            key={alert._id} 
            alert={alert} 
          />
        ))}
      </div>

      {pagination && pagination.pages > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Previous
          </button>

          {[...Array(pagination.pages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pagination.pages}
            className={`px-4 py-2 rounded ${
              currentPage === pagination.pages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AlertList;