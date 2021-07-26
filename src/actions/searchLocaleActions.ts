import { SEARCH_LOCALE } from "../constants/searchLocaleConstant";
import { ISearchLocale } from "../types/searchLocaleTypes";

export const resetLocale = () => ({
  type: SEARCH_LOCALE.RESET,
  payload: {}
})

export const setLocal = (data: ISearchLocale) => ({
  type: SEARCH_LOCALE.SEARCH,
  payload: data
})
