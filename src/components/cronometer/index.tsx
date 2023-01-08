import { useEffect, useState } from 'react';
import Button from "../buttons";
import Clock from "./clock";
import style from "./cronometer.module.scss";
import { timetoseconds } from "../../commons/utils/time"
import { IItems } from "../../types/items"

interface Props {
  selected : IItems | undefined,
  finishItem : () => void
}

export default function Cronometer({ selected, finishItem }: Props) {
  const[time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timetoseconds(selected.time));
    }
  },[selected]);

  function countdown(count : number = 0){
   setTimeout(() =>{
    if(count > 0){
      setTime(count -1);
      return countdown(count - 1);
    }
    finishItem();
   }, 1000);
  }

    return(
        <div className={style.cronometro}>
          <p className={style.titulo}>Escolha um card e inicie um cronômetro</p>
          <div className={style.relogioWrapper}>
            <Clock 
            time={time}
            />
          </div>
          <Button onClick={() => countdown(time)}>Começar</Button>  

        </div>

    )

}