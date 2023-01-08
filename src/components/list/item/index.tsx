import style from "./item.module.scss";
import {IItems} from "../../../types/items";

interface Props extends IItems {
  selectItem : (selectedItem: IItems) => void
}

export default function Item({task,
                              time,
                              selected,
                              completed,
                              id,
                              selectItem} : Props) {
    return (
     <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} onClick={() => !completed && selectItem({
      task,
      time,
      selected,
      completed,
      id
     })}>
       <h3> {task} </h3>
       <span> {time} </span>
       {completed && <span className={style.concluido}aria-label="Tarefa Completada"></span>}
     </li>
      )
  }