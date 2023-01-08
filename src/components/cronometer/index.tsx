import Button from "../buttons";
import Clock from "./clock";
import style from "./cronometer.module.scss";

export default function Cronometer() {
    return(
        <div className={style.cronometro}>
          <p className={style.titulo}>Escolha um card e inicie um cronômetro</p>
          <div className={style.relogioWrapper}>
            <Clock />
          </div>
          <Button
            text="Começar!"
          />
        </div>

    )

}