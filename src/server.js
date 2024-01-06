const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000', // Zastąp swoim pochodzeniem aplikacji React
    credentials: true,
}));


app.post('/google-auth', (req, res) => {
    // Handle Google authentication on the server side
    // You can use a library like passport.js for a more comprehensive solution
    res.json({ success: true, message: 'Authentication successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
