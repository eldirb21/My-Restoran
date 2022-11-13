import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Containers from '../../components/atoms/Containers';
import {datas} from '../../services/data';
import Texts from '../../components/atoms/Texts';
import Icons from '../../components/atoms/Icons';
import Buttons from '../../components/atoms/Buttons';
import {useIsFocused} from '@react-navigation/native';
import Cameras from '../../components/atoms/Cameras';

export default function Account({navigation}) {
  const [user, setuser] = useState(datas.user);
  const [ShowModalPhoto, setShowModalPhoto] = useState(false);
  return (
    <Containers isFocused={useIsFocused()}>
      <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
        <View
          style={{
            position: 'absolute',
            top: 25,
            right: 25,
            zIndex: 9999,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountEdit', user)}
            activeOpacity={0.6}
            style={{
              backgroundColor: 'rgba(0,0,0,.3)',
              borderRadius: 100,
              padding: 6,
            }}>
            <Icons
              onPress={() => navigation.navigate('AccountEdit', user)}
              name="account-edit-outline"
              type="MaterialCommunityIcons"
              size={25}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: 2, borderRadius: 100}}>
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
        <View style={{marginLeft: 20, flex: 1}}>
          <Texts textStyles={{fontSize: 18, marginBottom: 8}}>
            {user.name}
          </Texts>
          <Texts textStyles={{color: 'grey'}}>{user.phone}</Texts>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          marginHorizontal: 20,
          padding: 15,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Texts textStyles={{marginBottom: 8, color: '#D47A08'}}>
            Loyalty
          </Texts>
          <Texts>{user.loyalty}</Texts>
        </View>
        <View style={{height: '100%', width: 1, backgroundColor: 'grey'}} />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Texts textStyles={{marginBottom: 8, color: '#D47A08'}}>Points</Texts>
          <Texts>{user.points}</Texts>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 0.6,
          borderColor: '#DDDDDD',
          marginTop: 30,
          marginHorizontal: -20,
        }}
      />
      <ScrollView>
        {datas.profile.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Icons
                name={item.icon}
                type={item.iconType}
                size={25}
                color="red"
              />
              <View
                style={{
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderColor: '#EAEAEA',
                  flex: 1,
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Texts>{item.name}</Texts>
                <Icons name={'arrow-forward-ios'} size={22} color="#EAEAEA" />
              </View>
            </TouchableOpacity>
          );
        })}
        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 20,
            marginBottom: 10,
          }}>
          <Buttons isFull title="Logout" />
          <Texts
            textStyles={{
              marginTop: -10,
              marginBottom: 10,
              textAlign: 'center',
            }}>
            Versi Aplikasi 1.0.0
          </Texts>
        </View>
      </ScrollView>
      <Cameras
        visible={ShowModalPhoto}
        onClose={() => setShowModalPhoto(false)}
        onChagePhoto={val => {
          console.log(val);
        }}
      />
    </Containers>
  );
}
