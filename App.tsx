import {Button, FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'
import UserCard from "./src/components/UserCard";

export default function App() {

  const[userList,setUserList] = useState([]);
  async function FetchData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUserList(response.data)
  }


  // @ts-ignore
  function  renderUser({item}){
    return <UserCard
        name={item.name}
        username={item.username}
        email={item.email}
        city={item.address.city}
    />;
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={FetchData} />
      <FlatList data={userList} renderItem={renderUser}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  }
})