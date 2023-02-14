import { Group } from "@prisma/client";
import client from "../database";

export async function findAllGroups() {
    const groups: Group[] = await client.group.findMany()
    return groups
}

export async function findGroupById(id: string) {
    const group = await client.group.findUnique({
        where: {
            id
        }
    })
    if (group == null) {
        return null
    }
    return group
}

export async function createGroup(name: string, direction: string) {
    const group = await client.group.create({
        data: {
            name,
            direction
        }
    })
    return group
}

export async function removeGroup(id: string) {
    const group = await client.group.findUnique({
        where: {
            id
        }
    })
    if (group == null) {
        return null
    }
    const group_deleted = await client.group.delete({
        where: {
            id
        }
    })
    return group_deleted
}

export async function updateGroup(id: string, name: string, direction: string) {
    const group = await client.group.findUnique({
        where: {
            id
        }
    })
    if (group == null) {
        return null
    }
    if (name != undefined && name.length !=0 && direction != undefined && direction.length == 0) {
        const updated_group: Group = await client.group.update({
            where: {
                id
            },
            data: {
                name
            }
        })
        return updated_group
    }
    if (name != undefined && name.length == 0 && direction != undefined && direction.length != 0) {
        const updated_group = await client.group.update({
            where: {
                id
            },
            data: {
                direction
            }
        })
        return updated_group
    }
    if (name != undefined && name.length == 0 || direction != undefined && direction.length == 0) {
        return 0
    }
    const updated_group: Group = await client.group.update({
        where: {
            id
        },
        data: {
            name,
            direction
        }
    })
    return updated_group
}