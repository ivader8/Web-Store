import React, { Component } from 'react'
import LandingMessage from '../components/LandingMessage';
import TopRatedBookCards from '../components/top-rated-book-cards';


class Home extends Component {
    render() {
        return (
            <main>
                <div className="welcome-wrapper">
                    <LandingMessage message="Welcome to our book store, Tanya!">
                        <p>
                            <a href="/store">Go To Store</a>
                            <a href="/orders">View your orders</a>
                        </p>
                    </LandingMessage>
                  <TopRatedBookCards>
                      
                  </TopRatedBookCards>
                    
                </div>
            </main>            
                    )
    }

}

export default Home;