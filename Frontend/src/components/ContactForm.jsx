
// src/components/ContactForm.jsx
import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress } from '@mui/material';
import { addContact, updateContact } from '../api/contactApi';

function ContactForm({ open, onClose, contactToEdit, refreshContacts, showMessage }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  });
  const [isSaving, setIsSaving] = useState(false); 

  useEffect(() => {
    if (contactToEdit) {
      setFormData(contactToEdit);
    } else {
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '' });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setIsSaving(true); // Start buffering
    try {
      if (contactToEdit) {
        await updateContact(contactToEdit._id, formData);
        showMessage('Contact updated successfully'); // success message
      } else {
        await addContact(formData);
        showMessage('Contact added successfully'); 
      }
      refreshContacts();
      onClose(); 
    } catch (error) {
      console.error('Failed to save contact:', error);
    } finally {
      // buffer end 
      setIsSaving(false); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className=' text-blue-600'>{contactToEdit ? 'Edit Contact' : 'Add New Contact'}</DialogTitle>
      <DialogContent>
        <form className="grid gap-4 m-2">
          <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth required />
          <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth required />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
          <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth required />
          <TextField label="Company" name="company" value={formData.company} onChange={handleChange} fullWidth />
          <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} fullWidth />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" disabled={isSaving}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={isSaving}>
          {isSaving ? <CircularProgress size={20} /> : contactToEdit ? 'Update' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactForm;
