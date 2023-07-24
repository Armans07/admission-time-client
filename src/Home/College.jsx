// College.js
import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import CardSearch from './CardSearch';

const College = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('college.json')
      .then(res => res.json())
      .then(data => setColleges(data));
  }, []);


  const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  //   console.log(searchQuery);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searched = e.target.search.value
    console.log(e.target.search.value);
    const searchedCollege = colleges.find(college => college.name === searched)
    console.log(searchedCollege);
    setColleges([searchedCollege])



    // Add your search logic here

    // alert(`Searching for: ${searchQuery}`);

  };

  return (
    <div>
      <div className='flex justify-end mt-2'>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            // onChange={handleSearch}
            name='search'
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
      <h2 className="font-bold text-4xl mt-5">College Card</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10">
        {colleges.map((item) => (
          <CollegeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default College;