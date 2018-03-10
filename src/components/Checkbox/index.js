import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class Checkbox extends PureComponent {
  render () {
    return (
      <div styleName='checkbox'>
        <label>
          <input
            type='checkbox'
            defaultChecked={false}
            onChange={e => this.props.handle(e.target.checked)}
          />
          <span>{this.props.title}</span>
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired
}
