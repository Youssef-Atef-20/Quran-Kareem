# Quran Kareem | القرآن الكريم

> A modern web application for reading and listening to the Holy Quran with a clean and comfortable interface.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-quran--kareem--ya--21.vercel.app-2563eb?style=for-the-badge&logo=vercel)](https://quran-kareem-ya-21.vercel.app/)

---

## 📖 Description

**Quran Kareem** (القرآن الكريم) is a beautifully designed, modern web application that provides a clean, distraction-free experience for reading and listening to the Holy Quran online. It allows users to navigate seamlessly between all 114 Surahs, track their reading progress, and listen to recitations — all within a fast, responsive, and lightweight single-page application that works perfectly on any device.

---

## Features

- **📖 114 Surahs** — Full text of the Holy Quran with clear Arabic typography for easy reading.
- **🔊 Audio Recitation** — Listen to high-quality Quran recitation for each Surah directly from the browser.
- **📍 Auto-Save Progress** — Automatically bookmarks your last read position so you can pick up exactly where you left off.
- **🔄 Smooth Navigation** — Quick and seamless transitions between different Surahs without page reloads.
- **🌙 Dark UI Theme** — A carefully designed dark reading interface optimized for eye comfort during long reading sessions.
- **📱 Fully Responsive** — Perfectly scaled and optimized for all screen sizes, from mobile phones to large desktop monitors.
- **⚡ Fast Performance** — Built with Vite and React for lightning-fast rendering and minimal load times.

---

## ⚙️ How It Works

1. **On page load**, the user is presented with a clean homepage listing all 114 Surahs of the Quran.
2. **Selecting a Surah** smoothly transitions the user to a dedicated reading page.
3. **The reading interface** displays the verses with optimal spacing and clear typography to ensure the best reading experience.
4. **The audio player** allows users to play, pause, and control the recitation of the current Surah directly from the page.
5. **Progress tracking** happens automatically in the background, saving the current Surah so the user can return to it later.
6. **Navigation controls** at the top/bottom of the page allow for easy movement to the next or previous Surah.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React** | Core library for building the interactive user interface |
| **TypeScript** | Ensuring type safety, fewer bugs, and better code maintainability |
| **Vite** | Lightning-fast development server and production build tool |
| **React Router** | Handling seamless navigation between the homepage and Surah reading pages |
| **Context API** | Managing global application state (like the last read Surah) |
| **Tailwind CSS** | Rapid UI styling, dark mode configuration, and responsive layouts |
| **Vercel** | Fast, edge-network hosting and automated deployment |

> Built with modern web technologies focusing on performance, clean code, and a seamless user experience.

---

## 🚀 Live Demo

🔗 **[https://quran-kareem-ya-21.vercel.app/](https://quran-kareem-ya-21.vercel.app/)**

---

## 💻 Running Locally

To run this project on your local machine, follow these simple steps:

    # 1. Clone the repository
    git clone https://github.com/Youssef-Atef-20/Quran-Kareem.git

    # 2. Navigate into the project folder
    cd Quran-Kareem

    # 3. Install dependencies
    npm install

    # 4. Run the development server
    npm run dev

    # 5. Build the project for production (optional)
    npm run build

    # 6. Preview the production build (optional)
    npm run preview

---

## 📁 Project Structure

    Quran-Kareem/
    │
    ├── public/                           # Static assets & Search Engine files
    │   ├── cover.png                     # Open Graph preview image
    │   ├── sitemap.xml                   # XML sitemap for indexing
    │   ├── robots.txt                    # Search engine crawling rules
    │   └── google-verification.html      # Google Search Console verification
    │
    ├── src/                              # Main application source code
    │   ├── components/                   # Reusable UI components (Navbar, Player, etc.)
    │   ├── context/                      # Global state management
    │   ├── pages/                        # Main route views (Home, Surah)
    │   ├── data/                         # Quran metadata and TypeScript interfaces
    │   └── main.tsx                      # App entry point
    │
    ├── index.html                        # Main HTML template
    ├── package.json                      # Dependencies and scripts
    ├── tailwind.config.js                # Tailwind CSS configuration
    └── README.md                         # Project documentation

---

## 🔍 SEO & Metadata Features

The project implements a comprehensive set of SEO and discoverability best practices to ensure high visibility:

### Primary SEO
- Descriptive title tags updated dynamically based on the current Surah.
- meta name="description" optimized for Quran reading and listening.
- meta name="robots" content="index, follow" to guide search engine crawlers.
- link rel="canonical" to prevent duplicate content issues.

### Open Graph (Social Sharing)
Full Open Graph tags for rich previews when sharing links on **WhatsApp**, **Facebook**, and **LinkedIn**:
- og:title, og:description, og:image (Cover image).
- og:type (website), og:url, og:site_name.

### Twitter Card
- twitter:card set to summary_large_image for large visual previews on Twitter/X.
- Optimized title, description, and image tags for social feeds.

### Sitemap & Robots
- sitemap.xml — Maps out all 114 Surah routes for efficient search engine indexing.
- robots.txt — Grants access to crawlers and points directly to the sitemap.

---

## 👤 Author

**Youssef Atef** Software Industry and Multimedia Student | Alexandria University  
🔗 [Github Profile](https://github.com/Youssef-Atef-20)
🔗 [Portfolio](https://youssef-atef-portfolio.vercel.app/)

---

## 📄 License

This project is open source. Feel free to use it, share it, and build upon it.