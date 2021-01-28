import React from 'react';
import {View, Text} from 'react-native';

class MainErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log(
      'MainErrorBoundary->ERROR: ' +
        error.toString() +
        ' - ' +
        errorInfo.toString(),
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Error</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default MainErrorBoundary;
