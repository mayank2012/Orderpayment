/**
 * Represents a product in the order system.
 */
export class Product {
    /** Unique identifier for the product */
    id: string;
    /** Name of the product */
    name: string;
    /** Price of the product */
    price: number;

    /**
     * Creates a new Product instance.
     * @param id - Unique identifier for the product
     * @param name - Name of the product
     * @param price - Price of the product
     */
    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


/**
 * Represents an order that can contain multiple products.
 */
export class Order {
    /** List of products in the order */
    product: Product[] = [];

    /**
     * Processes the payment for the order.
     * @throws {Error} Not implemented yet
     */
    processPayment() {
        throw new Error("Method not implemented.");
    }

    /**
     * Generates an invoice for the order.
     * @throws {Error} Not implemented yet
     */
    genrateInvoice() {
        throw new Error("Method not implemented.");
    }

    /**
     * Adds a product to the order.
     * @param product - The product to add to the order
     */
    addProduct(product: Product) {
        this.product.push(product);
    }

    /**
     * Gets all products in the order.
     * @returns Array of products in the order
     */
    getProduct() {
        return this.product;
    }

    /**
     * Removes a product from the order by its ID.
     * @param productID - The ID of the product to remove
     */
    removeProduct(productID: string) {
        this.product = this.product.filter((product) => product.id !== productID);
    }
}