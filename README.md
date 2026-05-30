<<<<<<< HEAD
# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
=======
# Astro Frontend Web Application

This repository contains the frontend web application built using the **Astro** framework.
## 🚀 Architecture Overview

The application utilizes Astro's server-side capabilities to securely fetch data from a backend API (built with .NET) before rendering pages for the client.

- **Frontend Framework:** Astro (Node 22 LTS runtime)
- **Deployment Target:** Azure App Service (Linux Web App)
- **CI/CD Pipeline:** GitHub Actions
- **Data Source:** External .NET REST API

---

## ⚙️ Environment Variables Configuration

To ensure the application builds and runs correctly, environment variables must be configured in two separate environments: **GitHub Actions** (for compile-time builds) and **Azure Portal** (for runtime server execution).

### 1. GitHub Actions (Compile-Time Variables)

Go to **Repository Settings > Secrets and variables > Actions > Variables** and add:
- `FRONTEND_URL`: The staging URL of this App Service (e.g., `https://your-frontend-url.net`).
- `API_URL`: The staging URL of the backend .NET API (e.g., `https://your-api-url.azurewebsites.net`).

### 2. Azure App Service (Runtime Variables)
Go to **Azure Portal > App Service > Environment Variables** and configure:
- `HOST`: `0.0.0.0` 
- `PORT`: `8080`
- `API_URL`: The URL of the backend .NET API *(Allows server-side components like `PostList.astro` to make live fetch requests).*

---
**Author:** [William Verde](https://github.com/willvrd)
>>>>>>> staging
