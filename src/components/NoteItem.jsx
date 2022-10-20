import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

const NoteItem = () => {
    return (
        <>
            <div className="p-4  md:w-1/2 lg:w-1/3">
                <div className="h-full bg-[#13476e] bg-opacity-75 px-8 pt-9 pb-24 rounded-3xl overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-5 underline">TAG</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Raclette Blueberry Nextious Level</h1>
                    <p className="leading-relaxed mb-3 text-gray-300">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p>
                    <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 ">
                            <RiDeleteBin5Line className='cursor-pointer' size={20} />
                        </span>
                        <span className="text-white inline-flex items-center leading-none text-sm ">
                            <FiEdit className=' cursor-pointer' size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem