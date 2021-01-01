function getRandomUrl(amount) {
  const data = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const dataArray = data.split('')
  let result = ''
  for (let index = dataArray.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1))
      ;[dataArray[index], dataArray[randomIndex]] = [dataArray[randomIndex], dataArray[index]]
  }
  result = dataArray.slice(0, amount).join('')
  return result
}

module.exports = getRandomUrl