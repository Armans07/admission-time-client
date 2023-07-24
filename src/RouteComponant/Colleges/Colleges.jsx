
import React, {
  useState, useEffect
} from "react";
import CollegeCard from "./CollegeCard";
import CollegeDetails from "./CollegeDetails";

const Collage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [collegesData, setCollegesData] = useState([]);

  useEffect(() => {
    fetch("https://admission-time-server.vercel.app/collegeData")
      .then(res => res.json())
      .then(data => setCollegesData(data))
  }, [])

  const handleDetailsClick = (college) => {
    setSelectedCollege(college);
  };

  return (
    <div className="college-route bg-base-200 pb-10">
      <div className="college-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-16">
        {collegesData.map((college, index) => (
          <CollegeCard
            key={index}
            college={college}
            onClick={() => handleDetailsClick(college)}
          />
        ))}
      </div>
      {selectedCollege && <CollegeDetails college={selectedCollege} />}
    </div>
  );
};

export default Collage;