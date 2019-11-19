import React, { Component } from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Select, Alert, ScrollView, Picker, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Constants from 'expo-constants';
import dummyData from './dummyData.js';

function Separator() {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 3,
    backgroundColor: 'black',
  },
  header: {
    color: 191970,
    textAlign: 'center',
    fontSize: 30,
  },
  description: {
    color: 123123,
    textAlign: 'left',
    fontSize: 23,
    color : 'white',
  },
  head: {
     height: 40,
      backgroundColor: 'black',
 },
  text: {
     margin: 6 ,
     fontSize: 10,
     color: "white",
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'white',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  dropDown: {
    backgroundColor: 'black',
    textAlign: 'center',
    width: 200,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  goBack : {
    width: 30,
    marginTop: 10,
  },
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionRender : true,
      top: 'Select Your Top',
      jungler: 'select your Jungler',
      mid: 'select your Mid',
      carry: 'select your Carry',
      flex: 'select your Flex',
      team: 'select your Team',
      tableHead: ["   ", 'Top', 'Jungler', 'Mid', 'Carry', 'Flex', 'Team'],
    };
  }
  handleRecruitClick(){
    this.setState({selectionRender : false})
  };
  handleSelectionClick(){
    this.setState({selectionRender : true})
  }

  render() {
    const playerTop = this.state.top;
    const playerJungler = this.state.jungler;
    const playerMid = this.state.mid;
    const playerCarry = this.state.carry;
    const playerFlex = this.state.flex;
    const playerTeam = this.state.team;
    //-----------------------------------------
    const topData = [];
    if (playerTop === dummyData[0].top[0].Smeb[0]){
      for(var i = 0; i < 5; i++)
        topData.push(dummyData[0].top[0].Smeb[i]);
    }
    else if (playerTop === dummyData[0].top[1].Kiin[0]){
      for(var i = 0; i < 5; i++)
        topData.push(dummyData[0].top[1].Kiin[i]);
    }
    else if (playerTop === dummyData[0].top[2].LetMe[0]){
      for(var i = 0; i < 5; i++)
        topData.push(dummyData[0].top[2].LetMe[i]);
    }
    else if (playerTop === dummyData[0].top[3].CuVee[0]){
      for(var i = 0; i < 5; i++)
        topData.push(dummyData[0].top[3].CuVee[i]);
    }
    else if (playerTop === dummyData[0].top[4].Ssumday[0]){
      for(var i = 0; i < 5; i++)
        topData.push(dummyData[0].top[4].Ssumday[i]);
    }
    //---------------------------------------------------
    const midData = [];
    if (playerMid === dummyData[1].mid[0].Maple[0]){
      for(var i = 0; i < 5; i++)
        midData.push(dummyData[1].mid[0].Maple[i]);
    }
    else if (playerMid === dummyData[1].mid[1].Caps[0]){
      for(var i = 0; i < 5; i++)
        midData.push(dummyData[1].mid[1].Caps[i]);
    }
    else if (playerMid === dummyData[1].mid[2].Kuro[0]){
      for(var i = 0; i < 5; i++)
        midData.push(dummyData[1].mid[2].Kuro[i]);
    }
    else if (playerMid === dummyData[1].mid[3].Yukal[0]){
      for(var i = 0; i < 5; i++)
        midData.push(dummyData[1].mid[3].Yukal[i]);
    }
    else if (playerMid === dummyData[1].mid[4].Rookie[0]){
      for(var i = 0; i < 5; i++)
        midData.push(dummyData[1].mid[4].Rookie[i]);
    }
    //------------------------------------------------------
    const JunData = [];
    if (playerJungler === dummyData[3].jungler[0].Karsa[0]){
      for(var i = 0; i < 5; i++)
        JunData.push(dummyData[3].jungler[0].Karsa[i]);
    }
    else if (playerJungler === dummyData[3].jungler[1].DNK[0]){
      for(var i = 0; i < 5; i++)
        JunData.push(dummyData[3].jungler[1].DNK[i]);
    }
    else if (playerJungler === dummyData[3].jungler[2].Xerxe[0]){
      for(var i = 0; i < 5; i++)
        JunData.push(dummyData[3].jungler[2].Xerxe[i]);
    }
    else if (playerJungler === dummyData[3].jungler[3].Shrimp[0]){
      for(var i = 0; i < 5; i++)
        JunData.push(dummyData[3].jungler[3].Shrimp[i]);
    }
    else if (playerJungler === dummyData[3].jungler[4].Canyon[0]){
      for(var i = 0; i < 5; i++)
        JunData.push(dummyData[3].jungler[4].Canyon[i]);
    }
  //---------------------------------------------------------
  const carryData = [];
  if (playerCarry === dummyData[2].carry[0].Uzi[0]){
    for(var i = 0; i < 5; i++)
     carryData.push(dummyData[2].carry[0].Uzi[i]);
  }
  else if (playerCarry === dummyData[2].carry[1].Deft[0]){
    for(var i = 0; i < 5; i++)
     carryData.push(dummyData[2].carry[1].Deft[i]);
  }
  else if (playerCarry === dummyData[2].carry[2].Ruler[0]){
    for(var i = 0; i < 5; i++)
     carryData.push(dummyData[2].carry[2].Ruler[i]);
  }
  else if (playerCarry === dummyData[2].carry[3].Jackeylove[0]){
    for(var i = 0; i < 5; i++)
     carryData.push(dummyData[2].carry[3].Jackeylove[i]);
  }
  else if (playerCarry === dummyData[2].carry[4].Doublelift[0]){
    for(var i = 0; i < 5; i++)
     carryData.push(dummyData[2].carry[4].Doublelift[i]);
  }
    //---------------------------------------------------------
    const flexData = [];
    if (playerFlex === dummyData[4].flex[1].Kiin[0]){
      for(var i = 0; i < 5; i++)
        flexData.push(dummyData[4].flex[1].Kiin[i]);
    }
    else if (playerFlex === dummyData[4].flex[6].Deft[0]){
      for(var i = 0; i < 5; i++)
        flexData.push(dummyData[4].flex[6].Deft[i]);
    }
    else if (playerFlex === dummyData[4].flex[11].Caps[0]){
      for(var i = 0; i < 5; i++)
        flexData.push(dummyData[4].flex[11].Caps[i]);
    }
    else if (playerFlex === dummyData[4].flex[8].Jackeylove[0]){
      for(var i = 0; i < 5; i++)
        flexData.push(dummyData[4].flex[8].Jackeylove[i]);
    }
    else if (playerFlex === dummyData[4].flex[4].Ssumday[0]){
      for(var i = 0; i < 5; i++)
        flexData.push(dummyData[4].flex[4].Ssumday[i]);
    }
    
    //----------------------------------------------------------
    // Renders the first page, where the individual gets tho choose their players for their Roster
    //----------------------------------------------------------
    if(this.state.selectionRender === true){
    return(
        <ScrollView style={styles.container}>
        <View>
          <Text style={styles.header}>
            Welcome To Fantasy League!
          </Text>
          <Text style={styles.descriptions}>
            Get Ready to Draft your players! You must have 1 of each
          </Text>
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            {this.state.top}: 
          </Text>
          <Picker
            style={styles.title}
            selectedValue={this.state.top}
            onValueChange={(value) => this.setState({top: value})}>
            <Picker.Item label= {dummyData[0].top[0].Smeb[0]} value={dummyData[0].top[0].Smeb[0]} />
            <Picker.Item label= {dummyData[0].top[1].Kiin[0]} value={dummyData[0].top[1].Kiin[0]} />
            <Picker.Item label= {dummyData[0].top[2].LetMe[0]} value={dummyData[0].top[2].LetMe[0]} />
            <Picker.Item label= {dummyData[0].top[3].CuVee[0]} value={dummyData[0].top[3].CuVee[0]} />
            <Picker.Item label= {dummyData[0].top[4].Ssumday[0]} value={dummyData[0].top[4].Ssumday[0]} />
          </Picker>
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            {this.state.jungler}:
          </Text>
          <Picker
            style={styles.title}
            selectedValue={this.state.jungler}
            onValueChange={(value) => this.setState({jungler: value})}>
              <Picker.Item label= {dummyData[3].jungler[0].Karsa[0]} value={dummyData[3].jungler[0].Karsa[0]} />
              <Picker.Item label= {dummyData[3].jungler[1].DNK[0]} value={dummyData[3].jungler[1].DNK[0]} />
              <Picker.Item label= {dummyData[3].jungler[2].Xerxe[0]} value={dummyData[3].jungler[2].Xerxe[0]} />
              <Picker.Item label= {dummyData[3].jungler[3].Shrimp[0]} value={dummyData[3].jungler[3].Shrimp[0]} />
              <Picker.Item label= {dummyData[3].jungler[4].Canyon[0]} value={dummyData[3].jungler[4].Canyon[0]} />
          </Picker>
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            {this.state.mid}:
          </Text>
          <Picker
            style={styles.title}
            selectedValue={this.state.mid}
            onValueChange={(value) => this.setState({mid: value})}>
              <Picker.Item label= {dummyData[1].mid[0].Maple[0]} value={dummyData[1].mid[0].Maple[0]} />
              <Picker.Item label= {dummyData[1].mid[1].Caps[0]} value={dummyData[1].mid[1].Caps[0]} />
              <Picker.Item label= {dummyData[1].mid[2].Kuro[0]} value={dummyData[1].mid[2].Kuro[0]} />
              <Picker.Item label= {dummyData[1].mid[3].Yukal[0]} value={dummyData[1].mid[3].Yukal[0]} />
              <Picker.Item label= {dummyData[1].mid[4].Rookie[0]} value={dummyData[1].mid[4].Rookie[0]} />
          </Picker>
        </View>
        <Separator />
          <View>
          <Text style={styles.title}>
              {this.state.carry}:
            </Text>
            <Picker
            style={styles.title}
            selectedValue={this.state.carry}
            onValueChange={(value) => this.setState({carry: value})}>
              <Picker.Item label= {dummyData[2].carry[0].Uzi[0]} value={dummyData[2].carry[0].Uzi[0]} />
              <Picker.Item label= {dummyData[2].carry[1].Deft[0]} value={dummyData[2].carry[1].Deft[0]} />
              <Picker.Item label= {dummyData[2].carry[2].Ruler[0]} value={dummyData[2].carry[2].Ruler[0]} />
              <Picker.Item label= {dummyData[2].carry[3].Jackeylove[0]} value={dummyData[2].carry[3].Jackeylove[0]} />
              <Picker.Item label= {dummyData[2].carry[4].Doublelift[0]} value={dummyData[2].carry[4].Doublelift[0]} />
          </Picker>
        </View>
        <Separator />
          <View>
          <Text style={styles.title}>
              {this.state.flex}:
            </Text>
            <Picker
            style={styles.title}
            selectedValue={this.state.flex}
            onValueChange={(value) => this.setState({flex: value})}>
              <Picker.Item label= {dummyData[4].flex[0].Smeb[0]} value={dummyData[4].flex[0].Smeb[0]} />
              <Picker.Item label= {dummyData[4].flex[1].Kiin[0]} value={dummyData[4].flex[1].Kiin[0]} />
              <Picker.Item label= {dummyData[4].flex[2].LetMe[0]} value={dummyData[4].flex[2].LetMe[0]} />
              <Picker.Item label= {dummyData[4].flex[3].CuVee[0]} value={dummyData[4].flex[3].CuVee[0]} />
              <Picker.Item label= {dummyData[4].flex[4].Ssumday[0]} value={dummyData[4].flex[4].Ssumday[0]} />
              {/* <Picker.Item label= {dummyData[4].flex[5].DNK[0]} value={dummyData[4].flex[0].DNK[0]} />
              <Picker.Item label= {dummyData[4].flex[6].Yukal[0]} value={dummyData[4].flex[1].Yukal[0]} />
              <Picker.Item label= {dummyData[4].flex[7].Caps[0]} value={dummyData[4].flex[2].Caps[0]} />
              <Picker.Item label= {dummyData[4].flex[8].Canyon[0]} value={dummyData[4].flex[3].Canyon[0]} />
              <Picker.Item label= {dummyData[4].flex[9].CuVee[0]} value={dummyData[4].flex[9].CuVee[0]} />
              <Picker.Item label= {dummyData[4].flex[10].Ruler[0]} value={dummyData[4].flex[10].Ruler[0]} />
              <Picker.Item label= {dummyData[4].flex[11].Uzi[0]} value={dummyData[4].flex[11].Uzi[0]} />
              <Picker.Item label= {dummyData[4].flex[12].Xerxe[0]} value={dummyData[4].flex[12].Xerxe[0]} />
              <Picker.Item label= {dummyData[4].flex[13].LetMe[0]} value={dummyData[4].flex[13].LetMe[0]} />
              <Picker.Item label= {dummyData[4].flex[14].Smeb[0]} value={dummyData[4].flex[14].Smeb[0]} /> */}
          </Picker>
        </View>
        <Separator />
          <View>
          <Text style={styles.title}>
              {this.state.team}:
            </Text>
            <Picker
            style={styles.title}
            selectedValue={this.state.team}
            onValueChange={(value) => this.setState({team: value})}>
              <Picker.Item label= {dummyData[5].team[0].SKTT1} value={dummyData[5].team[0].SKTT1} />
              <Picker.Item label= {dummyData[5].team[1].SamsungWhite} value={dummyData[5].team[1].SamsungWhite} />
              <Picker.Item label= {dummyData[5].team[2].G2Esports} value={dummyData[5].team[2].G2Esports} />
              <Picker.Item label= {dummyData[5].team[3].Cloud9} value={dummyData[5].team[3].Cloud9} />
              <Picker.Item label= {dummyData[5].team[4].TeamLiquid} value={dummyData[5].team[4].TeamLiquid} />
            </Picker>
        </View>
        <Separator/>
        <View> 
          <Button 
          style={styles.button} 
            title="Recuit Players"
            onPress ={() =>  this.handleRecruitClick()}
          />
        </View>
      </ScrollView>
    );
    }
    else{
      return(
        <ScrollView style={styles.container}>
        <View> 
          <Button 
          style={styles.goBack} 
            title="Go Back"
            onPress ={() =>  this.handleSelectionClick()}
          />
        </View>
        <View>
          <Text style={styles.header}>
            Your Roster:
          </Text>
        </View>
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={
              [
                ["Player" , topData[0], JunData[0], midData[0], carryData[0], flexData[0], carryData[0]],
                ["Kills" ,  topData[1], JunData[1], midData[1], carryData[1], flexData[1], carryData[1]],
                ["Deaths" , topData[2], JunData[2], midData[2], carryData[2], flexData[2], carryData[2]],
                ["Assists", topData[3], JunData[3], midData[3], carryData[3], flexData[3], carryData[3]],
                ["CS"     , topData[4], JunData[4], midData[4], carryData[4], flexData[4], carryData[4]]
              ] 
            } textStyle={styles.text}/>
          </Table>
      </View>
      <View>
        <Text style = {styles.header}>
          Your Opponents Roster:
        </Text>
      </View>
      <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={
              [
                ["Player", "Faker", "Incarnation","Jensen","Reckless","Impact","100 Theives"],
                ["Kills", 6, 4,7,9,7, 34],
                ["Deaths", 7, 4,9,2,8, 16],
                ["Assists", 7, 8,7,9,7, 34],
                ["CS", 12, 10, 19,14,12,9, 88]
              ]
              
            } textStyle={styles.text}/>
          </Table>
      </View>
      <View>
        <Text style = {styles.header}>
          Your Score:
        </Text>
        <Text style = {styles.header}>
          Your Opponents Score:
        </Text>
      </View>
      </ScrollView>
      );
    }
  }
}
