// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './component/header';
import AlertList from './component/AlertList';

function App() {
  const [data, setData] = useState({
    alerts: [],
    pagination: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAlerts();
  }, [selectedCategory, currentPage]);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      // let url = `http://localhost:5000/api/alerts?page=${currentPage}`;
      let url = `${import.meta.env.VITE_BACKEND_URL}?page=${currentPage}`;
      if (selectedCategory !== 'All') {
        url += `&category=${selectedCategory}`;
      }
      
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log('Fetched data:', jsonData); // Check what data looks like
      
      // Make sure we're setting the data correctly
      if (jsonData.alerts) {
        setData({
          alerts: jsonData.alerts,
          pagination: jsonData.pagination
        });
      } else {
        setError('Invalid data format received');
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch alerts');
      setLoading(false);
    }
  };

  // Debug logs
  console.log('Current state:', {
    alerts: data.alerts,
    loading,
    error,
    selectedCategory,
    currentPage
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        category={selectedCategory}
        onCategoryChange={(category) => {
          console.log('Category changed to:', category); // Debug log
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <AlertList 
          alerts={data.alerts} 
          loading={loading} 
          error={error}
          pagination={data.pagination}
          currentPage={currentPage}
          onPageChange={(page) => {
            console.log('Page changed to:', page); // Debug log
            setCurrentPage(page);
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
}

export default App;