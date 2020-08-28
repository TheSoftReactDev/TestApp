import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCart, clickNumber, addToCart } from "./shoppingCartAction";
import { createSelector } from "reselect";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Button,
  CardText,
  CardSubtitle,
} from "reactstrap";
const getClickedNumber = createSelector(
  (state) => state.shoppingCartStore,
  (shoppingCartStore) => shoppingCartStore
);
const ShoppingItems = () => {
  const dispatch = useDispatch();
  const { clickedNumber, cartItems, isLoading, selectedItems } = useSelector(
    getClickedNumber
  );
  const [visible, setvisible] = useState(true);
  useEffect(() => {
    dispatch(requestCart());
  }, []);

  const onAddToCart = (event) => {
    if (!event === selectedItems.findIndex((x) => x.object.id === event).id) {
    }
    dispatch(
      addToCart([
        ...selectedItems,
        cartItems.filter((product) => product.id === event).map((x) => x),
      ])
    );
    console.log(selectedItems.findIndex((x) => x.object.id === event).id);
    console.log(selectedItems);
  };

  const Cart = cartItems.map((cartItem, index) => (
    <React.Fragment key={index}>
      <Row>
        <Col lg="2" md="2">
          <Card>
            <CardImg height={50} width={20} src={cartItem.photo}></CardImg>
            <CardBody>
              <CardSubtitle>{cartItem.name}</CardSubtitle>
              <CardText>{cartItem.price}</CardText>
              <CardTitle>{cartItem.unitSize}</CardTitle>
              <Button onClick={() => onAddToCart(cartItem.id)}>
                {" "}
                Add To Cart
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  ));
  const buttonClicked = () => {
    dispatch(clickNumber(clickedNumber + 1));

    console.log(cartItems);
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          {" "}
          Hello
          <button onClick={buttonClicked}> Buy </button>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12">
          {Cart}
        </Col>
      </Row>
      x
    </Container>
  );
};

export default ShoppingItems;
