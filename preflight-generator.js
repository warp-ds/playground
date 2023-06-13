import { createGenerator } from '@unocss/core'
import { presetWarp } from '@warp-ds/uno'
import * as lightning from 'lightningcss'
import fs from 'node:fs'

const uno = createGenerator({ presets: [presetWarp()] })
const { css: _css } = await uno.generate('')
const css = _css + `* {
  font-size: 16px;
  line-height: 24px;}`

const { code } = lightning.transform({
  code: Buffer.from(css),
  minify: true,
  targets: { safari: (15 << 16) }
})

const minifiedPreflight = code.toString()

fs.writeFileSync('./public/preflight.css', minifiedPreflight, 'utf-8')
