// AlertCard.jsx
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const AlertCard = ({ alert }) => {
  // Debug log to check incoming alert data
//   console.log('AlertCard received:', alert);

  const {
    title,
    description,
    link,
    category,
    source,
    pubDate,
  } = alert;

  // Remove HTML tags from title
  const cleanTitle = title?.replace(/<[^>]*>/g, '') || '';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              {category}
            </span>
            <span className="text-gray-500 text-sm">
              {source}
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            {pubDate && formatDistanceToNow(new Date(pubDate), { addSuffix: true })}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {cleanTitle}
          </a>
        </h2>

        {/* Description */}
        <p className="text-gray-600">
          {description}
        </p>

        {/* Read More Link */}
        <div className="flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;