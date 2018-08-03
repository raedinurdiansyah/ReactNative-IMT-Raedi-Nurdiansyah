import React, {Component} from 'react';
import {Text, Slider, StatusBar, View} from 'react-native';
import { Header, Button, Text } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


class App extends Component {


    render() {
      function click(){

      }
    return (
      <Container
        backgroundColor= "#fcb26c">

                <View>
                  <StatusBar
                  backgroundColor="white"
                  barStyle="dark-content"
                  />
                </View>
                <Header
                backgroundColor={'orange'}
                centerComponent={{
                  text:'INDEKS MASSA TUBUH', style: {color:'#fff'} 
                }}
                />

                <Content>
                  <Grid>
                    <Col style={{height:80, marginTop:10}}>
                        <Form>
                          <Item floatingLabel>
                            <Label> Massa (Kg) </Label> <Input />
                          </Item>
                        </Form>
                    </Col>
                       
                    <Col style={{ height: 80, marginTop: 10}}>
                          <Form>
                            <Item floatingLabel last>
                              <Label> Tinggi (Cm) </Label> <Input />
                            </Item>
                          </Form>
                    </Col>
                  </Grid>
                  <View>
              <Button backgroundColor={'orange'} title='HITUNG IMT'/>
                  </View>

                  <Text style={{textAlign:'center'}}>
                      Massa Tubuh
                  </Text>
                  <Text h4 style={{textAlign:'center'}}> 99 </Text>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}> Tinggi Badan </Text>



                </Content>
        
                

          

          </Container>
        
    );
  }
}

export default App;