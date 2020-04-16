import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Tile } from "react-native-elements";

import Colors from "../constants/Colors";

const products = [
  {
    imageUrl:
      "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/73457422_153457692566732_8526233804097091688_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=UQyNHoz6XO4AX-NwUvT&oh=40e9d8c6051102a606a94488e39d95f0&oe=5ED573C8",
    price: "1250"
  },
  {
    imageUrl:
      "https://www.silverenchantments.com/assets/images/findings/f2504_spider-connector.jpg",
    price: "3450"
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc01/kf/Hb2134b4c7b0d4dcab5184e1d527b742dr.jpg",
    price: "999"
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/0f/48/f0/0f48f0fea5a543eb59b624b5be2ea839.jpg",
    price: "4500"
  }
];

const HomeScreen = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(product => (
          <Tile
            onPress={() => {
              props.navigation.navigate({ routeName: "Appointments" });
            }}
            height={380}
            captionStyle={{ color: "black", marginTop: 20 }}
            overlayContainerStyle={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 50
            }}
            caption={"K " + product.price}
            featured
            imageSrc={{
              uri: product.imageUrl
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "CHARLOTTE'S JEWELLERY STORE",
  headerStyle: {
    backgroundColor: Colors.primaryColor
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 0
  }
});

export default HomeScreen;
