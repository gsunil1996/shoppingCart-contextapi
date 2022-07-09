import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Styles.module.css";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/Context";

const Header = () => {

  const {
    state: { cart },
    dispatch,
    filterDispatch,
  } = useContext(CartContext);

  return (
    <div>
      <Navbar bg="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a procuct"
              className="m-auto"
              onChange={(e) => {
                filterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value
                });
              }}
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className={styles.cartitem}>
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className={styles.cartItemImg}
                        />
                        <div className={styles.cartItemDetail}>
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
