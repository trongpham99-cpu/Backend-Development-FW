const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/course-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a Course schema and model
const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
});
const Course = mongoose.model('Course', courseSchema);

// Connect to Redis
const client = redis.createClient();
client.get = util.promisify(client.get);

// Routes
app.get('/courses', async (req, res) => {
    const cachedCourses = await client.get('courses');
    if (cachedCourses) {
        return res.send(JSON.parse(cachedCourses));
    }

    const courses = await Course.find();
    client.set('courses', JSON.stringify(courses), 'EX', 60);
    res.send(courses);
});

app.post('/courses', async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    client.del('courses'); // Invalidate the cache
    res.send(course);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
