import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import AddIcon from '../../public/svg/ic_add_black_24px.svg'
import UploadIcon from '../../public/svg/ic_file_upload_black_24px.svg'
import DeletedIcon from '../../public/svg/ic_delete_forever_black_24px.svg'
import BackupIcon from '../../public/svg/ic_restore_black_24px.svg'
import SettingIcon from '../../public/svg/ic_settings_black_24px.svg'

@CSSModules(s)
export default class ButtonMenu extends PureComponent {
  icon () {
    switch (this.props.icon) {
      case 'add':
        return <AddIcon/>

      case 'upload':
        return <UploadIcon/>

      case 'delete':
        return <DeletedIcon/>

      case 'backup':
        return <BackupIcon/>

      case 'setting':
        return <SettingIcon/>

      default:
        return null
    }
  }

  render () {
    return (
      <button
        styleName='button'
        className={s[this.props.className]}
        disabled={this.props.disabled}
      >
        {this.icon()}
        <div styleName='title'>
          <span>{this.props.title}</span>
        </div>
      </button>
    )
  }
}

ButtonMenu.defaultProps = {
  icon: 'add',
  position: 'default'
}
