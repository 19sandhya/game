// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
// import { useState } from "react";
// import { Modal, ModalBody, ModalHeader } from "reactstrap";
// import Login from "./pages/Login";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [modal, setModal] = useState(false);

//   return (
//     <nav>
//       <h1 className="logo">Logo</h1>
//       <div
//         className="menu"
//         onClick={() => {
//           setMenuOpen(!menuOpen);
//         }}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ul className={menuOpen ? "open" : ""}>
//         <li className="option ">coins</li>
//         <li className="option ">
//           <Modal isOpen={modal} toggle={() => setModal(!modal)}>
//             <ModalHeader toggle={() => setModal(!modal)}>login</ModalHeader>
//             <ModalBody>
//               <Login />
//             </ModalBody>
//           </Modal>
//         </li>
//         <li className="option ">Theme For Game</li>
//         <li className="option ">Delete</li>
//         {/* <li className="option ">
//           <img />
//         </li> */}
//       </ul>
//     </nav>
//   );
// };

import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Login from "./pages/Login";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <nav>
      <h1 className="logo">Logo</h1>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="option">Coins</li>
        <li className="option" onClick={toggleModal}>
          Login
        </li>
        <li className="option">Theme For Game</li>
        <li className="option">Delete</li>
      </ul>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Login />
        </ModalBody>
      </Modal>
    </nav>
  );
};
