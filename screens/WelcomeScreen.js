import React from "react";
import { StyleSheet, View, ScrollView, Text, Button, ImageBackground } from "react-native";
import { Tile } from "react-native-elements";

import Colors from "../constants/Colors";
const image = {uri: "https://cdn.shopify.com/s/files/1/1298/5989/products/1F65BE4F-29EF-4E06-A01E-CBF073D0F17D_1024x1024.jpeg?v=1571598368"}
const WelcomeScreen = props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
              <View>
                <Text style={{color: '#F0FFF0', fontSize: 34, fontWeight: "bold", textAlign: 'center', marginTop: "8%"}}>AN ETSY WELCOME TO CHARLOTTE'S WEB</Text>
              </View>
              <View style={{marginTop: 40, marginLeft: 30, marginRight: 30}}>
              <Text style={{color: '#000000', fontSize: 22, fontWeight: "bold", textAlign: "center"}}>To view our samples bitsy click EXPLORE and to make a wish click BOOK</Text>
              </View>
            <View style={{height: "20%", marginTop: "50%", flexDirection: "row"}}>
              <View style={styles.buttonsContainer}>
                 <Button 
                 title = "EXPLORE"
                 backgroundColor= "#FB6567" 
                 onPress= {() => {
                    props.navigation.navigate({ routeName: "Home" });
                  }}
                 />
              </View>
              <View style={styles.buttonsContainer}>
                <Button 
                title = "BOOK"
                buttonStyle={{ backgroundColor: Colors.accentColor }}
                containerStyle={{ width: "80%", marginTop: "50%" }}
                onPress= {() => {
                    props.navigation.navigate({ routeName: "Appointments" });
                  }}
                />
             </View>
            </View>    
            </ImageBackground>
        </View>
           
     );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: Colors.bgColor
    },
    buttonsContainer: {
      
      flex: 1,
      flexDirection: "column",
      //alignItems: "",
      justifyContent: "space-between",
      position: "relative",
      alignSelf: "center",
      width: "30%",
      marginLeft: "5%", marginRight: "5%" 
      },  

  });
  export default WelcomeScreen;
  