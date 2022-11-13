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

export default function OrderCurrent({navigation}) {
  const [Items, setItems] = useState(datas.pesanberjalan);
  const [ShowFilter, setShowFilter] = useState(false);
  const [filters, setfilters] = useState([
    {
      label: 'Semua Status',
      value: true,
    },
    {
      label: 'Selesai',
      value: false,
    },
    {
      label: 'Dibatalkan',
      value: false,
    },
  ]);
  const onSetFilter = (item, index) => {
    var newFilter = [...filters];
    newFilter.forEach(x => (x.value = false));
    newFilter[index].value = !newFilter[index].value;
    if (
      newFilter[index].value === true &&
      newFilter[index].label === 'Selesai'
    ) {
      var newDatas = datas.riwayat.filter(x => x.status === 'selesai');
      setItems(newDatas);
    } else if (
      newFilter[index].value === true &&
      newFilter[index].label === 'Dibatalkan'
    ) {
      var newDatas = datas.riwayat.filter(x => x.status === 'dibatalkan');
      setItems(newDatas);
    } else {
      setItems(datas.riwayat);
    }
    setfilters(newFilter);
    setShowFilter(false);
  };
  return (
    <Containers>
      <FlatList
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderHistoryDetail', item)}
              activeOpacity={0.8}
              key={index}
              style={{
                padding: 20,
                backgroundColor: '#FFF',
                marginBottom: 10,
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 15,
                }}>
                <Texts textStyles={{color: 'grey', fontWeight: '600'}}>
                  {item.noOrder}
                </Texts>
                <Texts textStyles={{color: 'grey'}}>{item.date}</Texts>
              </View>
              <View style={{flexDirection: 'row',borderColor:'#D7D7D7',borderBottomWidth:.3,paddingBottom:20}}>
                <Image
                  style={{
                    height: 90,
                    width: 100,
                  }}
                  source={{uri: item.image}}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: 15,
                      alignItems: 'center',
                    }}>
                    <Icons
                      name="shield-checkmark"
                      type={'Ionicons'}
                      color="#FE9226"
                    />
                    <Texts textStyles={{marginLeft: 5}}>{item.name}</Texts>
                  </View>
                  <Texts textStyles={{color: '#000'}}>
                    {FUNC.currency(item.totalPrice)}
                    <Texts
                      textStyles={{
                        color: 'grey',
                      }}>{` (${item.qty} menu)`}</Texts>
                  </Texts>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  flex: 1,
                  marginTop: 10,
                  width: '100%',
                }}>
                <View>
                  <Texts
                    textStyles={{
                      textTransform: 'capitalize',
                      color: '#000',
                      fontSize: 12,
                    }}>
                    {item.status}
                  </Texts>
                </View>
                <View style={{flex: 1}}>
                  <View style={{alignSelf: 'flex-end'}}>
                    <Texts textStyles={{fontSize: 12, textAlign: 'right'}}>
                      {item.driver}
                    </Texts>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'flex-end',
                      marginTop: 15,
                    }}>
                    <Icons
                      name="time-outline"
                      type={'Ionicons'}
                      color="#FE9226"
                    />
                    <Texts textStyles={{fontSize: 12, marginLeft: 4}}>
                      {'Perkiraan pesanan tiba: '}
                    </Texts>
                    <Texts textStyles={{fontSize: 12}}>
                      {item.estimasiTiba}
                    </Texts>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Containers>
  );
}
