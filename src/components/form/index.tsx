import React from 'react';
import Button from '../buttons';
import style from './form.module.scss';

class Form extends React.Component {
  render() {
     return (
       <form className={style.novaTarefa}>
           
           <div className={style.inputContainer}>
           <label htmlFor='task'>Adicione um novo estudo</label>
           <input type="text"
                  name="task"
                  id="task"
                  placeholder="O que você quer estudar"
                  required />
           </div>
           
           <div className={style.inputContainer}>
           <label htmlFor='time'>Tempo</label>
           <input type="time"
                  step="1"
                  min="00:00:00"
                  max="01:30:00"
                  name="time"
                  id="time" 
                  placeholder="Quanto tempo você quer estudar"
                  required/>
           </div>
        <Button
          text = "Adicionar"
        />
         
       </form>
        )
     }
    }

export default Form; 
