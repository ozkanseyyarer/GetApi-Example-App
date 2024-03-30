import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function UseCard({name,username,email,city}) {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
               <Text style={styles.textStyle}>Name:</Text>
               <Text style={styles.textStyle}>{name}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Username:</Text>
                <Text style={styles.textStyle}>{username}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>E-mail:</Text>
                <Text style={styles.textStyle}>{email}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>City:</Text>
                <Text style={styles.textStyle}>{city}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       backgroundColor:'#006400',
        marginVertical:5,
        padding:5
    },

    textStyle:{
        color:'#ffffff',
        fontSize:17,
        marginStart:5
    },
    textContainer:{
        flexDirection:"row"
    }
});
