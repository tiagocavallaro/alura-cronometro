import React from "react"
import style from "./clock.module.scss"

interface props {
  time: number | undefined
}

export default function Clock({time = 0}:props) {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const [minutessetoften, minutesunity] = String(minutes).padStart(2, '0');
  const [secondssetoften, secondsunity] = String(seconds).padStart(2, '0');
    return(
        <>
          <span className={style.relogioNumero}>{minutessetoften}</span> 
          <span className={style.relogioNumero}>{minutesunity}</span>
          <span className={style.relogioDivisao}>:</span>
          <span className={style.relogioNumero}>{secondssetoften}</span>
          <span className={style.relogioNumero}>{secondsunity}</span>
        </>
    )
}