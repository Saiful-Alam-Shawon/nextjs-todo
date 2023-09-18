"use client"

import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import Modal from "./Modal";
import { deleteNote, editNote } from "../../../api";
import { useRouter } from "next/navigation";


const Edit = ({ note }) => {

    const router = useRouter();

    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [seeMoreModalOpen, setSeeMoreModalOpen] = useState(false);
    const [editTitleNote, setEditTitleNote] = useState(note.title);
    const [editDesNote, setEditDesNote] = useState(note.text);

    const handleEditNotesSubmit = async (e) => {
        e.preventDefault();
        await editNote({
            id: note.id,
            title: editTitleNote,
            text: editDesNote

        })
        console.log(editTitleNote, editDesNote);
        setEditTitleNote("");
        setEditDesNote("");
        setModalOpen(false);
        router.refresh();
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        setModalOpen(false);
        router.refresh();
    }


    return (

        <div className="max-w-xs sm:w-full">
            <div className="card text-white w-96 bg-slate-500  " key={note.id}>
                <div className="card-body">
                    <h2 className="card-title">{note.title}</h2>
                    <p>{note.text.slice(0, 43)}</p>
                    <div className="card-actions justify-end">

                        <button onClick={() => setSeeMoreModalOpen(true)} className="btn btn-xs">See More</button>

                        <Modal modalOpen={seeMoreModalOpen} setModalOpen={setSeeMoreModalOpen}  >
                            <h3 className="text-black"> <span className="text-xl font-bold"> Title:</span> {note.title}</h3>
                            <p className="text-black">  <span className="text-xl font-bold "  >Details:</span> {note.text}</p>
                        </Modal>

                        <FiEdit onClick={() => setModalOpen(true)} cursor='pointer' size={18} />

                        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                            <form onSubmit={handleEditNotesSubmit}>
                                <input
                                    value={editTitleNote}
                                    onChange={(e) => setEditTitleNote(e.target.value)}
                                    type="text" placeholder="Title Here" className="input text-black input-bordered w-full max-w-xs" />

                                <textarea
                                    value={editDesNote}
                                    onChange={(e) => setEditDesNote(e.target.value)}
                                    type="text"
                                    placeholder="Description Here" className="textarea text-black textarea-bordered textarea-lg w-full max-w-xs my-3" >
                                </textarea>

                                <div>
                                    <button className="btn btn-primary" type='submit' onClick={handleEditNotesSubmit}>Submit</button>
                                </div>
                            </form>
                        </Modal>

                        <BsFillTrashFill onClick={() => setDeleteModalOpen(true)} className="text-red-500" cursor='pointer' size={18} />

                        <Modal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen}>
                            <p className="text-xl text-black">Are You Sure, You Want to Delete This Note ?</p>
                            <div className="modal-action"> <button className="btn btn-primary " onClick={() => handleDelete(note.id)}>Yes</button></div>
                        </Modal>

                    </div>

                </div>
            </div>

        </div>




    );
};

export default Edit;