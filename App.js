import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//Required Dependency
import Timeline from 'react-native-timeline-flatlist';

//variable storing mutiple data
const data = [
{time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'} 
]
export default class App extends React.Component { 
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize:30,color:"green",margin:40,fontWeight:"bold",marginLeft:700}}>Timeline</Text>
      
        <Timeline data={data}
        circleSize={20}
        circleColor='rgb(45,156,219)' lineColor='rgb(45,156,219)'
        timeContainerStyle={{ minWidth: 52, marginTop: 10 }}
        titleStyle={{color:'green'}}
        timeStyle= 
        {{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'blue',
          padding: 5,
          borderRadius: 13,
        
        }}
        descriptionStyle={{ color: 'black' }}
        options=
        {{
          style: { paddingTop: 5,  marginLeft:500},
        }}
        innerCircle={'dot'}
        columnFormat='two-column' />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
