function genOk(data) {
  return {
    stat: 'ok',
    data
  }
}

function genErr(errType, msg) {
  return {
    stat: errType || 'err',
    msg
  }
}

module.exports = {
  genOk,
  genErr
}