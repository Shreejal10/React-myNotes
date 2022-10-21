import { useState } from 'react'
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //FETCH all Notes
    const fetchNote = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MTFiNGI4NTJmNDYxZWM0ZDNiMTYyIn0sImlhdCI6MTY2NjI2MTYwN30.94X5OAT_AAy2B3deGyA61NNJHjzqV3nbBJaTMRdfqIE'
            },
        });
        const json = await response.json();
        setNotes(json);
    }

    //Add a Note
    const addNote = async (title, description, tag) => {
        console.log("Adding a new note");
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MTFiNGI4NTJmNDYxZWM0ZDNiMTYyIn0sImlhdCI6MTY2NjI2MTYwN30.94X5OAT_AAy2B3deGyA61NNJHjzqV3nbBJaTMRdfqIE'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    const deleteNote = async (id) => {
        //API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MTFiNGI4NTJmNDYxZWM0ZDNiMTYyIn0sImlhdCI6MTY2NjI2MTYwN30.94X5OAT_AAy2B3deGyA61NNJHjzqV3nbBJaTMRdfqIE'
            },
        });
        const json = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, fetchNote, addNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;