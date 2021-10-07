import { combineReducers } from "redux"
import { test } from "./test/reducers"
import { userStore } from "./user/reducers"
import { searchStore } from "./search/reducers"

const rootReducer = combineReducers({
  test,
  userStore,
  searchStore
})

export default rootReducer