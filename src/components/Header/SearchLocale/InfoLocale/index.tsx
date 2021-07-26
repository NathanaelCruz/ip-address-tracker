import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { IInformationLabel, ISearchLocale } from '../../../../types/searchLocaleTypes';
import * as Styles from './styles'

const InfoLocale: React.FC = () => {

  const locale = useSelector<RootState, ISearchLocale>((state) => state.reducerLocale)
  
  const verifyWhiteSpaces = (wordInfo: string) => {
    return wordInfo.replace(',', '').trim() === '' ? '--' : wordInfo
  }

  const formatLocation = ():string => {
    let location = `${locale.location.region}, ${locale.location.country} ${locale.location.postalCode}`

    return verifyWhiteSpaces(location)
  }

  const informationLabel: IInformationLabel[] = [
    {
      label: 'IP Address',
      information: verifyWhiteSpaces(locale.ip)
    },
    {
      label: 'Location',
      information: formatLocation()
    },
    {
      label: 'Timezone',
      information: verifyWhiteSpaces(locale.location.timezone)
    },
    {
      label: 'ISP',
      information: verifyWhiteSpaces(locale.isp)
    }
  ]

  return (
    <Styles.InfoLocale>

      {
        informationLabel.map(info => {
          return (
            <Styles.InformationWrapper key={info.label}>
              <h2>{info.label}</h2>
              <p>{info.information}</p>
            </Styles.InformationWrapper>
          )
        })
      }
    </Styles.InfoLocale>
  )
}

export default InfoLocale;