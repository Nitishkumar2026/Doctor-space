# Jensei - Doctor Appointment Management System

A modern, professional healthcare appointment management platform built with React and Tailwind CSS for Jensei.

## Features

- 🏥 Doctor Dashboard with Analytics
- 📅 Appointment Management
- 📊 Revenue & Analytics Charts
- 👤 Doctor Profile Management
- 🗓️ Schedule Management
- ✏️ Profile Editing
- 🔐 Secure Login & Signup

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Netlify Ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NitishKumar2026/Doctor-space.git
cd Doctor-space
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## Deployment to Netlify

### Method 1: Using Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Method 2: Using Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build your project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

## Project Structure

```
Doctor-space/
├── public/
│   └── assets/
│       ├── logo.png
│       └── doctor-neha.png
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Logo.jsx
│   │   ├── Button.jsx
│   │   ├── FormInput.jsx
│   │   ├── StatCard.jsx
│   │   └── AppointmentCard.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Appointments.jsx
│   │   ├── Schedule.jsx
│   │   ├── DoctorProfile.jsx
│   │   └── EditProfile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Available Routes

- `/` - Dashboard (default)
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Doctor dashboard
- `/appointments` - Appointments list
- `/schedule` - Schedule management
- `/doctor-profile` - Doctor profile view
- `/edit-profile` - Edit profile

## Features Overview

### Dashboard
- Welcome message with patient count
- Today's appointments list with status indicators
- Revenue tracking (weekly & monthly)
- Analytics charts with appointment trends
- Doctor profile card with ratings
- Real-time alerts for cancellations and new appointments

### Doctor Profile
- Complete doctor information
- Education and registrations
- Specializations and treatments
- Patient reviews and ratings
- Appointment booking calendar
- Location and photos

### Appointments
- List of all appointments
- Filter by status (pending, confirmed, cancelled)
- Patient contact information
- Quick actions for each appointment

### Schedule
- Calendar view
- Time slot management
- Day/time configuration
- Availability settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Nitish Kumar - [@NitishKumar2026](https://github.com/NitishKumar2026)

Project Link: [https://github.com/NitishKumar2026/Doctor-space](https://github.com/NitishKumar2026/Doctor-space)
