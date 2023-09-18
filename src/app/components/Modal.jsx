"use client"

import { useState } from "react";
import { addNote } from "../../../api";
import { useRouter } from "next/navigation";
import { v1 as uuidv1 } from 'uuid';

const Modal = ({ modalOpen, setModalOpen, children, editModalOpen, deleteModalOpen }) => {

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
        // <form onSubmit={handleNotesSubmit}>

        <div id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`} >
            <div className="sm:modal-box max-w-xs ">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black">✕</button>
                </form>
                {children}
                {/* <h3 className="font-bold text-lg my-3">{children}</h3> */}
                {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}

                {/* <input
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
                    </div> */}

            </div>

            {/* </dialog> */}
        </div>


        // </form>
    );
};

export default Modal;