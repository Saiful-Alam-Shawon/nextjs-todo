"use client"


import { useState } from "react";
import Modal from "./Modal";
import Edit from "./Edit";

const NoteList = ({ notes }) => {
    const { id, title } = notes
    // console.log(notes.length);

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editTitleNote, setEditTitleNote] = useState();
    const [editDesNote, setEditDesNote] = useState();






    return (
        <section className="grid sm:grid-cols-2 gap-4 w-11/12  mx-auto grid-cols-1">
            {
                notes.map(note => (
                    <Edit key={note.id} note={note}></Edit>
                ))
            }
            {/* <Edit note={note}></Edit> */}

            {/* Modal er kaj soho */}





        </section>
    );
};

export default NoteList;