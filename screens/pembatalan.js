import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const pembatalan = ({ }) => {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.box}>
                <Text style={styles.header}>Daftar Pembatalan</Text>

                <Icon name={'boat-outline'} size={70} color={'black'} />
                <View style={styles.box2}>
                    
                    <Text style={styles.H3}>Tidak Ada Aktivitas Pembatalan Tiket </Text>
                    <Text style={styles.Line}>____________________________________________________</Text>
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
        marginTop: 10,
        width: 340,
        backgroundColor: "ffffff",
        paddingVertical: 20,
        paddingHorizontal: 18,
    },
    header: {
        color: "#00579c",
        fontWeight: "bold",
        fontSize: 28,
        marginBottom: 100,
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
        fontWeight: 'bold',
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

export default pembatalan;