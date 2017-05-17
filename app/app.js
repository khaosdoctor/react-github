import React from 'react';
import ReactDOM from 'react-dom';
import GitHub from './components/gitHub';

//O RDOM é uma lib que vai renderizar um componente (ou um JSX como abaixo)
//Em um elemento cujo ID será passado no segundo argumento
ReactDOM.render(<GitHub />, document.getElementById('app'));