# Year Progress Tracker

Year Progress Tracker is a simple and visually engaging web app that shows how much of the current year has passed. The app calculates the progress of the year in real-time and presents it through a dynamic progress bar.

---

## 🚀 **Features**
- 📅 **Live Year Progress**: Displays the exact day of the year and the percentage completed so far.
- 🏞 **Dynamic Progress Bar**: A sleek, responsive progress bar that updates daily.
- 📊 **Accurate Calculations**: Handles both leap and common years using Day.js plugins.
- 🖼 **Modern Design**: Clean UI with beautiful SVG assets for a professional feel.
-  **Links to Projects**:
  - [Year Progress](https://year-progresss.web.app/): Learn more about the creator’s work.
  - [Quirk Symbols](https://quirksymbols.web.app/): Funny website.
  - [GitHub Repository](https://github.com/Mykola-Dzoban/year-progress): Explore and contribute to the source code.

---


## 🛠️ **Technologies Used**
- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Styling**: Tailwind CSS for responsive and modern design.
- **Date Handling**: [Day.js](https://day.js.org/) with plugins:
  - `dayOfYear`
  - `isLeapYear`

---

## 📦 **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/Mykola-Dzoban/year-progress.git
   cd year-progress
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at [http://localhost:3000](http://localhost:3000).

---

## ⚙️ **How It Works**
1. **Leap Year Detection**: Uses Day.js's `isLeapYear` plugin to determine if the year has 365 or 366 days.
2. **Current Day Calculation**: Calculates the current day of the year with the `dayOfYear` plugin.
3. **Progress Bar Rendering**:
   - **Filled Section**: Proportional to the percentage of the year completed.
   - **Empty Section**: Covers the remaining percentage of the year.

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to fork the repo and submit pull requests. For major changes, please open an issue first to discuss your ideas.

---

## 📄 **License**
This project is licensed under the [MIT License](./LICENSE).

---

## 🌐 **Live Demo**
Check out the live version here: [Year Progress Tracker](https://year-progresss.web.app/)

---

## ✨ **Credits**
- **Icons**: Original SVG assets.
- **Developed by**: [Mykola Dzoban](https://github.com/Mykola-Dzoban).

Enjoy tracking your year's progress! 🎉