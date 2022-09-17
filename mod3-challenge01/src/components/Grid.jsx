import { getCharacters } from "../helpers/getCharacters"
import { useEffect, useState } from "react"
import { Item } from "./Item"

export const Grid = () => {

    const [charList, setCharList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [current, setCurrent] = useState('')
    useEffect(() => {
        setIsLoading(true);
        getCharacters()
            .then((data) => setCharList(data.results))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <>
            {isLoading && <p>Loading...</p>}
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className="text-center">Current</h1>
                    <img className="" src={current} alt="..." />
                </div>
            </div>
            
            <div className="mt-5 d-flex row mx-3">
                {
                    charList.map((char) => (
                        <Item {...char} setCurrent={setCurrent} />
                    ))
                }
            </div>

        </>
    )
}
