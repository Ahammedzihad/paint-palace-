# Backend Services

Services encapsulate core domain logic independent of HTTP protocols:

- `productService.js`: Catalogue operations, search indexes, and brand groupings.
- `enquiryService.js`: Processes customer enquiries, calculates estimate summaries, and sends notifications.
- `inventoryService.js`: Atomic inventory count adjustments, stock movement audit trails, and low-stock flagging.
- `notificationService.js`: Dispatches WhatsApp notifications and administrative alerts to the owner.
