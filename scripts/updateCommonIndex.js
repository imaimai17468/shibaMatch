const fs = require('fs')
const path = require('path')

const main = () => {
  const commonDir = path.resolve(__dirname, `../src/components/common`)
  const writeCode = fs
    .readdirSync(commonDir)
    .filter((path) => {
      return !path.includes('.')
    })
    .sort()
    .map((path) => {
      return `export { ${path} } from './${path}'`
    })
    .join('\n')
    .concat('\n')

  fs.writeFile(`${commonDir}/index.ts`, writeCode, (err) => {
    if (err) {
      console.error('index.tsのアップデートに失敗しました。')
      console.error(err)
      return
    }
    console.log('index.tsを更新しました。')
  })
}
module.exports = main
if (process.argv[2] === 'exec') {
  main()
}
