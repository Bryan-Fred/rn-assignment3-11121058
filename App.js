import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, } from 'react-native';

const App = () => {
  const categoriesData = [
    { title: 'Exercise', tasks: 12, categoryImage: require('./photos/exercise-icon.png') },
    { title: 'Study', tasks: 12, categoryImage: require('./photos/study-image.webp') },
    { title: 'Gaming', tasks: 12, categoryImage: require('./photos/gaming-image.png') },
    { title: 'Code', tasks: 12, categoryImage: require('./photos/code-image.png') },
    { title: 'Sports', tasks: 12, categoryImage: require('./photos/sports-image.png') },
    { title: 'Budgeting', tasks: 12, categoryImage: require('./photos/budget-image.png') },
    { title: 'Read', tasks: 12, categoryImage: require('./photos/read-image.png') },
    { title: 'Music', tasks: 12, categoryImage: require('./photos/music-icon.png') },
    { title: 'Adventure', tasks: 12, categoryImage: require('./photos/adventure-image.png') },
    { title: 'Travel', tasks: 12, categoryImage: require('./photos/travel-image.png') },
    { title: 'Yoga', tasks: 12, categoryImage: require('./photos/yoga-image.webp') },
  ];

  const ongoingTasksData = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Artificial Intelligence ' },
    { id: '4', title: 'Cloud Computing' },
    { id: '5', title: 'Data Science & Analytics' },
    { id: '6', title: 'Virtual Reality' },
    { id: '7', title: 'Game Development' },
    { id: '8', title: 'Machine Learning Engineering' },
    { id: '9', title: 'Software Engineering' },
    { id: '10', title: 'Robotics' },
    { id: '11', title: 'Big Data Engineering' },
    { id: '12', title: 'Computer Vision' },
    { id: '13', title: 'Backend Development' },
    { id: '14', title: 'Embedded Systems' },
    { id: '15', title: 'Natural Language Processing' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.task}>
      <Text style={styles.taskTitle}>{item.title}</Text>
    </View>
  );

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

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesSection}>
        <ScrollView horizontal={true} style={styles.categoriesContainer}>
          {categoriesData.map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.title}>{category.title}</Text>
              <Text style={styles.tasks}>{category.tasks} Tasks</Text>
              <View  style={styles.categoryImage}>
                  <Image style={styles.categoryIcons} source={category.categoryImage}/>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <FlatList
        data={ongoingTasksData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0e2d3',
    flex: 1,
    paddingTop: 30,
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

  sectionTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 10,
  },


  categoriesSection:{
    marginBottom: 20,
  },

  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    
  },

  category:{
    marginRight: 20,
    height: 190,
    width: 180,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingTop: 10,
  },

  title:{
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 15,
  },

  tasks:{
    marginLeft: 20,
    fontSize: 10,
  },

  categoryImage:{
    height: 120,
    width: 130,
    marginLeft: 20,

  },

  categoryIcons:{
    backgroundColor: 'white',
    height: 140,
    width: 140,
  },

  task: {
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    height: 100,

    padding: 16,
    borderRadius: 15,
    marginBottom: 16,
  },

  taskTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },


});

export default App;
