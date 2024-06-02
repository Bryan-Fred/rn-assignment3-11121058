# React Native App

## Project Description
This app serves as a showcase of various UI components and features built using React Native. It demonstrates the implementation of a UI design provided, focusing on recreating the design faithfully while leveraging the capabilities of React Native.

## Components Overview

### 1. View Component
The View component serves as a core element for structuring UI layouts in React Native, allowing for the arrangement and styling of other components.

Usage:
```jsx
<View style={styles.container}>
  {/* Content here */}
</View>
```

### 2. Text Component
The Text component displays text content with styling and formatting options, enhancing readability and visual appeal.

Usage:
```jsx
<Text style={styles.text}>Hello, Devs!</Text>
```

### 3. Button Component
The Button component creates clickable buttons within the app, supporting custom titles and onPress event handlers for user interaction.

Usage:
```jsx
<Button
  title="Press me"
  onPress={() => console.log('Button pressed')}
/>
```

### 4. TextInput Component
The TextInput component enables users to input text, providing customizable styling and functionality for text input fields.

Usage:
```jsx
<TextInput
  style={styles.input}
  placeholder="Enter text"
  keyboardType = "text"
/>
```

### 5. ScrollView Component
The ScrollView component enables users to scroll through content that exceeds the screen size, facilitating seamless navigation.

Usage:
```jsx
<ScrollView>
  {/* Content here */}
</ScrollView>
```

### 6. Image Component
The Image component displays images within the app, supporting various sources such as local files, network URLs, and base64 encoded images.

Usage:
```jsx
<Image
  source={require('./path/to/image.png')}
  style={styles.image}
/>
```

### 7. FlatList Component
The FlatList component efficiently renders lists of data, optimizing performance by rendering only the items currently visible on the screen.

Usage:
```jsx
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
/>
```

### 8. SectionList Component
The SectionList component is used to render lists of data with section headers. It efficiently renders large lists and provides a convenient way to organize data into sections.

Usage:
```jsx
<SectionList
  sections={data}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  keyExtractor={(item, index) => index}
/>
```

### 9. Stylesheet
The Stylesheet module organizes and applies styles to components efficiently, ensuring consistent and visually appealing UI designs.

Usage:
```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
```

### Screenshot
![Screenshot](photos/screenshot.jpg)