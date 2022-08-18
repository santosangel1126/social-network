const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(prrogress.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
    useNewUrlParser: true,
    useUnifiedToplogy: true
});

// Use this to log mongo queries being excuted 
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Conected on localhost${PORT}`));