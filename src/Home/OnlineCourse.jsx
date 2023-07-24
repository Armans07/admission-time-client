import React from 'react';

const OnlineCourse = () => {
    return (
        <div className='my-5'>
            <h2 className='text-4xl font-bold mb-5'>Online Course</h2>
            <div className='flex flex-col md:flex-row gap-5 justify-center'>
                <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.dribbble.com/users/1488337/screenshots/6944906/programming_hero_logo.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Programming Hero</h2>
                        <p>This the best Programming Course in the world</p>
                        <div className="card-actions justify-end">
                            <a href="https://www.programming-hero.com/"><button className="btn btn-primary">Enroll Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.dribbble.com/users/1488337/screenshots/6944906/programming_hero_logo.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Programming Hero</h2>
                        <p>This the best Programming Course in the world</p>
                        <div className="card-actions justify-end">
                            <a href="https://www.programming-hero.com/"><button className="btn btn-primary">Enroll Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.dribbble.com/users/1488337/screenshots/6944906/programming_hero_logo.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Programming Hero</h2>
                        <p>This the best Programming Course in the world</p>
                        <div className="card-actions justify-end">
                            <a href="https://www.programming-hero.com/"><button className="btn btn-primary">Enroll Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineCourse;
