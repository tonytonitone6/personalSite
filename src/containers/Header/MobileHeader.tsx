import React, {FunctionComponent} from 'react'

import {NavBar, NavBarIcon} from './styles'

interface Iprops {
  active: boolean
  onToggle: () => void
}

const MobileHeader: FunctionComponent<Iprops> = ({
  active,
  onToggle,
}): JSX.Element => {
  return (
    <NavBar active={active} onClick={onToggle}>
      <NavBarIcon />
      <NavBarIcon />
      <NavBarIcon />
    </NavBar>
  )
}

export default MobileHeader
