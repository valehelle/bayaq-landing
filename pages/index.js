import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import { View, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native-web'
const Home = () => (


  <div style={{ backgroundColor: '#3f51b5', minHeight: '100vh' }}>

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
    <div className='parent'>
      <View style={{ paddingTop: '5vh', flexDirection: 'row' }}>
        <Image
          resizeMode='contain'
          style={{
            width: 50,
            height: 50
          }}
          source='/icon.png' />
        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'white', fontSize: 40 }}>Bayaq</Text>

      </View>
      <View style={{ justifyContent: 'flex-end' }}>
        <Text style={{ fontWeight: '400', color: 'white', fontSize: 35, marginTop: 40 }}>The fastest way to pay your bills</Text>
        <Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>With Bayaq, you can pay all your bills in one place.</Text>
        <Text style={{ fontWeight: '400', color: 'white', fontSize: 20, marginTop: 30 }}>Get the Bayaq app today</Text>

      </View>
      <View style={{ flexDirection: 'column', marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ backgroundColor: '#429ef6', padding: 20, borderRadius: 10 }} onPress={() => Linking.openURL('/ios')}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Download for iOS</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <TouchableOpacity style={{ backgroundColor: '#429ef6', padding: 20, borderRadius: 10 }} onPress={() => Linking.openURL('/android')}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Download for Android</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 5, alignItems: 'center', marginTop: 20 }}>
        <Image resizeMode='contain' style={{
          width: '100%',
          height: '80vh',
        }}
          source='/iphone.png' />

      </View>
      <View>


        <Text style={{ color: 'white', fontSize: 14, marginBottom: 10, marginTop: 30, textAlign: 'center' }}>
          Copyright &copy; 2020 Bayaq PLT | Contact admin@bayaqapp.com | <TouchableOpacity onPress={() => Linking.openURL('https://www.bayaqapp.com/privacy')}><Text>Terms and Condition</Text></TouchableOpacity>
        </Text>

      </View>
    </div>

    <style jsx>
      {`
      width: 100%;
      padding-left: 5%;
      padding-right: 5%;
      @media (min-width: 600px) {
        .parent {
          width: 50%;
          margin-left: 25%;
          padding-left: 0;
          padding-right: 0;
        }
      }

    `}</style>
  </div>
)

export default Home
