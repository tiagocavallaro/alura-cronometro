import React, {useState} from 'react';
import Cronometer from '../components/cronometer';
import Form from '../components/form';
import List from '../components/list';
import { IItems } from '../types/items';
import style from './app.module.scss';

function App() {
  const [items, setItems] = useState<IItems[]>([]);
  const [selected, setSelected] = useState<IItems>();
  
  function selectItem(selectedItem: IItems){
    setSelected(selectedItem); 
    setItems(oldItems => oldItems.map(items =>({
      ...items, 
      selected: items.id === selectedItem.id ? true :false
    }))); 
  }

  function finishItem() {
    if(selected) {
      setSelected(undefined);
      setItems(oldItems => oldItems.map(items => {
        if(items.id === selected.id) {
          return {
            ...items,
            selected: false,
            completed: true
          }
        }
        return items;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setItems={setItems} />
      <List 
      items ={items}
      selectItem={selectItem}
      />
      <Cronometer 
      selected={selected}
      finishItem={finishItem}
      />
    </div>
  );
}

export default App;