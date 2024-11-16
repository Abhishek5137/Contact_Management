// backend/controllers/contactController.js
const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.addContact = async (req, res) => {
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  try {
    const newContact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ error: 'Contact not found' });
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
