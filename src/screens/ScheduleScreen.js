import React from 'react';
import { View,Text, ScrollView, Image, StyleSheet, Icon } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/ScheduleList";


class ScheduleScreen extends React.Component {
  static navigationOptions = {
      title: 'Schedule',
      headerShown: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader showFilter={true} navigation={this.props.navigation} title="Schedule" />
        <ScheduleList navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E5E5E5',
  },
});
