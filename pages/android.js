import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import { View, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native-web'

const Android = () => {
  Linking.openURL('https://play.google.com/store/apps/details?id=com.bayaqapp.www')
  return (
    <></>
  )
}

export default Android