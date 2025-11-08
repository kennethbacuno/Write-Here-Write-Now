# 📝 Write Here Write Now

**Write Here Write Now** is an online note-taking and task management web application designed for creativity, productivity, and personalization. It lets users write, organize, and manage their ideas through a beautifully designed interface that goes beyond simple note-taking — combining **to-do lists, reminders, customizable themes, and secure folders** into one immersive experience.

---

## ✨ Features

- 🗒️ **Smart Notes** — Create, edit, and customize notes with font styles, colors, and formatting options.
- ✅ **To-Do Lists with Reminders** — Add tasks, set due dates, and get notified when it’s time to act.
- 🗂️ **Shelves (Custom Folders)** — Organize notes into user-defined shelves with optional password protection.
- 📎 **Attachments Support** — Upload files and link them to notes.
- 🧩 **Personalization** — Choose different notepad themes and layouts for a more immersive writing experience.
- 🧾 **Export Options** — Export notes as PDF for offline use or sharing.
- ☁️ **Cloud Sync (planned)** — Seamless data syncing across devices.
- 🪄 **Search & Tagging (planned)** — Quickly find notes or tasks with smart filtering and tagging.

---

## 🧠 Vision

The goal of _Write Here Write Now_ is to provide an all-in-one digital workspace where users can freely write, plan, and reflect — with an interface that feels both **intuitive and inspiring**.  
This project is built to explore and demonstrate **modern full-stack development practices** using React, TypeScript, and Node.js.

---

## 🧩 Tech Stack

### Frontend

- ⚛️ React + Vite
- 🧠 TypeScript
- 🎨 Tailwind CSS

### Backend

- 🟢 Node.js + Express.js
- 🍃 MongoDB (Mongoose ORM)

---

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/write-here-write-now.git
   cd write-here-write-now
   ```

2. **Install dependencies**

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. **Create environment files**

   - Create a `.env` file inside the `/server` folder with:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
   - (Optional) Add any frontend `.env` settings as needed.

4. **Run the app**

   ```bash
   # Run backend
   cd server
   npm run dev

   # Run frontend (in another terminal)
   cd client
   npm run dev
   ```

5. Open your browser at:
   ```
   http://localhost:5173
   ```

---

## 🧰 Project Structure

```
write-here-write-now/
│
├── client/             # React-Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── styles/
│   └── ...
│
├── server/             # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.ts
│
└── README.md
```

---

## 📅 Roadmap

- [ ] Note sharing via link or collaboration
- [ ] Drag-and-drop folder organization
- [ ] Voice notes or speech-to-text support
- [ ] Cross-device sync
- [ ] Dark mode customization
- [ ] Mobile-friendly PWA version

---

## 🤝 Contributing

This is a personal project, but feedback and ideas are always welcome!  
If you’d like to contribute, please fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Write Here Write Now** is developed and maintained by [Your Name].

> “Where ideas take shape — one note at a time.”
