"use client";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
export default function Navbar() {
  return (
    <Navbar
      fluid
      className="fixed bg-gray-100 w-full z-20 mb-12"
      style={{ boxShadow: "0px 0px 10px black" }}
    >
      <Navbar.Brand>
        <img
          src="https://seeklogo.com/images/M/moefcc-logo-B6867BCC37-seeklogo.com.png"
          class="mr-3 h-14"
          alt="FlowBite Logo"
        />
        <img
          src="https://www.mha.gov.in/themes/custom/mhanew/images/swach-bharat.png"
          class="mr-3 h-14"
          alt="FlowBite Logo"
        />
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RenewIT India
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/login">
          <Button className="mx-2 bg-green-700 focus:outline-none">
            Login
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link active to="/" className="my-3">
          <p>Home</p>
        </Link>
        <Link to="/facility" className="my-3">
          Locator
        </Link>
        <Link to="/rewards" className="my-3">
          Rewards
        </Link>
        <Link to="/contact" className="my-3">
          Contact
        </Link>
        <Link to="/about" className="my-3">
          About
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
