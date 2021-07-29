import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ImageScreen=({navigation, route})=>{
    return(
        <View style={styles.mainView}> 
            <Text>Image Screen</Text>
            <TouchableOpacity
                onPress={()=>{navigation.navigate("App_to_Home",
            )}
        }>
                <Text>Go Home</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default ImageScreen;