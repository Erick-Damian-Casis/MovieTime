import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet} from 'react-native';

const DetailsScreen = ({route})=>{
    
    const nameMovie= route.params.movie.nameMovie;
    const dateRelease = route.params.movie.release.toString();
    const [movieDetails,setMovieDetails]=useState(null);

    useEffect(()=>{
        const xhr= new XMLHttpRequest();
            xhr.open('GET',`http://www.omdbapi.com/?t=${nameMovie}&y=${dateRelease}&apikey=681fd8a0`);
            xhr.send();
            xhr.onload=()=>{
            if(xhr.status == 200){
                let response= JSON.parse(xhr.response);
                setMovieDetails(response)
            }else{
                console.log(`HTTP Request failed ${xhr.status}`);
            }
        }
    },[]);
    return(
            <View style={styles.mainView}>
                <Text>{movieDetails== null?"": movieDetails.Title}</Text>
                <Text>{movieDetails== null?"": movieDetails.Released}</Text>
                <Text>{movieDetails== null?"": movieDetails.Plot}</Text>
            </View>
    )
};


const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgoundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default DetailsScreen;