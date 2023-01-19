const fs = require('fs')
const reader = require('readline').createInterface({
  input: process.stdin,
})
const fileInputConsole = () =>
  console.log('コンポーネント名を入力して下さい 拡張子は除いて下さい')
const selectConsole = () =>
  console.log(`
  1. common
  2. screen
  3. layout
  `)

let componentName = ''
// 1 -> atomsに変換する関数
const codeToAtomic = (code) => {
  switch (code) {
    case '1':
      return 'common'
    case '2':
      return 'screen'
    case '3':
      return 'layout'
  }
}
fileInputConsole()
//標準入力待機
reader.on('line', (line) => {
  if (!componentName) {
    if (!line) return fileInputConsole()
    line = line[0].toLocaleUpperCase() + line.slice(1) //1文字目 大文字に

    componentName = line
    return selectConsole()
  }

  const dir = codeToAtomic(line)
  if (dir) {
    startCreateFile(dir)
    return reader.close()
  }
  selectConsole()
})
const startCreateFile = (atomic) => {
  const path = require('path')
  const targetPath = path.resolve(
    __dirname,
    `../src/components/${atomic}/${componentName}`
  )
  fs.mkdir(targetPath, async (err) => {
    if (err) return console.log(err)
    await Promise.all([
      createComponent(atomic, targetPath),
      createIndex(atomic, targetPath),
      createScss(targetPath),
      createTypes(targetPath),
      atomic === 'common' && createStories(targetPath),
    ]).catch((err) => {
      console.error(err)
      return err
    })
    require('./updateCommonIndex')()
  })
}
const createIndex = (atomic, targetPath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      targetPath + '/index.ts',
      `export { default as ${componentName} } from './${componentName}'
`,
      (err) => {
        if (err) return reject(err)
        console.log('index.tsを作成しました')
        resolve()
      }
    )
  })
}
const createScss = (targetPath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${targetPath}/${componentName}.module.scss`,
      `.root {
}
`,
      (err) => {
        if (err) return reject(err)
        console.log(`${componentName}.module.scssを作成しました`)
        resolve()
      }
    )
  })
}
const createTypes = (targetPath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${targetPath}/${componentName}.types.ts`,
      `export type ${componentName}Props = {}
`,
      (err) => {
        if (err) return reject(err)
        console.log(`${componentName}.types.tsを作成しました`)
        resolve()
      }
    )
  })
}
const createComponent = (atomic, targetPath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${targetPath}/${componentName}.tsx`,
      `import React from 'react'

import styles from './${componentName}.module.scss'
import { ${componentName}Props } from './${componentName}.types'

const ${componentName}: React.FC<${componentName}Props> = () => {
  return <div className={styles.root}></div>
}
export default ${componentName}
`,
      (err) => {
        if (err) reject(err)
        console.log(`${componentName}.tsxを作成しました`)
        resolve()
      }
    )
  })
}
const createStories = (targetPath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${targetPath}/${componentName}.stories.tsx`,
      `import ${componentName} from './${componentName}'

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'

export default {
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>

export const Default: ComponentStoryObj<typeof ${componentName}> = {
  args: {},
  storyName: 'Default',
}
`,
      (err) => {
        if (err) return reject(err)
        resolve()
      }
    )
  })
}
