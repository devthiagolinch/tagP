import { PrismaClient } from "@prisma/client";
import { z } from "zod"
import fastify from "fastify";
import { hash } from "bcryptjs";

const app = fastify();
const prisma = new PrismaClient()

app.get("/users", async () => {
    const users = await prisma.user.findMany();
    return users
});

app.post("/users", async (request, reply) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string(),
        cellphone: z.string(),
        password: z.string(),
        address: z.string()
    })

    const {name, email, cellphone, password, address} = createUserSchema.parse(request.body)
    const passwordHash = await hash(password, 9)

    await prisma.user.create({
        data: {
            name,
            email,
            cellphone,
            password: passwordHash,
            address
            
        }
    })

    return reply.status(201).send()
});

app.post("/card/", async (request) => {
    const createCardSchema = z.object({
        instagramURL: z.string(),
        whatsappURL: z.string(),
        twitterURL: z.string(),
        site: z.string(),
        id: z.string()
    })

    const { id, instagramURL, site, twitterURL, whatsappURL } = createCardSchema.parse(request.body)

    await prisma.card.create({
        data: {
            id,
            site,
            instagramURL,
            twitterURL,
            whatsappURL
        }
    })

})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log("Server HTTP Running!")
})