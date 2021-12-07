const fs = require('fs')
const readTxt = fs.readFileSync(`./data.txt`, `utf-8`)
console.log(readTxt)
const readTxt2 = fs.readFileSync(`./data2.txt`,'utf-8')
console.log(readTxt2)
const writeTxt = `${readTxt}  ${readTxt2},`
const newone = fs.writeFileSync(`./total.txt`, writeTxt)
console.log(newone)




