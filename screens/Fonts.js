import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const getFonts = () => Font.loadAsync({
    'OpenSans-Medium.ttf' : require('../assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-Regular.ttf' : require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold.ttf' : require('../assets/fonts/OpenSans-SemiBold.ttf')
});

export default function Fonts() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if(fontsLoaded){
        return(
            <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
        )
    }
}