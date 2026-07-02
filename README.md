# 🔗 ZipLink

A modern full-stack URL shortening platform built with **Next.js**, **MongoDB**, and **Tailwind CSS**. ZipLink allows users to create custom short URLs, generate QR codes, track click analytics, manage links through a dashboard, and set expiration dates.

---

## 🚀 Live Demo

🌐 **Website:** https://zip-link-kaustav2.vercel.app/

---

## ✨ Features

- 🔗 Shorten long URLs
- ✍️ Custom short aliases
- 📱 QR code generation
- ⬇️ Download QR code
- 📋 Copy short URL to clipboard
- 📊 Click analytics
- 📈 Dashboard to manage links
- 🔍 Search links
- 🗑️ Delete links
- ⏰ Link expiry support
- 📱 Responsive UI
- ⚡ Fast Next.js App Router architecture

---

## 📸 Screenshots

### Home Page

<img width="1898" height="846" alt="image" src="https://github.com/user-attachments/assets/a7cf1f3f-c6e9-4cf3-9d2f-f049933965d4" />


---

### URL Shortener

<img width="1158" height="771" alt="image" src="https://github.com/user-attachments/assets/649b3fea-89a4-448d-9367-d75572163a6b" />


<img width="597" height="782" alt="image" src="https://github.com/user-attachments/assets/1da7e105-809e-4c7d-8b11-c777c8220d41" />

---

### Dashboard

<img width="1896" height="496" alt="image" src="https://github.com/user-attachments/assets/82f1dd3e-7595-488f-a697-79e76734a299" />


---

## 🛠️ Tech Stack

### Frontend

- Next.js 16
- React
- Tailwind CSS

### Backend

- Next.js API Routes
- MongoDB Atlas

### Libraries

- QRCode
- MongoDB Driver

### Deployment

- Vercel

---

## 📂 Project Structure

```
ZipLink/
│
├── app/
│   ├── api/
│   │   ├── dashboard/
│   │   ├── delete/
│   │   ├── generate/
│   │   ├── geturl/
│   │   └── qr/
│   │
│   ├── dashboard/
│   ├── shorten/
│   ├── about/
│   ├── [shorturl]/
│   ├── layout.js
│   └── page.js
│
├── components/
│   └── Navbar.js
│
├── lib/
│   └── mongodb.js
│
├── public/
│
└── package.json
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ZipLink.git
```

Move into the project

```bash
cd ZipLink
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

---

## 📊 Database Schema

```javascript
{
    url: String,
    shorturl: String,
    clicks: Number,
    createdAt: Date,
    lastVisited: Date,
    expiresAt: Date
}
```

---

## 🔄 How It Works

### Creating a Short URL

1. Enter a long URL.
2. (Optional) Enter a custom alias.
3. Select an expiry date (optional).
4. Click **Generate**.
5. Receive:
   - Short URL
   - QR Code
   - Copy Link option
   - Download QR option

---

### Visiting a Short URL

When a short URL is opened:

- Finds the original URL.
- Checks whether the link has expired.
- Increments the click count.
- Updates the last visited timestamp.
- Redirects to the original URL.

---

## 📈 Dashboard

The dashboard allows users to:

- View all shortened URLs
- Search links
- Monitor click counts
- View creation date
- View last visited date
- View expiry status
- Delete links

---

## 🎯 Future Improvements

- User Authentication
- Password Protected Links
- Custom Domains
- Advanced Analytics
- Link Editing
- REST API
- Team Collaboration

---

## 📚 What I Learned

During the development of ZipLink, I gained hands-on experience with:

- Next.js App Router
- Dynamic Routing
- React Hooks
- MongoDB CRUD Operations
- REST API Development
- QR Code Generation
- Analytics Tracking
- Responsive UI Design
- Tailwind CSS
- Git & GitHub

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Kaustav Mondal**

GitHub:
https://github.com/KaustavJu27

LinkedIn:
www.linkedin.com/in/kaustav-mondal2005



---

⭐ If you found this project useful, consider giving it a star.
