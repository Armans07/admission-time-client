import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyCollegeCard from './MyCollegeCard';

const MyCollege = () => {
    const { user } = useContext(AuthContext)
    const [myColleges, setMyColleges] = useState([]);
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://admission-time-server.vercel.app/mycollege/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyColleges(result)


            });
    }, [user, control])

    return (
        <div className='container mx-auto'>
            <h2 className="text-5xl"></h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>College Name</th>
                            <th>Subject Name</th>
                            <th>Review</th>
                            <th>Ratting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myColleges?.map(myCollege => <MyCollegeCard
                                key={myCollege._id}
                                myCollege={myCollege}
                            >
                            </MyCollegeCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCollege;