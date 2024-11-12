 const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
 

 
const app = express();
const PORT = 5000;

app.use(cors());  
app.use(express.json());

mongoose.connect('mongodb+srv://younessudemy2022:8gMJJo1P0psoY3Kg@cluster0.2ykfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// app.use(cookieParser());

app.use('/api/signup', require('./routes/register'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/saveNote', require('./routes/note'));

app.use('/api/getNote', require('./routes/getNote')); 





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
