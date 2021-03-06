import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';


const Input = ({ label, onChangeText, value, placeholder, secureTextEntry  }) => {
   const { inputStyle, labelStyle, containerStyle} = styles ;


   return (
      <View style = { containerStyle }>
         <Text style = { labelStyle } >{ label }</Text>
         <TextInput
            secureTextEntry = { secureTextEntry }
            placeholder = { placeholder }
            underlineColorAndroid = 'transparent'
            style = { inputStyle }
            value = { value }
            onChangeText = { onChangeText }
          />
      </View>
   );
};

const styles = {
   inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 20,
      lineHeight: 24,
      flex: 2,
      paddingVertical: 0
   },
   labelStyle: {
      fontSize: 20,
      paddingLeft: 20,
      flex: 1,
      color: 'black'
   },
   containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
   }
}

export { Input } ;
