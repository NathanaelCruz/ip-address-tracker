
interface IlocationState {
  city: string,
  country: string,
  lat: number,
  lng: number,
  postalCode: string,
  region: string,
  timezone: string
}

export interface ISearchLocale {
  ip: string,
  isp: string,
  location: IlocationState
}

export interface IPayload {
  type: string,
  payload: {} | {
    value: ISearchLocale
  }
}

export interface IInformationLabel {
  label: string,
  information: string
}

export interface ICenterMap {
  lat: number,
  lng: number
}

export type IPropsMapCustom = {
  center: ICenterMap,
  zoom: number
}