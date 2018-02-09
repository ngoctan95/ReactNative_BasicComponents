/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image, TextInput, Button, Alert, ScrollView,FlatList, SectionList, ListView, ActivityIndicator, DrawerLayoutAndroid, ProgressBarAndroid
} from 'react-native';
//import { processColor } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


//--------------Props
// export default class App extends Component<{}> {
//   render() {
//     let pic = {
//       uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View style={{alignItems:'center',
//       marginTop:50}}>
//       <Image source={pic} 
//       style ={{width:193,height:110}}/>
//       <Greeting name='Ngoc Tan'/>
//       </View>
//     );
//   }
// }
// class Greeting extends Component{
//   render(){
//     return (
//       <Text>{this.props.name}!</Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

//-------------State:
// class BlinkCommunication extends Component{
//  constructor(props){
//    super(props);
//    this.state = {isShowing : true};

//    //Set Interval
//   setInterval(()=>{
//     this.setState(previousState=>{
//       return {
//         isShowing : !previousState.isShowing };
//     });
//   },1000);
//  }
//   render(){
//     let display = this.state.isShowing ? this.props.text:' ';
//   return(
//     <Text>{display}</Text>
//   );
//  }
// }
// export default class BlinkApp extends Component{
//   render(){
//     return(
//       <View>
//         <BlinkCommunication text='Hello'/>
//         </View>
//     );
//   }
// }
//----Style sheet.
// export default class Style extends Component{
//   render(){
//     return (
//       <View>
//         <Text style={styles.bigblue}>Big blue</Text>
//         <Text style={styles.bigRed}>Big red</Text>
//         <Text style={[styles.bigblue,styles.bigRed]}>Both</Text>
//         </View>
//     );
//   }
// }
// const styles= StyleSheet.create({
//   bigblue:{
//     color:'blue',
//     fontSize:30
//   },
//   bigRed:{
//     color:'red',
//     fontSize:20,

//   }
// })
// export default class FlexDirection extends Component{
//   render(){
//     return (
//       //All children inside will distributed by flexDirection.
//       <View style={{
//         flex:1,
//         flexDirection:'row',
//          justifyContent:'space-between',
//          alignItems:'center',}}> 
//         <View style={{flex:1,height:100,backgroundColor:'powderblue',
//       marginRight:5,marginLeft:5,
//       borderBottomWidth:5,
//       borderBottomColor:'red',
//       borderLeftWidth:5,
//       borderLeftColor:'red',
//       padding:10}}/>
//         <View style={{flex:1,height:100,backgroundColor:'skyblue'}}/>
//         <View style={{flex:1,height:100,backgroundColor:'steelblue'}}/>
//         </View>
//     );
//   }
// }
//---------TextChange
// export default class TextChange extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       text : '',
//       height: 40
//     };
//   }
//   updateSize = (height)=>{
//     this.setState({
//       height
//     });
//   }
//   render(){
//     const {height}=this.state;
//     let newStyle={
//       height
//     }
//     return(
//       <View style={{padding:10}}>
//         <TextInput style={[newStyle]}
//         autoFocus={false}
//         autoCorrect={true}
//           placeholder="Type here" onChangeText={(text)=>this.setState({text})}
//           multiline={true}
//           onContentSizeChange={(e)=>this.updateSize(e.nativeEvent.contentSize.height)}
//           fontSize={30}/>
//           <Text style={{padding:10,fontSize:20}}>
//             {this.state.text.split(' ').map((word)=>word && word.match('hi') && 'uhm').join(' ')}
//             </Text>
//       </View>
//     );
//   }
// }
//---------------Button and increase number by alert.
// export default class ButtonEx extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       number:0
//     }
//   }
//   _PressBtn=()=>{
//     this.setState({
//       number : this.state.number+1
//     });
//     Alert.alert('You tapped me on '+this.state.number)
//   };
//   render(){
//     return(
//       <View style={{marginTop:50}}>
//         <View style={{flex:1, flexDirection:'row', alignItems:'center',alignContent:'center'}}>
//           <View style={{height:50, flex:1, justifyContent:'center',marginLeft:10}}>
//              <Text style={{textAlign:'center', color:'red'}}>Press me</Text>
//           </View>
//           <View style={{height:50,flex:2,justifyContent:'center',marginRight:10}}>
//               <Button style={{textAlign:'center'}} color="#841584" title="Press me" onPress={()=>
//                 this._PressBtn()}/>
//           </View>
          
