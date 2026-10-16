# Backend Middleware

This directory contains Express or Fastify middleware components:

- `auth.js`: Guards administrative endpoints by verifying owner session tokens or JWTs.
- `validation.js`: Validates request bodies against schemas (e.g., Zod or Joi) for product updates and enquiry submissions.
- `errorHandler.js`: Centralized error catching and uniform JSON error response formatting.
- `rateLimiter.js`: Protects enquiry submission and login routes against brute-force abuse.
