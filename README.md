# Jensei - Doctor Appointment Management System

A modern, professional healthcare appointment management platform built with React and Tailwind CSS for Jensei.

🌐 **Live Demo**: [www.doctorneed.netlify.app](https://www.doctorneed.netlify.app/)

## Features

- 🏥 **Doctor Dashboard** - Comprehensive analytics with patient appointments, revenue tracking, and real-time alerts
- 📅 **Appointment Management** - View and manage all patient appointments with status indicators
- 📊 **Analytics & Charts** - Visual representation of appointment trends and patient statistics
- 👤 **Doctor Profile** - Complete doctor information with ratings, reviews, and specializations
- 🗓️ **Schedule Management** - Calendar view with time slot configuration and availability settings
- ✏️ **Profile Editing** - Easy profile updates with progress tracking
- 🔐 **Secure Authentication** - Login and signup with OTP verification
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop devices

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 5
- **Deployment**: Netlify
- **Icons**: Heroicons (via SVG)

## Screenshots

### Dashboard
- Welcome message with remaining patient count
- Today's appointments with status indicators (pending, confirmed, cancelled)
- Revenue tracking (weekly & monthly)
- Analytics charts showing appointment trends
- Doctor profile card with overall ratings
- Real-time alerts for cancellations and new appointments

### Doctor Profile
- Complete doctor information with verification badge
- Education, registrations, and specializations
- Treatment list and patient visit reasons
- Patient reviews with detailed ratings
- Appointment booking calendar with time slots
- Location map and clinic photos

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

## Project Structure

```
Doctor-space/
├── public/
│   └── assets/
│       ├── logo.png          # Jensei company logo
│       ├── doctor.png         # Doctor profile image
│       └── doctor-neha.png    # Dr. Neha Khanna image
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx        # Responsive sidebar with mobile menu
│   │   ├── Logo.jsx
│   │   ├── Button.jsx
│   │   ├── FormInput.jsx
│   │   ├── StatCard.jsx
│   │   └── AppointmentCard.jsx
│   ├── pages/
│   │   ├── Login.jsx          # Login page with Google sign-in
│   │   ├── Signup.jsx         # Signup with OTP verification
│   │   ├── Dashboard.jsx      # Main dashboard (default page)
│   │   ├── Appointments.jsx   # Appointments list
│   │   ├── Schedule.jsx       # Schedule management
│   │   ├── DoctorProfile.jsx  # Doctor profile view
│   │   └── EditProfile.jsx    # Profile editing
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── netlify.toml
```

## Available Routes

- `/` - Dashboard (default home page)
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Doctor dashboard
- `/appointments` - Appointments list
- `/schedule` - Schedule management
- `/doctor-profile` - Doctor profile view
- `/edit-profile` - Edit profile

## Responsive Design

The application is fully responsive and optimized for:

- **Mobile** (< 640px): Hamburger menu, stacked layouts, touch-friendly buttons
- **Tablet** (640px - 1024px): Optimized spacing and 2-column grids
- **Desktop** (> 1024px): Full sidebar, 3-column layouts, all features visible

### Mobile Features
- Hamburger menu button for sidebar navigation
- Slide-in sidebar with smooth animations
- Overlay background when menu is open
- Touch-optimized buttons and spacing
- Responsive text sizes and images

## Key Features Breakdown

### Dashboard
- **Welcome Section**: Displays doctor name and remaining patient count
- **Today's Appointments**: List with patient details, phone numbers, and appointment times
- **Status Indicators**: Color-coded dots (yellow=pending, green=confirmed, red=cancelled)
- **Revenue Card**: Weekly and monthly revenue tracking
- **Analytics Chart**: Bar chart showing appointment trends with blue (appointments) and yellow (cancelled) bars
- **Patient Statistics**: Total patients and new patients count
- **Doctor Profile Card**: Overall rating, total patients, and detailed ratings breakdown
- **Alerts Section**: Real-time notifications for cancellations and new appointments

### Doctor Profile
- **Doctor Information**: Name, specialization, location, email, and fee
- **Verification Badge**: Blue checkmark for verified doctors
- **Social Links**: LinkedIn, Instagram, YouTube, and other platforms
- **About Section**: Detailed doctor biography
- **Education & Registrations**: Academic qualifications and medical council registrations
- **Specializations**: Tags for areas of expertise
- **Treatments**: List of available treatments
- **Patient Visit Reasons**: Pie chart showing top visit reasons
- **Reviews**: Patient reviews with ratings and feedback
- **Booking Calendar**: Interactive calendar with time slot selection
- **Location & Photos**: Clinic location and photo gallery

## Deployment

The application is deployed on Netlify and automatically deploys when changes are pushed to the main branch.

**Live URL**: [www.doctorneed.netlify.app](https://www.doctorneed.netlify.app/)

### Deploy Your Own

1. Fork this repository
2. Sign up on [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings (auto-detected from netlify.toml):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## Environment Variables

No environment variables are required for the basic setup. If you need to add API endpoints or other configurations, create a `.env` file:

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

Live Demo: [www.doctorneed.netlify.app](https://www.doctorneed.netlify.app/)

---

Made with ❤️ for Jensei
