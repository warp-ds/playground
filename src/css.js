import { inputHTML } from './url.js'
import { createGenerator } from '@unocss/core'
import { presetWarp } from '@warp-ds/uno/client'
import { presetDocs } from '@warp-ds/preset-docs'
import { formatCSS } from '@itsy/okay'

const uno = createGenerator({
  presets: [
    presetWarp(),
    presetDocs()
  ]
})

export const generateCSS = async () => {
  const { css } = await uno.generate(inputHTML.value, { minify: true })
  return { minifiedCSS: css, prettyCSS: formatCSS(css) }
}
