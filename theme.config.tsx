import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {

  /* Announcement */
  banner: {
    key: '1x.0',
    text: (
      <a href="#">
         XManage v0.0.1 version.
      </a>
    )
  },

  /* Display the name */
  useNextSeoProps() {
    return {
      titleTemplate: 'XManage - %s'
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
    <> <img src="assets/images/xmanage.png" alt="XManage" style={{ width: '50px', height: 'auto' }} /> </>
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
  docsRepositoryBase: 'https://github.com/Tirito6626/xmanage-binaries',
  footer: {
    text: 'Credits to: ItzGeoYT',
  },
}

export default config
