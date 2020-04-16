import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Alert } from "react-native";
import { Input, Button } from "react-native-elements";

import Colors from "../constants/Colors";

const AppointmentScreen = props => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={10}
      enabled
    >
      <Input label="Name" containerStyle={{ width: "90%", marginTop: 50 }} />
      <Input label="Email" containerStyle={{ width: "90%" }} />
      <Input label="Date" containerStyle={{ width: "90%" }} />
      <Input label="Time" containerStyle={{ width: "90%" }} />
      <Button
        title="BOOK APPOINTMENT"
        buttonStyle={{ backgroundColor: Colors.accentColor }}
        containerStyle={{ width: "80%", marginTop: 20 }}
        onPress= {() => {
          Alert.alert(
            "Appointment Confirmation",
            "Thank You for jumping on to our web, a confirmation of your appointment has been sent to your email. Wishing you an Arachmid shopping!!!",
            [
              {text: 'OK', onPress: ()=> console.log('OK Pressed')}
            ],
            {cancelable: false},
            );
        }}
      />
    </KeyboardAvoidingView>
  );
};

AppointmentScreen.navigationOptions = {
  headerTitle: "CREATE APPOINTMENT",
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
    backgroundColor: Colors.bgColor
  }
});

export default AppointmentScreen;
