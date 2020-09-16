import React from "react";
import { Btn } from "./index.style";

const Button = ({ value, isBigBtn, isTransparent, ...otherProps }) => {
  return (
    <Btn
      className={`${
        isBigBtn ? "big-btn" : isTransparent ? "transparent" : " "
      } btn`}
      {...otherProps}
    >
      {value}
    </Btn>
  );
};

export default Button;

// <button
// className={`${
//   isAddToCart
//     ? "add-to-cart"
//     : isCartButton
//     ? "cart-button"
//     : isGoogleSignIn
//     ? "google-sign-in"
//     : isCreateAcount
//     ? "create-acount"
//     : ""
// } btn`}
// {...otherProps}
// >
// {value}
// </button>
