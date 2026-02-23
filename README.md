# MediCare - Doctor Appointment Booking System

A modern, responsive healthcare appointment booking platform built with React and Tailwind CSS.

## Features

- 🏥 Doctor Profile Management
- 📅 Appointment Scheduling
- 📊 Analytics Dashboard
- 👤 User Authentication
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

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

### Method 1: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Method 2: Using Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## Project Structure

```
Doctor-space/
├── public/
│   └── assets/
│       ├── logo.png
│       └── doctor (Neha).png
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Logo.jsx
│   │   ├── Button.jsx
│   │   ├── FormInput.jsx
│   │   ├── StatCard.jsx
│   │   └── AppointmentCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Appointments.jsx
│   │   ├── Schedule.jsx
│   │   ├── DoctorProfile.jsx
│   │   ├── Doctors.jsx
│   │   ├── Booking.jsx
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

- `/` - Home page
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Doctor dashboard
- `/appointments` - Appointments list
- `/schedule` - Schedule management
- `/doctors` - Find doctors
- `/doctor-profile` - Doctor profile view
- `/booking` - Book appointment
- `/edit-profile` - Edit profile

## Environment Variables

Create a `.env` file in the root directory if needed:

```env
VITE_API_URL=your_api_url_here
```

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
