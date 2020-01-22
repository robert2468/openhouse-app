import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import { Header, Icon } from "react-native-elements";
import Colors from "../constants/Colors"

import HamburgerMenu from "./HamburgerMenu.js";
import FacultyFilter from "./FacultyFilter.js";

var expandedFilter = false;

function RightHeaderComponent(props) {
  return (
    <View style={{marginVertical: 0}}>
      <Icon
        color="#fff"
        name="filter-list"
      />
    </View>
  );
}



const CustomHeader = props => {
  const [ expandedFilter, setExpandedFilter ] = React.useState(false)

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<HamburgerMenu navigation={props.navigation} />}
        centerComponent={{
          text: props.title,
          style: { color: "#fff", fontWeight: "bold", fontSize: 20 },
        }}
        rightComponent={props.showFilter?
                        <TouchableOpacity style={styles.row}  onPress={() => {setExpandedFilter(!expandedFilter)}}>
                          <RightHeaderComponent/>
                        </TouchableOpacity>
                        :<View></View> } 
        statusBarProps={{ barStyle: "light-content" }}
        containerStyle={{
          backgroundColor: Colors.WesternPurple,
        }}
      />
      {props.showFilter && expandedFilter?<FacultyFilter/>:<View></View>}
    </View>
  );
};

export default CustomHeader;


const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginHorizontal: 0,
  },
});