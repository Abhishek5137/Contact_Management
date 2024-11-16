// src/components/Dashboard.jsx
import React from 'react';
import { Button } from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';

function Dashboard({ children, onAddContact }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar menu */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-xl font-bold mb-6 text-teal-500">Erino CRM</h1>
        <nav className="flex flex-col gap-4">
          <button className="text-left hover:bg-gray-700 px-3 py-2 rounded">Dashboard</button>
          <button className="text-left hover:bg-gray-700 px-3 py-2 rounded bg-blue-400">Contact Management</button>
          <button className="text-left hover:bg-gray-700 px-3 py-2 rounded">Profile</button>
          <button className="text-left hover:bg-gray-700 px-3 py-2 rounded">Settings</button>
          {/* Add other menu items as needed */}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Contact Management</h2>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
            onClick={onAddContact}
          >
            New Contact
          </Button>
        </header>
        {children}
      </main>
    </div>
  );
}

export default Dashboard;
