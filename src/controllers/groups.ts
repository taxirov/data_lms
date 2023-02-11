import { Request, Response } from "express";
import { findGroupById, findAllGroups, createGroup, removeGroup } from "../services/groups.service";

interface GroupDto {
    name: string
    direction: string
}
export async function getGroups(req: Request, res: Response) {
    const groups = await findAllGroups()
    res.status(200).json({
        message: "All groups",
        groups
    })
}

export async function getGroupById(req: Request, res: Response) {
    const id: string = req.params.id
    const group = await findGroupById(id)
    if (group == null) {
        return res.status(404).json({
            message: "Group not found"
        })
    }
    res.status(200).json({
        message: "Group " + group.name,
        group
    })
}

export async function postGroup(req: Request, res: Response) {
    const body: GroupDto = req.body
    if (body.name.length == 0 || body.direction.length == 0) {
        return res.status(400).json({
            message: "Fields must not be empty"
        })
    }
    const group = await createGroup(body.name, body.direction)
    res.status(201).json({
        message: "Group created",
        group
    })
}

export async function putGroup(req: Request, res: Response) {
    const body: GroupDto  = req.body
    
}

export async function deleteGroup(req: Request, res: Response) {
    const id = req.params.id
    const group = await removeGroup(id)
    if (group == null) {
        return res.status(404).json({
            message: "Group not found"
        })
    }
    res.status(200).json({
        message: "Group already deleted",
        group
    })
}