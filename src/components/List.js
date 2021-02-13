import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function List() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("list"));
        if(list)
        {
            setList(list);
        }

        console.log(list);
    }, []);

    useEffect(() => {
        console.log(list);
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleSumit = (e) => {
        e.preventDefault();
        const existList = list.find(l => l.name === value);

        if(existList) {
            console.log("Ya existe ese valor en la lista");
            return;
        }
        console.log("aqui bien");
        setList(list => [...list,{name:value}]);        
    }

    

    

    return(
        <>
            <form onSubmit={handleSumit}>
                <label htmlFor="newList">
                    New List:
                    <input id="newList" type="text" onChange={(e) => {setValue(e.target.value)}} value={value}/>
                </label>

                <button type="submit" onClick={handleSumit}>
                    Create List
                </button>
                
            </form>
            <button onClick={() => {setList([]);} }>
                Reset List
            </button>
            <ul>
                { 
                    list.map((l,index) => {
                        return (<li key={index}>{l.name}</li>);
                    }) 
                }
            </ul>
           
        </>
    );
}