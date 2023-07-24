import React from 'react';

const MyCollegeCard = ({ myCollege }) => {
    const { subName,college } = myCollege
    return (
        <div>
            <tr>
                <td> {subName}</td>
                <td>{college}</td>
            </tr>
        </div>
    );
};

export default MyCollegeCard;