import React from "react";
import {Text, View, StyleSheet,TouchableOpacity, ImageBackground,} from 'react-native';

const HomeScreen=({navigation, route})=>{

    return(
        <ImageBackground source={require('../img/movie_background.png')} style={styles.backgoundImage}>
        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                style={styles.touchableView}
                onPress={()=>{navigation.navigate("Home_to_Details",
                {movie:{
                    title: "Black Panther",
                    release: 2018,
                    screenNumber: 1,
                    nameMovie: "black+panther"
                }}  
                )}}>
                    <View>
                        <Text style={styles.touchableText} >Black Panther</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableView}
                onPress={()=>{navigation.navigate("Home_to_Details",
                {movie:{
                    title: "The Matrix",
                    release: 1999,
                    screenNumber: 1,
                    nameMovie: "the+Matrix"
                }}  
                )}}>
                    <View>
                        <Text style={styles.touchableText}>The Matrix</Text>
                    </View>
                </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableView}
                onPress={()=>{navigation.navigate("Home_to_Details",
                {movie:{
                    title: "Star Wars",
                    release: 1977,
                    screenNumber: 1,
                    nameMovie: "star+wars"
                }}  
                )}}>
                    <View>
                        <Text style={styles.touchableText}>Star Wars</Text>
                    </View>
                </TouchableOpacity>
        </View>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    touchableView:{
        marginBottom: 30,
        width: 150,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'orange',
        borderWidth: 5,
        borderRadius: 10,
    },
    touchableText:{
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    backgoundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;