import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 5001;

app.use(express.json());

//Connect to Mongoose(DB Connection)
mongoose.connect('mongodb://localhost:27017/myApp')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//Model
const User = mongoose.model('User', userSchema);

//CREATE User post API
app.post('/users', async (req, res) => {
    const users = new User(req.body);
    const saved = await users.save();
    res.json(saved);
});

//Read
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

//Read by ID
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

//Update
app.put('/users/:id', async (req, res) => {
    const updated = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

//Delete
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
})

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});