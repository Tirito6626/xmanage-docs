import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
export default {


  useNextSeoProps() {
    return {
      titleTemplate: '%s - XManage'
    }
  },

  /* Embed part */
  head: (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="XManage Documentation" />
    </>
  ),

  /* Logo */
  logo: (
    <> <img src="https://raw.githubusercontent.com/Tirito6626/xmanage-docs/main/assets/images/xmanage.png" alt="XManage" style={{ width: '50px', height: 'auto' }} /> </>
  ),

  /* GitHub button */
  project: {
    link: 'https://github.com/Tirito6626/xmanage-binaries',
  },

  /* Discord button */
  chat: {
    link: 'https://discord.gg/udp5y8uq',
  },

  /* GitHub stuff */
  docsRepositoryBase: 'https://github.com/Tirito6626/xmanage-docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/Tirito6626/xmanage-binaries" target="_blank">
          Made with 🧡 by Tirito
        </a>
        .
      </span>
      )
    }
}

// by Tirito and Geo
// export default
