import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppLoading from '../../components/common/app-loading/AppLoading';
import AddButton from '../../components/common/add-button/AddButton';
import SummatorUtil from '../../utils/summator/SummatorUtil';
import Alphabetter from '../../utils/alphabetter/Alphabetter';

const FirstScreen = () => {
  const addButtonClickHandler = () => {
    const numRes = SummatorUtil.sumNumbers({num1: 1, num2: 2});
    const strRes = SummatorUtil.sumTextStrings('s1', 's2');
    const jOrderNumber = Alphabetter.letterOrderNumber('j');

    console.log(
      'ADD_BUTTON_PRESSED: ' + numRes + ' - ' + strRes + ' - ' + jOrderNumber
    );
  };

  return (
    <View style={styles.mainContainer}>
      <AppLoading />
      <View style={styles.addButtonContainer}>
        <AddButton visible={true} onClick={addButtonClickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  addButtonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default FirstScreen;
