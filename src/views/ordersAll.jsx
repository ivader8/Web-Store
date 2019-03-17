import React, {Fragment} from 'react'
import { Redirect } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { UserConsumer } from '../components/contexts/user-context';
import { post } from '../data/crud';
import UserService from '../services/user-service';
import Loading from '../loading';
import UserCard from '../components/user-card';
import OrderService from '../services/orderService';
import { BookCard } from '../components/book-card';
import { OrderCard } from '../components/order-card';



class OrdersAll extends React.Component {
    state = {
        orders: [],
        isLoading:false
    }
    
    static service = new OrderService();

    render(){

        const {orders, isLoading} = this.state;

        if (isLoading) {
            return <Loading />;
        }

        return(
            <Fragment>
                <h2 align="center">Orders:</h2>
                <br/>
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            orders.map(order => (
                                <OrderCard key={order.id}{...order} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

    async componentDidMount(){
        try {
            const orders = await OrdersAll.service.getAllOrders();
        
            this.setState({orders});
         } catch (error) {
            console.error(error)
        } 
     }


}

export default OrdersAll;