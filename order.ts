export class Product{
    id: string;
    name: string;
    price: number;



    constructor(id:string, name:string, price:number){
        this.id =id;
        this.name = name;
        this.price = price;
    }
}


export class Order {
    processPayment() {
        throw new Error("Method not implemented.");
    }
    genrateInvoice() {
        throw new Error("Method not implemented.");
    }
    product:  Product[] = [];

    addProduct(product: Product){
        this.product.push(product);
    }

    getProduct() {
        return this.product;
    }

    removeProduct(productID: string){
        this.product = this.product.filter((product) => product.id !== productID);
    }
}