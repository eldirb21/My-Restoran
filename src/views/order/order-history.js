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

export default function OrderHistory({navigation}) {
  const [Items, setItems] = useState(datas.riwayat);
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
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setShowFilter(!ShowFilter)}>
          <Texts
            textStyles={{
              color:
                filters.filter(x => x.value === true)[0].label ===
                'Semua Status'
                  ? 'gray'
                  : '#FE5A26',
              fontWeight: '600',
            }}>
            {filters.filter(x => x.value === true)[0].label}
          </Texts>
          <Icons
            color={
              filters.filter(x => x.value === true)[0].label === 'Semua Status'
                ? 'gray'
                : '#FE5A26'
            }
            name={ShowFilter ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={20}
          />
        </TouchableOpacity>
        {ShowFilter && (
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.5)',
              position: 'absolute',
              top: 55,
              zIndex: 9999,
              flex: 1,
              left: 0,
              right: 0,
              height: Dimensions.get('window').height,
            }}>
            <View
              style={{
                backgroundColor: '#FFF',
                paddingHorizontal: 20,
              }}>
              {filters.map((x, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => onSetFilter(x, i)}
                    key={i}
                    style={{
                      marginBottom: 1,
                      paddingVertical: 10,
                      borderBottomWidth: 0.15,
                      borderColor: 'rgba(0,0,0,.3)',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Texts>{x.label}</Texts>
                    {x.value === true && (
                      <Icons name="check" color="#FE5A26" size={18} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}
      </View>
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
              <View style={{flexDirection: 'row'}}>
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
                  alignItems: 'center',
                  flex: 1,
                  marginTop: 20,
                  width: '100%',
                }}>
                <View>
                  <Texts
                    textStyles={{
                      textTransform: 'capitalize',
                      color: item.status === 'dibatalkan' ? '#FE5A26' : '#000',
                    }}>
                    {item.status}
                  </Texts>
                </View>
                <View style={{alignItems: 'flex-start', flex: 1}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FE5A26',
                      padding: 5,
                      width: '40%',
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Texts textStyles={{color: '#FFF'}}>Pesan lagi</Texts>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Containers>
  );
}
