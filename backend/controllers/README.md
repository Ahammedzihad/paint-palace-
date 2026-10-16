# Backend Controllers

Controllers orchestrate request validation, delegate business operations to services, and send structured HTTP responses:

- `productController.js`: Product creation, updates, pricing changes, and image association.
- `enquiryController.js`: Receives quote submissions from the frontend, records enquiries, and triggers alerts.
- `inventoryController.js`: Stock level audits, restock logging, and threshold alerts.
- `authController.js`: Single-owner authentication, token issuance, and password rotation.
