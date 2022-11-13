import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Containers from '../../components/atoms/Containers';
import {useIsFocused} from '@react-navigation/native';
import Buttons from '../../components/atoms/Buttons';
import AppBar from '../../components/molecules/AppBar';
import Icons from '../../components/atoms/Icons';
import Inputs from '../../components/atoms/Inputs';
import TextArea from '../../components/atoms/TextAres';
import Texts from '../../components/atoms/Texts';
import Cameras from '../../components/atoms/Cameras';

export default function AccountEdit({route}) {
  const [user, setuser] = useState(route.params);
  const [ShowModalPhoto, setShowModalPhoto] = useState(false);
  const onUpdate = () => {
    console.log(user);
  };
  return (
    <Containers barColor="#FFF" isFocused={useIsFocused()}>
      <AppBar title="Edit Profile" />
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 100,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
              }}
              source={{
                uri: user.photo,
              }}
            />
            <TouchableOpacity
              onPress={() => setShowModalPhoto(true)}
              activeOpacity={0.7}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,.6)',
                borderRadius: 100,
                padding: 3,
              }}>
              <Icons name="camera" type="Ionicons" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal: 20}}>
            <Inputs
              lable={'Name'}
              value={user.name}
              onChangeText={val => {
                setuser({
                  ...user,
                  name: val,
                });
              }}
            />
            <Inputs
              lable={'Phone'}
              value={user.phone}
              onChangeText={val => {
                setuser({
                  ...user,
                  phone: val,
                });
              }}
            />
            <Inputs
              lable={'Email'}
              value={user.email}
              onChangeText={val => {
                setuser({
                  ...user,
                  email: val,
                });
              }}
            />
            <TextArea
              lable={'Address'}
              value={user.address}
              onChangeText={val => {
                setuser({
                  ...user,
                  address: val,
                });
              }} 
            />
            <TextArea
              lable={'About'}
              numberLines={5}
              value={user.about}
              onChangeText={val => {
                setuser({
                  ...user,
                  about: val,
                });
              }}
            />
          </View>
          <Cameras
            visible={ShowModalPhoto}
            onClose={() => setShowModalPhoto(false)}
            onChagePhoto={val => {
              console.log(val);
            }}
          />
        </View>

        <View style={{paddingHorizontal: 20}}>
          <Buttons isFull title="Update" onPress={() => onUpdate()} />
        </View>
      </ScrollView>
    </Containers>
  );
}
