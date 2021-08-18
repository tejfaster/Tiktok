import React from 'react'
import { View, Text, Modal, StyleSheet, TextInput } from 'react-native'
import { wp, hp } from '../../constant/helper'
import Icon from 'react-native-vector-icons/Entypo'
import IoniIcon from 'react-native-vector-icons/Ionicons'
import AntIcon from "react-native-vector-icons/AntDesign"

const Comment = (props) => {
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
            >
                <View style={styles.subcontainer}>
                    <View style={styles.modalView}>
                        <View style={styles.header}>
                            <Text style={styles.headertext}>comments</Text>
                            <Icon name="cross" size={hp('3%')} style={{ marginRight: wp('1%') }} onPress={props.onPress} />
                        </View>
                        {
                            props.data && props.data.length > 0 &&
                            props.data.map(item => {
                                return (
                                    <View key={item.id} style={styles.comment}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.comment}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={styles.commentsContainer}>
                        <TextInput
                            placeholder="Add comment ..."
                            placeholderTextColor="lightgrey"
                            value={props.value}
                            onChangeText={props.onChange}
                            multiline
                            inlineImageLeft='search_icon'
                            style={styles.textinput}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IoniIcon name="checkmark" size={hp('3.5%')} onPress={props.onCheck} />
                            <IoniIcon name="at-outline" size={hp('3.5%')} />
                            <AntIcon name="smileo" size={hp('3%')} style={{ marginLeft: 10 }} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    subcontainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        height: hp('80%'),
        width: wp('100%'),
        backgroundColor: 'lightgrey',
        marginTop: hp('20%'),
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: hp('1%')
    },
    headertext: {
        marginRight: wp('33%'),
        fontWeight: 'bold'
    },
    commentsContainer: {
        position: 'absolute',
        height: hp('8%'),
        width: wp('100%'),
        backgroundColor: 'white',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('4%')
    },
    textinput: {
        width: wp('70%')
    },
    comment: {
        height: hp('6%'),
        width: wp('80%'),
        padding: wp('2%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        margin:wp('1%')
    }
})

export default Comment