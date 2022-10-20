import React from 'react'
import NoteItem from './NoteItem'

const Note = () => {
    return (
        <section className="text-white">
            <div className="container px-8 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                </div>
            </div>
        </section>

    )
}

export default Note