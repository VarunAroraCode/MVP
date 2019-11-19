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
    // const playerTop = this.state.top;
    // const playerJungler = this.state.jungler;
    // const playerMid = this.state.mid;
    // const playerCarry = this.state.carry;
    // const playerFlex = this.state.flex;
    // const playerTeam = this.state.team;
    // const topData = dummyData[0].playerTop;
    // const junglerData = dummyData[3].playerJungler;
    // const midData = dummyData[1].playerMid;
    // const carryData = dummyData[2].playerCarry;
    // const flexData = dummyData[4].playerFlex;
    // const teamData = dummyData[5].playerTeam;
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
    const topData = dummyData[0].playerTop;
    const midData = dummyData[1].playerMid;
    const carryData = dummyData[2].playerCarry;
    const junglerData = dummyData[3].playerJungler;
    const flexData = dummyData[4].playerFlex;
    const teamData = dummyData[5].playerTeam;
    const KiinArray = dummyData[0].Kiin;
 
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
                ["Player", playerTop, playerJungler, playerMid, playerCarry, playerFlex, playerTeam],
                ["Kills",  KiinArray[1], KiinArray[2], KiinArray[3], KiinArray[4],KiinArray[5]],
                ["Deaths", this.state.top, this.state.jungler,this.state.mid,this.state.carry,this.state.flex,this.state.team],
                ["Assists", this.state.top, this.state.jungler,this.state.mid,this.state.carry,this.state.flex,this.state.team],
                ["CS", this.state.top, this.state.jungler,this.state.mid,this.state.carry,this.state.flex,this.state.team]
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
                ["Kills", 6, 4,7,9,7, 22],
                ["Deaths", 7, 4,9,2,8, 16],
                ["Assists", 7, 8,7,9,7, 19],
                ["CS", 12, 10, 19,14,12,9, 17]
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
