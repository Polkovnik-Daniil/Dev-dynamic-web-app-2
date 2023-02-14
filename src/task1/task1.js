import React from "react";

import "./styles.css";
import Clock from "./clock";

const L2T1 = () => {
    
    return (
        <div className='container'>
             <Clock format='24' timezone='+03:30' />
             <Clock format='12' timezone='-05:00' />
        </div>
    );
};

export default L2T1;