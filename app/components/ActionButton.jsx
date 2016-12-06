const React = require('react')

class ActionButton extends React.Component {

  render () {
    return (
        <button className="ActionButton" onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </button>
    )
  }
}

module.exports = ActionButton;
