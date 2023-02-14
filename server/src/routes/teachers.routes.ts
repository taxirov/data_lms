import { Router } from "express"
import { deleteTeacher, getTeacherById, getTeachers, postTeacher } from "../controllers/teachers.controller"
const router = Router()

router.get('/', getTeachers)
router.get('/:id', getTeacherById)

router.post('/', postTeacher)

router.put('/:id', )

router.delete('/:id', deleteTeacher)

export default router