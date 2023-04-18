import React from "react";
import { useState } from "react";

function Main() {
    let [user, setUser] = useState({name: 'Vasyl', age: 21})


    let handler = (e) => {
        setUser({name: e.target.value})
    };

    return (
        <>
            <input type='text' onChange={handler}/>
            <div className="result">{user.name}</div>
        </>
    );
}



export default Main;