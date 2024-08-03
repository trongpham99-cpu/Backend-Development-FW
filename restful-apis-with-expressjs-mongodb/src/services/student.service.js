const Student = require('../models/student.model');

const getListStudent = (params = {}) => {
    return Student.find(params);
}

const getStudent = (id) => {
    return Student.findById(id);
}

const createStudent = (data) => {
    return Student.create(data);
}

module.exports = {
    getListStudent,
    getStudent,
    createStudent,
};