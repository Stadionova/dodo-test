import React, { FC } from "react";

export const schedule = {
    monday: "10:00",
    tuesday: "12:00",
    wednesday: "11:00",
    thursday: "10:00",
    friday: "15:00",
    saturday: "11:00",
    sunday: "12:00"
};

export function transform(arg: any) {
    const newSchedule = {};

    for (let key in arg) {
        let newKey = arg[key]; // 10:00
        if (!newSchedule[newKey]) {
            newSchedule[newKey] = [key];
        } else {
            console.log("newKey ", newSchedule[newKey]);
            newSchedule[newKey] = newSchedule[newKey].push(key);
        }
    }
    console.log("newSchedule ", newSchedule);
    return newSchedule;
}

transform(schedule);

// "10:00": ["monday", "thursday"],
//       "11:00": ["wednesday", "saturday"],
//       "12:00": ["tuesday", "sunday"],
//       "15:00": ["friday"]

export const Task1: FC = () => {
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
