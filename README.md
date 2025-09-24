# Disha Jadhav - Portfolio Website

A Netflix-inspired portfolio website built with the MERN stack, showcasing projects and professional experience with a cinematic UI.

## 🚀 Features

- **Netflix-style UI** with dark theme and red accent colors
- **Project Showcase** with horizontal scrolling rows and hover effects
- **Visitor Tracking** with unique IP tracking and click analytics
- **Contact Form** with email integration via Nodemailer
- **Search Functionality** to filter projects by name, description, or tech stack
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Real-time Analytics** showing visitor count and project engagement

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Nodemailer** for email functionality
- **Express Rate Limiting** for API protection

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

## 📁 Project Structure

```
pw/
├── server/                 # Backend API
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── lib/           # Database connection
│   │   ├── data/          # Seed data
│   │   └── scripts/       # Database seeding
│   └── package.json
├── client/                # Frontend React app
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── sections/      # Page sections
│   │   ├── ui/           # UI components
│   │   └── main.tsx
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pw
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   **Server (.env)**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   CLIENT_ORIGIN=http://localhost:5173
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email
   SMTP_PASS=your-password
   SMTP_FROM="Portfolio <no-reply@example.com>"
   CONTACT_TO=jdisha424@gmail.com
   ```

   **Client (.env)**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. **Seed the database**
   ```bash
   cd server
   npm run seed
   ```

6. **Start the development servers**

   **Terminal 1 - Backend**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Frontend**
   ```bash
   cd client
   npm run dev
   ```

7. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📊 API Endpoints

### Visitors
- `POST /api/visitors/track` - Track visitor
- `GET /api/visitors/stats` - Get visitor statistics

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured project
- `POST /api/projects/upsert` - Upsert projects

### Clicks
- `POST /api/clicks` - Register project click
- `GET /api/clicks` - Get click statistics

### Contacts
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get contact messages

## 🎨 Customization

### Adding New Projects
1. Edit `server/src/data/projects.seed.json`
2. Run `npm run seed` in the server directory

### Styling
- Colors are defined in `client/tailwind.config.ts`
- Main styles in `client/src/index.css`
- Component styles use Tailwind classes

### Content
- Update personal information in:
  - `client/src/pages/AboutPage.tsx`
  - `client/src/ui/Navbar.tsx`
  - `client/src/ui/Footer.tsx`

## 🚀 Deployment

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with Node.js buildpack

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set environment variable: `VITE_API_URL=your-backend-url`

## 📱 Features Showcase

### Hero Section
- Auto-playing background video
- Featured project (PrepWise) highlight
- Technology stack tags
- Call-to-action buttons

### Project Rows
- Horizontal scrolling project cards
- Hover effects with scaling and shadow
- Technology stack display
- GitHub and live demo links
- Click tracking for analytics

### About Page
- Education details (VIT Bhopal)
- Professional experience (Heybase Inc.)
- Skills organized by category
- Certifications and achievements
- Resume download button

### Contact Form
- Functional contact form with validation
- Email integration via Nodemailer
- Contact information display
- Success/error feedback

## 🔧 Development

### Adding New Features
1. Create components in appropriate directories
2. Add routes in `client/src/main.tsx`
3. Create API endpoints in `server/src/routes/`
4. Add corresponding controllers and models

### Database Management
- Models are in `server/src/models/`
- Seed data in `server/src/data/`
- Run `npm run seed` to update data

## 📄 License

This project is for portfolio purposes. All rights reserved.

## 👤 Contact

**Disha Jadhav**
- Email: jdisha424@gmail.com
- LinkedIn: [disha-jadhav-5a5701250](https://www.linkedin.com/in/disha-jadhav-5a5701250/)
- GitHub: [disha1505](https://github.com/disha1505)
- Phone: +91 9039004000

---

Built with ❤️ using React, Node.js, and MongoDB
