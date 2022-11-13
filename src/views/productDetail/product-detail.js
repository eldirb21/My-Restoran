import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Containers from '../../components/atoms/Containers';
import {useIsFocused} from '@react-navigation/native';
import Buttons from '../../components/atoms/Buttons';
import Icons from '../../components/atoms/Icons';
import Texts from '../../components/atoms/Texts';
import FUNC from '../../utils/Func';
import TextArea from '../../components/atoms/TextAres';

const {width, height} = Dimensions.get('window');
export default function ProductDetail({navigation, route}) {
  const [data, setdata] = useState(route.params);
  const [tambahan, settambahan] = useState({
    tambahan: [
      {
        name: 'Nasi Putih',
        price: 5000,
        isChoose: false,
      },
      {
        name: 'Nasi Uduk',
        price: 8000,
        isChoose: false,
      },
    ],
    sausSambal: [
      {
        name: 'Saus',
        price: 3000,
        isChoose: false,
      },
      {
        name: 'Sambal Pedes',
        price: 4000,
        isChoose: false,
      },
      {
        name: 'Sambal Ijo',
        price: 4000,
        isChoose: false,
      },
      {
        name: 'Sambal Matah',
        price: 4000,
        isChoose: false,
      },
    ],
    alatMakan: [
      {
        name: 'Pakai Alat Makan',
        price: 5000,
        isChoose: false,
      },
      {
        name: 'Tanpa Alat Makan',
        price: 0,
        isChoose: false,
      },
    ],
    notes: '',
  });
  return (
    <Containers isFocused={useIsFocused()} isTranslucent barColor="transparent">
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        <ImageBackground
          resizeMode="cover"
          style={{
            width: width,
            height: height / 2.8,
          }}
          source={{uri: data.image}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{
              padding: 5,
              marginRight: 15,
              backgroundColor: '#FFF',
              top: '11%',
              alignSelf: 'flex-start',
              left: 20,
              borderRadius: 100,
            }}>
            <Icons name="arrow-back" type="Ionicons" size={28} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              position: 'absolute',
              padding: 8,
              marginRight: 15,
              backgroundColor: '#FFF',
              top: '11%',
              alignSelf: 'flex-start',
              right: 10,
              borderRadius: 100,
            }}>
            <Icons name="share-outline" type="Ionicons" size={22} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{padding: 15}}>
          <Texts textStyles={{fontSize: 21}}>{data.name}</Texts>
          <Texts textStyles={{color: 'grey', marginTop: 15}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vehicula porta quam. Aliquam auctor urna non iaculis mattis.
          </Texts>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Texts textStyles={{color: 'grey'}}>{`${944} terjual`}</Texts>
            <Texts
              textStyles={{marginHorizontal: 10, color: 'grey'}}>{`|`}</Texts>
            <Texts textStyles={{color: 'grey'}}>{`Disukai oleh ${27}`}</Texts>
          </View>

          <View>
            {data.isPromo ? (
              <Texts textStyles={{color: 'red'}}>
                <Texts
                  textStyles={{
                    fontSize: 12,
                    color: 'grey',
                    textDecorationLine: 'line-through',
                  }}>
                  {FUNC.currency(data.price) + ' '}
                </Texts>
                {' ' + FUNC.currency(data.price - (data.price * 5) / 100)}
              </Texts>
            ) : (
              <Texts>{FUNC.currency(data.price) + ' '}</Texts>
            )}
          </View>
        </View>

        <View style={{paddingHorizontal: 15}}>
          <View>
            <Texts textStyles={{fontSize: 16, fontWeight: '700'}}>
              Tambahan
              <Texts textStyles={{color: 'grey'}}> Tidak wajib, maks 3</Texts>
            </Texts>
            <View style={{paddingVertical: 10}}>
              {tambahan.tambahan.map((x, i) => {
                const onSelect = x => {};
                return (
                  <TouchableOpacity
                    onPress={() => onSelect(x)}
                    key={i}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: 0.2,
                      borderColor: 'rgba(0,0,0,0.3)',
                      paddingVertical: 10,
                    }}>
                    <Icons
                      onPress={() => onSelect(x)}
                      name={
                        x.isChoose ? 'check-box' : 'check-box-outline-blank'
                      }
                      size={20}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Texts>{x.name}</Texts>
                      {x.price !== 0 ? (
                        <Texts>+ {FUNC.currency(x.price, true)}</Texts>
                      ) : (
                        <Texts>0</Texts>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <Texts textStyles={{fontSize: 16, fontWeight: '700'}}>
              Saus & Sambal
              <Texts textStyles={{color: 'grey'}}> Tidak wajib, maks 1</Texts>
            </Texts>
            <View style={{paddingVertical: 10}}>
              {tambahan.sausSambal.map((x, i) => {
                const onSelect = x => {};
                return (
                  <TouchableOpacity
                    onPress={() => onSelect(x)}
                    key={i}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: 0.2,
                      borderColor: 'rgba(0,0,0,0.3)',
                      paddingVertical: 10,
                    }}>
                    <Icons
                      onPress={() => onSelect(x)}
                      name={
                        x.isChoose ? 'check-box' : 'check-box-outline-blank'
                      }
                      size={20}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Texts>{x.name}</Texts>
                      {x.price !== 0 ? (
                        <Texts>+ {FUNC.currency(x.price, true)}</Texts>
                      ) : (
                        <Texts>0</Texts>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <Texts textStyles={{fontSize: 16, fontWeight: '700'}}>
              Alat Makan<Texts textStyles={{color: 'grey'}}> Pilih 1</Texts>
            </Texts>
            <View style={{paddingVertical: 10}}>
              {tambahan.alatMakan.map((x, i) => {
                const onSelect = x => {};
                return (
                  <TouchableOpacity
                    onPress={() => onSelect(x)}
                    key={i}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: 0.2,
                      borderColor: 'rgba(0,0,0,0.3)',
                      paddingVertical: 10,
                    }}>
                    <Icons
                      onPress={() => onSelect(x)}
                      name={
                        x.isChoose
                          ? 'radio-button-checked'
                          : 'radio-button-unchecked'
                      }
                      size={20}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Texts>{x.name}</Texts>
                      {x.price !== 0 ? (
                        <Texts>+ {FUNC.currency(x.price, true)}</Texts>
                      ) : (
                        <Texts>0</Texts>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <Texts textStyles={{fontSize: 16, fontWeight: '700'}}>
              Catatan lainya
            </Texts>
            <View style={{paddingVertical: 10}}>
              <TextArea
                colors={'grey'}
                placeholder="Catatan pesanan"
                value={tambahan.notes}
                onChangeText={val => {
                  settambahan({
                    ...tambahan,
                    notes: val,
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: -10,
          left: 0,
          right: 0,
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: -23,
            borderWidth: 0.2,
            marginRight: 10,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              padding: 5,
              marginRight: 10,
            }}>
            <Icons name="minus" type="Entypo" size={28} />
          </TouchableOpacity>
          <Texts>2</Texts>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              padding: 5,
              marginLeft: 10,
              //
            }}>
            <Icons name="plus" type="Entypo" size={28} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Buttons
            title={`Tambah Ke Keranjang - ${FUNC.currency(200000)}`}
            style={{width: '100%'}}
          />
        </View>
      </View>
    </Containers>
  );
}
