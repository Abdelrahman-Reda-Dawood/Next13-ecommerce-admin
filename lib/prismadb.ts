import { PrismaClient } from "@prisma/client"

// to add prisma to globalThis
declare global {
    var prisma: PrismaClient | undefined
};

// to avoid creating new client aka (prisma instances) every time Nextjs does hot reload
const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;