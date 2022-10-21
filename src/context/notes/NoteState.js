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

    return (
        <NoteContext.Provider value={{ notes, fetchNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}