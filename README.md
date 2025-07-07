# 📝 ToDo App with Firebase

A simple and functional ToDo list web application built using **HTML**, **CSS**, **JavaScript**, and **Firebase Realtime Database**. This project uses Firebase via the `<script>` CDN method and demonstrates CRUD operations in a clean and responsive interface.

---


## 🛠️ Built With

| Technology      | Purpose                                 |
|----------------|------------------------------------------|
| `HTML5`         | Markup structure                        |
| `CSS3`          | Styling and layout                      |
| `JavaScript (ES6)` | Logic and interactivity                |
| `Firebase`      | Backend service (Realtime Database)     |

---

## 🔧 Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Store and retrieve tasks from Firebase
- ✅ Fully responsive layout

---

## 🔐 Firebase Integration (via CDN)

Firebase was integrated using the traditional `<script>` method. This app uses:

- Firebase App SDK (`v8.x`)
- Firebase Realtime Database
- Firebase SDK via CDN (not modular)

```html
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
