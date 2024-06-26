import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
// import RegisterRouter from "./AuthRouter";
import Icon from "react-native-vector-icons/Feather";
import HomeRooter from "./HomeRooter";
import DashRouter from "./DashRouter";
import AuthRouter from "./AuthRouter";
import NotificationPage from "../../pages/NotificationPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function Router() {
  const [initial, setInitial] = useState("");
  // useEffect(() => {
  //   AsyncStorage.getItem("userToken")
  //     .then((value) => {
  //       // navigation.replace("DashRouter");
  //       setInitial("DashRouter");
  //       console.log(value);
  //     })
  //     .catch((err) => {
  //       setInitial("AuthRouter");
  //     });
  // }, []);

  // //Step 4 :
  // const addToCart = (product) => {
  //   // if hamro product alredy cart xa bhane  find garna help garxa
  //   const productExit = CartItem.find((item) => item.id === product.id);
  //   // if productExit chai alredy exit in cart then will run fun() => setCartItem
  //   // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
  //   // gayara check garxa if item.id ra product.id chai match bhayo bhane
  //   // productExit product chai display garxa
  //   // ani increase  exits product QTY by 1
  //   // if item and product doesnt match then will add new items
  //   if (productExit) {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...productExit, qty: productExit.qty + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     // but if the product doesnt exit in the cart that mean if card is empty
  //     // then new product is added in cart  and its qty is initalize to 1
  //     setCartItem([...CartItem, { ...product, qty: 1 }]);
  //   }
  // };

  // // Stpe: 6
  // const decreaseQty = (product) => {
  //   // if hamro product alredy cart xa bhane  find garna help garxa
  //   const productExit = CartItem.find((item) => item.id === product.id);

  //   // if product is exit and its qty is 1 then we will run a fun  setCartItem
  //   // inside  setCartItem we will run filter to check if item.id is match to product.id
  //   // if the item.id is doesnt match to product.id then that items are display in cart
  //   // else
  //   if (productExit.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id));
  //   } else {
  //     // if product is exit and qty  of that produt is not equal to 1
  //     // then will run function call setCartItem
  //     // inside setCartItem we will run map method
  //     // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...productExit, qty: productExit.qty - 1 }
  //           : item
  //       )
  //     );
  //   }
  // };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackImage: () => <Icon name="chevron-left" size={25} />,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AuthRouter"
        component={AuthRouter}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DashRouter"
        component={DashRouter}
      />
      <Stack.Screen
        name="Notification"
        options={{
          headerShown: true,
          headerStyle: { elevation: 0 },
          headerTitle: "Notifications",
        }}
        component={NotificationPage}
      />
    </Stack.Navigator>
  );
}
