import React from "react";
import "./styles2.css";
import JobMenu from "./JobMenu";

function L2T2() {
    let job;

    let a = document.getElementsByName("job");
    for (let i = 0; i < a.length; i++) {
        if (a[i].checked) {
            job = a[i].value;
        }
    }

    return (
        <div className="task2">
            
            <div className="choice">
                <div>
                    <input type="radio" id="job_1" name="job" value="Программист"/>
                    <label htmlFor="job_1">Программист</label>
                </div>
                <div>
                    <input type="radio" id="job_2" name="job" value="Актер"/>
                    <label htmlFor="job_2">Актер</label>
                </div>
                <div>
                    <input type="radio" id="job_3" name="job" value="Врач"/>
                    <label htmlFor="job_3">Врач</label>
                </div>
                <div>
                    <input type="radio" id="job_4" name="job" value="Журналист"/>
                    <label htmlFor="job_4">Журналист</label>
                </div>
                <div>
                    <input type="radio" id="job_5" name="job" value="Экономист"/>
                    <label htmlFor="job_5">Экономист</label>
                </div>
            </div>
            <JobMenu job={job}/>
        </div>
    )
}

export default L2T2;