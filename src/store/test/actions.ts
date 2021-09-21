export interface TEST_Action {
  type: 'ADD_COUNT' | 'SUB_COUNT'
}

export const addCount = (): TEST_Action => {
  return {
    type: 'ADD_COUNT'
  }
}

export const subCount = (): TEST_Action => {
  return {
    type: 'SUB_COUNT'
  }
}
