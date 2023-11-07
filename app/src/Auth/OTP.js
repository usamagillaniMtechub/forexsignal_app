import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import Google from '../assets/svg/Google.svg';
import FaceBook from '../assets/svg/FaceBook.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  borderLineGrey,
  green,
  grey,
  iconGrey,
  lightGrey,
  orange,
  red,
  textBlack,
  textGrey,
  white,
} from '../assets/Colors';
import Headers from '../Custom/Headers';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function OTP({navigation}) {
  const [otpCode, setOtpCode] = useState('');

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      navigation.navigate('ResetPassword');
      setSnackbarVisible(false);
    }, 3000);
  };

  return (
    <ImageBackground
      source={appImages.backgroundImgAuth}
      style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={{marginTop: hp(8), marginHorizontal: wp(3)}}>
        <Headers showBackIcon={true} onPress={() => navigation.goBack()} />
      </View>

      <Text
        style={{
          fontSize: hp(2.8),
          marginTop: hp(3),
          marginLeft: wp(10),
          fontWeight: 'bold',
          color: textBlack,
        }}>
        You’ve got mail
      </Text>

      <Text
        style={{
          fontSize: hp(1.8),
          marginTop: hp(3),
          marginLeft: wp(10),
          lineHeight: hp(3),
          fontWeight: '400',
          marginRight: wp(10),
          color: textGrey,
        }}>
        We have sent the OTP verification code to your email address. Check your
        email and enter the code below.
      </Text>

      <View style={{marginHorizontal: wp(8), marginTop: hp(8)}}>
        <View style={{}}>
          <OTPInputView
            style={{
              height: 50,
              marginTop: hp(3),
            }}
            autoFocusOnLoad={false}
            pinCount={4}
            code={otpCode}
            onCodeChanged={code => {
              setOtpCode(code);
            }}
            placeholderTextColor={'#ABA7AF'}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={{
              ...styles.underlineStyleHighLighted,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp(2),
          height: hp(5),
          marginHorizontal: wp(30),
        }}>
        <Text
          style={{
            fontSize: hp(1.8),
            fontWeight: 'bold',
            color: orange,
          }}>
          Resend Code
        </Text>

        <Text
          style={{
            fontSize: hp(1.8),
            fontWeight: '400',
            marginLeft: wp(3),
            color: textGrey,
          }}>
          in 57 s
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: hp(2),
          marginHorizontal: wp(8),
        }}>
        <TouchableOpacity onPress={() => handleUpdatePassword()}>
          <CustomButton title={'Confirm'} />
        </TouchableOpacity>
      </View>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Code Resent Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  underlineStyleBase: {
    color: textGrey,
    fontSize: 24,
    //fontFamily: Fonts.Inter_Medium,
    width: 60,
    height: 50,
    borderRadius: wp(5),
    borderWidth: 1,
    //borderBottomWidth: 1,
    borderColor: '#00000033',
    marginHorizontal: 5,
  },
  underlineStyleHighLighted: {
    borderColor: orange,
    borderRadius: 0,
    borderWidth: 1,
    borderRadius: wp(5),
  },
});