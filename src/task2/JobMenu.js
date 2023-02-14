import React from "react";
import "./styles2.css";

function JobMenu(props) {
    let job_link;

    switch (props.job) {
        case "Программист": { 
            job_link = "https://www.profguide.io/professions/programmer.html";
            break;
        }
        case "Актер": { 
            job_link = "https://www.profguide.io/professions/actor.html";
            break;
        }
        case "Врач": {
            job_link = "https://www.profguide.io/professions/vrach_laborant.html";
            break;
        }
        case "Журналист": { 
            job_link = "https://www.profguide.io/professions/journalist.html";
            break;
        }
        case "Экономист": { 
            job_link = "https://www.profguide.io/professions/economist.html";
            break;
        }
        default: {
            job_link = "";
            break;
        }
    }

    if (job_link != "") {
        return (
            <div className="job_menu">
                <a href={job_link}>{props.job}</a><br/>
                <a href={job_link}>Описание</a><br/>
                <a href={job_link}>Зарплата</a><br/>
                <a href={job_link}>Где работают</a><br/>
                <a href={job_link}>Примеры компаний</a><br/>
                <a href={job_link}>Требования</a><br/>
                <a href={job_link}>Обучение</a><br/>
                <a href={job_link}>Плюсы и минусы</a>
                
            </div>
        )
    }
}

export default JobMenu;