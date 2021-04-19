import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers/index";
import Header from "./src/components/common/Header";
import LibraryList from "./src/components/LibraryList";
import { CardSection } from "./src/components/common/CardSection";
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Evil Squad" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
