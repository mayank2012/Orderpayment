import { Product } from "./order";

/**
 * Represents an invoice generator for orders.
 */
export class Invoice {
    /** Products associated with the invoice */
    product: any;

    /**
     * Generates an invoice with product details and total amount.
     * @param product - Array of products to include in the invoice
     * @param amount - Total amount of the invoice
     */
    genrateInvoice(product: Product[], amount: number) {
        console.log(`
     Invoice Data: ${new Date().toDateString()}

     -------------------
     product Name\tPrice
     `);

        product.forEach((product) => {
            console.log(`${product.name}\t\t${product.price}`);
        });

        console.log('------------');
        console.log(`Total: ${amount}`);
    }
}