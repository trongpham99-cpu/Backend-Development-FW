const { createStudent, getListStudent, getStudent, getListStudentWithCache, setStudentsCache } = require('../services/student.service');

class StudentController {
    async list(req, res) {
        try {
            const students = await getListStudent();
            res.json(students);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }

    async create(req, res) {
        try {
            const student = await createStudent(req.body);
            res.json(student);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async get(req, res) {
        try {
            const student = await getStudent(req.params.id);
            res.json(student);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = new StudentController();