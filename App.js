import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.welcomeMessageContainer}>Hello , Devs</Text>
          <Text style={styles.smallText}>14 tasks today</Text>
        </View>
        <View style={styles.userIconContainer}>
          <Image style={styles.userIcon} source={require('./photos/user-icon.jpg')} />
        </View>
      </View>

      <View style={styles.searchFilterContainer}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder='Search'
          placeholderTextColor='black'         
          keyboardType='text'
        />
        <View style={styles.filterContainer}>
        <Icon name="sliders" style={styles.filterIcon} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0e2d3',
    flex: 1,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },

  welcomeMessageContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },

  smallText:{
    fontSize: 12.5,
  },

  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  userIconContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },

  searchFilterContainer:{
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  searchBar:{
    backgroundColor: 'white',
    width: 260,
    borderRadius: 10,
    paddingLeft: 35,
    fontWeight: 'bold',
    fontSize: 18,
  },

  searchIcon:{
    fontSize: 18,
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },

  filterContainer: {
    width: 40,
    borderRadius: 10,
    backgroundColor: '#f3775b',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterIcon:{
    color: 'white',
    fontSize: 30,
  },


});

export default App;
