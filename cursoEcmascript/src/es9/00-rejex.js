const regex = /(\s{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01')
console.table(matchers);