var React = require('react');
var ReactDOM = require('react-dom');

//O RDOM é uma lib que vai renderizar um componente (ou um JSX como abaixo)
//Em um elemento cujo ID será passado no segundo argumento
ReactDOM.render(<h1>Teste</h1>, document.getElementById('app'));
