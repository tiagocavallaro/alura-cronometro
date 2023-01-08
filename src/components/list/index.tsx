import React, {useState} from 'react';
import Item from './item';
import style from './list.module.scss';

function List () {
    const [items, setItems] = useState([{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'JavaScript',
        time: '01:00:00'   
    },
    {
        task: 'TypeScript',
        time: '01:30:00'   
    }]);
    return(
        <aside className={style.ListaTarefas}>
            <h2 onClick={() =>{
               setItems([...items, {task: 'PHP', time: '00:30:00'}]);  
            }}>Estudos do dia</h2>
            <ul>
                {items.map((items, index) => (
                    <Item 
                    key={index}
                      {...items}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;