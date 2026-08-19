# 🐾 PetLove

PetLove is a web application for people who want to find pets, explore pet-related listings, and connect with their owners. The application also allows registered users to manage their profile, add their own pets, save interesting listings to favorites, and keep track of viewed notices.

The project focuses on a clean and responsive user experience, reusable React components, API integration, authentication, and a structured frontend architecture.

## ✨ Features

### 🏠 Home

- Responsive landing page with a short introduction to the application
- Adaptive layout for mobile, tablet, and desktop devices
- Optimized images and responsive content

### 📰 News

- Browse news articles received from the backend
- Search news by keyword
- Server-side pagination
- Open the full article in a new browser tab

### 🐶 Pet Notices

- Browse available pet listings
- Search and filter notices
- Filter by:

  - category
  - gender
  - pet type
  - location
  - popularity
  - price

- Search locations using an autocomplete select
- Server-side pagination
- Add and remove notices from favorites
- View detailed information about a notice in a modal window

### 🤝 Our Friends

- Display partner organizations received from the backend
- Show company information, contacts, and working hours
- Clickable phone numbers, email addresses, and locations
- Open map locations in a new browser tab

### 🔐 Authentication

- User registration
- User login
- Client-side form validation
- Automatic authorization after successful registration/login
- Persistent authentication state
- Logout confirmation modal
- Protected routes for authenticated users

### 👤 User Profile

Authenticated users can:

- View and edit their personal information
- Update their avatar, name, email, and phone number
- Add pets to their profile
- Delete pets without reloading the page
- View favorite notices
- View previously viewed notices
- Remove notices from favorites
- Log out from the application

### 🐕 Add Pet

- Add a new pet to the user's profile
- Upload a pet image using an image URL
- Specify:

  - title
  - name
  - birthday
  - species
  - gender

- Form validation before sending data to the backend
- Redirect to the profile after successful submission

## 🛠 Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Redux**
- **Redux Persist**
- **Axios**

### Forms & Validation

- **React Hook Form**
- **Zod**
- **@hookform/resolvers**

### UI & UX

- **Tailwind CSS**
- **Radix UI**
- **React Select**
- **React Datepicker**
- **React Toastify**
- **React Paginate**

### Utilities & Development

- **date-fns**
- **ESLint**
- **Prettier**
- **Prettier Tailwind plugin**

## 🧩 Architecture

The frontend is organized using a **Feature-Sliced Design (FSD)** approach.

```text
src/
├── app/
│   └── application setup, routing, global configuration
│
├── entities/
│   └── business entities and reusable entity-level logic
│
├── features/
│   └── user actions and application features
│
├── pages/
│   └── application pages
│
├── shared/
│   └── reusable UI components, utilities and common logic
│
├── widget/
│   └── composed UI blocks built from multiple features/entities
│
├── App.tsx
├── main.tsx
└── index.css
```

This structure helps keep business logic, UI components, pages, and shared functionality separated and makes the application easier to maintain and extend.

## 🔄 API Integration

The application communicates with a REST API using **Axios**.

API integration is used for:

- authentication
- user profile management
- pets management
- notices
- favorites
- viewed notices
- news
- partner organizations
- filters and pagination

Requests and responses are handled on the client side, including loading states and backend errors.

## 🔒 Form Validation

Forms are validated on the client before sending data to the backend.

The project uses **React Hook Form** together with **Zod** for schema-based validation.

Validation is implemented for:

- registration
- login
- profile editing
- adding a pet

Invalid input is displayed directly to the user and prevents unnecessary API requests.

## 📄 Server-Side Pagination

Both the News and Notices pages use server-side pagination.

Instead of loading all available records at once, the frontend sends the current page and page size to the backend.

```text
User changes page
       ↓
Pagination component
       ↓
API request
       ↓
Backend returns requested data
       ↓
List is updated
```

The pagination component is reusable and supports:

- first page
- previous page
- next page
- last page
- direct page selection
- ellipsis for large page ranges
- disabled states when navigation is unavailable

## 🔍 Filtering & Search

The Notices page combines several filters into one search flow.

Users can filter notices by:

```text
Keyword
Category
Gender
Pet type
Location
Popularity
Price
```

Whenever a filter changes, the application requests updated data from the backend.

The search field is implemented as a reusable component and can be used across different pages.

## 🔐 Authentication Flow

The application separates public and private routes.

```text
                    ┌───────────────┐
                    │   Application │
                    └───────┬───────┘
                            │
              ┌─────────────┴─────────────┐
              ↓                           ↓
       Unauthenticated              Authenticated
              │                           │
      ┌───────┴───────┐           ┌───────┴────────┐
      │ Login/Register│           │ Profile        │
      │ News          │           │ Add Pet        │
      │ Notices       │           │ Favorites      │
      │ Friends       │           │ Viewed         │
      └───────────────┘           └────────────────┘
```

Authentication state is stored on the client and persisted between page reloads.

When a user logs out, the client state and persisted authentication data are cleared and the user is redirected to the Home page.

## 🪟 Modal System

The application uses reusable modal components for different user interactions.

Examples include:

- logout confirmation
- authentication attention modal
- detailed notice modal
- edit profile modal

Modals support common interaction patterns such as:

- close button
- backdrop click
- Escape key
- action buttons

## 📱 Responsive Design

The interface was implemented with responsive layouts for:

- **Mobile:** 320px+
- **Tablet:** 768px+
- **Desktop:** 1280px+

The layout adapts navigation, forms, cards, filters, modals, and content sections to different screen sizes.

The mobile and tablet versions also use a burger menu for application navigation.

## 🎨 UI & Accessibility

The project follows modern HTML5 semantics and responsive UI principles.

Additional attention was given to:

- semantic HTML
- reusable components
- keyboard interaction
- interactive states
- form error messages
- responsive images
- optimized static assets
- favicon
- SVG icons through a sprite

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd petlove
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.

## 📂 Main Pages

| Page         | Route       | Access  |
| ------------ | ----------- | ------- |
| Home         | `/home`     | Public  |
| News         | `/news`     | Public  |
| Notices      | `/notices`  | Public  |
| Our Friends  | `/friends`  | Public  |
| Login        | `/login`    | Guest   |
| Registration | `/register` | Guest   |
| Profile      | `/profile`  | Private |
| Add Pet      | `/add-pet`  | Private |

## 💡 What I Worked With

This project gave me practical experience with building a complete frontend application rather than isolated UI components.

The main areas I worked with include:

- building reusable React components
- structuring a project using FSD
- working with REST APIs
- authentication and protected routes
- global state management with Redux Toolkit
- persistent client state
- form handling and validation
- server-side pagination
- complex filtering
- reusable search components
- modal interactions
- responsive layouts
- API error handling
- loading states and notifications
- TypeScript in a real-world application

## 🔮 Possible Improvements

Some areas that could be improved or extended in the future:

- Add automated unit and integration tests
- Improve accessibility coverage
- Add more detailed loading skeletons
- Add end-to-end testing
- Improve caching and request optimization
- Add more advanced user interactions
- Extend the application with additional pet management features

## 👩‍💻 Author

**Karyna**

Frontend Developer focused on React, TypeScript and modern frontend development.

---

⭐ If you like the project, feel free to explore the repository and check out the implementation.
