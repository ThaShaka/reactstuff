import React, {useEffect, useState} from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
//import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import {onSnapshot,addDoc, doc, deleteDoc,setDoc} from "firebase/firestore"
import {db, notesCollection} from "../firebase.js";


export default function App() {
    const [notes, setNotes] = React.useState( [])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    const [tempNoteText, setTempNoteText] = useState("")
    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

    useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection,snapshot=> {
            const notesArr = snapshot.docs.map(doc=>({
                    ...doc.data(),
                    id: doc.id
                }))
            setNotes(notesArr)
        })
        return unsubscribe;
    }, []);

    const sortedArr = notes.sort((a,b)=> b.updatedAt-a.updatedAt)

    useEffect(() => {
        if(!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes]);

    useEffect(() => {
        if(currentNote) {
                setTempNoteText((currentNote.body))
        }
    }, [currentNote]);

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            if (tempNoteText !== currentNote.body) {
                updateNote(tempNoteText)
            }
        },500)
        return ()=>clearTimeout((timeoutId))
    }, [tempNoteText]);

    async function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            createdAt : Date.now(),
            updatedAt : Date.now()
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)

    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId);
        await deleteDoc(docRef)
    }

    async  function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId);
        await setDoc(docRef, {body:text, updatedAt:Date.now()},  {merge:true})

    }


    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={sortedArr}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />


                            <Editor
                                tempNoteText={tempNoteText}
                                setTempNoteText={setTempNoteText}
                            />

                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}
