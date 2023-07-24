// CollegeGallery.js

import React from 'react';

const GallerySection = () => {
 
  return (
    <div>
            <div className='m-10'>
                <h2 className='text-center text-4xl font-bold'>Photo Gallery</h2>
            </div>
            <div className=" mx-auto px-5 py-2 lg:px-32 ">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?w=740&t=st=1690085673~exp=1690086273~hmac=e4c819f01baabe2d8997e199bc5bd61b107e5d96c27427b238cb9d7557931df8" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/happy-beautiful-girl-standing-with-note-books-backpack-showing-thumb-up-smiling_8353-6390.jpg?w=740&t=st=1690085705~exp=1690086305~hmac=4104462f66263d9e004db6e6205b16b5210a2154ddf966b55fffcf729f86fc68" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/young-attractive-smiling-student-showing-thumb-up-outdoors-campus-university_8353-6394.jpg?w=740&t=st=1690085734~exp=1690086334~hmac=f75a29c9d77ef749f7f4a87bbc797067fcb7abb80ebc5fce356a602f078914f4" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/low-angle-cheerful-team-students-passed-test-by-preparing-all-together_496169-2336.jpg?w=740&t=st=1690085773~exp=1690086373~hmac=0b9a9f081dcb40b67da339ae0a8e94fa87e0396f9c14d7e7f34130f31b827616" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/smiling-students-studying-together-table_23-2147850724.jpg?w=740&t=st=1690085820~exp=1690086420~hmac=eac89cfd2a18ab0f7a470c3b50478f6a442a52f8bf3cf6befa4d5066924c0202" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/volleyball-players-resting-after-match_23-2149492384.jpg?w=740&t=st=1690085881~exp=1690086481~hmac=aff8ca9c49da4aeee6d5e952923f8be532a536fc385127a9a17713e7bf85ba77" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default GallerySection;
