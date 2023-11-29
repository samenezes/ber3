import React, { useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'

export default function Home() {
    const [list, setList] = useLocalStorage("list", [])
    const [newNote, setNewNote] = useState("")
    const [newContent, setNewContent] = useState("")

    function addNote() {
        if (newNote == "") return
        setList([...list, {
            id: list.length +1,
            name: newNote,
            content: newContent
        }])
        setNewNote("")
        setNewContent("")
        alert("Nota de recado adicionada com sucesso!")
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className="form-control mx-auto">
                <label>
                    <span className="label-text">Digite um nome para a nota de Recado</span>
                </label>
                <input
                    className="input input-bordered mt-4"
                    type="text" 
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <label>
                    <span className="label-text">Digite o conteúdo para a nota de recado</span>
                </label>
                <input
                    className="input input-bordered mt-4"
                    type="text" 
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
                <button className="btn mt-4" onClick={addNote}>Adicionar</button>
                <div className="w-full flex justify-between mt-2 space-x-2">
                    <a href="/adicionadas" className="btn-ghost py-1 px-2 rounded-md">Visualizar Notas</a>
                    <a href="/excluidas" className="btn-ghost py-1 px-2 rounded-md">Notas Excluidas</a>
                </div>
            </div>
        </div>
    )
}