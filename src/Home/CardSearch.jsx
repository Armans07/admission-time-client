import React, { useState } from 'react';

const CardSearch= () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className='flex justify-end my-5'>
        <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
        className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded-lg focus:outline-none"
      >
        Search
      </button>
    </form>
    </div>
  );
};

export default CardSearch;
