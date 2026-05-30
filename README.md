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
