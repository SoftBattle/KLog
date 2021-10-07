export interface SearchStore {
  value: string
  type: 'user' | 'post'
}

export interface SEARCH_Action {
  type: 'VALUE_CHANGE' | 'TYPE_CHANGE' | "SEARCH_CHANGE"
  data: SearchStore | string
}

export const changeSearch = (data: SearchStore): SEARCH_Action => {
  return {
    type: 'SEARCH_CHANGE',
    data
  }
}

export const changeValue = (data: string): SEARCH_Action => {
  return {
    type: 'VALUE_CHANGE',
    data
  }
}

export const changeType = (data: string): SEARCH_Action => {
  return {
    type: 'TYPE_CHANGE',
    data
  }
}