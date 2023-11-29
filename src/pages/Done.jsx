import React from 'react'
import Note from '../components/Nota'
import { useLocalStorage } from '@uidotdev/usehooks'

export default function Done() {
    const [list, setList] = useLocalStorage("list", [])

    return (
        <ul className="bg-neutral p-4 rounded">
            <div className="flex justify-between items-center w-full">
                Adicionadas:
                <a href="/" className="btn-ghost p-1 rounded-md">Voltar</a>
            </div>
            {list.map((note, index) => (
                <Note key={index} id={note.id} name={note.name} content={note.content} /> 
            ))}
        </ul>   
    )
}