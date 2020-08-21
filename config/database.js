const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});