//         </View>
//       </View>
//     );
//   }
// }
//----------ScrollView
// export default class ScrollViewImg extends Component{
//   render(){
//     return(
//         <ScrollView>
//           <Text style={{fontSize:100}}>Scroll me for see more information about this application
//           Scroll me for see more information about this application
//           Scroll me for see more information about this applicationScroll me for see more information about this application
//           Scroll me for see more information about this application
//           Scroll me for see more information about this application
//           Scroll me for see more information about this application
//           </Text>
//         </ScrollView>
//     );
//   }
// }
//------------FlatListView
// export default class FlatListView extends Component{
//   render(){
//     return(
//           <View style={{marginTop:20}}>
//             <FlatList 
//               data={[
//                 {key:'One'},
//                 {key:'Two'},
//                 {key:'Three'},
//                 {key:'Four'},
//                 {key:'Five'},
//                 {key:'Six'},
//                 {key:'Seven'},
//                 {key:'Eight'},
//                 {key:'Nine'},
//                 {key:'Ten'},
//                 {key:'Elevent'},
//                 {key:'Twelve'},
//                 {key:'Thirdteen'}
//               ]}
//               renderItem={
//                 ({item})=>
//                 <Text style={{color:'black',fontSize:90}}>{item.key}</Text>
//               }
//               />
//           </View>
//     );
//   }
// }
//-----SectionBasicList
// export default class SectionListBasic extends Component{
//   render(){
//     return (
//       <View style={{margin:10}}>
//         <SectionList 
//           section={[
//               {title:'Ngoc',data:'Tan'},
//               {title:'Tuong',data:'Van'},
//               {title:'Hoang',data:'Bach'},
//            ]}
//            renderItem={({item})=><Text>{item}</Text>}
//            renderSectionHeader={({section})=>
//            <Text style={{color:'blue'}}>{section.title}</Text>}
//            keyExtractor={(item,index)=>index}/>
//       </View>
//     );
//   }
// }
//-----------Fetching data from internet using fetch.
// export default class MoviesFetch extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       isLoading : true
//     }
//   }
//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//     .then((response)=>response.json())
//     .then((responseJson)=>{
//       let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2 });
//       this.setState({
//         isLoading : false,
//         dataSource : ds.cloneWithRows(responseJson.movies),
//       },function(){
//         //handle data
//       });
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
//   }
//   render(){
//       if(this.state.isLoading){
//         return(
//         <View style={{flex:1,paddingTop:20}}>
//           <ActivityIndicator/>
//         </View>
//         );
//       }
//       return (
//         <View>
//           <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData)=><Text>{rowData.title},{rowData.releaseYear}</Text>}/>
//         </View>
//       );
//   }
// }
//-------------DrawerLayout
export default class DrawerLayouts extends Component{
  render(){
    var navigationView = (
      <View style={{flex:1}}>
        <Text style={{margin:10,fontSize:15,textAlign:'left'}}>This is Drawer</Text>
      </View>
    )
    // var progressBar = (
    //    <View>
    //      <ProgressBarAndroid styleAttr="Inverse"/>
    //   </View> 
    // )
    return(
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerBackgroundColor ='gray'
        statusBarBackgroundColor='blue'
        renderNavigationView={()=>navigationView}>
          <View>
            <Text style={{color:'black',margin:10,fontSize:15,textAlign:'right'}}Hello World></Text>
          
          </View>
      </DrawerLayoutAndroid>
    );
  }
}

















