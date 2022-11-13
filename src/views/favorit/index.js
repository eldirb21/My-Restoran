import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Containers from '../../components/atoms/Containers';
import {useIsFocused} from '@react-navigation/native';
import AppBar from '../../components/molecules/AppBar';
import Texts from '../../components/atoms/Texts';
import Icons from '../../components/atoms/Icons';
import {datas} from '../../services/data';
import Buttons from '../../components/atoms/Buttons';
import FUNC from '../../utils/Func';

export default function Favorit({navigation}) {
  const [Items, setItems] = useState(datas.favorit);

  const onAddition = (index, item, type) => {
    var newItems = [...Items];
    if (type === 'min') {
      if (newItems[index].qty !== 0) {
        newItems[index].qty = item.qty - 1;
        newItems[index].totalPrice = item.totalPrice - item.price;
      }
    } else if (type === 'add') {
      newItems[index].qty = item.qty + 1;
      newItems[index].totalPrice = item.totalPrice + item.price;
    }
    setItems(newItems);
  };
  const onLikesItem = (item, index) => {
    var isLiked = FUNC.boolItemArr(Items, index, 'isLike');
    setItems(isLiked);
  };
  const onRemoveItem = (item, index) => {
    var removed = FUNC.removeItemArr(Items, index, 'isAdd');
    setItems(removed);
  };
  return (
    <Containers barColor="#FFF" isFocused={useIsFocused()}>
      <AppBar title="Favorit" />
      <FlatList
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetail', item)}
              key={index}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: '#FFF',
                marginBottom: 1,
                flex: 1,
              }}>
              <Image
                style={{
                  height: 90,
                  width: 100,
                }}
                source={{uri: item.image}}
              />
              <View style={{marginLeft: 10, flex: 1}}>
                <Texts>{item.name}</Texts>
                <Texts textStyles={{color: 'gray'}}>{item.type}</Texts>
                <View style={{marginTop: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icons
                        color="#FE9226"
                        name="ios-star"
                        type={'Ionicons'}
                        size={10}
                      />
                      <Texts textStyles={{marginLeft: 5}}>{item.star}</Texts>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 10,
                      }}>
                      <Icons
                        color="grey"
                        name="time-outline"
                        type={'Ionicons'}
                        size={12}
                      />
                      <Texts textStyles={{marginLeft: 5}}>{item.time}</Texts>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => onAddition(index, item, 'min')}
                      style={{
                        borderWidth: 1,
                        borderRadius: 2,
                        borderColor: '#FE9226',
                        marginRight: 8,
                      }}>
                      <Icons
                        name="minus"
                        type="MaterialCommunityIcons"
                        size={15}
                        color="#FE9226"
                      />
                    </TouchableOpacity>
                    <Texts>{item.qty || 0}</Texts>
                    <TouchableOpacity
                      onPress={() => onAddition(index, item, 'add')}
                      style={{
                        backgroundColor: '#FE9226',
                        borderRadius: 2,
                        marginLeft: 8,
                      }}>
                      <Icons
                        name="plus"
                        type="MaterialCommunityIcons"
                        size={15}
                        color="#FFF"
                      />
                    </TouchableOpacity>
                    {item.totalPrice !== 0 && (
                      <View style={{marginLeft: 10}}>
                        <Texts>{FUNC.currency(item.totalPrice)}</Texts>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: -5,
                    right: 20,
                    top: 0,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity onPress={() => onRemoveItem(item, index)}>
                    <Icons
                      color="grey"
                      name={'trash'}
                      type={'Ionicons'}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{}}
                    onPress={() => onLikesItem(item, index)}>
                    <Icons
                      color="red"
                      name={item.isLike ? 'heart' : 'heart-outline'}
                      type={'Ionicons'}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 5,
            paddingBottom: 10,
          }}>
          <Texts>Total</Texts>
          <Texts>
            {FUNC.currency(FUNC.reduceArr(Items, 'totalPrice', 'isLike'))}
          </Texts>
        </View>
        <Buttons
          title="Checkout"
          isFull
          onPress={() => {
            console.log('press me');
          }}
        />
      </View>
    </Containers>
  );
}
