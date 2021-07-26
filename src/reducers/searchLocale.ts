import { SEARCH_LOCALE } from "../constants/searchLocaleConstant";
import { IPayload, ISearchLocale } from "../types/searchLocaleTypes"

const INITIAL_STATE: ISearchLocale = {
  ip: '',
  isp: '',
  location: {
    city: '',
    country: '',
    lat: -23.531385099999998,
    lng: -46.3338134,
    postalCode: '',
    region: '',
    timezone: ''
  }
}

const searchLocaleReducer = (state = INITIAL_STATE, value: IPayload) => {
  switch (value.type) {
    case SEARCH_LOCALE.SEARCH:
      return {
        ...value.payload
      }
    case SEARCH_LOCALE.RESET:
      return {
        ...INITIAL_STATE
      }
    default:
      return state
  }
}

export default searchLocaleReducer