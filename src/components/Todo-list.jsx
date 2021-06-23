import React, { useState } from 'react';
import '../css/Todo-list.css';
import List from '../components/List';

import CreateSharpIcon from '@material-ui/icons/CreateSharp';

export const TodoList = () => {
    const [item, setItem] = useState('');
   

const [newitem , SetNewItem] = useState([]);
    const itemEvent = (event)=>{
        setItem(event.target.value);
    }

    const listofitem = ()=>{
        SetNewItem((prev)=>{
            return [...prev ,item]
        })
        setItem("");
    }

    
    return (
        <>
            <div className='main_div ' >
                <div className='center_div  '>
                    <br />
                    <h1 className='h1'>Todo List</h1>
                    <br />
                    <input value={item} type="text" placeholder='Add an iteam.' onChange={itemEvent} />

                    <button className='btn newBtn' onClick = {listofitem}>
                        < CreateSharpIcon/>
                    </button>
                    <br />
                    <ol>
                        
                        {newitem.map((val,ind)=>{
                            return <List key={ind} title={val}/>;

                        })}
                    </ol>
                    <br />
                </div>

            </div>
        </>
    )
}
export default TodoList;
