// server/routers/_app.ts

import { router } from '../trpc'
import { hackathonsRouter } from './hackathons'
import {authRouter} from './auth'

export const appRouter = router({
  hackathons: hackathonsRouter,
  auth:authRouter,
})

export type AppRouter = typeof appRouter