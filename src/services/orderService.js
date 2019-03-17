import {get} from '../data/crud'

class OrderService {
    constructor(){
        this.baseUrl = "http://localhost:5000/orders";
        this.allOrders = `${this.baseUrl}/allOrders`;
    }


    getAllOrders(){
       return  get(this.allOrders);
    }
}

export default OrderService;

