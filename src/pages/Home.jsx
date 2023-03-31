import React, { useCallback, useState } from "react";


import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        fetch('https://63e6424183c0e85a868fd623.mockapi.io/item')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            });
            window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">

        
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) : items.map((obj, i) => (
                        <PizzaBlock
                            key={i}
                            {...obj}
                        />
                    ))
                }
            </div>
            </div>
    )
}

export default Home