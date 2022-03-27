import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/ionicons';

const pesanan = ({ }) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.heading}>Daftar Pemesanan</Text>

        <View style={styles.box2}>
          <Text style={styles.Text3} >
            Bakauheni   <Icon name={'arrow-forward'} size={20} color={'black'} />   Merak
          </Text>
          <Text style={styles.Text2}>Jadwal Masuk Pelabuhan : </Text>
          <Text style={styles.text4}>Kamis, 17 Maret 2022</Text>
          <Text style={styles.text4}>15:30 WIB</Text>
          <Text style={styles.Text2}>Layanan :</Text>
          <Text style={styles.text4}>Eksekutif</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}>Dewasa x 1                        Rp.65.000</Text>
        </View>

        <Text>_____________________________________________</Text>
        <Text style={styles.Text}>Riwayat Pesanan </Text>

        <View style={styles.box2}>
          <Text style={styles.Text3} >
            Kamal   <Icon name={'arrow-forward'} size={20} color={'black'} />   Guluk
          </Text>
          <Text style={styles.Text2}>Jadwal Masuk Pelabuhan : </Text>
          <Text style={styles.text4}>Rabu, 17 Januari 2022</Text>
          <Text style={styles.text4}>12:00 WIB</Text>
          <Text style={styles.Text2}>Layanan :</Text>
          <Text style={styles.text4}>Ekonomi</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}>Dewasa x 2                        Rp.90.000</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.Text3} >
            Bakauheni   <Icon name={'arrow-forward'} size={20} color={'black'} />   Merak
          </Text>
          <Text style={styles.Text2}>Jadwal Masuk Pelabuhan : </Text>
          <Text style={styles.text4}>Kamis, 17 Maret 2022</Text>
          <Text style={styles.text4}>15:30 WIB</Text>
          <Text style={styles.Text2}>Layanan :</Text>
          <Text style={styles.text4}>Express</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}>Dewasa x 1                        Rp.65.000</Text>
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
    paddingHorizontal: 18,
  },
  heading: {
    color: "#00579c",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
  },
  Text: {
    alignSelf: 'flex-start',
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 15,
  },
  Text2: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 12,
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
    marginBottom: 10,
  },
  text4: {
    alignSelf: 'flex-start',
    fontSize: 12,
  },
})

export default pesanan;