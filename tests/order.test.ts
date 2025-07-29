import { Product, Order } from '../order';
import { Invoice } from '../Invoice';

/**
 * Test suite for the Product class
 */
describe('Product', () => {
    test('should create a product with correct properties', () => {
        // Create a test product and verify its properties
        const product = new Product('1', 'Test Product', 100);
        expect(product.id).toBe('1');
        expect(product.name).toBe('Test Product');
        expect(product.price).toBe(100);
    });
});

/**
 * Test suite for the Order class
 */
describe('Order', () => {
    let order: Order;
    let product1: Product;
    let product2: Product;

    // Set up fresh test data before each test
    beforeEach(() => {
        order = new Order();
        product1 = new Product('1', 'Product 1', 100);
        product2 = new Product('2', 'Product 2', 200);
    });

    test('should add products correctly', () => {
        // Test adding a single product to the order
        order.addProduct(product1);
        expect(order.getProduct()).toHaveLength(1);
        expect(order.getProduct()[0]).toEqual(product1);
    });

    test('should remove products correctly', () => {
        // Test removing a product from the order
        order.addProduct(product1);
        order.addProduct(product2);
        order.removeProduct('1');
        expect(order.getProduct()).toHaveLength(1);
        expect(order.getProduct()[0]).toEqual(product2);
    });

    test('should throw error for unimplemented processPayment', () => {
        // Verify that unimplemented method throws error
        expect(() => order.processPayment()).toThrow('Method not implemented.');
    });

    test('should throw error for unimplemented generateInvoice', () => {
        // Verify that unimplemented method throws error
        expect(() => order.genrateInvoice()).toThrow('Method not implemented.');
    });
});

/**
 * Test suite for the Invoice class
 */
describe('Invoice', () => {
    let invoice: Invoice;
    let products: Product[];
    const consoleSpy = jest.spyOn(console, 'log');

    // Set up fresh test data and clear console spy before each test
    beforeEach(() => {
        invoice = new Invoice();
        products = [
            new Product('1', 'Product 1', 100),
            new Product('2', 'Product 2', 200)
        ];
        consoleSpy.mockClear();
    });

    test('should generate invoice with correct output', () => {
        // Test invoice generation with proper formatting
        invoice.genrateInvoice(products, 300);
        
        // Verify all expected console output
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Invoice Data:'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('product Name\tPrice'));
        expect(consoleSpy).toHaveBeenCalledWith('Product 1\t\t100');
        expect(consoleSpy).toHaveBeenCalledWith('Product 2\t\t200');
        expect(consoleSpy).toHaveBeenCalledWith('Total: 300');
    });
});
