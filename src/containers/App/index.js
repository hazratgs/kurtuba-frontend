import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import Menu from '../Menu'
import Editor from '../Editor'

@withRouter
@CSSModules(s)
export default class App extends PureComponent {
  render () {
    return (
      <div styleName='app'>
        <Menu/>
        <div styleName='content'>
          <Editor/>
        </div>
      </div>
    )
  }
}
