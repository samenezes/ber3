import { useLocalStorage } from '@uidotdev/usehooks';

export default function Note({ id, name, content }) {
    const [list, setList] = useLocalStorage("list")
    const [delList, setDelList] = useLocalStorage("dellist")

    function remove() {
        const tempList = list.filter((note) => note.id != id)
        const tempDelList = list.filter((note) => note.id == id)
        setList(tempList)
        setDelList(tempDelList)
    }

    return (
        <li className="flex space-x-4 items-center w-full h-16">
            <div className="flex flex-col items-center">
                <h1 className="text-lg"> {name} </h1>
                <h3 className="text-sm"> {content} </h3>
            </div>
            <button className="btn btn-sm btn-error" onClick={remove}>Remover</button>
        </li>
    )
}