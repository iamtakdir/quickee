// fork testing purpose i have made it ...

const search = require('./search')
const data = require('./data')

const result = new search(data).name('faisal')
// const result = new search(data).roll('34')
console.log(result);
