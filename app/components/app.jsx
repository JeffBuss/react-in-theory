const React = require('react')
const ReactDOM = require('react-dom')

const ActionButton = require('./ActionButton');
const LikesCounter = require('./LikesCounter');

ReactDOM.render(<LikesCounter initialCount={0} />, document.getElementById('application'))
