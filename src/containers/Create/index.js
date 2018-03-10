import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showPopup } from '../../actions/App'
import onlineStorage from 'kurtuba-client'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'

import Loader from '../../public/svg/loader.svg'

@connect(
  state => ({}),
  dispatch => ({
    showPopup: bindActionCreators(showPopup, dispatch)
  })
)
@CSSModules(s)
export default class Create extends PureComponent {
  state = {
    domains: '',
    password: '',
    backup: false,
    loader: false,
    success: false,
    token: {}
  }

  componentDidMount () {
    this.props.showPopup(true)
  }

  createToken = async () => {
    this.setState({ loader: true })

    const { domains, backup, password } = this.state
    const params = {}

    if (domains) params.domains = domains.split(' ')
    if (backup) params.backup = true
    if (password) params.password = password

    // Формировние токена
    const token = await onlineStorage.create(params)
    this.setState({ token: token.data.data, loader: false, success: true })
  }

  renderLoader () {
    return (
      <div styleName='create'>
        <Loader styleName='loader'/>
      </div>
    )
  }

  renderSuccess () {
    return (
      <div>
        {this.state.token.token}
      </div>
    )
  }

  render () {
    if (this.state.loader) return this.renderLoader()
    if (this.state.success) return this.renderSuccess()

    return (
      <div styleName='create'>
        <h2 styleName='title'>Создание токена</h2>
        <div styleName='form'>
          <Input
            title='Домен для доступа'
            placeholder='example.com'
            handle={value => this.setState({ domains: value })}
          />
          <Input
            type='password'
            title='Пароль'
            placeholder='Защита от записи'
            handle={value => this.setState({ password: value })}
          />
          <Checkbox
            title='Резервное копирование'
            handle={value => this.setState({ backup: value })}
          />
          <Button text='Создать' handle={this.createToken}/>
        </div>
      </div>
    )
  }
}
