import React from 'react';
import Button from '../buttons';
import style from './form.module.scss';
import { IItems } from '../../types/items';
import { v4 as uuidv4} from 'uuid';

class Form extends React.Component<{
  setItems : React.Dispatch<React.SetStateAction<IItems[]>>
}> {
  state = {
    task : "",
    time : "00:00"
  }

  addItem(event : React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setItems(oldItems => [...oldItems, {...this.state,
                                                   selected: false,
                                                   completed: false,
                                                   id: uuidv4()
                                                  }
                                    ]);
    this.setState({
      task: "",
      time: "00:00"
    })
  }

  render() {
     return (
       <form className={style.novaTarefa} onSubmit={this.addItem.bind(this)}>
           
           <div className={style.inputContainer}>
           <label htmlFor='task'>Adicione um novo estudo</label>
           <input type="text"
                  name="task"
                  id="task"
                  value={this.state.task}
                  onChange={event => this.setState({...this.state, task: event.target.value})}
                  placeholder="O que você quer estudar"
                  required />
           </div>
           
           <div className={style.inputContainer}>
           <label htmlFor='time'>Tempo</label>
           <input type="time"
                  step="1"
                  min="00:00:00"
                  max="01:30:00"
                  value={this.state.time}
                  onChange={event => this.setState({...this.state, time: event.target.value})}
                  name="time"
                  id="time" 
                  placeholder="Quanto tempo você quer estudar"
                  required/>
           </div>
        <Button type = "submit">Adicionar</Button>
       </form>
        )
     }
    }

export default Form; 
