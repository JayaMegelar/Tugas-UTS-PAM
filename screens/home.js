import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Picker } from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";
import { useRoute } from '@react-navigation/native';


const home = (props) => {
  const route = useRoute();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  const [awal, setawal] = React.useState()
  const [akhir, setakhir] = React.useState()
  const [kelas, setkelas] = React.useState()
  const [tanggal, settanggal] = React.useState()
  const [jam, setjam] = React.useState()

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>

        <Text style={styles.Header}>Kapalzy</Text>

        <Text style={styles.Text}>Pelabuhan Awal</Text>
        <View style={styles.input}>
          <Icon name={'boat-outline'} size={28} />
          <Picker 
            style={styles.TextInput}
            selectedValue={awal}
            onValueChange={(itemValue, itemIndex) => setawal(itemValue)}>
            <Picker.Item label="Pilih Pelabuahan Awal" value="" />
            <Picker.Item label="Merak" value="merak" />
            <Picker.Item label="Bakauheni" value="bakauheni" />
          </Picker>
        </View>

        <Text style={styles.Text}>Pelabuhan Tujuan</Text>
        <View style={styles.input}>
          <Icon name={'boat-outline'} size={28} />
          <Picker
            style={styles.TextInput}
            selectedValue={akhir}
            onValueChange={(itemValue, itemIndex) => setakhir(itemValue)}>
            <Picker.Item label="Pilih Pelabuahan Tujuan" value="" />
            <Picker.Item label="Tanjung Priok" value="priok" />
            <Picker.Item label="Tanjung Perak" value="perak" />
          </Picker>
        </View>

        <Text style={styles.Text}>Kelas Pelayanan</Text>
        <View style={styles.input}>
          <Icon name={'man-outline'} size={28} />
          <Picker
            style={styles.TextInput}
            selectedValue={kelas}
            onValueChange={(itemValue, itemIndex) => setkelas(itemValue)}>
            <Picker.Item label="Pilih Kelas Pelayanan" value="" />
            <Picker.Item label="Eksekutif" value="eksekutif" />
            <Picker.Item label="Bisnis" value="bisnis" />
            <Picker.Item label="Ekonomi" value="ekonomi" />
          </Picker>
        </View>

        <Text style={styles.Text}>Tanggal masuk Pelabuhan</Text>
        <View style={styles.input}>
          <Icon name={'calendar-outline'} size={28} />
          <Picker
            style={styles.TextInput}
            selectedValue={tanggal}
            onValueChange={(itemValue, itemIndex) => settanggal(itemValue)}>
            <Picker.Item label="Pilih Tanggal Masuk" value="" />
            <Picker.Item label="20/12/2022" value="20/12/2022" />
            <Picker.Item label="21/12/2022" value="21/12/2022" />
            <Picker.Item label="22/12/2022" value="22/12/2022" />
            <Picker.Item label="23/12/2022" value="23/12/2022" />
          </Picker>
        </View>

        <Text style={styles.Text}>Jam masuk Pelabuhan</Text>
        <View style={styles.input}>
          <Icon name={'time-outline'} size={28} />
          <Picker
            style={styles.TextInput}
            selectedValue={jam}
            onValueChange={(itemValue, itemIndex) => setjam(itemValue)}>
            <Picker.Item label="Pilih Jam Masuk" value="" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="12:00" value="12:00" />
            <Picker.Item label="15:00" value="15:00" />
            <Picker.Item label="18:00" value="18:00" />
          </Picker>
        </View>

        <View style={styles.ticket}>
          <TextInput
            style={styles.TextInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Masukkan Jumlah Tiket"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.push('Buat')} >
          <Icon name={'search'} size={26} color={'white'} />
          <Text style={styles.BuatTiket}>
            Buat Tiket
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

};

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
    padding: 20,
    borderRadius:5,
    shadowOpacity: 1,
    shadowRadius: 5
  },

  Header: {
    color: "#00579c",
    marginTop: "70",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    flexDirection: "row",
    height: 30,
    width: 270,
    marginTop: 10
  },
  Text: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  TextInput: {
    borderWidth: 1,
    height: 30,
    marginLeft: 10,
    color: 'gray',
    width: 250,
    borderRadius: 5,
    backgroundColor: "#eff4f4",
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  ticket: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 20,
  },
  button: {
    backgroundColor: "#ee9e54",
    height: 45,
    width: 150,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  BuatTiket: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  }
})

export default home;