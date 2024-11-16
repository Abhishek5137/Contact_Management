
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, CircularProgress } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { deleteContact } from '../api/contactApi';

function ContactTable({ contacts, onEditContact, refreshContacts, showMessage, isLoading }) {
  const handleDelete = async (id) => {
    if (isLoading) return; 
    try {
      await deleteContact(id);
      showMessage('Contact deleted successfully'); // success message
      refreshContacts(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      {isLoading && <CircularProgress style={{ margin: '20px auto', display: 'block' }} />}
      <Table>
      <TableHead className='bg-blue-100 '>
           <TableRow  >
             <TableCell > <span className='font-bold'>First Name</span></TableCell>
             <TableCell ><span className='font-bold'>Last Name</span></TableCell>
             <TableCell ><span className='font-bold'>Email</span></TableCell>
             <TableCell ><span className='font-bold'>Phone</span></TableCell>
             <TableCell ><span className='font-bold'>Company</span></TableCell>
             <TableCell ><span className='font-bold'>Job Title</span></TableCell>
             <TableCell ><span className='font-bold'>Actions</span></TableCell>
         </TableRow>
      </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => onEditContact(contact)} disabled={isLoading}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(contact._id)} disabled={isLoading}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactTable;
