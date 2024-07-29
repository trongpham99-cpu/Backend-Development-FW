const Student = require('../models/student.model');
const redisClient = require('../dbs/redis');

const getListStudent = (params = {}) => {
    return Student.find(params);
}

const getStudent = (id) => {
    return Student.findById(id);
}

const createStudent = (data) => {
    return Student.create(data);
}

const getListStudentWithCache = async (params = {}) => {
    const students = await redisClient.get('students');
    if (students) {
        return JSON.parse(students);
    }

    return null;
}

const setStudentsCache = async (students) => {
    return redisClient.set('students', JSON.stringify(students));
}

module.exports = {
    getListStudent,
    getStudent,
    createStudent,
    getListStudentWithCache,
    setStudentsCache
};