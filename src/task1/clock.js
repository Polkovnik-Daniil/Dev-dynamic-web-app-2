import React from "react";
import "./styles.css";

function Clock(props) {
    let timezone = props.timezone.toString();

    let timezone_hours = timezone.substring(0, 3) - 3;
    let timezone_minutes = timezone.substring(0, 1) + timezone.substring(4, 6);

    let time = new Date();

    time.setHours(time.getHours() + Number(timezone_hours));
    time.setMinutes(time.getMinutes() + Number(timezone_minutes));

    if (props.format === '12') {
        if (time.getHours() > 12) {
            time.setHours(time.getHours() - 12);
        } else { }
		if(time.getHours() === 0) {
			time.setHours(time.getHours() + 12);
		}
    } else { }

    return <h2 className="timer">{time.toLocaleTimeString()} UTC: {timezone}</h2>
}


export default Clock;