# Digital Wellness Hub


https://github.com/user-attachments/assets/d05b6180-a86a-4bcd-a673-576d6d12429c


A bilingual (English/Chinese) suite of web applications designed to promote digital wellness and mental health, based on findings from a co-authored research paper. This project translates academic research into practical, user-centric tools.

**[➡️ View the Live Demo Here](https://alouanemoad.github.io/Focus-Check/)**

---

## About The Project

This project is the practical application of a research paper on the psychological impacts of social media and AI. Our research, based on survey data from over 100 participants, informed the creation of three distinct, single-page applications built from scratch with Vanilla JavaScript to address issues like attention fragmentation, messaging anxiety, and digital addiction.

## Screenshots

| Landing Page | Digital Balance Quiz |
| :---: | :---: |
|<img width="1920" height="888" alt="loading" src="https://github.com/user-attachments/assets/4bbdd3c6-e988-48cd-933e-1a5b3c3e0db9" />|<img width="1897" height="890" alt="digital balance" src="https://github.com/user-attachments/assets/9da5cacb-eef3-4ebc-bdfb-64e0f5ba9290" />|
| **Focus Hub Timer** | **ReplyWell Simulator** |
|<img width="1920" height="887" alt="timer" src="https://github.com/user-attachments/assets/740adeab-91a6-4248-9637-e3f67309a070" />|<img width="1920" height="885" alt="replywell" src="https://github.com/user-attachments/assets/1db44017-a22c-4f30-9c82-43bd386b34c8" />|


---

## Features

The hub features a suite of three distinct tools, each in its own file:

#### 共通功能 (General Features)
* **🌐 Full Internationalization (i18n):** Seamless language switching between English and Chinese.
* **💾 Persistent State:** User's preferred language is saved in `localStorage` for future visits.
* **🎵 Audio Feedback:** Interactive elements provide a satisfying click sound.
* **📱 Responsive Design:** A mobile-first UI that works on all screen sizes.

#### 1. Digital Balance Quiz (`quiz.html`)
* **🧠 Adaptive Questions:** The quiz dynamically introduces follow-up questions based on user answers.
* **🔄 Randomized Pool:** Questions are randomly selected from a larger bank, making each assessment unique.
* **📊 Visual Results:** A custom-styled SVG gauge displays the final score for an intuitive understanding of the results.

#### 2. Focus Hub Timer (`timer.html`)
* **⏱️ Customizable Timer:** A Pomodoro-style timer where users can set a custom duration for focus sessions.
* **🔊 Ambient Audio:** An integrated audio player with background sound options (rain, beach, music) to help concentration.
* **🔔 Alarm Notification:** A subtle alarm sound signals the end of a timer session.

#### 3. ReplyWell Simulator (`replywell.html`)
* **💬 Scenario-Based Learning:** An interactive chat simulator with 10 real-world scenarios that teach users how to handle high-pressure messages.
* **🧠 Instant Feedback:** After choosing a reply, users get immediate feedback on the potential outcome of their communication style.
* **🔁 High Replayability:** Scenarios are shuffled each time the simulator starts.

---

## Tech Stack

This project was built from scratch using foundational web technologies without any external frameworks.
* **HTML5**
* **CSS3** (with Tailwind CSS via CDN for utility classes)
* **Vanilla JavaScript (ES6+)** for all application logic, state management, and dynamic DOM manipulation.
* **Font Awesome** (via CDN) for icons.

---

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    ```
2.  **Navigate to the directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Open `index.html` in your browser.**
    * No build steps or installations are required.
    * For the best experience, use a live server extension (like "Live Server" in VS Code).

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
