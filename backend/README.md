# Paint Palace — Backend Architecture

> [!NOTE]
> **Status**: Future / Unimplemented.
> The production backend for Paint Palace has **not yet been implemented**. 
> This directory structure is reserved to ensure clean separation of concerns when server-side APIs, database models, and business logic are introduced.

## Directory Structure
- [`config/`](config/README.md): Environment configuration, database connections, and third-party integrations (WhatsApp Business API, Email).
- [`routes/`](routes/README.md): RESTful route definitions for products, categories, stock, enquiries, and orders.
- [`controllers/`](controllers/README.md): Request validation, HTTP handling, and response formatting.
- [`services/`](services/README.md): Business logic, pricing calculations, inventory adjustments, and communication services.
- [`models/`](models/README.md): Data schemas for Products, Inventory, Stock Movements, Customer Enquiries, and Orders.
- [`middleware/`](middleware/README.md): Authentication, rate limiting, request validation, and error-handling middleware.

## Implementation Guidelines
- **Strict Single-Owner Authentication**: No public registration. The system will support only one authorized owner account.
- **Zero Secrets in Repository**: Database credentials and secret keys must be supplied exclusively through environment variables.
