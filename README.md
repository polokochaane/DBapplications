# WASCO Water Billing Application

A full-stack web application for managing water billing, customers, payments, and admin tasks.

## Features
- Customer management (CRUD)
- Billing generation and tracking
- Payment processing
- Admin dashboard
- Responsive frontend

## Tech Stack
- **Backend:** Node.js + Express.js + PostgreSQL (two DBs: main + payments)
- **Frontend:** HTML5 + CSS + Vanilla JavaScript
- **Database:** PostgreSQL

## Quick Start
1. Backend setup:
   ```
   cd backend
   npm install
   # Configure DB in config/postgresDB.js and paymentDB.js
   node server.js
   ```
2. Frontend: Open `frontend/wasco_water_billing_app.html` in browser (connects to backend API).

## API Endpoints
- `/api/customers` - Customer routes
- `/api/billing` - Billing
- `/api/payments` - Payments
- `/api/admin` - Admin

## Project Structure
```
.
├── backend/     # Express server, routes, controllers, config
└── frontend/    # Static HTML/CSS/JS app
├── README.md
└── .gitignore
```

## Deployment
**Backend (API):** Render.com Web Service + Postgres (env vars)
**Frontend:** GitHub Pages (repo Settings → Pages → main branch root)

**Live system:** https://polokochaane.github.io/DBapplications/frontend/wasco_water_billing_app.html?api=YOUR_RENDER_URL

Replace YOUR_RENDER_URL with backend live URL.


License: MIT
