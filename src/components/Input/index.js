import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles/";

const Input = props => {
  return (
    <TextInput
      style={[styles.inputStyle, props.inputStyle]}
      autoFocus={!props.noAutoFocus}
      secureTextEntry={props.secureTextEntry}
      underlineColorAndroid="transparent"
      placeholder={props.placeholder}
      autoCorrect={false}
      value={props.value}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
    />
  );
}

export default Input;