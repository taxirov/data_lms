import { Teacher } from "@prisma/client";
import client from "../database";

export async function findAllTeachers() {
    const teachers: Teacher[] = await client.teacher.findMany()
    return teachers
}

export async function findTeacherById(id: string) {
    const teacher = await client.teacher.findUnique({
        where: {
            id
        }
    })
    if (teacher == null) {
        return null
    }
    return teacher
}

export async function createTeacher(firstname: string, lastname: string, email: string, password: string, groupId: string) {
    const teacher = await client.teacher.create({
        data: {
            firstname,
            lastname,
            email,
            password,
            groupId
        }
    })
    return teacher
}

export async function removeTeacher(id: string) {
    const teacher = await client.teacher.findUnique({
        where: {
            id
        }
    })
    if (teacher == null) {
        return null
    }
    const teacher_deleted: Teacher = await client.teacher.delete({
        where: {
            id
        }
    })
    return teacher_deleted
}