import { getAllNotes } from "../../api";
import AddTask from "./components/AddTask";
import NoteList from "./components/NoteList";

export default async function Home() {

  const notes = await getAllNotes();
  // console.log(notes);

  return (
    <section className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Note Book</h1>
        <AddTask></AddTask>
        <NoteList notes={notes}></NoteList>
      </div>
    </section>
  )
}
