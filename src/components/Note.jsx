import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import { useNavigate } from "react-router-dom";
const Note = (props) => {
    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, fetchNote } = context;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchNote();
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])
    return (
        <section className="text-white">
            <div className="container px-8 py-10 mx-auto">
                <div className="flex  items-center justify-center">{notes.length === 0 && 'No Notes to display'}</div>
                <div className="flex flex-wrap -m-4">
                    {notes.map((note) => {
                        if (props.tag === note.tag && note.tag === "College") {
                            return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                        }
                        else if (props.tag === note.tag && note.tag === "Learning") {
                            return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                        }
                        else if (props.tag === note.tag && note.tag === "Personal") {
                            return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                        }
                        else if (props.tag === note.tag && note.tag === "Others") {
                            return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                        }
                        else if (props.tag === "") {
                            return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                        }
                        else if (props.tag === "all") {
                            return <NoteItem showAlert={props.showAlert} note={note} key={note._id} />
                        }
                    })}
                </div>
            </div>
        </section>

    )
}

export default Note