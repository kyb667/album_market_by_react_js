export const addCart = (userInfo, cardInfo, cart, setCart) => {
  console.log("addCart");
  console.log(userInfo);
  console.log(cardInfo);
  console.log(cart);
  // console.log(setCart);
  let myCart;
  let userId;
  if (userInfo.length === 0) {
    userId = "0";
    if ("0" in cart) {
      myCart = cart["0"];
    } else {
      myCart = [];
    }
  } else {
    userId = userInfo[0].id;
    if (userId in cart) {
      myCart = cart[userId];
    } else {
      myCart = [];
    }
  }
  console.log(userId);
  console.log(myCart);

  var isValid = myCart.filter((data) => {
    if (data.id === cardInfo.id) {
      return true;
    }
  });

  console.log(isValid);

  if (isValid.length === 0) {
    myCart.push(cardInfo);
    console.log(myCart);
    var cloned = { ...cart };
    let cloneId = new String(`${userId}`)["0"];
    console.log(cloneId);
    cloned[cloneId] = myCart;
    console.log(cloned);
    setCart(cloned);
  } else {
    alert("既に入っています");
  }
};
