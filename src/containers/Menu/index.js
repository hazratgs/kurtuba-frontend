import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import ButtonMenu from '../../components/ButtonMenu'
import s from './style.pcss'

@CSSModules(s)
export default class Menu extends PureComponent {
  render () {
    return (
      <div styleName='menu'>
        <div styleName='logo'></div>
        <ButtonMenu icon='add' title='Создать токен'/>
        <ButtonMenu icon='upload' title='Сохранить'/>
        <ButtonMenu
          icon='backup'
          title='Резервные копии'
          disabled={true}
        />
        <ButtonMenu
          icon='delete'
          disabled={true}
          title='Очистить хранилище'
        />
        <ButtonMenu
          icon='setting'
          title='настройки'
          className='bottom'
        />

      </div>
    )
  }
}
