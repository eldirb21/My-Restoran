import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Containers from '../../components/atoms/Containers';
import {datas} from '../../services/data';
import Texts from '../../components/atoms/Texts';
import Icons from '../../components/atoms/Icons';
import FUNC from '../../utils/Func';
import AppBar from '../../components/molecules/AppBar';
import {useIsFocused} from '@react-navigation/native';
import Buttons from '../../components/atoms/Buttons';

export default function OrderHistoryDetail() {
  const rincDesc = [
    {
      name: 'Catatan',
      value: 'Tidak ada',
    },
    {
      name: 'Nomor Pemesanan',
      value: '123434354677',
    },
    {
      name: 'Waktu Pemesanan',
      value: '31 Oct 2022 10:30',
    },
    {
      name: 'Pembayaran',
      value: 'Cash',
    },
  ];
  const menu = [
    {
      name: 'Nasi Goreng',
      price: 20000,
      qyt: 1,
    },
    {
      name: 'Soto Ayam',
      price: 15000,
      qyt: 1,
    },
    {
      name: 'Nasi + Ayam Geprek',
      price: 30000,
      qyt: 2,
    },
    {
      name: 'Es Teh manis',
      price: 15000,
      qyt: 1,
    },
  ];
  return (
    <Containers barColor="#FFF" isFocused={useIsFocused()}>
      <AppBar isGoBack barColor="#FFF" title="Rincian Pesananmu" />
      <View style={{flex: 1, marginTop: 10}}>
        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 0.3,
            paddingBottom: 25,
          }}>
          <Texts textStyles={{fontSize: 23}}>My Restoran</Texts>
          <Texts textStyles={{fontSize: 16}}>Jakarta Indonesia</Texts>
          <Texts>Bussiness Hours:</Texts>
          <Texts>10:00 to 22:00 (Senin - Sabtu)</Texts>
        </View>

        <View
          style={{
            borderBottomWidth: 0.3,
            paddingBottom: 40,
            padding: 20,
          }}>
          {menu.map((x, i) => {
            return (
              <View
                key={i}
                style={{
                  paddingBottom: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Texts>{x.qyt}</Texts>
                <View
                  style={{
                    flex: 1,
                    marginLeft: 15,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Texts>{x.name}</Texts>
                  <Texts>{FUNC.currency(x.price)}</Texts>
                </View>
              </View>
            );
          })}
          <View
            style={{
              borderTopWidth: 0.5,
              paddingTop: 8,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Texts textStyles={{fontSize: 18}}>
              {'Sub Total' + ` (${FUNC.reduceArr(menu, 'qyt', null)} menu)`}
            </Texts>
            <Texts textStyles={{fontSize: 18}}>
              {FUNC.currency(FUNC.reduceArr(menu, 'price', null))}
            </Texts>
          </View>
          <View
            style={{
              paddingTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Texts textStyles={{fontSize: 16, color: 'grey'}}>{'Diskon'}</Texts>
            <Texts
              textStyles={{
                fontSize: 16,
                textDecorationLine: 'line-through',
                color: 'grey',
              }}>
              {FUNC.currency(10000)}
            </Texts>
          </View>
          <View
            style={{
              paddingTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Texts textStyles={{fontSize: 20, fontWeight: '700'}}>
              {'Total'}
            </Texts>
            <Texts textStyles={{fontSize: 20, fontWeight: '700'}}>
              {FUNC.currency(FUNC.reduceArr(menu, 'price', null) - 10000)}
            </Texts>
          </View>
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Texts textStyles={{fontSize: 16}}>Rincian Pesananmu</Texts>
          {rincDesc.map((x, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <Texts>{x.name}</Texts>
                <Texts>{x.value}</Texts>
              </View>
            );
          })}
          <View></View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: -10,
        }}>
        <Buttons title="Pesan lagi" isFull />
      </View>
    </Containers>
  );
}
