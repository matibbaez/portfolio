import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import icon from 'astro-icon'

import expressiveCode from 'astro-expressive-code'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
import rehypeDocument from 'rehype-document'

import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

function rehypeDemoteH1AndStripTitle() {
  return (tree: any) => {
    const walk = (node: any, parent: any | null, indexInParent: number | null) => {
      if (!node) return
      const isElement = node.type === 'element'
      if (isElement) {
        if (node.tagName === 'title') {
          if (parent && Array.isArray(parent.children) && indexInParent !== null && indexInParent > -1) {
            parent.children.splice(indexInParent, 1)
            return
          }
        }
        if (node.tagName === 'h1') {
          node.tagName = 'h2'
        }
      }
      if (Array.isArray(node.children)) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          walk(node.children[i], node, i)
        }
      }
    }
    walk(tree, null, null)
  }
}

export default defineConfig({
  site: 'https://portfolio-pied-chi-42.vercel.app/',

  integrations: [expressiveCode({
    themes: ['catppuccin-latte', 'ayu-dark'],
    plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    useDarkModeMediaQuery: true,
    defaultProps: {
      wrap: true,
      collapseStyle: 'collapsible-auto',
      overridesByLang: {
        'ansi,bat,bash,batch,cmd,console,powershell,ps,ps1,psd1,psm1,sh,shell,shellscript,shellsession,text,zsh':
          {
            showLineNumbers: true,
          },
      },
    },
  }), mdx(), react(), icon()],

  vite: {
    plugins: [tailwindcss() as any],
    optimizeDeps: {
      exclude: ["satori", "satori-html"],
      include: [
        "react",
        "react-dom",
        "clsx",
        "framer-motion",
        "lucide-react",
        "lodash.debounce",
        "@radix-ui/react-icons",
        "@radix-ui/react-avatar",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot"
      ]
    },    
  },

  server: {
    port: 3000,
    host: true,
  },

  devToolbar: {
    enabled: false,
  },

  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeDocument,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          ariaLabel: 'External link'
        },
      ],
      rehypeDemoteH1AndStripTitle,
      rehypeHeadingIds,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'catppuccin-latte',
            dark: 'ayu-dark',
          },
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkEmoji, remarkSectionize],
  },

  // 👇 ACÁ ESTÁ EL CAMBIO 👇
  adapter: vercel()
})