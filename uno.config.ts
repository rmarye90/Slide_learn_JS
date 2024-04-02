// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: {
        'quote': 'rounded-sm p-1.5 text-sm font-serif bg-#323232 border-l-4 border-#0ea5e9 size-w-160', 
    },
    theme: {
      colors: {
        'title-color': '#e11d48',
        'span': {
            'primary':'#7A78F3',
            'secondary':'#434268',
            'accent':'#9272A8',
        },
        'status': {
            'success':'#22ce55',
            'info':'#3b82f6',
            'warning':'#f59e0b',
            'danger':'#ef4444',
        }
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })