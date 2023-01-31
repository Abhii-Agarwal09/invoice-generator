import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to invoice generator' });
});

app.get('/invoice', (req, res) => {
  // Return all invoices
  res.json({ success: true, message: 'All invoices', data: null });
});

app.post('/invoice', (req, res) => {
  // Create new invoice and return
  res.json({ success: true, message: 'Invoice generated', data: null });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
