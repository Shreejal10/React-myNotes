import { React, useState, useContext } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import EditNote from '../components/EditNote'
import NoteContext from '../context/notes/NoteContext'
const NoteItem = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const { note } = props
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const [enote, setENote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    const updateNote = (currentNote) => {
        setOpenModal(true)
        setENote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag, });
    }
    return (
        <>
            {openModal && <EditNote enote={enote} setENote={setENote} setOpenModal={setOpenModal} showAlert={props.showAlert} />}
            <div className="p-4  w-full md:w-1/2 lg:w-1/3">
                <div className="h-full bg-[#13476e] bg-opacity-75 px-8 pt-9 pb-24 rounded-3xl overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-5">{note.tag}</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{note.title}</h1>
                    <p className="leading-relaxed mb-3 text-gray-300">{note.description}</p>
                    <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 ">
                            <RiDeleteBin5Line className='cursor-pointer hover:scale-110' size={20} onClick={() => { deleteNote(note._id), props.showAlert("Note deleted successfully", "green") }} />
                        </span>
                        <span className="text-white inline-flex items-center leading-none text-sm ">
                            <FiEdit onClick={() => updateNote(note)} className=' cursor-pointer hover:scale-110' size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem