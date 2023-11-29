import React from 'react'
import Note from '../components/Nota'
import { useLocalStorage } from '@uidotdev/usehooks'

export default function Done() {
    const [delList, setDelList] = useLocalStorage("dellist")

    return (
        <ul className="bg-neutral p-4 rounded">
            Excluídas
            {delList.map((note, index) => (
                <Note key={index} id={note.id} name={note.name} content={note.content} />
            ))}
        </ul>
    )
}