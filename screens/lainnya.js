import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/ionicons';

const lainnya = ({ }) => {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.box}>
                <Icon name={'person-outline'} size={50} color={'black'} />
                <Text style={styles.H1}>Jaya Megelar Cakrawarty</Text>
                <Text>Tanjung Bintang, Lampung Selatan</Text>

                <View style={styles.box2}>
                    <Text style={styles.H2}>Account</Text>
                    <Icon style={styles.Icon} name={'megaphone-outline'} size={30}>
                        <Text style={styles.H3}>Notifikasi</Text>
                    </Icon>
                    <Text style={styles.Line}>______________________________________________</Text>

                    <Icon style={styles.Icon} name={'person-outline'} size={30}>
                        <Text style={styles.H3}>Tentang Saya</Text>
                    </Icon>
                    <Text style={styles.Line}>______________________________________________</Text>

                    <Icon style={styles.Icon} name={'pricetags-outline'} size={30}>
                        <Text style={styles.H3}>Layanan</Text>
                    </Icon>
                    <Text style={styles.Line}>______________________________________________</Text>

                    <Icon style={styles.Icon} name={'mail-outline'} size={30}>
                        <Text style={styles.H3}>Contact</Text>
                    </Icon>
                    <Text style={styles.Line}>______________________________________________</Text>

                    <Icon style={styles.Icon} name={'arrow-forward-circle-outline'} size={30}>
                        <Text style={styles.H3}>Log Out</Text>
                    </Icon>
                    
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
    box2: {
        marginTop: 50,
        width: 300,
        backgroundColor: "ffffff",
        padding: 20,
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 5
    },
    H1: {
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 20,
    },
    H2: {
        alignSelf: 'flex-start',
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    H3: {
        paddingLeft: 15,
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: "bold",

    },
    pemesanan: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 12,
        paddingLeft: 8,
    },
    Line: {
        alignSelf: 'flex-start',
    },
    tombol: {
        backgroundColor: "#ee9e54",
        height: 45,
        width: 200,
        borderRadius: 5,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    BuatTiket: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 8
    },
    identitas: {
        alignSelf: 'flex-start',
        fontSize: 10,
        fontWeight: 500,
        paddingLeft: 5,
        marginBottom: 5,
    },
    TextInput: {
        marginLeft: 10,
    },
    Icon: {
        marginTop: 12,
    }

})

export default lainnya;