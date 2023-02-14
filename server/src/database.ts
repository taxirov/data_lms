import { PrismaClient } from "@prisma/client"
const client = new PrismaClient({
    log: [
        { emit: 'stdout', level: 'query' }
    ]
})
export default client