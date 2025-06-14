import React from 'react';
import Welcome from './Welcome.jsx';
import Citizens from './Citizens.jsx';
import ProductCard from './ProductCard.jsx';
import FruitList from './FruitLists.jsx'
import UserList from './UserList.jsx'
import TaskList from './TaskList.jsx'
import NumberList from './NumberList.jsx'
import BookList from './BookList.jsx'
import ShoppingCart from './ShoppingCart.jsx'


function App() {
   return <>
   <Welcome name="Tendo"></Welcome>
   <Citizens name="Tendo" country="Uganda" age={30} city="Mukono"></Citizens>
   <Citizens name="Daniel" country="Kenya" age={25} city="Nairobi"></Citizens>
   <Citizens name="David" country="Tanzania" age={28} city="Dodoma"></Citizens>
   <Citizens name="Arnold" country="Rwanda" age={26} city="Kigali"></Citizens>
   <Citizens name="Micah" country="United Kingdom" age={38} city="Manchester"></Citizens>
   <Citizens name="Lineker" country="United Kingdom" age={64} city="Leicester"></Citizens>
   <BookList></BookList>
   <ShoppingCart></ShoppingCart>
   <ProductCard name="Rice" price={5000} inStock={true}></ProductCard>
   <ProductCard name="Potatoes" price={1500} inStock={false}></ProductCard>
   <ProductCard name="Pork" price={25000} inStock={true}></ProductCard>
   <ProductCard name="Product"></ProductCard>
   <NumberList></NumberList>
   <TaskList></TaskList>
   <UserList></UserList>
   <FruitList></FruitList>
   
   </>
}

export default App
