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



});

export default App;
