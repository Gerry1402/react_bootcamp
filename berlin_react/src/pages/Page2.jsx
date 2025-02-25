import { useEffect, useState } from "react";
import { getCategories, getJokeFromCategory } from "../ejercicios/05/Categories";

const Page2 = () => {

        const [categories, setCategories] = useState([])
        const [joke, setJokee] = useState('')
        useEffect(() => {
                getCategories().then(setCategories)
        }, [])
        const setJoke = (category) => {
                getJokeFromCategory(category).then(setJokee)
        }

        return (
                <div>
                        {categories.map((category, i) => <button key={i} onClick={() => setJoke(category)}>{category}</button>)}
                        <p>{joke}</p>
                </div>
        );
}

export default Page2;