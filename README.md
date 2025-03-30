# Somg FinDash - Financial Portfolio Dashboard (Hackathon Submission)

[![React](https://img.shields.io/badge/React-19+-blue?logo=react&logoColor=white)](https://reactjs.org/) [![Vite](https://img.shields.io/badge/Vite-%5E5.0.0-blueviolet?logo=vite&logoColor=white)](https://vitejs.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-cyan?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-+-purple?logo=framer&logoColor=white)](https://www.framer.com/motion/) [![Recharts](https://img.shields.io/badge/Recharts-charts-orange)](https://recharts.org/)

This is the **second submission** for the **Frontend UI Hackathon 2025 (March 30th Deadline)**, focusing on the prompt: "Build a financial portfolio dashboard with stock performance charts."

It features a multi-page interface inspired by modern financial dashboards, built with React, Vite, and Tailwind CSS, incorporating smooth animations and a responsive dark theme.

**Submission Link:** [Your Live Deployment URL - e.g., Vercel, Netlify] **<-- IMPORTANT: ADD YOUR LINK HERE!**

---

## ✨ Features

* **Multi-Page Layout:** Uses React Router DOM with a persistent sidebar for navigation.
* **Responsive Design:** Sidebar collapses into a hamburger-triggered off-canvas menu on smaller screens.
* **Dashboard Page:**
    * Greeting and overview message.
    * Scrolling carousel for key Indian market indices.
    * Link to detailed Indices page.
    * Multiple information cards inspired by Groww UI:
        * Your Investments Summary (Current Value, Total Returns) with link to portfolio details.
        * Most Traded Stocks (Mock Data).
        * Products & Tools section.
        * Top Gainers (Mock Data).
        * ETFs by "Somg" (Mock Data).
        * Watchlist Placeholder.
        * Stocks in News feed with link to full news page.
        * Global Indices display.
* **Stocks Portfolio Page:**
    * Detailed table view of stock and ETF holdings (Quantity, Avg Price, Current Price, Investment, Current Value, P&L).
    * Donut chart visualizing stock/ETF allocation percentages.
* **Mutual Funds Portfolio Page:**
    * Card view for mutual fund holdings (Invested, Current Value, P&L).
    * Donut chart visualizing mutual fund allocation percentages.
* **Indices Page:**
    * Tabbed interface to switch between detailed tables for Indian Indices and Global Indices (Last Traded, Day Change, High, Low, Open, Prev. Close).
* **News Page:**
    * Expanded view of market news items.
* **Styling & Animations:**
    * Custom dark theme with gradients and accent colors.
    * "Frosted glass" effect on cards (`backdrop-blur`).
    * Page transitions and staggered list/card animations using Framer Motion.
    * Subtle hover effects and micro-interactions.

* **(Note:** An interactive candlestick chart component was initially planned but removed due to unresolved library compatibility issues with React 19 close to the deadline.)*

---

## 🌐 Demo Website

Check out the live demo of the Financial Portfolio Dashboard here: [Somg FinDash Live Demo](https://financial-portfolio-dashboard.onrender.com/)

Explore the features and experience the interactive UI firsthand!


---

## 🛠️ Tech Stack

* **Framework:** React (v19+)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v3 (with Forms, Scrollbar plugins)
* **Animations:** Framer Motion
* **Routing:** React Router DOM v6
* **Charting:** Recharts (for Donut charts)
* **Icons:** React Icons

---

## 🚀 Getting Started

**Prerequisites:**

* Node.js (v18 or later recommended)
* npm or yarn

**Installation & Setup:**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Somshubhro07/Financial-Portfolio-Dashboard]
    cd [Financial-Portfolio-Dashboard]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

**Running the Development Server:**

1.  **Start the Vite dev server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified).

---

## ✨ Author

* **Name:** Somshubhro Guha
* **Email:** [Somshubhro Gmail](guha.somshubhro07@gmail.com)
* **GitHub:** [Somshubhro Github](https://github.com/Somshubhro07/)
* **LinkedIn:** [Somshubhro Linkedin](https://www.linkedin.com/in/somshubhro-guha-46b892272/)

---