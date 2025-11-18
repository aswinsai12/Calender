# Calender
Butter Calendar
A clean, human‑friendly calendar that opens on the current month, highlights today, lets you switch months, and shows events from a simple JSON file. Overlapping events are handled with smart lane packing so nothing feels cluttered.

Why this exists
Needed a lightweight, elegant calendar without heavy UI frameworks.

Month grid built with CSS Grid, date math with dayjs, and events via a plain JSON list.

Designed to be easy to read, easy to change, and easy to ship.

Features
Current month by default with previous/next/today controls.

Today highlight and dimmed “outside month” days.

Static events from src/data/events.json with title, time, duration, color.

Overlap‑aware layout that places concurrent events side‑by‑side.

Vanilla CSS design tokens for a premium look without dependencies.

Quick start
Node 18+ recommended.

Clone and install:

git clone https://github.com/your-name/butter-calendar.git

cd butter-calendar

npm install

Develop:

npm run dev

Build:

npm run build

Preview production build:

npm run preview

Deploy
GitHub: push to a new repo (main branch).

Vercel: import the repo, set Build Command to npm run build and Output Directory to dist, then Deploy.

If you previously set a base path for GitHub Pages, remove it for Vercel deployments.

Project structure
index.html — Vite entry.

src/main.jsx — React bootstrap.

src/App.jsx — App shell.

src/index.css — Design tokens and calendar styles.

src/components/Calendar.jsx — Month grid and render loop.

src/components/MonthHeader.jsx — Month title + controls.

src/components/WeekdayHeader.jsx — Weekday strip.

src/components/DayCell.jsx — Day cell with event chips.

src/hooks/useMonthGrid.js — Month grid generator using dayjs.

src/utils/formatTime.js — “HH:mm → h:mm AM/PM”.

src/data/events.json — Static events.

Events format
Add or edit items in src/data/events.json:
[
{ "id": "ev-standup", "title": "Daily Standup", "date": "2025-11-18", "time": "10:00", "duration": 30, "color": "#2563eb" }
]

date: YYYY-MM-DD

time: HH:mm (24h)

duration: minutes

color: any CSS color

Styling approach
CSS variables for color, radius, shadow, and borders so you can retheme quickly.

Seven‑column CSS Grid with consistent spacing and borders for scannability.

Event “chips” with subtle shadows and lane classes for overlaps.

Commands you’ll use
Install: npm install

Dev server: npm run dev

Build: npm run build

Preview build: npm run preview

Push to GitHub
git init

git add .

git commit -m "initial: calendar app"

git branch -M main

git remote add origin https://github.com/your-name/butter-calendar.git

git push -u origin main

Deploy to Vercel
Create a new project from your GitHub repo.

Build Command: npm run build

Output Directory: dist

Click Deploy.

Future pushes to main auto‑deploy.

Customization tips
Colors: tweak :root tokens in src/index.css.

Cell height: adjust .cell min-height.

Event look: change .chip rules and add fonts/icons if desired.

Overlap behavior: modify lane calculation in DayCell.jsx if you want more than two side lanes.

Roadmap ideas
Click a day to view all events in a modal.

All‑day events row.

Week/day views with time slots.

Keyboard navigation and ARIA roles.

License
MIT. Use it in your projects, tweak it, ship it.

Credits
Date math powered by dayjs.

Layout patterns inspired by classic schedule grids.
