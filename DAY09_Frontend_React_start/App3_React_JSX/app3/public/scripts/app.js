'use strict';

console.log('welcome to ecommerce application');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'Person'
  ),
  React.createElement(
    'p',
    null,
    'name of the person'
  )
);

var root = document.getElementById('app');

ReactDOM.render(template, root);
