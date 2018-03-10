import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class Button extends PureComponent {
  render () {
    return (
      <button styleName='button' onClick={() => this.props.handle()}>
        {this.props.text}
      </button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired
}
