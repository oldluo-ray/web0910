let data = 'lsdata'
function getData() {
  return data
}

function bar() {
  console.log('bar----')
}

exports.getData = getData
exports.bar = bar
