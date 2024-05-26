import { Product } from "./order";

export class Invoice{
    product: any;

    genrateInvoice(product: Product[], amount: number){

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