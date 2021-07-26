import React from 'react';
import SearchLocale from './SearchLocale';
import * as Styles from './styles'

const Header: React.FC = () => {
  return (
    <Styles.Header>
      <SearchLocale />
    </Styles.Header>
  )
}

export default Header;