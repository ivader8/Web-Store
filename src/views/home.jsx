import React, { Component } from 'react'
import LandingMessage from '../components/LandingMessage';
import TopRatedBookCards from '../components/top-rated-book-cards';


class Home extends Component {
    render() {
        return (
            <main>
                <div className="welcome-wrapper">
                    <LandingMessage message="Welcome to the Unicorn Life! Below are listed some of the best products you can use to become anyone's unicorn!">
                        
                    </LandingMessage>
                  <TopRatedBookCards>
                      
                  </TopRatedBookCards>
                    
                </div>
            </main>            
                    )
    }

}

export default Home;