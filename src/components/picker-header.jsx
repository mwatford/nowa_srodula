import React from "react"
import ReactDOM from 'react-dom'

const PickerHeader = ({children}) => {
  return ReactDOM.createPortal(<>
  {children}
  </>, document.getElementById('picker-header'))
}

export default PickerHeader
