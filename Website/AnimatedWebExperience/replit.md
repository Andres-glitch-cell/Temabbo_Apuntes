# Ultra Mega Animado Portfolio

## Overview

This is a full-stack animated portfolio application built as a modern web experience featuring extensive animations, 3D elements, and interactive components. The application is built using React/TypeScript for the frontend and Express.js for the backend, with a PostgreSQL database using Drizzle ORM for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animation Libraries**: 
  - GSAP (GreenSock) for complex animations and scroll triggers
  - Three.js for 3D graphics
  - Particles.js for particle effects
  - Lottie for SVG animations
  - Swiper for carousel components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **Primary Database**: PostgreSQL (configured via Neon serverless)
- **ORM**: Drizzle ORM with Zod validation
- **Session Storage**: PostgreSQL-backed sessions
- **Development Storage**: In-memory storage fallback for development

## Key Components

### Frontend Components
1. **Custom Cursor**: Interactive cursor with following animation
2. **Loading Screen**: Animated loading sequence
3. **Scroll Progress**: Visual progress indicator
4. **Particle Background**: Interactive particle system
5. **Floating Elements**: Parallax animated background elements
6. **Navigation**: Smooth scrolling navigation with glass morphism
7. **Hero Section**: Main landing section with GSAP animations
8. **About Section**: Information cards with hover effects
9. **Portfolio Section**: 3D carousel showcase
10. **Skills Section**: Animated progress bars and timeline
11. **Contact Section**: Contact form with animated counters

### Backend Components
1. **Express Server**: Main application server with middleware
2. **Route Handler**: API route registration system
3. **Storage Interface**: Abstracted data access layer
4. **Vite Integration**: Development server with HMR support

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Animation & UI Libraries
- GSAP with ScrollTrigger and TextPlugin for advanced animations
- Three.js for 3D graphics and WebGL rendering
- Particles.js for interactive particle systems
- Lottie Player for vector animations
- Swiper for touch-enabled carousels

### UI Framework
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Font Awesome for additional icons

### Backend Dependencies
- Drizzle ORM for type-safe database operations
- Neon serverless for PostgreSQL hosting
- Connect-pg-simple for session management
- Express middleware for request handling

### Development Tools
- TypeScript for type safety
- ESBuild for production bundling
- Vite for development server and HMR
- PostCSS with Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Asset Optimization**: Static assets are optimized and bundled

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express server
- **Database**: PostgreSQL via DATABASE_URL environment variable

### Hosting Requirements
- Node.js 20+ runtime
- PostgreSQL database
- Port 5000 for HTTP traffic (mapped to port 80 externally)
- Environment variables for database connection

### Deployment Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Database schema updates

## Changelog
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.