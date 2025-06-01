



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserProfileForm from "./Emp/StaffProfileForm";
// import ProfileFields from "./Emp/Profile";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<UserProfileForm />} />
//         <Route path="/ProfileDetails" element={<ProfileFields />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React,{useState} from 'react'
import ProductList from './Learn Api/ProductList'
import AddProduct from './Learn Api/AddProduct'
import ShowProduct from './Learn Api/ShowProduct'
import CrudComponent from './Projects/CrudComponent'
import CrudNew from './Projects/CrudNew'

const App = () => {
  const [newProduct, setNewProduct] = useState(null);


  return (
    <>
    <CrudNew/>
    {/* <UseState/> */}
    {/* <ProductList/>
    <CrudComponent/> */}
    {/* <AddProduct onProductAdded={setNewProduct} />
      <ShowProduct product={newProduct} /> */}
    </>
  )
}

export default App
