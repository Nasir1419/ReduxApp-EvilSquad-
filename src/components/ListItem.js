import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Image,
} from "react-native";
import * as actions from "../actions";
import { connect } from "react-redux";
class ListItem extends Component {
  UNSAFE_componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <View style={styles.containerStyle}>
          <Text style={{ flex: 1, padding: 15, color: "#4a4a4a" }}>
            {library.item.description}
          </Text>
        </View>
      );
    }
  }
  render() {
    const { id, title, url } = this.props.library.item;
    console.log(this.props.library.item);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <View style={styles.containerStyle}>
            <Image
              source={{
                uri: url,
              }}
              style={{ width: 80, height: 80, borderRadius: 100 }}
            />
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
  },
  titleStyle: { fontSize: 20, paddingLeft: 15, color: "#303030" },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
