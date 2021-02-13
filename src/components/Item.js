import React, {useState, useEffect} from 'react';

export default function Item() {
    
    const [value, setValue] = useState([]);
    const [listSelected, setListSelected] = useState({});
    const [list, setList] = useState([]);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("list"));
        if(list)
        {
            setList(list);
        }

    },[]);

    useEffect(() => {
        console.log(list);
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleSumit = (e) => {
        e.preventDefault();
        console.log("listModify:",listSelected);
        const newList = list.map(l => {
            if(l.name === listSelected.name) {
                if(!l.items || l.items.length === 0)
                {
                    return {...l, items: [value]} ;
                } else {
                    return {...l, items:[...l.items, value]}
                }
            } else
            {
                return l;
            }
        });

        
        setList(() => newList);
        const newSelectList = newList.find(l=> l.name === listSelected.name);
        setListSelected(newSelectList);
    };

    const handleChangeListItem = (e) => {        
        const listSelected = list.find(l => l.name === e.target.value);
        setListSelected(listSelected);
    }

    return (
        <>
            <form onSubmit={handleSumit}>
                <select onChange={handleChangeListItem}>
                    { 
                        list.map((l, index) => {
                            return <option key={index} value={l.name} >{l.name}</option>
                        })
                    }
                </select>

                <label htmlFor="item">
                    <input id='item' value={value} onChange={(e)=> {setValue(e.target.value)}}/>
                </label>

                <button onClick={handleSumit}>Add to List</button>
            </form>

            <ul>
                {listSelected.items && listSelected.items.map((item, index) => { return <li key={index}>{item}</li> }) }
            </ul>
        </>
    );
}