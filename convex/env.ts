import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here.
   * These are validated at runtime when Convex functions execute.
   */
  server: {
    CLERK_JWT_ISSUER_DOMAIN: z.string().url().optional(),
  },
  /**
   * Map environment variables from process.env.
   * Convex reads these from the Convex dashboard environment variables.
   */
  runtimeEnv: {
    CLERK_JWT_ISSUER_DOMAIN: process.env.CLERK_JWT_ISSUER_DOMAIN,
  },
  /**
   * Run `build` or `dev` with SKIP_ENV_VALIDATION to skip env validation.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   */
  emptyStringAsUndefined: true,
});

