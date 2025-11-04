// server/routers/hackathons.ts - Updated version without authentication

import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { router, publicProcedure } from '../trpc'

export const hackathonsRouter = router({
  list: publicProcedure
    .input(
      z.object({
        search: z.string().optional(),
        tags: z.array(z.string()).optional(),
        status: z.enum(['DRAFT', 'PUBLISHED', 'ONGOING', 'CLOSED']).optional(),
        page: z.number().min(1).default(1),
        perPage: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      const { search, tags, status, page, perPage } = input
      const skip = (page - 1) * perPage

      const where = {
        ...(search && {
          OR: [
            { title: { contains: search, mode: 'insensitive' as const } },
            { description: { contains: search, mode: 'insensitive' as const } },
          ],
        }),
        ...(tags && tags.length > 0 && {
          tags: { contains: tags[0] }, // Simple contains search for SQLite
        }),
        ...(status && { status }),
      }

      const [hackathons, total] = await Promise.all([
        ctx.db.hackathon.findMany({
          where,
          skip,
          take: perPage,
          orderBy: { createdAt: 'desc' },
          include: {
            organizer: {
              select: { id: true, name: true, avatarUrl: true },
            },
            _count: {
              select: { teams: true, submissions: true },
            },
          },
        }),
        ctx.db.hackathon.count({ where }),
      ])

      return {
        hackathons,
        pagination: {
          page,
          perPage,
          total,
          totalPages: Math.ceil(total / perPage),
        },
      }
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const hackathon = await ctx.db.hackathon.findUnique({
        where: { slug: input.slug },
        include: {
          organizer: {
            select: { id: true, name: true, avatarUrl: true },
          },
          announcements: {
            orderBy: { createdAt: 'desc' },
            take: 5,
          },
          _count: {
            select: { teams: true, submissions: true },
          },
        },
      })

      if (!hackathon) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Hackathon not found',
        })
      }

      return hackathon
    }),

  // Temporarily disable create/update/register mutations that require authentication
  // Uncomment these when you implement authentication

  // create: publicProcedure // Changed from organizerProcedure to publicProcedure for testing
  //   .input(
  //     z.object({
  //       title: z.string().min(3),
  //       slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  //       description: z.string().min(10),
  //       coverImage: z.string().url().optional(),
  //       startDate: z.date(),
  //       endDate: z.date(),
  //       timezone: z.string().default('UTC'),
  //       tags: z.array(z.string()).transform(tags => JSON.stringify(tags)),
  //       capacity: z.number().positive().optional(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     if (input.endDate <= input.startDate) {
  //       throw new TRPCError({
  //         code: 'BAD_REQUEST',
  //         message: 'End date must be after start date',
  //       })
  //     }

  //     const existingSlug = await ctx.db.hackathon.findUnique({
  //       where: { slug: input.slug },
  //     })

  //     if (existingSlug) {
  //       throw new TRPCError({
  //         code: 'CONFLICT',
  //         message: 'Slug already exists',
  //       })
  //     }

  //     // For now, use a hardcoded organizer ID from your seed data
  //     const organizer = await ctx.db.user.findFirst({
  //       where: { role: 'ORGANIZER' }
  //     })

  //     if (!organizer) {
  //       throw new TRPCError({
  //         code: 'NOT_FOUND',
  //         message: 'No organizer found',
  //       })
  //     }

  //     const hackathon = await ctx.db.hackathon.create({
  //       data: {
  //         ...input,
  //         organizerId: organizer.id, // Use the found organizer instead of ctx.session.user.id
  //       },
  //       include: {
  //         organizer: {
  //           select: { id: true, name: true, avatarUrl: true },
  //         },
  //       },
  //     })

  //     return hackathon
  //   }),

  // Comment out other mutations for now...
})