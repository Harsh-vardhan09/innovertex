// server/trpc.ts

import { TRPCError, initTRPC } from '@trpc/server'
import { PrismaClient } from '@prisma/client'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

// Global Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Create context function
export async function createTRPCContext(opts: FetchCreateContextFnOptions) {
  return {
    db: prisma,
    // Add session/user context here later when you implement auth
  }
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>

// Initialize tRPC
const t = initTRPC.context<Context>().create()

// Export router and procedures
export const router = t.router
export const publicProcedure = t.procedure

// Protected procedure (for when you add authentication)
export const protectedProcedure = t.procedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.session?.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return next({
      ctx: {
        ...ctx,
        // session: ctx.session,
      },
    })
  })
)

// Organizer procedure (for hackathon creators)
export const organizerProcedure = protectedProcedure.use(
  t.middleware(({ ctx, next }) => {
    // if (ctx.session.user.role !== 'ORGANIZER' && ctx.session.user.role !== 'ADMIN') {
    //   throw new TRPCError({ code: 'FORBIDDEN' })
    // }
    return next()
  })
)