import React from "react";
import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";
import { useRoute } from '@react-navigation/native';

const BuatTiket = (props) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.Header}>Kapalzy</Text>
        <Text style={styles.info}>Kuota tersedia (10000)</Text>
        <Text style={styles.info}>Rincian Tiket</Text>

        <View style={styles.box2}>
          <Text style={styles.Text3}>
            Bakauheni   <Icon name={'arrow-forward'} size={20} color={'black'} />   Merak
          </Text>
          <Text style={styles.Text}>Jadwal Masuk Pelabuhan :</Text>
          <Text style={styles.text4}>Kamis, 17 Maret 2022</Text>
          <Text style={styles.text4}>15:30 WIB</Text>
          <Text style={styles.Text}>Layanan :</Text>
          <Text style={styles.text4}>Express</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}>Dewasa x 1                        Rp.65.000</Text>
        </View>

        <Text style={styles.info}>Total                                            Rp.65.000</Text>

        <View style={styles.tombol}>
          <TouchableOpacity style={styles.btn} 
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.idx}>Kembali</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2} 
            onPress={() => props.navigation.navigate('Tiket')}>
            <Text style={styles.idx2}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  box: {
    marginTop: 30,
    width: 300,
    alignItems: "center",
    backgroundColor: "ffffff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  Header: {
    color: "#00579c",
    marginTop: "70",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 50,
  },
  input: {
    flexDirection: "row",
    height: 30,
    width: 270,
    marginTop: 10
  },
  Text: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 12,
  },
  info: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 10,
  },
  Text3: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  box2: {
    marginTop: 20,
    width: 250,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 5,
    borderWidth: 1,
  },
  text4: {
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  tombol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    width: 270,
  },
  btn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#00579c',
    width: 125,
    borderRadius: 5,
  },
  btn2: {
    backgroundColor: '#00579c',
    borderWidth: 2,
    borderColor: '#00579c',
    width: 125,
    borderRadius: 5,
  },
  idx: {
    fontWeight: 'bold',
    color: '#00579c',
    alignSelf: 'center',
    padding: 5,
  },
  idx2: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    padding: 5,
  },
})

export default BuatTiket;