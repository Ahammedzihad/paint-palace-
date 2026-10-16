# Backend Data Models

This directory defines database entity schemas and relationships:

- `Product`: SKU, name, brand, category, finish, coverage, base price, available pack sizes (1L, 4L, 10L, 20L), image URLs, active status.
- `Category`: Category identifier, title, slug, description, image path.
- `Brand`: Brand identifier, brand name, logo path, authorized dealer badge.
- `Inventory`: Product reference, batch number, current stock quantity, reorder threshold.
- `StockMovement`: Log of adjustments (restock, sale, damage, manual correction), timestamp, operator note.
- `Enquiry`: Customer name, phone, email, project type, square footage, brand preference, notes, status (new, contacted, quoted, completed).
- `User`: Owner administrative credentials (hashed password, salt, session tokens).
