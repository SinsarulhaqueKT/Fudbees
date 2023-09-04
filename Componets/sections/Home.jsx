import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  handlePress,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Datas, Downdata} from '../Data';

const Home = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.loclog}>
          <View style={styles.location}>
            <Image source={require('../Assets/navigation.png')} />
            <Text style={styles.loctext}>Location</Text>
            <Image
              style={{width: 20, height: 10}}
              source={require('../Assets/arrownew.png')}
            />
          </View>
          <Image
            style={styles.loginimg}
            source={require('../Assets/login.png')}
          />
        </View>
        <View style={styles.inputtotal}>
          <TextInput
            style={styles.input}
            placeholder="Search, order, Enjoy, Repeat"
            placeholderTextColor="grey"
          />
          <Image
            style={styles.search}
            source={require('../Assets/search.png')}
          />
          <Image
            style={styles.bar}
            source={require('../Assets/verticalline.png')}
          />
          <Image style={styles.mic} source={require('../Assets/mic.png')} />
        </View>

        <View style={styles.offpremium}>
          <View style={styles.offview}>
            <Text style={styles.offtext}>Offer Zone</Text>
            <Image
              style={styles.percent}
              source={require('../Assets/percentoff.png')}
            />
          </View>

          <View style={styles.offview}>
            <Text style={styles.offtext}>Premium</Text>
            <Image
              style={styles.premium}
              source={require('../Assets/premium.png')}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require('../Assets/banone.jpeg')}
              />
            </View>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require('../Assets/bantwo.jpeg')}
              />
            </View>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require('../Assets/bannertwo.jpg')}
              />
            </View>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require('../Assets/bannerthree.png')}
              />
            </View>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require('../Assets/bannerfour.jpg')}
              />
            </View>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require('../Assets/bannerfive.jpg')}
              />
            </View>
          </ScrollView>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
          <Text
            style={{color: 'black', fontSize: 22, fontWeight: 500, height: 50}}>
            Quick picks for you
          </Text>
        </View>
        <View style={{ width:150,marginLeft:20}}>
          <TouchableOpacity onPress={handlePress} style={{}}>
            <View style={{backgroundColor: 'black', padding: 10,borderRadius:30,fontSize:20,alignItems:'center'}}>
              <Text style={{color: 'white',fontSize:12}}>Lowest Delivery Free</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:420, alignItems: 'center',borderBottomWidth:1,borderBottomColor:'#999897'}}>
          <FlatList
            style={{
              width: 400,
              flexDirection: 'row',
              marginLeft: 12,
            }}
            data={Datas}
            renderItem={({item}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: 130,
                  
                  borderColor:'black'
                }}>
                <View style={{width:95,alignItems: 'center', backgroundColor: '#818a84',marginTop:10,borderRadius:10,height:120}}>
                  <Image style={styles.itemImage} source={item.imgone} />
                  <Image  style={{position:'relative',height:20,width:20,marginLeft:60,marginTop:15}} source={require('../Assets/heart.png')}/>
                  <Text style={{fontSize: 20, position:'relative',color:'white',fontWeight:'bold',marginTop:30,marginRight:10}}>
                    {item.off}
                    
                  </Text>
                  <Text style={{fontSize: 12, position:'relative',color:'white',marginRight:10}}>
                    {item.upto}
                    
                  </Text>
                </View>
                <Text style={{fontSize: 16,color:'black'}}>
                    {item.text}
                  </Text>
                <View style={{ width:120,height:30,marginTop:5,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                  <Image style={{width:17,height:17}} source={require('../Assets/star.png')}/>
                  <Text style={{color:'grey'}}>{item.rate}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity style={{borderBottomWidth:1,alignItems:'center',justifyContent:'center',borderBottomColor:'#999897'}}>
          <View style={{height:60,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <Text style={{color:'#ed9026',fontSize:16,fontWeight:500}}>See more restaurents </Text>
            <Image style={{width:30,height:30}} source={require('../Assets/chevron.png')}/>
            
          </View>
        </TouchableOpacity>
        <View style={{marginTop:10,marginLeft:10,flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
          <View style={{flexDirection:'row',borderWidth:1,width:70,alignItems:'center',marginTop:10,borderRadius:7}}>
            <Text style={{color:'black'}}>Filter</Text>
            <Image style={{width:20,height:20}} source={require('../Assets/filter.png')}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',borderWidth:1,width:80,alignItems:'center',marginTop:10,borderRadius:7}}>
            <Text style={{color:'black'}}>Sort By</Text>
            <Image style={{width:20,height:10}} source={require('../Assets/arrownew.png')}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',borderWidth:1,width:70,alignItems:'center',marginTop:10,borderRadius:7}}>
            <Text style={{color:'black'}}>Filter</Text>
            <Image style={{width:20,height:20}} source={require('../Assets/filter.png')}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',borderWidth:1,width:70,alignItems:'center',marginTop:10,borderRadius:7}}>
            <Text style={{color:'black'}}>Filter</Text>
            <Image style={{width:20,height:20}} source={require('../Assets/filter.png')}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',borderWidth:1,width:70,alignItems:'center',marginTop:10,borderRadius:7}}>
            <Text style={{color:'black'}}>Filter</Text>
            <Image style={{width:20,height:20}} source={require('../Assets/filter.png')}/>
          </View>
        </TouchableOpacity>
        </View>
        <Text style={{color:'black' ,marginLeft:20,marginTop:30,fontSize:21,fontWeight:500}}>Restaurents to explore</Text>
        <View style={{height:600, alignItems: 'center',borderBottomWidth:1}}>
          <FlatList
            style={{
              width: 400,
              // flexDirection: 'row',
              marginLeft: 12,
              height:200,
            }}
            data={Downdata}
            renderItem={({item}) => (
              <View
                style={{
          
                  width: 380,
                
                  // backgroundColor:'blue',
                  marginTop:10,
                  borderColor:'black',
                  paddingLeft:10,
                  flexDirection:'row',
            
                }}>
                <View style={{width:120,alignItems: 'center', backgroundColor: '#818a84',marginTop:10,borderRadius:10,height:170}}>
                  <Image style={styles.itemImage} source={item.downimg} />
                  <Image  style={{position:'relative',height:20,width:20,marginLeft:60,marginTop:15}} source={require('../Assets/heart.png')}/>
                  <Text style={{fontSize: 23, position:'relative',color:'white',fontWeight:'bold',marginTop:80}}>
                    {item.off}
                    
                  </Text>
                  <Text style={{fontSize: 16, position:'relative',color:'white'}}>
                    {item.upto}
                    
                  </Text>
                </View>
               <View>
                <Text style={{color:'black',fontSize:20,marginLeft:12,marginTop:10}}>{item.shop}</Text>
                <View style={{ width:120,height:30,marginTop:5,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                  <Image style={{width:17,height:17}} source={require('../Assets/star.png')}/>
                  <Text style={{color:'grey'}}>{item.rate}</Text>
                </View>
                <Text style={{color:'black',marginLeft:12}}>{item.nation}</Text>
                <Text style={{color:'black',marginLeft:12}}>{item.loc}</Text>

          <View>
          
          <TouchableOpacity style={{backgroundColor:'#e6daf2',marginLeft:10,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:130,borderRadius:10,marginTop:34,height:25}}>
            <View style={{backgroundColor:'#822be0',borderRadius:20,alignItems:'center'}}>
            <Image style={{width:20,height:20}} source={require('../Assets/motorcycle.png')}/>
            </View>
            <Text style={{color:'#822be0',fontWeight:500}}>Free Delivery</Text>

          </TouchableOpacity>


            </View>


               </View>


              </View>

            )}
            keyExtractor={(item, index) => index.toString()}
            numRows={1}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 2500,
  },
  location: {
    width: 200,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    alignItems: 'center',
  },
  loctext: {
    color: 'black',
  },
  loginimg: {
    width: 40,
    height: 40,
    marginTop: 28,
    borderRadius: 20,
    marginRight: 20,
    backgroundColor: 'black',
  },
  loclog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 70,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    color: 'black',
  },
  inputtotal: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'lightgrey',
    height: 60,
    width: 390,
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    marginTop:15,
    elevation:5
  },
  scroll: {
    backgroundColor: 'yellow',
  },
  search: {
    width: 20,
    height: 25,
  },
  bar: {
    height: 43,
  },
  mic: {
    marginRight: 10,
    height: 18,
    width: 12,
  },
  offview: {
    color: 'black',
    backgroundColor: '#dee0df',
    width: 180,
    height: 75,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  offtext: {
    color: 'black',
  },
  offpremium: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  percent: {
    height: 50,
    width: 50,
   
  },
  premium: {
    height: 50,
    width: 50,
  },
  banner: {
    width: 370,
    height: 250,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  bannerImage: {
    width: 350,
    height: 240,
    borderRadius: 10,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemContainer: {
    marginLeft: 5,
    marginVertical: 5,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    marginLeft: 10,
    position:'absolute',
    objectFit:'cover',
  },
});
