import React, { FC, useEffect, useState } from "react";

export const PizzeriasCount: FC = (props) => {
    const [countPizza, setCountPizza] = useState(props.countPizza);

    useEffect(async () => {
        const countPizza = await fetch(
            "https://globalapi.dodopizza.com/api/v1/pizzerias/count"
        ).then((response) => response.json());
        console.log("countPizza ", countPizza.total);
        setCountPizza(countPizza.total);
        return countPizza;
    });

    return <div>Количество открытых пиццерий:{countPizza}</div>;
};
