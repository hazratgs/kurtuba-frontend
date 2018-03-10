import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class Button extends PureComponent {
  render () {
    return (
      <div styleName='input'>
        <span>{this.props.title}</span>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={e => this.props.handle(e.target.value)}
        />
      </div>
    )
  }
}

Button.defaultProps = {
  type: 'text'
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handle: PropTypes.func.isRequired
}
