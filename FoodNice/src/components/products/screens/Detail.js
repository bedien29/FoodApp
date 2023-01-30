import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles/StyleDetail';

const Detail = props => {
  const {navigation} = props;
  const [item, setItem] = useState(props.route.params.item);
  const [products, setProducts] = useState(props.route.params.products);
  const [productNew, setProductNew] = useState(props.route.params.productNew);
  const [category, setCategory] = useState(props.route.params.categories);

  const [active, setActive] = useState('All');
  const [data, setData] = useState(products);

  const productsFilter = active => {
    //console.log(active);
    if (active === 'All') {
      setData(products);
    } else {
      setData([...products.filter(item => item.category_id.name === active)]); //tại sao đúng category_id mà vẫn không hiển thị ra. trả lời: vì category_id là số, active là chuỗi nên phải chuyển active thành số để so sánh.
    }
    setActive(active);
  };
  console.log(data.length);
  const renderItemOne = ({item}) => {
    return (
      <View style={styles.categoryContainerOne}>
        <Pressable
          style={styles.productOne}
          onPress={() => navigation.navigate('Detail')}>
          <View style={styles.productImageContainerOne}>
            <Image
              style={styles.productImageOne}
              resizeMode="cover"
              source={{uri: item.image}}
            />
          </View>
          <Text numberOfLines={1} style={styles.productNameOne}>
            {item.name}
          </Text>
        </Pressable>
      </View>
    );
  };

  const renderItemCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => productsFilter(item.name)}
        style={[styless.name, active === item.name && styless.nameActive]}
        key={index}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            color: 'white',
            textAlign: 'center',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <View style={{width: 110, height: 110}}>
              <Pressable>
                <Image
                  source={{uri: item.image}}
                  style={{width: '100%', height: '100%', borderRadius: 8}}
                />
              </Pressable>
            </View>
            <View style={{paddingLeft: 10, width: '90%'}}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#010F07'}}>
                {item.name}
              </Text>
              <Text numberOfLines={2} style={{fontSize: 16}}>
                {item.description}
              </Text>
              <View style={styles.itemPrice}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // marginTop: 20,
                    alignItems: 'center',
                    color: '#010F07',
                    fontSize: 14,
                  }}>
                  <Text>{item.size}</Text>
                  <Text style={{marginHorizontal: 10}}>.</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    {item.address}
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#22A45D',
                    fontSize: 14,
                    fontWeight: '500',
                    // marginTop: 20,
                    position: 'absolute',
                    right: 0,
                  }}>
                  USD{item.price}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: item.image}}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.iconsContainer}>
          <Pressable style={styles.back} onPress={navigation.goBack}>
            <Image source={require('../../../../assets/images/back.png')} />
          </Pressable>
          <View style={styles.shareSearch}>
            <Pressable style={styles.share}>
              <Image source={require('../../../../assets/images/shape.png')} />
            </Pressable>
            <Pressable style={styles.search}>
              <Image
                source={require('../../../../assets/images/search1.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: 'black',
              marginTop: 20,
            }}>
            {item.name}
          </Text>
          <View style={styles.addressContainer}>
            <Text style={styles.textAddress}>$ {item.price} </Text>
            <Text style={styles.textAddress}>:</Text>
            <Text style={styles.textAddress}>{item.address}</Text>
            <Text style={styles.textAddress}>:</Text>
            <Text style={styles.textAddress}>{item.category_id.name} </Text>
            <Text style={styles.textAddress}>:</Text>
            <Text style={styles.textAddress}>{item.size} </Text>
          </View>
          <View style={styles.mapContainer}>
            <Text style={styles.textMap}>4.3</Text>
            <Image
              style={{width: 11, height: 11, marginRight: 8}}
              source={require('../../../../assets/images/rating.png')}
            />
            <Text style={styles.textMap}>200+ Ratings</Text>
          </View>
          <View style={styles.orderContainer}>
            <View style={styles.textOrderContainer}>
              <View style={styles.textContainer}>
                <Image
                  style={{width: 16, height: 16, margin: 3}}
                  source={require('../../../../assets/images/delivery.png')}
                />
                <View>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    Free
                  </Text>
                  <Text>Delivery</Text>
                </View>
              </View>
              <View style={styles.textContainer}>
                <Image
                  style={{width: 16, height: 16, margin: 3}}
                  source={require('../../../../assets/images/clock.png')}
                />
                <View>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    25
                  </Text>
                  <Text>Minutes</Text>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('ProductDetail')}>
              <Text style={styles.textButton}>Take away</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainerOne}>
          <Text style={styles.sanfranciscoOne}>Featured Items</Text>
        </View>
        <FlatList
          data={productNew}
          horizontal={true}
          renderItem={renderItemOne}
          keyExtractor={Math.random}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={category}
          horizontal={true}
          renderItem={renderItemCategory}
          keyExtractor={Math.random}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.textContainerOne}>
          <Text style={styles.sanfranciscoOne}>Most Populars</Text>
        </View>
        <View>
          {data.length === 0 ? (
            <View
              style={{
                width: '100%',
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.textNoProduct}>No products</Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={Math.random}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

var listImg = {
  _id: '61d12f0c555401c8610fb8da',
  name: "McDonald's",
  price: 299.43,
  madein: 'Russia',
  quantity: 4593942547,
  category: 'Cafe',
  images: require('../../../../assets/images/bg1.png'),
  sold: 372,
  size: 'S',
  createdAt: '2021-09-09T10:51:16.000Z',
  updatedAt: '2021-11-03T17:51:12.000Z',
};

var data = [
  {
    _id: '61d12f0c555401c8610fb8da',
    name: "McDonald's",
    price: 299.43,
    madein: 'Russia',
    quantity: 4593942547,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg1.png'),
    sold: 372,
    size: 'S',
    createdAt: '2021-09-09T10:51:16.000Z',
    updatedAt: '2021-11-03T17:51:12.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8d2',
    name: 'Cafe Brichor’s',
    price: 299.43,
    madein: 'Russia',
    quantity: 4639829816,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg2.png'),
    sold: 307,
    size: '3XL',
    createdAt: '2021-07-25T08:56:22.000Z',
    updatedAt: '2021-08-21T13:12:26.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8dc',
    name: 'Daylight Coffee',
    price: 299.43,
    madein: 'Finland',
    quantity: 6045438052,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg3.png'),
    sold: 107,
    size: 'M',
    createdAt: '2021-04-17T09:05:36.000Z',
    updatedAt: '2021-06-16T06:42:00.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8dd',
    name: 'Nike Air Max 270 React ENG',
    price: 299.43,
    madein: 'Armenia',
    quantity: 2518305581,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg2.png'),
    sold: 104,
    size: 'S',
    createdAt: '2021-05-24T19:12:38.000Z',
    updatedAt: '2021-12-27T15:12:21.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8df',
    name: 'Nike Air Max 270 React ENG',
    price: 299.43,
    madein: 'Ireland',
    quantity: 4194160884,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg3.png'),
    sold: 137,
    size: '3XL',
    createdAt: '2021-03-18T14:52:14.000Z',
    updatedAt: '2021-01-28T02:59:57.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8d5',
    name: 'Nike Air Max 270 React ENG',
    price: 299.43,
    madein: 'China',
    quantity: 6865976422,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg1.png'),
    sold: 109,
    size: 'L',
    createdAt: '2021-07-27T12:19:46.000Z',
    updatedAt: '2021-05-12T02:18:43.000Z',
  },
];

var dataCategories = [
  {
    id: 1,
    categories: 'Beef & Lamb',
  },
  {
    id: 2,
    categories: 'Seafood',
  },
  {
    id: 3,
    categories: 'Appetizers',
  },
  {
    id: 4,
    categories: 'Dim Sum',
  },
];

var dataTwo = [
  {
    _id: '61d12f0c555401c8610fb8da',
    name: "McDonald's",
    price: 7.4,
    madein: 'Russia',
    quantity: 4593942547,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg1.png'),
    sold: 372,
    size: 'S',
    createdAt: '2021-09-09T10:51:16.000Z',
    updatedAt: '2021-11-03T17:51:12.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8d2',
    name: 'Cafe Brichor’s',
    price: 4.7,
    madein: 'Russia',
    quantity: 4639829816,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg2.png'),
    sold: 307,
    size: '3XL',
    createdAt: '2021-07-25T08:56:22.000Z',
    updatedAt: '2021-08-21T13:12:26.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
  {
    _id: '61d12f0c555401c8610fb8dc',
    name: 'Daylight Coffee',
    price: 5.0,
    madein: 'Finland',
    quantity: 6045438052,
    category: '61d11c4b86511f0016f490ed',
    images: require('../../../../assets/images/bg3.png'),
    sold: 107,
    size: 'M',
    createdAt: '2021-04-17T09:05:36.000Z',
    updatedAt: '2021-06-16T06:42:00.000Z',
    title: 'Shortbread, chocolate turtle cookies, and red velvet.',
  },
];

const styless = StyleSheet.create({
  name: {
    backgroundColor: 'crimson',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  nameActive: {
    backgroundColor: '#000',
  },
});
