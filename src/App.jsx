import React from 'react';
import Welcome from './Welcome.jsx';
import Citizens from './Citizens.jsx';
import ProductCard from './ProductCard.jsx';


function App() {
   return <>
   <Welcome name="Tendo"></Welcome>
   <Citizens name="Tendo" country="Uganda" age={30} city="Mukono"></Citizens>
   <Citizens name="Daniel" country="Kenya" age={25} city="Nairobi"></Citizens>
   <Citizens name="David" country="Tanzania" age={28} city="Dodoma"></Citizens>
   <Citizens name="Arnold" country="Rwanda" age={26} city="Kigali"></Citizens>
   <ProductCard name="Rice" price={5000} inStock={true}></ProductCard>
   <ProductCard name="Potatoes" price={1500} inStock={false}></ProductCard>
   <ProductCard name="Pork" price={25000} inStock={true}></ProductCard>
   <ProductCard name="Product"></ProductCard>
   
   </>
}

export default App
