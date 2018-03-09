import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showPopup } from '../../actions/App'
import CSSModules from 'react-css-modules'
import ButtonMenu from '../../components/ButtonMenu'
import s from './style.pcss'

import Create from '../Create'

@withRouter
@connect(
  state => ({ popup: state.App.popup }),
  dispatch => ({ showPopup: bindActionCreators(showPopup, dispatch) })
)
@CSSModules(s)
export default class Popup extends PureComponent {
  closePopup = () => {
    // Скрываем попап
    this.props.showPopup(false)

    // Возврашаем назад
    window.history.back()
  }

  render () {
    return (
      <div styleName='popup' className={this.props.popup && s.active}>
        <div styleName='wrapper'>
          <div styleName='menu'>
            <div styleName='logo'></div>
            <ButtonMenu
              to='/'
              icon='back'
              handle={::this.closePopup}
            />
          </div>
          <div styleName='content'>
            <Route path='/create' component={Create}/>
          </div>
        </div>
      </div>
    )
  }
}
