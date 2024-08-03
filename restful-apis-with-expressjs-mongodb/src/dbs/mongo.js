const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb://localhost:27017/restful-apis-with-expressjs-mongodb-redis'

const connectMongo = () => {
    console.log(CONNECTION_STRING);
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
