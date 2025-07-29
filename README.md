# Order Payment System

A TypeScript-based order management and payment processing system that follows SOLID principles.

## Project Structure

```
Orderpayment/
├── src/
│   ├── order.ts         # Contains Product and Order classes
│   ├── Invoice.ts       # Invoice generation functionality
│   ├── ProcessPayment.ts # Payment processing (to be implemented)
│   └── OrderPricing.ts  # Pricing calculations (to be implemented)
├── tests/
│   └── order.test.ts    # Test suite for all components
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── jest.config.json     # Jest testing configuration
└── README.md           # Project documentation
```

## Classes and Components

### Product Class
```typescript
class Product {
    id: string;     // Unique identifier for the product
    name: string;   // Name of the product
    price: number;  // Price of the product
}
```

### Order Class
```typescript
class Order {
    product: Product[];  // List of products in the order

    // Methods
    addProduct(product: Product)        // Add a product to the order
    getProduct(): Product[]            // Get all products in the order
    removeProduct(productID: string)    // Remove a product by ID
    processPayment()                   // Process payment (to be implemented)
    genrateInvoice()                  // Generate invoice (to be implemented)
}
```

### Invoice Class
```typescript
class Invoice {
    genrateInvoice(product: Product[], amount: number)  // Generate formatted invoice
}
```

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/mayank2012/Orderpayment.git
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npm test
```

## Testing

The project uses Jest for testing. Test cases cover:

### Product Tests
- Product creation with properties validation

### Order Tests
- Adding products to order
- Removing products from order
- Payment processing (currently unimplemented)
- Invoice generation (currently unimplemented)

### Invoice Tests
- Invoice generation with correct formatting
- Product details display
- Total amount calculation

## Running Tests

```bash
npm test                 # Run all tests
npm test -- --watch     # Run tests in watch mode
```

## Development

### Prerequisites
- Node.js
- TypeScript
- Jest

### Technologies Used
- TypeScript
- Jest for testing
- Node.js

## Future Improvements

1. Implementation of `ProcessPayment.ts`:
   - Payment gateway integration
   - Multiple payment method support
   - Transaction handling

2. Implementation of `OrderPricing.ts`:
   - Discount calculations
   - Tax calculations
   - Bulk pricing rules

3. Code Improvements:
   - Fix typo in 'genrateInvoice' to 'generateInvoice'
   - Add validation for product prices
   - Implement error handling for edge cases

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
