import React from 'react';
import * as Styles from './styles'
import Arrow from '../../../../assets/images/icon-arrow.svg'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetLocale, setLocal } from '../../../../actions/searchLocaleActions';
import { ISearchLocale } from '../../../../types/searchLocaleTypes';

const SearchBar: React.FC = () => {

  const [ipAddress, setIpAddress] = useState<string>('')
  const localeDispatch = useDispatch()

  // const maskIPAddress = (value: string) => {
  //   return value.replace(/\D/g, '')
  //               .replace(/(\d{1})(\d)/, '$1.$2')
  //               .replace(/(\d{1})(\d)/, '$1.$2')
  //               .replace(/(\d{1})(\d)/, '$1.$2')
  //               .replace(/(\d).(\d).(\d).(\d)(\d)/, '$1$2.$3.$4.$5')
  //               .replace(/(\d{2}).(\d).(\d).(\d)(\d)/, '$1$2.$3.$4.$5')
  //               .replace(/(\d{3}).(\d).(\d).(\d)(\d)/, '$1.$2$3.$4.$5')
  //               .replace(/(\d{3}).(\d{2}).(\d).(\d)(\d)/, '$1.$2$3.$4.$5')
  //               .replace(/(\d{3}).(\d{3}).(\d).(\d)(\d)/, '$1.$2.$3$4.$5')
  //               .replace(/(\d{3}).(\d{3}).(\d{2}).(\d)(\d)/, '$1.$2.$3$4.$5')
  //               .replace(/(\d{3}).(\d{3}).(\d{3}).(\d)(\d)/, '$1.$2.$3.$4$5')
  //               .replace(/(\d{3}).(\d{3}).(\d{3}).(\d{2})(\d)/, '$1.$2.$3.$4$5')
  //               .replace(/(\d{3}).(\d{3}).(\d{3}).(\d{3})(\d)/, '$1.$2.$3.$4')
  // }

  const handleIPAddress = useDebouncedCallback(
    (e) => {
      let valueInput: string = e.target.value
      e.target.value = valueInput

      setIpAddress(valueInput)
    },
    200
  )

  const setAndFormatedLocalization = (data: ISearchLocale) => {

    let SearchLocale: ISearchLocale = {
      ip: data.ip,
      isp: data.isp,
      location: {
        city: data.location.city,
        country: data.location.country,
        lat: data.location.lat,
        lng: data.location.lng,
        postalCode: data.location.postalCode,
        region: data.location.region,
        timezone: data.location.timezone
      }
    }

    localeDispatch(setLocal(SearchLocale))

  }

  const searchIPLocalization = () => {
    let uri = `https://geo.ipify.org/api/v1?apiKey=at_BA8KWlbWjMHprEQ3h2IVIDoAAowM3&ipAddress=${ipAddress}`
    fetch(uri)
        .then(resp => resp.json())
        .then(data => {
          if(data.code){
            if(data.code.message === undefined) {
              alert('Invalid IP, please try a valid one.')
            } else {
              alert(data.code.message)
            }
            return null
          }
          setAndFormatedLocalization(data)
        })
  }

  const searchLocalization = () => {
    if(ipAddress.length < 7 || ipAddress.length > 15 || ipAddress === ''){
      alert('Invalid IP, please try a valid one.')
      localeDispatch(resetLocale())
      return null
    }

    searchIPLocalization()

  }

  return (
    <Styles.SearchBar>
      <Styles.SearchInput type="text" placeholder="Search for any IP address or domain" onInput={(e) => handleIPAddress(e)} maxLength={15} />
      <Styles.SearchButton aria-label="Botão para pesquisa" onClick={() => searchLocalization()}>
        <img src={Arrow} alt="Seta para pesquisar" />
      </Styles.SearchButton>
    </Styles.SearchBar>
  )
}

export default SearchBar;