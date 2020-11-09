import React from 'react'
import './App.css';
import Counter from './Counter';
import Guarantee from './Guarantee';
import Hobbylist from './HobbyList';

function App() {
  return (
    <div className="App">
      <Hobbylist/>
      <div className="guarantee">
      <Guarantee img="./images/f-delivery.png" title="Free Shipping" description="Free shipping is a marketing tactic used primarily by online vendors and mail-order catalogs as a sales strategy to attract customers."/>
      <Guarantee img="./images/coin.png" title="100% Money Back" description="A money-back guarantee, also known as a satisfaction guarantee, is essentially a simple guarantee that, if a buyer is not satisfied with a product or service, a refund will be made."/>
      <Guarantee img="./images/chat.png" title="Online Support 24/7" description="It is service that is available at any time and usually, every day."/>
      </div>
      <Counter/>
    </div>

  );
}

export default App;
