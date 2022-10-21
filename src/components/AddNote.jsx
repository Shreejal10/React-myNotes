import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.setOpenModal(false);
        console.log(note);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
                </div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-[#13476e] px-6 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className=" sm:flex sm:items-center flex flex-col gap-5  ">
                                    <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-2xl font-medium leading-6 text-white" id="modal-title">Add Note</h3>
                                    </div>
                                    <form className="space-y-6 sm:w-1/2" action="#">
                                        <div>
                                            <label htmlFor="title" className="block mb-2 text-base font-medium text-white ">Title</label>
                                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={onChange} value={note.title} required minLength={3} />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className="block mb-2 text-base font-medium text-white ">Description</label>
                                            <input type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={onChange} value={note.description} required minLength={5} />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-base font-medium text-white">Tag</label>
                                            <select name="tag" id="tag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={onChange} value={note.tag} required minLength={5}>
                                                <option value={"default"} ></option>
                                                <option name="Personal" value="Personal" >Personal</option>
                                                <option name="Learning" value="Learning">Learning</option>
                                                <option name="College" value="College">College</option>
                                                <option name="Others" value="Others">Others</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="bg-[#13476e] py-6 px-6 sm:flex sm:flex-row-reverse md:flex-row-reverse  items-center justify-center gap-1">
                                <button disabled={note.title.length < 3 || note.description.length < 5 || note.tag.length < 5} onClick={handleAddNote} type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#062f4e] px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-[#051724] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Add Note</button>
                                <button onClick={() => { props.setOpenModal(false) }} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-base font-medium  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default AddNote