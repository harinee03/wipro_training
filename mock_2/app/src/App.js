//Q1
// import react from 'react';
// import ProductCard from '../components/ProductCard';
// import LoginForm from "./pages/LoginForm";

// function App() {
//   const products = [
//     { title: 'Product 1', price: 100, discount: 10 },
//     { title: 'Product 2', price: 200, discount: 20 },
//     { title: 'Product 3', price: 300, discount: 30 },
//   ];

//   return (
//     <div className="App">
//       <h1>Product List</h1>
//       {products.map((product, index) => (
//         <ProductCard
//           key={index}
//           title={product.title}
//           price={product.price}
//           discount={product.discount}
//         />
//       ))}
//           <LoginForm />;
//     </div>
   
//   );
// }
// export default App;

//Q2
// import React from "react";
// import LoginForm from "./pages/LoginForm";

// function App() {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }

// export default App;

//Q3
// import React from "react";
// import UserStatus from "./pages/UserStatus";

// function App() {
//   return <UserStatus userId={101} />;
// }

// export default App;

//Q4
// import { Routes, Route, Link } from "react-router-dom";
// import UserDetails from "./pages/UserDetails";

// function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Users</h2>
//       <Link to="/users/1">User 1</Link> <br />
//       <Link to="/users/2">User 2</Link>

//       <Routes>
//         <Route path="/users/:id" element={<UserDetails />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

//Q5
// import ShowWidth from "./pages/ShowWidth";
// import withWindowWidth from "./hoc/withWindowWidth";

// const WidthTracker = withWindowWidth(ShowWidth);

// function App() {
//   return (
//     <div>
//       <WidthTracker />
//     </div>
//   );
// }

// export default App;

//Q6


import LoginFormik from "./pages/LoginFormik";

function App() {
  return <LoginFormik />;
}

export default App;
