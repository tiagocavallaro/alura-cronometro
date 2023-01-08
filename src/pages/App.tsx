import React from 'react';
import Cronometer from '../components/cronometer';
import Form from '../components/form';
import List from '../components/list';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometer />
    </div>
  );
}

export default App;