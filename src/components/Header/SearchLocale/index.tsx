import React from 'react';
import InfoLocale from './InfoLocale';
import SearchBar from './SearchBar';
import * as Styles from './styles'

const SearchLocale: React.FC = () => {
  return (
    <Styles.SearchLocale>
      <Styles.SearchLocaleTitle>
        IP Address Tracker
      </Styles.SearchLocaleTitle>
      <SearchBar />
      <InfoLocale />
    </Styles.SearchLocale>
  )
}

export default SearchLocale;