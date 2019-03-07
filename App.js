import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

import { Constants } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  renderItem = ({ item }) => {
    return (

      <View style={styles.bottomItemInner}>
        <Image source={{ uri: item.urls.regular }}
          style={{ width: 150, height: '65%' }}
          PlaceholderContent={<ActivityIndicator />} />
        <View>
          <Text style={styles.text}>
            {item.user.first_name}
          </Text>
          <Text style={styles.text}>
            {item.user.last_name}
          </Text>
        </View>
      </View>
    )
  }
  componentDidMount() {
    const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
    fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState({
          data:
            response
        }))
      .catch(error => console.log(error))

  }
  getSelectedImages(image) {

  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.top}>

        </View>

        <View style={styles.bottom}>

          <FlatList horizontal={true}
            data={this.state.data}
            renderItem={this.renderItem} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    height: '10%',
  },
  bottom: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomItemInner: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'

  },
});



