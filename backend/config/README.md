# Backend Configuration

This directory will contain configuration loaders, environment variable bindings, and client initializers for future backend services:

- `env.js` / `config.js`: Validated environment variables (database connection strings, port, secrets).
- `database.js`: Database client connection pool (e.g., PostgreSQL or SQLite/Prisma).
- `whatsapp.js`: WhatsApp Cloud API or Twilio credentials configuration for enquiry notifications.
