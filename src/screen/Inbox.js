import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { wp, hp } from '../constant/helper'
import FeatIcon from 'react-native-vector-icons/Feather'
import AntIcon from 'react-native-vector-icons/AntDesign'


export default function Inbox(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp('36%') }}>
                    <Text stytle={styles.headertext}> All activity</Text>
                    <AntIcon name="caretdown" size={hp('1.5%')} />
                </View>
                <FeatIcon name="send" size={hp('3%')} onPress={() => props.navigation.navigate('DirectMessage')} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <FeatIcon name="message-square" size={hp('15%')} />
                <Text style={{ fontWeight: 'bold' }}>Notification aren't avliable</Text>
                <Text>Notification about your account will appear home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: hp('6%'),
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: wp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headertext: {
        fontSize: hp('3%')
    }
})
