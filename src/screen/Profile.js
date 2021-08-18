import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { data, wp, hp } from '../constant/helper'
import Icon from 'react-native-vector-icons/Feather'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntIcon from 'react-native-vector-icons/Entypo'

const Profile = (props) => {
    const [show, setShow] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntIcon name="adduser" size={hp('3%')} />
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.profilename}>@Nat@$a__</Text>
                <AntIcon name="caretdown" size={hp('2%')} />
                </View>
                <EntIcon name="dots-three-horizontal" size={hp('3%')} onPress={()=>props.navigation.navigate('Edit Profile')}/>
            </View>
            <Image source={require('../constant/image/profilepic.png')} style={styles.profile} />
            <Text style={styles.profilename}>@Nat@$a__Waliya</Text>
            <View style={styles.followers}>
                <PersonDetail TextNumb="14" follower="Following" />
                <PersonDetail TextNumb="38" follower="Followers" />
                <PersonDetail TextNumb="91" follower="Likes" />
            </View>
            <View style={styles.profiledit}>
                <TouchableOpacity style={styles.edit}>
                    <Text style={styles.editext}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmark}>
                    <Icon name="bookmark" size={hp('3%')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.bio}>Tap to add bio</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
                    <FontIcon name="th" size={hp('3%')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setShow(false)}>
                    <Icon name="heart" size={hp('3%')} />
                </TouchableOpacity>
            </View>
            {
                show ? <>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        renderItem={item => {

                            return (
                                <View>
                                    <Image source={item.item.image} style={styles.fav} />
                                </View>
                            )
                        }}
                    /></> : <View style={{ backgroundColor: 'lightgrey' }}></View>
            }
        </View>
    )
}

const PersonDetail = ({ TextNumb, follower }) => {
    return (
        <View style={styles.personalView}>
            <Text style={styles.number}>{TextNumb}</Text>
            <Text style={styles.follower}>{follower}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
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
    profile: {
        marginTop: hp('1%'),
        height: hp('16.5%'),
        width: wp('35%'),
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'lightgrey',
        alignSelf: 'center'
    },
    profilename: {
        fontSize: hp("2%"),
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    followers: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: hp('1%')
    },
    personalView: {
        alignItems: 'center',
    },
    number: {
        fontSize: hp("3%"),
        fontWeight: 'bold',
    },
    follower: {
        fontSize: hp("1.8%"),
        color: 'lightgrey'
    },
    profiledit: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    edit: {
        width: wp('40%'),
        borderWidth: 1,
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey'
    },
    editext: {
        fontSize: hp("2%"),
        fontWeight: 'bold',
    },
    bookmark: {
        width: wp('14%'),
        borderWidth: 1,
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey',
        marginLeft: wp('2%')
    },
    bio: {
        alignSelf: 'center',
        marginTop: hp('1%'),
        color: 'lightgrey'
    },
    button: {
        width: wp('50%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: hp("6%"),
        borderColor: 'lightgrey'
    },
    fav: {
        height: hp('20%'),
        width: wp('35%'),
        borderColor: 'white',
        borderWidth: 1
    }
})

export default Profile
