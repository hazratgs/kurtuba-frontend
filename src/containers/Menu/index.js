import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import ButtonMenu from '../../components/ButtonMenu'
import s from './style.pcss'

@connect(
  state => ({})
)
@CSSModules(s)
export default class Menu extends PureComponent {
  render () {
    return (
      <div styleName='menu'>
        <div styleName='logo'></div>
        <ButtonMenu
          to='/create'
          icon='add'
          title='Создать токен'
        />
        <ButtonMenu
          to='/create'
          icon='upload'
          title='Сохранить'
        />
        <ButtonMenu
          to='/create'
          icon='backup'
          title='Резервные копии'
          disabled={true}
        />
        <ButtonMenu
          to='/create'
          icon='delete'
          disabled={true}
          title='Очистить хранилище'
        />
        <ButtonMenu
          to='/create'
          icon='setting'
          title='настройки'
          className='bottom'
        />
      </div>
    )
  }
}
