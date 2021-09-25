import { combineReducers } from "redux"
import { test } from "./test/reducers"
import { userStore } from "./user/reducers"

const rootReducer = combineReducers({
  test,
  userStore
})

export default rootReducer