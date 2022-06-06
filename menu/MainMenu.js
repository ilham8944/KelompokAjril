import { Link } from '@react-navigation/native';
import React from 'react';
import { render } from 'react-dom';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Linking,
  NavigationContainer,
  createNativeStackNavigator ,
  Animated 
} from 'react-native';
import Hyperlink from 'react-native-hyperlink'
// import { Linking } from 'react-native-web';


import Materi from './Materi'

const kalkulator = "https://www.urip.info/2016/07/kalkulator-konfigurasi-elektron.html?m=1"
const simulasi = "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_in.html"
const MainMenu = ({ navigation }) => {
  
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    }
    else{
      alert.alert('Link tidak bisa dibuka: ${url}')
    }
  }
  return (
        
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.judul}>
          <Text style={styles.textjudul}>Aplikasi Pembelajaran</Text>
          <Text style={styles.textjudul}>Model Atom</Text>
        </View>
        <View style={styles.logo}>
          <Image 
              source= {require ('../images/atom2.png')}
              style={{
                  width: 170,
                  height: 170,
                  resizeMode: 'contain',
              }}/>
          </View>

          <View style={styles.menu}>
              <View style={styles.kiri}>
                <TouchableOpacity onPress={() => navigation.navigate('Materi')}>
                  <View style={styles.frame}>
                      <Image 
                      source= {require ('../images/materi.png')}
                      style={{
                          width: 100,
                          height: 100,
                          resizeMode: 'contain',
                          marginTop:10,
                          marginBottom:7
                      }}/>
                      <Text style={styles.textmenu}>Materi</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Video')}>
                    <View style={styles.frame}>
                      <Image 
                      source= {require ('../images/video.png')}
                      style={{
                          width: 100,
                          height: 100,
                          resizeMode: 'contain',
                          marginTop:10,
                          marginBottom:7
                      }}/>
                    <Text style={styles.textmenu}>Video</Text>
                  </View>
                </TouchableOpacity>
                
              </View>
                
              <View style={styles.kanan}>
                <TouchableOpacity  onPress={() => {openUrl(simulasi)}}>       
                  <View style={styles.frame}>
                    <Image 
                    source= {require ('../images/simulasi.png')}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                        marginTop:10,
                        marginBottom:7
                    }}/>
                    <Text style={styles.textmenu}>Simulasi</Text>
                  </View>
                </TouchableOpacity>

                  <TouchableOpacity  onPress={() => {openUrl(kalkulator)}}>
                    <View style={styles.frame}>
                      <Image 
                      source= {require ('../images/kalkulator.png')}
                      style={{
                          width: 100,
                          height: 100,
                          resizeMode: 'contain',
                          marginTop:10,
                          marginBottom:7
                      }}/>
                      <Text style={styles.textmenu}>Kalkulator</Text>
                      <Text style={styles.textmenu}>Atom</Text>
                    </View>
                  </TouchableOpacity>
              </View>
              
          </View>
      </View>
    
  )
};


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#012340'
  },

  header: {
    flex:1,
    // width:'100%',
    // height:'100%',
    // backgroundColor:'#3C5C55',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30
  },

  judul: {
    flex:2,
    alignItems:'center',
    justifyContent:'center'
  },

  textjudul: {
    color: 'white',
    fontSize: 28,
    fontWeight:'bold',
  },

  logo: {
    flex:5,
  },

  menu: {
    flex:9,
    flexDirection:'row'
  },

  kiri: {
    marginRight:30,
    
  },
  kanan:{
   marginLeft:30,
  },

  frame: {
    alignItems:'center',
    marginBottom:20,
    width: 120,
    height: 160,
    borderRadius:20,
    backgroundColor: "#F27141",
  },
  textmenu: {
    fontWeight:'bold',
    fontSize:16,
    color: 'white',
    justifyContent:'center'
  }

});

export default MainMenu;
