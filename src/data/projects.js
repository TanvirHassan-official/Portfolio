export const projects = {
  careloom: {
    slug: 'careloom',
    title: 'Careloom',
    emoji: '/assets/careloom.jpeg',
    subtitle: 'Doctor Appointment Management System',
    num: '01 / 03',
    desc: 'Careloom is a modern healthcare appointment platform designed to simplify doctor discovery and scheduling. Users browse specialists, view profiles, securely book appointments, and manage everything through a personalised dashboard with a clean, responsive interface.',
    shortDesc:
      'A modern doctor appointment management platform with multi-specialty doctor discovery, secure booking, JWT auth, and a full user dashboard.',
    live: 'https://careloom-client.vercel.app',
    github: 'https://github.com/TanvirHassan-official/Careloom-client',
    stack: [
      'Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS',
      'DaisyUI', 'Better Auth', 'JWT', 'React Icons', 'React Toastify',
    ],
    role: 'Frontend Lead + Full-Stack Integration',
    type: 'Full-Stack Web Application',
    status: 'Live & Deployed',
    year: '2025',
    features: [
      'Multi-specialty doctor browsing and search',
      'Appointment booking with date and time selection',
      'JWT-secured authentication with Google OAuth',
      'Protected dashboard with full booking management',
      'User profile update — name and photo',
      'Toast notifications and loading states',
      'Custom 404 page',
      'Fully responsive across all devices',
    ],
    challenges: [
      {
        title: 'Authentication Flow',
        desc: 'Implementing JWT and Google OAuth simultaneously with Better Auth required careful session management and redirect logic to handle protected routes seamlessly.',
      },
      {
        title: 'Real-time UI Updates',
        desc: 'Ensuring the dashboard reflected booking changes — update and delete — instantly without a page refresh required optimistic updates and careful state management.',
      },
      {
        title: 'Responsive Dashboard Layout',
        desc: 'The multi-column dashboard with sidebar, bookings table, and profile sections needed careful CSS Grid design to remain usable on mobile devices.',
      },
    ],
    improvements: [
      'Add doctor availability calendar with time-slot selection',
      'Implement real-time notifications via WebSockets',
      'Add payment gateway integration for premium bookings',
      'Admin panel for managing doctors and appointments',
      'Rating and review system for doctors post-appointment',
    ],
  },

  skillsphere: {
    slug: 'skillsphere',
    title: 'SkillSphere',
    emoji: '/assets/skillsphere.jpeg',
    subtitle: 'Online Learning Platform',
    num: '02 / 03',
    desc: 'SkillSphere is a polished online learning platform where users discover and explore skill-based courses across multiple categories. It features smooth animations, full authentication, search and filtering, and a personalised profile system — all built with Next.js and MongoDB.',
    shortDesc:
      'An interactive online learning platform with course exploration, secure authentication, search and filtering, and smooth animations throughout.',
    live: 'https://skillsphere-rosy.vercel.app',
    github: 'https://github.com/TanvirHassan-official/SkillSphere',
    stack: [
      'Next.js', 'MongoDB', 'Tailwind CSS', 'DaisyUI',
      'BetterAuth', 'Animate.css', 'React Icons', 'React Toastify',
    ],
    role: 'Full-Stack Developer',
    type: 'Web Application',
    status: 'Live & Deployed',
    year: '2025',
    features: [
      'Course listing across Web Dev, UI/UX, Marketing, and more',
      'Real-time search by course title with dynamic filtering',
      'Email and password plus Google authentication',
      'Protected course details with redirect-after-login',
      'User profile view and update functionality',
      'Smooth animations using Animate.css',
      'Toast notifications for all user actions',
      'Fully responsive across mobile, tablet, and desktop',
    ],
    challenges: [
      {
        title: 'Protected Route with Redirect',
        desc: 'Implementing redirect-to-requested-page after login required careful URL parameter handling and session state management in the Next.js App Router.',
      },
      {
        title: 'Search Performance',
        desc: 'Making search fast and responsive without noticeable lag while filtering through all courses required careful state optimisation and debouncing strategy.',
      },
      {
        title: 'Auth State Persistence',
        desc: 'Maintaining auth state across navigations with BetterAuth while preventing a flash of unauthenticated content needed proper loading state handling throughout.',
      },
    ],
    improvements: [
      'Add video course player with progress tracking',
      'Implement course enrollment and completion certificates',
      'Add instructor dashboard for course creation',
      'Introduce a recommendation engine based on user history',
      'Build a review and rating system for each course',
    ],
  },

  keenkeeper: {
    slug: 'keenkeeper',
    title: 'KeenKeeper',
    emoji: '/assets/keenkeeper.jpeg',
    subtitle: 'Friendship Relationship Management App',
    num: '03 / 03',
    desc: 'KeenKeeper is a unique friendship management web application that helps users maintain meaningful relationships. Track interactions, log communication timelines, and visualise friendship analytics with interactive pie charts — ensuring you never lose touch with people who matter most.',
    shortDesc:
      'A friendship management app to track interactions, log communication timelines, and visualise analytics with interactive Recharts pie charts.',
    live: 'https://keenkeeper-gold.vercel.app',
    github: 'https://github.com/TanvirHassan-official/Keenkeeper_',
    stack: [
      'Next.js', 'React.js', 'Tailwind CSS', 'DaisyUI',
      'Recharts', 'React Icons', 'React Toastify', 'JSON',
    ],
    role: 'Full-Stack Developer / UI Designer',
    type: 'Frontend Web Application',
    status: 'Live & Deployed',
    year: '2025',
    features: [
      'Dynamic friend cards loaded from JSON data',
      'Quick check-in interactions: Call, Text, Video',
      'Timeline tracking with date-stamped entries',
      'Filter timeline by interaction type',
      'Recharts pie chart analytics dashboard',
      'Toast notifications for all interactions',
      'Loading spinner during data fetching',
      'Custom 404 error page',
    ],
    challenges: [
      {
        title: 'Recharts Integration',
        desc: 'Customising Recharts pie charts to match the dark theme while remaining responsive and interactive required a deep dive into the Recharts API and custom rendering techniques.',
      },
      {
        title: 'Timeline State Management',
        desc: 'Managing the interaction timeline so new log entries persist across component re-renders without a backend required thoughtful React state architecture and careful prop design.',
      },
      {
        title: 'Filter Logic',
        desc: 'Building the timeline filter to work across multiple interaction types simultaneously while keeping the UI responsive and intuitive was a satisfying state management challenge.',
      },
    ],
    improvements: [
      'Add backend with user accounts and persistent data storage',
      'Implement birthday reminders and follow-up notifications',
      'Add a friendship health score based on interaction frequency',
      'Build an import feature from phone contacts',
      'Export and sharing functionality for friendship reports',
    ],
  },
};

export const projectsList = Object.values(projects);
