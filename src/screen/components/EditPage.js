import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatIcon from 'react-native-vector-icons/Feather'
import { hp, wp } from '../../constant/helper'

const EditPage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FeatIcon name="chevron-left" size={hp('4%')} onPress={()=>props.navigation.goBack()}/>
                <Text style={{ fontWeight: 'bold', fontSize: hp('2.5%'), marginLeft: wp('25%') }}>Edit Profile</Text>
            </View>
            <View style={styles.profile}>
                <View style={{ alignItems: 'center' }}>
                    <ImageBackground
                        source={require('../../constant/image/profilepic.png')}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 100 }}
                        style={styles.profilepic}>
                        <FeatIcon name="camera" size={hp('4%')} color="white" />
                    </ImageBackground>
                    <Text style={styles.profiletxt}>Change photo</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.icons}>
                        <AntIcon name="videocamera" size={hp('4%')} />
                    </View>
                    <Text style={styles.profiletxt}>Change video</Text>
                </View>
            </View>
            <Name head="Name" detail="Natasa waliya" />
            <Name head="Username" detail="Nat@sa_Waliya" />
            <Name head="" detail="tiktok.com@nat@sa" icon />
            <Name head="Bio" detail="Add a bio to your profile" />
            <View style={{ borderWidth: 1, width: wp('95%'), marginLeft: wp('2.5%'), borderColor: 'lightgrey' }} />
            <Name head="Instagram" detail="Add Instagram to your profile" />
            <Name head="YouTube" detail="Add Youtube to your profile" />
        </View>
    )
}

const Name = ({ head, detail, icon }) => {
    return (
        <View style={styles.name}>
            <Text style={styles.headtext}>{head}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.detailtext}>{detail}</Text>
                {
                    icon ? <FeatIcon name="external-link" size={hp('3%')} color="lightgrey"
                    /> : <FeatIcon name="chevron-right" size={hp('3%')} color="lightgrey" />
                }
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
        alignItems: 'center'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: hp('2%')
    },
    profilepic: {
        height: hp('15.5%'),
        width: wp('32%'),
        justifyContent: 'center',
        borderRadius: 100,
        alignItems: 'center'
    },
    icons: {
        height: hp('15.5%'),
        width: wp('32%'),
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profiletxt: {
        marginTop: hp('1%'),
        fontSize: hp('2%')
    },
    name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: hp('1%'),
        marginVertical: hp('2%')
    },
    headtext: {
        // fontWeight:'bold',
        fontSize: hp('2%')
    },
    detailtext: {
        fontSize: hp('2%'),
        color: 'lightgrey'
    }

})

export default EditPage
