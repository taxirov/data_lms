import { Request, Response } from "express"
import { findAllTeachers, findTeacherById, createTeacher, removeTeacher } from "../services/teachers.service"

interface TeacherDto {
    firstname: string
    lastname: string
    email: string
    password: string
    groupId: string
}
export async function getTeachers(req: Request, res: Response) {
    const teachers = await findAllTeachers()
    res.status(200).json({
        message: "All teachers",
        teachers
    })
}

export async function getTeacherById(req: Request, res: Response) {
    const id: string = req.params.id
    const teacher = await findTeacherById(id)
    if (teacher == null) {
        return res.status(404).json({
            message: "Teacher not found"
        })
    }
    res.status(200).json({
        message: "Teacher " + teacher.firstname,
        teacher
    })
}

export async function postTeacher(req: Request, res: Response) {
    const body: TeacherDto = req.body
    if (body.firstname.length == 0 || body.lastname.length == 0 || body.email.length == 0) {
        return res.status(400).json({
            message: "Fields must not be empty"
        })
    }
    const teacher = await createTeacher(body.firstname, body.lastname, body.email, body.password, body.groupId)
    res.status(201).json({
        message: "Teacher created",
        teacher
    })
}

export async function putGroup(req: Request, res: Response) {
    const body = req.body
    
}

export async function deleteTeacher(req: Request, res: Response) {
    const id = req.params.id
    const teacher = await removeTeacher(id)
    if (teacher == null) {
        return res.status(404).json({
            message: "Teacher not found"
        })
    }
    res.status(200).json({
        message: "Teacher already deleted",
        teacher
    })
}