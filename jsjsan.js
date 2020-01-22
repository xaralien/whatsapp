import React, { Component } from 'react';
import { Container, Header, Body, Right, Button, Icon, Title, Tabs,Tab,TabHeading, Text } from 'native-base';
import {StyleSheet} from 'react-native';



const style = StyleSheet.create({
  title:{
    color:"#FFFFFF",
    position:"relative",
    fontWeight:"bold",
    fontFamily:"arial",
    left:10
  },
  backcolor:{
     backgroundColor:"#128c7e"
  },
  tab:{
    backgroundColor:"#128c7e",
    borderTop:"0px solid white",
    color:"#ffffff"
  },
  textview:{
    fontFamily:"arial"
  },
  menu:{
     fontWeight:"normal",
     fontFamily:"cursive",
     fontSize:20
  },
  open:{
    fontStyle:"italic",
    fontSize:20
    
  }
})

export default class App extends React.Component{
  render() {
    return (
      <Container>
      <Header style={style.backcolor}>
        <Body>
          <Title style={style.title}>Whatsapp</Title>
        </Body>
        <Right>
          
        <Button transparent>
            <Icon name='search' />
          </Button>
             
        <Button transparent>
            <Icon name='person' />
          </Button>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </Header>
    
       <Tabs>
          <Tab  heading={ <TabHeading style={style.tab}><Text style={style.textview}>Call</Text></TabHeading>}>
          <Text>This is Call</Text>
          </Tab>
          <Tab heading={ <TabHeading  style={style.tab}><Text style={style.textview}>Chat</Text></TabHeading>}>
          <Text>This is Chat</Text>
          </Tab>
          <Tab heading={ <TabHeading  style={style.tab}><Text style={style.textview}>Status</Text></TabHeading>}>
          <Text>This is Status</Text>
            </Tab>
        </Tabs>
      
    </Container>
    );
  }
} 