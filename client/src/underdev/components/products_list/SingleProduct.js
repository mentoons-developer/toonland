import React, { useEffect, useState } from "react";
import Styles from "./productsList.module.scss";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../requestMethod";
import axios from "axios";
// import { addProductt } from "../../redux/cartRedux2";

function SingleProduct({ product }) {
  // const { prchdPrd } = useSelector((state) => state.user.currentUser);
  const { currentUser } = useSelector((state) => state.user);
  // console.log(product, "..");
  const [prchdPrd, setPrchdPrd] = React.useState([]);
  // const [cartItems, setCartItems] = React.useState([]);

  const { quantity } = useSelector((state) => state.cart);

  const [status, setStatus] = useState("Add to cart");

  const cartStatus = () =>
    quantity.includes(product._id) ? setStatus("Added") : "Add to cart";

  useEffect(() => {
    cartStatus();
    console.log(quantity, product._id, "pp");
  });

  useEffect(() => {
    const prchdPrd = async () =>
      await userRequest
        .get(`/users/find?username=${currentUser.username}`)
        .then((data) => setPrchdPrd(data.data.prchdPrd));
    prchdPrd();
  }, [currentUser]);

  const dispatch = useDispatch();
  const addToCart = () => {
    if (currentUser) {
      dispatch(addProduct({ ...product }));
    } else {
      alert("Login to add to cart");
      window.location.href = "/login";
    }

    // addProduct(dispatch, {
    //   userId: currentUser._id,
    //   productId: product._id,
    // });
    // try {
    //   axios.put(
    //     `http://localhost:8800/api/users/${currentUser._id}/cartitems`,
    //     {
    //       cartItems: product._id,
    //     }
    //   );
    //   dispatch(addProduct({ ...product }));
    // } catch (err) {
    //   console.log(err, "asw");
    // }
  };

  return (
    <React.Fragment>
      <div className={Styles.individual_product}>
        <img src={product.img} alt="cover" />
        <div className={Styles.about}>
          <h5>{product.productCat}</h5>
          <p className={Styles.description}>{product.title}</p>
          <p className={Styles.description}>{product.desc}</p>
          <p className={Styles.description}>₹{product.price}</p>
          <p>#{product.topics[0]}</p>
          {product.topics[1] ? "#" : null}
          {product.topics[1] ? product.topics[1] : null}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
          >
            {prchdPrd !== [] && prchdPrd.includes(product._id) ? (
              <Link to={`/prchPds`}>
                <button>Download</button>
              </Link>
            ) : (
              <span className="button-like" onClick={addToCart}>
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleProduct;
// <div className={Styles.Star}>★★★★★</div>
// <h6> 3.5 ★</h6>

// <div
//   style={{
//     background: "red",
//     padding: "0.1rem 0.3rem",
//     borderRadius: "0.3rem",
//   }}
// ></div>;
