mongoose=require('mongoose');

// Connect to MongoDB
mongoose.connect(MONGODB_URL, function (err) {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
        } else {
            console.log('Connected to MongoDB');
        }
});