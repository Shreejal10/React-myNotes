import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'

const Note = (props) => {
    const context = useContext(NoteContext);
    const { notes, fetchNote } = context;
    useEffect(() => {
        fetchNote();
        // eslint-disable-next-line
    }, [])
    return (
        <section className="text-white">
            <div className="container px-8 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {notes.map((note) => {
                        return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                    })}

                </div>
            </div>
        </section>

    )
}

export default Note