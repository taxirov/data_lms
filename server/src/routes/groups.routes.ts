import { Router } from "express";
import { deleteGroup, getGroupById, getGroups, postGroup, putGroup } from "../controllers/groups.controller";
const router = Router()

router.get('/', getGroups)
router.get('/:id', getGroupById)

router.post('/', postGroup)

router.put('/:id', putGroup)

router.delete('/:id', deleteGroup)

export default router