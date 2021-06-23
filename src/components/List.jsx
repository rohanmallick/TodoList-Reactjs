import React, { useState } from 'react';
import '../css/Todo-list.css';
import DeleteIcon from '@material-ui/icons/Delete';

export const List = (pro) => {

    const [line ,SetLine] =  useState(false);
    const cutIt = ()=>{
        SetLine(true);

    };
        return (
        <>
        <div className='todo_style2'>
            <span onClick={cutIt}>
                <DeleteIcon className='deleteicon' />

            </span>
            <li style={{textDecoration: line ?'line-through':'none',
                        color:line ? 'black':'none',}}>
            {pro.title}</li>

        </div>
           
        </>
    )
}
export default List ;
