import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Text, Icon } from 'react-native-elements'; 

class App extends Component { 
  constructor() { 
    super(); 

    this.state = {
      value: '', 
      result: '0'
    }
  } 
  onPressButton (v) { 
    if(v === 'X') {
      this.setState({ 
        value: '', 
        result: '0' 
      }) 
    } 
    else if(v === '=') { 
      this.setState({ 
        result: eval(this.state.value) 
      }) 
    } 
    else {
      this.setState({ 
        value: this.state.value + v 
      }) 
    } 
  } 

  render() { 
    let space = ' '; 
    return ( 
      <Grid> 
        <Row style={{ 
              backgroundColor:"#37474F", 
              justifyContent: 'center', 
              alignItems: 'center' } 
            } size={2}> 
          <Text h3 style={{color:"white"}}> 
            { this.state.value } 
          </Text> 
        </Row> 
        <Row style={{ 
              backgroundColor:"#4B515D", 
              justifyContent: 'center', 
              alignItems: 'center' 
            }} size={1}> 
          <Text h3 style={{color:"white"}}> 
            { this.state.result } 
          </Text> 
        </Row> 
        <Row size={7}> 
          <Col style={{backgroundColor:"#3E4551"}} size={3}> 
            {/* 1 */} 
            <Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity 
                  onPress={() => this.onPressButton('7')}> 
                  <Text h1 style={{color: 'white'}}>
                    7
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity 
                  onPress={() => this.onPressButton('8')}> 
                  <Text h1 style={{color: 'white'}}>
                    8
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('9')}>
                  <Text h1 style={{color: 'white'}}>
                    9
                  </Text> 
                </TouchableOpacity> 
              </Row> 
            </Row> 

            {/* 2 */} 
            <Row>
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('4')}>
                  <Text h1 style={{color: 'white'}}>
                    4
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('5')}>
                  <Text h1 style={{color: 'white'}}>
                    5
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('6')}>
                  <Text h1 style={{color: 'white'}}>
                    6
                  </Text> 
                </TouchableOpacity> 
              </Row> 
            </Row> 

            {/* 3 */} 
            <Row>
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('1')}>
                  <Text h1 style={{color: 'white'}}>
                    1
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('2')}>
                  <Text h1 style={{color: 'white'}}>
                    2
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('3')}>
                  <Text h1 style={{color: 'white'}}>
                    3
                  </Text> 
                </TouchableOpacity> 
              </Row> 
            </Row> 

            {/* 4 */} 
            <Row>
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('.')}>
                  <Text h1 style={{color: 'white'}}>
                    .
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('0')}>
                  <Text h1 style={{color: 'white'}}>
                    0
                  </Text> 
                </TouchableOpacity> 
              </Row> 
              <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}> 
                <TouchableOpacity onPress={() => this.onPressButton('=')}> 
                  <Text h1 style={{color: 'white'}}>
                    = 
                  </Text> 
                </TouchableOpacity> 
              </Row> 
            </Row> 
          </Col> 
          <Col style={{backgroundColor:"#1C2331"}} size={1}>
            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.onPressButton('X')}>
                <Icon reverse name='clear' color='#00aced' size={20} /> 
              </TouchableOpacity> 
            </Col> 
            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.onPressButton('+')}>
                <Text h1 style={{color: 'white'}}> 
                  + 
                </Text> 
              </TouchableOpacity> 
            </Col> 
            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.onPressButton('-')}>
                <Text h1 style={{color: 'white'}}> 
                  - 
                </Text> 
              </TouchableOpacity> 
            </Col> 
            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.onPressButton('*')}>
                <Text h1 style={{color: 'white'}}> 
                  * 
                </Text> 
              </TouchableOpacity> 
            </Col> 
            <Col style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.onPressButton('/')}>
                <Text h1 style={{color: 'white'}}> 
                  / 
                </Text> 
              </TouchableOpacity> 
            </Col> 
          </Col> 
        </Row> 
        <Row size={0.5} style={{justifyContent: 'center', alignItems: 'center'}}> 
          <Text h4>
            Author - { space } 
            <Text style={{color: '#00C851'}}> 
              Rijwan Hossain 
            </Text> 
          </Text> 
        </Row> 
      </Grid> 
    ); 
  } 
} 

export default App; 
