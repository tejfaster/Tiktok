import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { wp, hp } from '../../constant/helper'
import FeatIcon from 'react-native-vector-icons/Feather'
import AntIcon from 'react-native-vector-icons/AntDesign'


export default function DirectMessage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FeatIcon name="chevron-left" size={hp('3%')} onPress={() => props.navigation.goBack()} />
                <Text stytle={styles.headertext}> Direct messages</Text>
                <FeatIcon name="plus" size={hp('3%')} onPress={() => props.navigation.navgate('DirectMessage')} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <FeatIcon name="send" size={hp('15%')} />
                <Text style={{ fontWeight: 'bold' }}>Message your friends</Text>
                <Text>Share videos or start a conversation</Text>
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
