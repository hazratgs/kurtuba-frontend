import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showPopup } from '../../actions/App'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@connect(
  state => ({}),
  dispatch => ({
    showPopup: bindActionCreators(showPopup, dispatch)
  })
)
@CSSModules(s)
export default class Create extends PureComponent {
  componentDidMount () {
    this.props.showPopup(true)
  }

  render () {
    return (
      <div styleName='create'>
        Создание токена
      </div>
    )
  }
}
