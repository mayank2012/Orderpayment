import { Invoice } from "./Invoice";
import { OrderPricing } from "./OrderPricing";
import { ProcessPayment } from "./ProcessPayment";
import { Product, Order } from "./order";


const Product1 = new Product('1','Product 1', 100);
const Product2 = new Product('2','Product 2', 1000);
const Product3 = new Product('3','Product 3', 10000);
const Product4 = new Product('4','Product 4', 100000);


const order = new Order();
order.genrateInvoice();
order.processPayment();

order.addProduct(Product1);
order.addProduct(Product2);
order.addProduct(Product3);
order.addProduct(Product4);


const orderrderPricing = new OrderPricing();
const total = OrderPricing.calculatePricing(order.getProduct());


 const invoice = new Invoice();
invoice.genrateInvoice(order.getProduct(), total);


const processPayment = new ProcessPayment();
processPayment.processPayment(order);
