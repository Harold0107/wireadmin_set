import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';
import { sha256 } from '$lib/hash';
import { randomUUID } from 'node:crypto';
import 'dotenv/config';

export const env = createEnv({
  runtimeEnv: process.env,
  server: {
    STORAGE_PATH: z.string().default('/data/storage.pack'),
    AUTH_SECRET: z.string().default(sha256(randomUUID())),
    HASHED_PASSWORD: z.string(),
    ORIGIN: z.string().optional(),
  },
});
