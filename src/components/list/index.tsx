import React from 'react';
import Item from './item';
import style from './list.module.scss';
import { IItems } from '../../types/items';

interface Props {
    items : IItems[],
    selectItem : (selectedItem: IItems) => void
}
function List ({items, selectItem} : Props ) {
    return(
        <aside className={style.ListaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {items.map((items) => (
                    <Item
                    selectItem={selectItem} 
                    key={items.id}
                      {...items}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;