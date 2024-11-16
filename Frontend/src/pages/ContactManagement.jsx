
import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import { getContacts } from '../api/contactApi';
import { Snackbar, Alert } from '@mui/material';

function ContactManagement() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Buffering state

  const refreshContacts = async () => {
    setIsLoading(true); // Start buffering
    try {
      const response = await getContacts();
      setContacts(response.data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setIsLoading(false); // End buffering
    }
  };

  const showMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 3 seconds
  };

  useEffect(() => {
    refreshContacts();
  }, []);

  const openFormForEdit = (contact) => {
    setContactToEdit(contact);
    setFormOpen(true);
  };

  const closeForm = () => {
    setContactToEdit(null);
    setFormOpen(false);
  };

  return (
    <Dashboard onAddContact={() => setFormOpen(true)}>
      <ContactTable
        contacts={contacts}
        onEditContact={openFormForEdit}
        refreshContacts={refreshContacts}
        showMessage={showMessage} // Pass message handler
        isLoading={isLoading} // Pass loading state
      />
      <ContactForm
        open={isFormOpen}
        onClose={closeForm}
        contactToEdit={contactToEdit}
        refreshContacts={refreshContacts}
        showMessage={showMessage} // Pass message handler
      />
      {successMessage && (
        <Snackbar open autoHideDuration={3000}>
          <Alert severity="success">{successMessage}</Alert>
        </Snackbar>
      )}
    </Dashboard>
  );
}

export default ContactManagement;
