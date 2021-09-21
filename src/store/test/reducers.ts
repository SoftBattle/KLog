import { TEST_Action } from "./actions" 
export const test = (state = 0, action: TEST_Action) => {
  switch(action.type) {
    case 'ADD_COUNT': return state + 1
    case 'SUB_COUNT': return (state - 1) < 0 ? state : (state - 1)
    default: return state
  }
}