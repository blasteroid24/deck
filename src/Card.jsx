import React, { useState } from 'react';

const Card = ({ imageUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105"
        onClick={openModal}
      >
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
