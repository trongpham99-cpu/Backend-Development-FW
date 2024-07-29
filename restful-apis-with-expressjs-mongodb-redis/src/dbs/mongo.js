const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@clusterductrong.9p6xigl.mongodb.net/student-management?retryWrites=true&w=majority&appName=ClusterDucTrong'

const connectMongo = () => {
    mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectMongo();