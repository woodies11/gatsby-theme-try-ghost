# gatsby-theme-try-ghost 
A Gatsby theme plugin for creating a blog from headless Ghost CMS. 

Turn your Ghost blog into a lightning fast static website. This Gatsby theme is a frontend replacement of the Ghost handlebars engine featuring the standard Casper 3 skin and functionality. All content is sourced from a headless Ghost CMS.

## Demo

Play with the [Demo](https://styxlab.gihub.io) in order to see what to expect.

## Features
- Casper v3 skin and functionality
- sticky navigation headers
- hover on author avatar
- styled 404 page
- SEO optimized
- composable and extensible

## Installing a new site

If you're creating a new site you should **not** use this plugin directly. Instead, use the starter which is based on this plugin and comes with added benefits such as suitable pre-configurations.

```bash
# With Gatsby CLI
gatsby new try-ghost https://github.com/styxlab/gatsby-starter-try-ghost 
```

```bash
# From Source
git clone https://github.com/styxlab/gatsby-starter-try-ghost.git
cd gatsby-starter-try-ghost
```

Then install dependencies

```bash
yarn
```

## Adding to existing site

If you want to add this blog theme to an existing site, then you can do so by directly adding and manually configuring it. 

1. Install the blog theme

```bash
# With Gatsby CLI
gatsby new gatsby-theme-try-ghost https://github.com/styxlab/gatsby-theme-try-ghost.git
```

```bash
# From Source
git clone https://github.com/styxlab/gatsby-theme-try-ghost.git
cd gatsby-theme-try-ghost
```

Then install dependencies

```bash
yarn
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-try-ghost`,
      options: {
        siteConfig: {
          siteUrl: `https://your-bog.com`,
          postsPerPage: 12,
          siteTitleMeta: `Gatsby Frontend powered by headless Ghost CMS`,
          siteDescriptionMeta: `Turn your Ghost blog into a lightning fast static website with Gatsby`, 
          shareImageWidth: 1000,
          shareImageHeight: 523,
          shortTitle: `Ghost`,
          siteIcon: `favicon.png`,
          backgroundColor: `#e9e9e9`,
          themeColor: `#15171A`,
        },
        ghostConfig: {
          "development": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fcfdb1e5ea5b472e2e5b92942",
          },
          "production": {
            "apiUrl": "https://your-bog.com",
            "contentApiKey": "9fcfdb1e5ea5b472e2e5b92942",
          },
        },
      },
    },
  ],
}
```

4. Update siteConfig

The most important fields to be changed are `siteUrl`, `siteTitleMeta` and `siteDescriptionMeta`. Update at least those to fit your configuration.

3. Replace Ghost Keys

Change the `apiUrl` value to the URL of your Ghost site. Next, update the `contentApiKey` value to a key associated with the Ghost site. A key can be provided by creating an integration within Ghost Admin. Navigate to Integrations and click "Add new integration". Name the integration appropriately and click create.

# Running

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.

&nbsp;


# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).
