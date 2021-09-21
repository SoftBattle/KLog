import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addCount, subCount } from '../../store/test/actions'

const mapStateToProps = ({test}) => {
  return {count: test}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAdd: () => dispatch(addCount()),
  onSub: () => dispatch(subCount())
})

function Counter({count, onAdd, onSub}: {
  count: number
  onAdd: () => void
  onSub: () => void
}) {
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => onAdd()}>add</button>
      <button onClick={() => onSub()}>sub</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)