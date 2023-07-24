import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ item }) => {
  const { image, name, admissionDates, events, researchHistory, sports } = item;

  return (
   <div className='flex'>
     <div className="card w-96 max-w-md bg-white shadow-md rounded-lg overflow-hidden  card-compact">
      <img src={image} alt="College" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">Admission: {admissionDates}</p>
        <p className="text-sm text-gray-700">Event: {events.join(', ')}</p>
        <p className="text-sm text-gray-700">History: {researchHistory}</p>
        <p className="text-sm text-gray-700">Sports: {sports.join(', ')}</p>
      </div>
      <div className='p-2'>
      <Link to='details/:id'><button className="p-2 btn btn-outline btn-primary">Details</button></Link>
      </div>
    </div>
   </div>
   
  
  );
};

export default CollegeCard;
