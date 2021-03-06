import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import { View, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native-web'
import { useEffect } from 'react';

const Ios = () => {
  useEffect(() => {
    setTimeout(function () { Linking.openURL('https://apps.apple.com/my/app/bayaq/id1519715626') }, 2000)


  }, [])
  return (
    <Head>
      <title>Bayaq</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115169227-7"></script>
      <script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-115169227-7');
  
`}

      </script>
    </Head>
  )
}

export default Ios
