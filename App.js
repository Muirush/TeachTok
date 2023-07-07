import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const img = {uri: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'};

const icon = {uri: "https://img.icons8.com/?size=2x&id=tLYYFUAkhhRa&format=png"}

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {icon} resizeMode = 'cover' style ={styles.iconTime}></Image>
      

      <ImageBackground source={img} resizeMode='center' style= {styles.image}>
      <Text styles>Open up App.js to start working on your app!</Text>
      <Text>This is crazy</Text>

      </ImageBackground>

      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 2,
    justifyContent: 'center',
    height: screenHeight,
    width:screenWidth,
  },
  icon:{
    flex: 1,
    alignItems: 'center'
  }
  
});
