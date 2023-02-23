import { Request, Response } from 'express'
import { createStudent, removeStudent, updateStudent, findAllStudents, findStudentByEmail, findStudentById, findStudentsByGroupId } from '../services/students.service'
import { Student } from '@prisma/client'

export async function getAllStudents(req: Request, res: Response) {
    const students = await findAllStudents()
    res.status(200).json({
        message: "All students",
        students
    })
}

export async function postStudent(req: Request, res: Response) {
    const body: Student = req.body
    const student: Student = await createStudent(body.firstname, body.lastname, body.email, body.password, body.groupId)
    res.status(201).json({
        message: "Student created",
        student
    })
}

export async function putStudent(req: Request, res: Response) {
    const body: Student = req.body
    const student = await updateStudent(req.params.id, body.firstname, body.lastname,  body.email, body.password, body.groupId)
    if(student == null) {
        return res.status(404).json({
            message: "Student not found"
        })
    }
    if(student == undefined) {
        return res.status(403).json({
            message: "Fields must not be empty"
        })
    }
    res.status(200).json({
        message: "Student updated",
        student
    })
}

export async function deleteStudent(req: Request, res: Response) {
    const student = await removeStudent(req.params.id)
    if(student == null) {
        return res.status(404).json({
            message: "Student not found"
        })
    }
    res.status(200).json({
        message: "Student deleted",
        student
    })
}

export async function getStudentById(req: Request, res: Response) {
    const student = await findStudentById(req.params.id)
    if(student == null) {
        return res.status(404).json({
            message: "Student not found"
        })
    }
    res.status(200).json({
        message: "Student " + student.firstname + ' ' + student.lastname,
        student
    })
}

export async function getStudentByEmail(req: Request, res: Response) {
    const student = await findStudentById(req.params.id)
    if(student == null) {
        return res.status(404).json({
            message: "Student not found"
        })
    }
    res.status(200).json({
        message: "Student " + student.firstname + ' ' + student.lastname,
        student
    })
}

export async function getStudentsByGroupId(req: Request, res: Response) {

}