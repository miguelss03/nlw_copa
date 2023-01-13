import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export async function authRoutes(fastify: FastifyInstance) {
    fastify.post('/users', async (req, res) => {
        const createUserBody = z.object({
            acess_token: z.string(),
        })

        const { acess_token } = createUserBody.parse(req.body)

        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${acess_token}`,
            }
        })

        const userData = await userResponse.json();

        const userInfoSchema = z.object({
            id: z.string(),
            email: z.string(),
            name: z.string(),
            picture: z.string().url(),
        })

        const userInfo = userInfoSchema.parse(userData)

        return {userInfo}

        
    })

}