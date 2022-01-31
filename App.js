import AppLoading from 'expo-app-loading';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Container } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexContainer1}>
        <Image style={[styles.icon, {height: '70%', marginTop: '2%', marginLeft: '2%'}]} source={require("./assets/Icons/menu_light.png")} />
        <Text style={[styles.bottomNavBarComponentText, {alignSelf: 'center', fontFamily: 'Sydney-Bold', fontSize: 32, color: Themes.light.text}]}>ensom</Text>
        <Image style={[styles.icon, {height: '70%', marginTop: '2%', marginRight: '2%'}]} source={require("./assets/Icons/sun.png")} />
      </View>
      <View style={styles.flexContainer2}>
        <ImageBackground style={styles.profilePic} source={require("./assets/Profiles/mtl.jpg")} >
            <Text style={styles.overlayName}>MTL</Text>
            <Text style={styles.overlayLocation}>3 miles away</Text>
        </ImageBackground>
        <View style={styles.myHottestViewBox}>
            <Text style={{fontFamily: 'Sydney', fontSize: '25'}}>My hottest take</Text>
            <View style={styles.audioIconsBox}>
              <Image style={styles.audioIcon1} source={require("./assets/Icons/player_light.png")} />
              <Image style={styles.audioIcon2} source={require("./assets/Icons/audio_waveform_light.png")} />
        </View>
        </View>
      </View>
      <View style={styles.flexContainer3}>
        <View style={styles.bottomNavBarComponent}>
          <Image style={styles.icon} source={require("./assets/Icons/discover_light.png")} />
          <Text style={styles.bottomNavBarComponentText}>Discover</Text>
        </View>
        <View style={styles.bottomNavBarComponent}>
          <Image style={styles.icon} source={require("./assets/Icons/heart_light.png")} />  
          <Text style={styles.bottomNavBarComponentText}>Matches</Text>
        </View>
        <View style={styles.bottomNavBarComponent}>
          <Image style={styles.icon} source={require("./assets/Icons/messages_light.png")} /> 
          <Text style={styles.bottomNavBarComponentText}>DMs</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    justifyContent: 'center',
  },
  flexContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? 41 : 54,
  },
  flexContainer2: {
    flex: 6,
    marginTop: '10%',
    paddingLeft: '8%',
    paddingRight: '8%',
    resizeMode: 'contain',
  },
  flexContainer3: {
    backgroundColor: Themes.light.navigation,
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '10%',
  },
  myHottestViewBox: {
    backgroundColor: Themes.light.bgSecondary,
    justifyContent: 'flex-start',
    justifyContent: 'center',
    height: '30%',
    paddingLeft: '2%',
    paddingRight: '2%',
    borderRadius: 20,
    marginTop: '5%',
    paddingTop: '2%',
  },
  audioIconsBox: {
    flexDirection: 'row',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  audioIcon1: {
    flex: 1,
    resizeMode: 'contain',
    marginRight: '4%',
  },
  audioIcon2: {
    flex: 5,
    resizeMode: 'contain',
  },
  profilePic: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlayName: {
    position: "absolute",
    color: Themes.light.bgSecondary,
    fontFamily: 'Sydney',
    fontSize: 32,
    top: 8, 
    left: 8, 
  },
  overlayLocation: {
    position: "absolute",
    fontFamily: 'Sydney',
    fontSize: 18,
    color: Themes.light.bgSecondary,
    bottom: 8, 
    left: 8, 
  },
  bottomNavBarComponent: {
    alignItems:'center',
    paddingTop: '2%',
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  bottomNavBarComponentText: {
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    paddingTop: '2%',
  }
});