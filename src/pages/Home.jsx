import { React, useState, useContext, useEffect } from 'react'
import UserContext from '../context/users/UserContext'
import { IoAddCircleOutline } from 'react-icons/io5'
import Note from '../components/Note'
import AddNote from '../components/AddNote'
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const { user, getUser } = context;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUser();
            // eslint-disable-next-line
        }
        else {
            navigate("/login");
        }
    }, [])
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            {openModal && <AddNote showAlert={props.showAlert} setOpenModal={setOpenModal} />}
            <Navbar showAlert={props.showAlert} />
            <div className='pt-16'>
                <h1 className='text-center text-4xl text-white mt-3'>Hello, {user} </h1>
                <div className=' container mx-auto flex items-center justify-around py-4 mt-6'>
                    <button onClick={() => { setOpenModal(true) }} className='text-white text-xl bg-[#062f4e] hover:bg-[#051724] px-2 py-1 rounded-xl flex items-center justify-center gap-2' ><p>Add Note</p> < IoAddCircleOutline size={20} className="mt-1" /> </button>
                    <div className='flex justify-center items-center gap-2'>
                        <label htmlFor="notes" className='text-white text-xl'>Sort by: </label>
                        <select name="notes" id="notes" className='rounded-xl px-2 py-1  bg-[#062f4e] text-white '>
                            <option value="Personal">Personal</option>
                            <option value="Learning">Learning</option>
                            <option value="College">College</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Note showAlert={props.showAlert} />
                </div>


            </div>
        </>
    )
}

export default Home