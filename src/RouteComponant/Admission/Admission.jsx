import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function Admission() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        fetch("https://admission-time-server.vercel.app/admission", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
        console.log(data);
    }
 
    return (
        <div className='bg-base-200 py-10'>
            <form id='form' onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg my-10 ">
                <h2 className='text-2xl font-bold mb-8'>Admission Form</h2>
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateName">
                            College Name:
                        </label>
                        <input
                            type="text"
                            placeholder="college"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("college")}
                        />
                    </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>


               

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateName">
                            Candidate Name:
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("name")}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="subject">
                            Subject:
                        </label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("subName")}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateEmail">
                            Candidate Email:
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("email")}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidatePhone">
                            Candidate Phone number:
                        </label>
                        <input
                            type="number"
                            placeholder="Contact Number"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("number")}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="imageFile">
                            Image:
                        </label>
                        <input
                            type="file"
                            placeholder="Image"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("image")}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="dateOfBirth">
                            Date of Birth:
                        </label>
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("date")}
                        />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="address">
                            Address:
                        </label>
                        <textarea
                            type="text"
                            placeholder="Address"
                            className="border border-gray-300 rounded-md w-[380px]  py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            {...register("address")}
                        />
                    
                    </div>

                </div>
                <div className="flex justify-center ">
                <input type="submit" value="Submit" className='btn btn-block' />
                </div>
            </form>

        </div>
    );
}


export default Admission;