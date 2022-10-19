import React from 'react'

const Home = () => {
    return (
        <div className='pt-16'>
            <h1 className='text-center text-4xl text-white mt-3'>Hello, </h1>
            <div className=' container mx-auto flex items-center justify-around py-4'>
                <h2 className='text-white text-xl'>Your Notes:</h2>
                <div className='flex justify-center items-center gap-2'>
                    <label htmlFor="notes" className='text-white text-xl'>Sort by: </label>
                    <select name="notes" id="notes" className='rounded-xl px-1 '>
                        <option value="Personal">Personal</option>
                        <option value="Learning">Learning</option>
                        <option value="College">College</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Home