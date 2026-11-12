<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/Bernard-Baah/bernardbaah.com-v2/main/src/images/logo.png" width="100" />
</div>

<h1 align="center">
  bernardbaah.com
</h1>

<p align="center">
  Personal portfolio website of <a href="https://www.bernardbaah.com" target="_blank">Bernard Buabeng Baah</a> — AWS Certified Cloud Practitioner & Data Center Technician. Built with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby 5</a> and React 18, hosted on <a href="https://aws.amazon.com/amplify/" target="_blank">AWS Amplify</a>.
</p>

<p align="center">
  Based on the original design by <a href="https://brittanychiang.com" target="_blank">Brittany Chiang</a> — used with attribution.
</p>

![demo](src/images/demo.png)

## v2 changes

This is a from-scratch repository replacing [`bernard-iteration1-portfolio`](https://github.com/Bernard-Baah/Bernard-iteration1-portfolio):

- Removed leftover template content (placeholder work history, sample projects and demo blog posts that shipped with the original template), along with the Archive and Pensieve blog features that only existed to render it.
- Upgraded Gatsby 3 → 5, React 17 → 18, and the full plugin set to their current majors.
- Dropped the dead Universal Analytics integration (Google sunset UA in July 2023). Analytics and Search Console verification are now opt-in through build-time environment variables (see below).
- Requires Node 18+ (`.nvmrc` pinned to 20).

## 🛠 Installation & Set Up

1. Install dependencies

   ```sh
   yarn install
   ```

2. Start the development server

   ```sh
   yarn develop
   ```

## 🚀 Building & Deploying

1. Generate a production build

   ```sh
   yarn build
   ```

2. Preview the production build locally

   ```sh
   yarn serve
   ```

## 🔧 Optional environment variables

Set these in the hosting provider's build settings. Both are off when unset.

| Variable                          | Purpose                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| `GATSBY_GA_MEASUREMENT_ID`        | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). Enables `gatsby-plugin-google-gtag`.     |
| `GATSBY_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token, rendered as a `google-site-verification` meta tag. |

## 🎨 Color Reference

| Color         | Hex                                                                |
| ------------- | ------------------------------------------------------------------ |
| Navy          | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy    | ![#112240](https://via.placeholder.com/10/112240?text=+) `#112240` |
| Lightest Navy | ![#233554](https://via.placeholder.com/10/233554?text=+) `#233554` |
| Green         | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

## 📄 License

This project is based on [brittanychiang.com v4](https://github.com/bchiang7/v4) by Brittany Chiang. Please give proper credit if you fork or use this code.
