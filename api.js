const baseURL = "http://localhost:5000/";

export const getAllNotes = async () => {
    const res = fetch(`http://localhost:5000/posts`, { cache: 'no-store' });
    const notes = (await res).json();
    return notes;
};

export const addNote = async (data) => {
    const res = fetch(`http://localhost:5000/posts`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const note = (await res).json();
    return note;

};

export const editNote = async (data) => {
    const res = await fetch(`http://localhost:5000/posts/${data.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    const updatedNote = await res.json();
    return updatedNote;
};

export const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`,
        {
            method: "DELETE",
        })
};
