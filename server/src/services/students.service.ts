import { Student } from "@prisma/client";
import client from "../database";


export async function createStudent(firstname: string, lastname: string, email: string, password: string, groupId: string) {
    return await client.student.create({
        data: { firstname, lastname, email, password, groupId }
    })
}

export async function updateStudent(id: string, firstname: string, lastname: string, email: string, password: string, groupId: string) {
    const student = await client.student.findUnique({ where: { id }})

    if(student == null) {
        return null
    }
    if(firstname == ''  || lastname == '' || email == '' || groupId == '') {
        return undefined
    }
    return await client.student.update({
        where: { id },
        data: { firstname, lastname, email, password, groupId }
    })
}

export async function findAllStudents() {
    return await client.student.findMany()
}

export async function removeStudent(id: string) {
    const student = await client.student.findUnique({ where: { id }})

    if (student == null) {
        return null
    }

    return await client.student.delete({ where: { id }})
}

export async function findStudentsByGroupId(id: string) {
    return await client.student.findMany({ where: { groupId: id }})
}

export async function findStudentById(id: string) {
    return await client.student.findUnique({ where: { id } })
}

export async function findStudentByEmail(email: string) {
    return await client.student.findUnique({ where: { email }})
}

