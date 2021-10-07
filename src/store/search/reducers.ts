import { SEARCH_Action, SearchStore } from './actions'

export const searchStore = (state = {
  value: '',
  type: 'post'
}, action: SEARCH_Action) => {
  switch(action.type) {
    case 'SEARCH_CHANGE':
      return action.data
    case 'VALUE_CHANGE':
      return {
        ...state,
        value: action.data
      }
    case 'TYPE_CHANGE':
      return {
        ...state,
        type: action.data
      }
    default:
      return state
  }
}