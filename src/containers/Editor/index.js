import React, { PureComponent } from 'react'
import MonacoEditor from 'react-monaco-editor'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class Editor extends PureComponent {
  handler = () => {

  }

  render () {
    return (
      <div styleName='editor'>
        <MonacoEditor
          language="json"
          theme="vs"
          value={this.props.code}
          options={{
            selectOnLineNumbers: true
          }}
          onChange={::this.handler}
        />
      </div>
    )
  }
}

Editor.defaultProps = {
  code: `{
  "name": "value" 
}`
}
