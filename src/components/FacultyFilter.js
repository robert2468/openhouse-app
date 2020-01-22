import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { Button } from 'react-native-elements';

const FacultyFilter = props => {
  return (
    <View style={styles.container}>
      <Button containerStyle={styles.filterButton} type="outline" title="Faculty 1"></Button>
      <Button containerStyle={styles.filterButton} type="outline" title="Faculty 2"></Button>
    </View>
  );
};

export default FacultyFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginHorizontal: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  filterButton: {
    marginVertical: 5,
  }

  // filterButton: {
  //   borderColor: '#000000',
  //   borderRadius: 20,
  //   borderWidth: 1,
  //   padding: 5,
  //   paddingHorizontal: 15,
  //   justifyContent: 'flex-start',
  //   flexDirection: 'row',
  //   flexGrow: 0
  // }
});