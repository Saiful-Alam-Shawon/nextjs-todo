"use client"

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { addNote } from "../../../api";
import { v1 as uuidv1 } from 'uuid';


const AddTask = () => {
    const router = useRouter();

    const [modalOpen, setModalOpen] = useState(false);
    const [noteTitle, setNotes] = useState('');
    const [noteDes, setNoteDes] = useState('');


    const handleNotesSubmit = async (e) => {
        e.preventDefault();
        // console.log(noteTitle, noteDes);

        await addNote({
            id: uuidv1(),
            title: noteTitle,
            text: noteDes

        });

        setNotes("");
        setNoteDes("");
        setModalOpen(false);
        router.refresh();
    }




    return (
        <div>
            <div>
                <label onClick={() => setModalOpen(true)} htmlFor="my_modal_6" id="my_modal_3" className="btn btn-primary md:w-full  sm:w-5/6 "> Write Your Notes <AiOutlinePlus size={15} ></AiOutlinePlus></label>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    <form onSubmit={handleNotesSubmit}>
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
                            <button className="btn btn-primary" type='submit' onClick={handleNotesSubmit}>Submit</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default AddTask;