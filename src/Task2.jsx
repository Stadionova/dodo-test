import React, { useState, useEffect } from "react";
import { AddPizzeriaButton } from "./AddPizzeriaButton";
import { PizzeriasCount } from "./PizzeriasCount";
import axios from 'axios';

export const Task2 = () => {
    const [countPizza, setCountPizza] = useState();
    useEffect(() => {
        async function fetchData() {
            const countPizza = await fetch(
                "https://globalapi.dodopizza.com/api/v1/pizzerias/count"
            ).then((response) => response.json());
            setCountPizza(countPizza.total);
            return countPizza;
        }
        fetchData();
    }, []);

    const [persons, getPersons] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                getPersons(res.data);
                return persons;
            })
    });

    const user = {
        name: 'John'
    };

    useEffect(() => {
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }, []);
    return (
        <>
            <h1>Задача 2</h1>
            <ol>
                <li>
                    Сделать вызов на урл
                    "https://globalapi.dodopizza.com/api/v1/pizzerias/count" и получить
                    общее количество открытых пиццерий
                </li>
                <li>Отобразить количество пиццерий в компоненте "PizzeriasCount"</li>
                <li>
                    При нажатии на "Добавить новую пиццерию" увеличить количество пиццерий
                    в "PizzeriasCount"
                </li>
                <li>
                    Стилизовать кнопку примерно так:
                    <br />
                    <img
                        style={{ width: "300px" }}
                        alt="button"
                        src="https://files.kaiten.io/720x340/917b5054-7754-4ca6-808a-38fb63acd9a7.png"
                    />
                    <br />
                    По ховеру вся кнопка должна плавно увеличиваться на 5%
                    <br />
                </li>
                <li>
                    Центрировать горизонтально и вертикально кнопку и надпись с помощью
                    Flexbox
                </li>
            </ol>
            <hr />
            <PizzeriasCount countPizza={countPizza} />
            <AddPizzeriaButton setCountPizza={setCountPizza} countPizza={countPizza} />
            <ul>
                GET запрос:
                {persons && persons.map(person => <li>{person.name}</li>)}
            </ul>
        </>
    );
};
