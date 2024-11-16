# Contact Management System

A full-stack application for managing customer contacts. It allows users to create, view, update, and delete (CRUD) contact information with a clean, intuitive interface.

## Features

- **Frontend**: Built with React, Material-UI (MUI), and Tailwind CSS for a responsive and modern UI
- **Backend**: Powered by Node.js, Express, and MongoDB (using MongoDB Atlas)
- **CRUD Operations**: Add, view, edit, and delete contacts
- **Success Messages**: Feedback after add, edit, or delete actions
- **Loading State**: Buffers during API calls to improve user experience

## Project Structure

### Backend
Framework: Node.js with Express  
Database: MongoDB (Atlas)

```
backend/
├── config/          # Database connection
├── controllers/     # Contact controller logic
├── models/         # MongoDB models
├── routes/         # API routes
├── app.js          # Express app configuration
└── server.js       # Server entry point
```

### Frontend
Framework: React with Vite  
UI Library: Material-UI (MUI) and Tailwind CSS

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── api/           # Axios API calls
│   ├── App.jsx        # Main App component
│   └── main.jsx       # React entry point
└── public/            # Static assets
```

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB Atlas account for the database

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend/ directory and add:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/contact_management?retryWrites=true&w=majority
PORT=5000
```
- Replace `<username>` and `<password>` with your MongoDB Atlas credentials
- Ensure the IP address or 0.0.0.0/0 is whitelisted in MongoDB Atlas

4. Start the backend server:
```bash
npm start
```

The backend will be accessible at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend server:
```bash
npm run dev
```

The frontend will be accessible at `http://localhost:5173`.

## API Endpoints

### Base URL
`http://localhost:5000/api`

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Fetch all contacts |
| POST | `/contacts` | Add a new contact |
| PUT | `/contacts/:id` | Update a contact by ID |
| DELETE | `/contacts/:id` | Delete a contact by ID |

## Key Functionalities

### Add Contact
1. Click the "New Contact" button in the dashboard
2. Fill in the form fields and click Save
3. A success message is displayed, and the new contact is added to the table

### Edit Contact
1. Click the Edit icon next to a contact
2. Update the fields in the form and click Update
3. A success message is displayed, and the contact information is updated

### Delete Contact
1. Click the Delete icon next to a contact
2. Confirm the action (optional implementation)
3. A success message is displayed, and the contact is removed from the table

## Technologies Used

### Frontend
- **React**: For building the user interface
- **Vite**: For fast builds and a modern development environment
- **Material-UI**: For pre-styled UI components
- **Tailwind CSS**: For custom responsive styling
- **Axios**: For API communication

### Backend
- **Node.js**: Backend runtime environment
- **Express**: Web framework for routing and middleware
- **MongoDB Atlas**: Cloud database for storing contact data
- **Mongoose**: ORM for managing MongoDB schemas and queries
