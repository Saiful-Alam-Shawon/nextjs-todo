"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addNote } from "../../../api";
import { v1 as uuidv1 } from 'uuid';


const AddTaskModal = () => {

    const router = useRouter();
    const [noteTitle, setNotes] = useState('');
    const [noteDes, setNoteDes] = useState('');


    const handleNotesSubmit = async (e) => {
        e.preventDefault();
        await addNote({
            id: uuidv1(),
            title: noteTitle,
            text: noteDes

        })
        console.log(noteTitle, noteDes);
        setNotes("");
        setNoteDes("");
        setModalOpen(false);
        router.refresh();
    }

    return (
        <div>
            <input
                value={noteTitle}
                onChange={(e) => setNotes(e.target.value)}
                type="text" placeholder="Title Here" className="input input-bordered w-full max-w-xs" />

            <textarea
                value={noteDes}
                onChange={(e) => setNoteDes(e.target.value)}
                type="text"
                placeholder="Description Here" className="textarea textarea-bordered textarea-lg w-full max-w-xs my-3" >
            </textarea>

            <div>
                <button className="btn btn-primary" type='submit' onSubmit={handleNotesSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AddTaskModal;