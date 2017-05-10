var React = require('react');
var ReactDOM = require('react-dom');
var GitHub = require('./components/gitHub');

//O RDOM é uma lib que vai renderizar um componente (ou um JSX como abaixo)
//Em um elemento cujo ID será passado no segundo argumento
ReactDOM.render(<GitHub />, document.getElementById('app'));
