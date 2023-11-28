import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Basic from './Basic'

const Formhook = () => {
  return (
    <div>
         <select>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <Basic />
    </div>
  )
}

export default Formhook