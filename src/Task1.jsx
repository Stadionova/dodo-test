import React from "react";

export const schedule = {
    monday: "10:00",
    tuesday: "12:00",
    wednesday: "11:00",
    thursday: "10:00",
    friday: "15:00",
    saturday: "11:00",
    sunday: "12:00"
};

export function transform(arg) {
    const newSchedule = {};
    for (let key in arg) {
        let newKey = arg[key];
        if (!newSchedule[newKey]) {
            newSchedule[newKey] = [key];
        } else {
            let currentArr = newSchedule[newKey];
            currentArr.push(key);
            newSchedule[newKey] = currentArr;
        }
    }
    return newSchedule;
}

transform(schedule);

export const Task1 = () => {
    return (
        <div>
            <h1>Задача 1</h1>
            Написать функцию, которая преобразует <code>schedule</code>
            (см.исходиники этой страницы) и отображает в следующем виде. Тест должен
            проходить
            <ul>
                <li>10:00 - monday, thursday</li>
                <li>11:00 - wednesday, saturday</li>
                <li>12:00 - tuesday, sunday</li>
                <li>15:00 - friday</li>
            </ul>
        </div>
    );
};
