# TFORART Media Company Website

![tforart-main](https://github.com/user-attachments/assets/1bef90cd-1ea4-4d0d-adb6-90d1379169ac)



Official website for TFORART - a professional media and communications company.

## Introduction

The TFORART website is designed to showcase the company's information, business activities, display our portfolio, and create a channel for potential collaboration with clients. This project is built with modern frontend technology combined with cloud-based backend solutions.

## Technologies Used

### Frontend

- React 18
- TypeScript
- Vite (for fast development and building)
- React Router DOM for navigation
- Tailwind CSS v3 with animations
- Framer Motion for advanced animations
- Embla Carousel & React Responsive Carousel for sliders
- DND Kit for drag-and-drop functionality
- Radix UI components (Dialog, Tabs, Popover, etc.)
- Shadcn UI component library
- Tanstack React Query for data fetching
- React Hook Form with Zod validation
- React Typed for typing effects
- NProgress for page transition loading indicators
- React Hot Toast for notifications
- Lucide React for icons
- Class Variance Authority & CLSX for styling utilities
- Date-fns for date manipulation

### Backend & Services

- Firebase v11 (Authentication, Firestore, Storage)
- EmailJS for contact form handling

### Development Tools

- Vite for frontend tooling
- ESLint v9 with React plugins for code quality
- TypeScript v5 for type safety
- Autoprefixer & PostCSS for CSS processing

## Key Features

- **Home:** General introduction to TFORART company
- **About:** Detailed information about the company's history, vision, and mission
- **Services:** List of media and communication services offered by the company
- **Portfolio:** Collection of featured projects and products
- **Contact:** Contact information and collaboration request form with EmailJS integration
- **Login/Register:** User authentication system with Firebase
- **Content Management:** Admin panel for website content updates
- **Image Optimization:** Automatic image compression using browser-image-compression
- **Drag & Drop Interface:** Intuitive content management with DND Kit
- **Responsive Design:** Fully responsive layout for all device sizes
- **Interactive UI:** Animated components with Framer Motion

## Installation

### Requirements

- Node.js (v16.0.0 or higher recommended)
- npm or yarn

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/your-username/tforart-website.git
cd tforart-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a .env file in the root directory and add environment variables:

```
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

4. Run the application in development mode

```bash
npm run dev
# or
yarn dev
```

5. Build for production

```bash
npm run build
# or
yarn build
```

6. Preview production build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
tforart-website/
├── public/
│   ├── favicon.ico
│   ├── images/
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   │   ├── firebase/
│   │   ├── schemas/
│   │   └── utils/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── .env
├── .gitignore
├── index.html
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Deployment

The project can be deployed on various hosting platforms:

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to your Firebase account
firebase login

# Initialize Firebase project
firebase init hosting

# Build the application
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

### Netlify/Vercel

1. Connect your GitHub repository to Netlify or Vercel
2. Configure the environment variables in the platform dashboard
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Deploy the application

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is distributed under the MIT License. See the `LICENSE` file for more information.

## Contact

TFORART COMPANY LIMITED - [tforartprod@gmail.com](mailto:tforartprod@gmail.com)

Website: [https://tforart.vn](https://tforart.vn)

Developer: [https://www.facebook.com/nguyen.tung.1001/](https://www.facebook.com/nguyen.tung.1001/)
