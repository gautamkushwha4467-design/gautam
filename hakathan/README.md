# CareerAI Platform - AI-Based Career Guidance Frontend

A modern, responsive web application built with **React**, **TypeScript**, and **Tailwind CSS** for an AI-based career guidance platform.

## 🎯 Features

### Core Pages
- **Landing Page** - Hero section with features overview
- **Authentication** - Login & Signup pages with gradient design
- **Onboarding** - 5-step multi-form user profiling
- **Dashboard** - Personalized career recommendations & skill analysis
- **Career Details** - In-depth career information with roadmap
- **Skill Gap Analysis** - Identify missing skills for target career
- **Learning Roadmap** - Track your learning progress
- **AI Chatbot** - Chat interface for career guidance
- **User Profile** - Manage personal information
- **Admin Panel** - Manage careers and job trends

### UI Components
- Responsive design (mobile, tablet, desktop)
- Card layouts with smooth shadows
- Progress bars and skill indicators
- Badges and chips for tagging
- Form inputs with validation
- Navigation bars and sidebars
- Modal dialogs and alerts
- Smooth animations and transitions

### Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Icons**: Lucide React
- **API Client**: Axios
- **Backend**: Express.js (Node.js)
- **Port**: Frontend (5173), Backend API (3001)

## 📂 Project Structure

```
career-guidance-platform/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Button.tsx       # Button component
│   │   ├── Common.tsx       # Card, Badge, ProgressBar, Avatar, Chip
│   │   └── Form.tsx         # Input, Select, TextArea, Checkbox
│   ├── pages/               # Page components
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── OnboardingPage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── CareerDetailPage.tsx
│   │   ├── SkillGapAnalysis.tsx
│   │   ├── LearningRoadmap.tsx
│   │   ├── ChatbotPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── AdminPanel.tsx
│   ├── utils/
│   │   └── mockData.ts      # Mock data and API utilities
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # React DOM render
│   └── index.css            # Global styles
├── server/
│   └── index.js             # Express.js backend server
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone the repository**
   ```bash
   cd career-guidance-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

### Running the Fullstack Application

To run both frontend and backend simultaneously:

```bash
npm run dev-fullstack
```

This runs:
- Frontend on `http://localhost:5173`
- Backend API on `http://localhost:3001`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## 🎨 Design System

### Colors
- **Primary**: #4F46E5 (Blue)
- **Secondary**: #7C3AED (Purple)
- **Success**: #10B981 (Green)
- **Warning**: #F59E0B (Orange)
- **Error**: #EF4444 (Red)
- **Light Background**: #F9FAFB

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body**: Inter (400-600 weight)

### Components Styling
- Rounded corners (8-16px)
- Soft shadows for depth
- Generous spacing and padding
- Hover effects on interactive elements
- Smooth transitions (200-400ms)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔐 Authentication

The app uses localStorage for session management:
- User data stored in `localStorage.user`
- Automatic logout available
- Protected routes check authentication state

## 📊 Mock Data

The application includes mock data for:
- Career recommendations (4 sample careers)
- Skills proficiency levels
- Learning modules with progress tracking
- Chat messages for the AI assistant

To connect to a real backend, update API calls in `src/utils/mockData.ts`.

## 🔄 API Endpoints (Backend)

### Authentication
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration

### Careers
- `GET /careers` - Get all careers
- `GET /careers/:id` - Get career details
- `POST /careers` - Add new career

### Users
- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update user profile

### Health
- `GET /health` - API health check

## 🔄 Available Scripts

```bash
# Start frontend development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start backend server only
npm run server

# Run fullstack (frontend + backend)
npm run dev-fullstack
```

## 🎓 Features Walkthrough

### 1. **Landing Page**
- Hero section with call-to-action buttons
- Feature cards highlighting platform benefits
- Footer with links

### 2. **Authentication**
- Gradient background design
- Form validation
- Social login button (UI only)
- Link between login and signup

### 3. **Onboarding**
- 5-step multi-form process
- Progress indicators
- Different input types (text, select, chips, radio)
- Summary before completion

### 4. **Dashboard**
- Welcome message with user name
- Recommended career cards
- Skill analysis with progress bars
- Trending careers section
- Sidebar navigation

### 5. **Career Details**
- Career overview and description
- Salary ranges
- Market demand indicators
- Learning roadmap with timeline
- Required skills

### 6. **Skill Gap Analysis**
- Split view: Skills you have vs. need
- Recommended learning phases
- Statistics and timelines

### 7. **Learning Roadmap**
- Module cards with progress
- Checklist items
- Completion status indicators
- Module unlock system

### 8. **Chatbot**
- Message input with send button
- Auto-scrolling conversation
- Typing indicator for AI responses
- Timestamp display

### 9. **Profile**
- User information display
- Edit mode for profile updates
- Skills and interests display
- Account settings

### 10. **Admin Panel**
- User and career statistics
- Career management
- Job trend updates
- Analytics dashboard

## 🛠️ Customization

### Adding New Pages
1. Create a new file in `src/pages/`
2. Add route in `App.tsx`
3. Import and use like other pages

### Creating New Components
1. Create component in `src/components/`
2. Export from component file
3. Import and use in pages

### Styling
- Use Tailwind CSS classes
- Custom CSS in `src/index.css` for global styles
- Component-specific styles using className prop

### Extending Types
Update `src/types/index.ts` with new interfaces

## 📝 Notes

- This is a frontend demonstration with mock data
- Authentication uses localStorage (not production-ready)
- Backend API is a basic Express server for demo purposes
- For production, integrate with real database and authentication service
- Consider adding:
  - Real database (MongoDB, PostgreSQL)
  - JWT authentication
  - File uploads for profile images
  - Real AI/ML recommendations
  - Payment processing
  - Email notifications

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Ready to Use

The application is fully functional with a polished UI and professional design. All pages are responsive, interactive, and ready for integration with a real backend.

Happy building! 🚀
