///Conexao com obanco de um unico arquivo.
// Ele é exportado para o servidor

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'],
})
