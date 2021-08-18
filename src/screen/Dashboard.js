import React, { useEffect, useState } from 'react'
import {
    View, Text, StyleSheet,
    Dimensions, TouchableOpacity,
    Image, FlatList, Share
} from 'react-native'
import Video from 'react-native-video'
import { wp, hp } from '../constant/helper'
import Icon from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Comment from './components/Comment'

const { width, height } = Dimensions.get("window");

const data = [{ "id": 1, "video": "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }]
const key = '563492ad6f917000010000019358c85c08b34fc3acb16b6fd29e6510'
const URL = 'https://api.pexels.com/videos/search?query=nature&per_page=1'


const Dashboard = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [text, setText] = useState('')
    const [comments, setComments] = useState([])
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    const [api, setApi] = useState('')
    const [video, setVideo] = useState([])

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    // const fetchdata = async () => {
    //     await fetch(URL, {
    //         headers: {
    //             Authorization: key
    //         }
    //     }).then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             setApi(result.videos)
    //         }).catch(err => console.log(err))
    // }

    // const setData = () =>{
    // api.forEach(item =>{
    //     console.log('item',item.video_files[2].id)
    //     setVideo(item => [...item,{id:item.video_files[2].id}])
    // }) 
    // }

    // useEffect(() => {
    //     fetchdata()
    // }, [])




    const onCheck = () => {
        setCount(item => item + 1)
        setComments(item => [...item, { comment: text, id: count }])
    }

    return (
        <View style={styles.container}>
            {
                show ? <>
                    {/* {
                       api.length > 0 && <FlatList
                            data={api}
                            keyExtractor={item => item.id}
                            renderItem={item => {
                                console.log(item.item.video_files[6])
                                return (
                                    <Video
                                        source={{ uri: item.item.video_files[6].link }}
                                        style={{ width: wp('100%'), height: hp('100%') }}
                                        resizeMode={"cover"}
                                    />
                                )
                            }}
                        />
                    } */}



                    <Video
                        source={{ uri: "https://player.vimeo.com/external/384761655.hd.mp4?s=5eecd63d94629aa928726912a5601a7577a3ca8a&profile_id=174&oauth2_token_id=57447761" }}
                        style={styles.video}
                        resizeMode={"cover"}
                        repeat
                    />
                    <Comment
                        visible={modalVisible}
                        onPress={() => setModalVisible(false)}
                        onCheck={onCheck}
                        value={text}
                        onChange={item => setText(item)}
                        data={comments}
                    />
                    <View style={styles.person}>
                        <TouchableOpacity onPress={() => setShow(true)}><Text style={styles.following}>Following</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => setShow(false)} ><Text style={styles.foryou}>For You</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../constant/image/profilepic.png')}
                            style={styles.profile}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="heart" size={40} color="white" style={styles.heart} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <AntIcon name="message1" size={40} color="white" style={styles.heart} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onShare} >
                        <Icon name="share-a" size={40} color="white" style={styles.heart} />
                    </TouchableOpacity>
                </> : <>
                    <Video
                        source={require('../constant/Video/pexels-sunsetoned-7235780.mp4')}
                        // source={{uri:"https://www.youtube.com/watch?v=MJyKN-8UncM&list=RDUSccSZnS8MQ&index=27&ab_channel=SonyMusicIndia"}}
                        style={styles.video}
                        resizeMode={"cover"}
                        repeat
                    />
                    <Comment
                        visible={modalVisible}
                        onPress={() => setModalVisible(false)}
                        onCheck={onCheck}
                        value={text}
                        onChange={item => setText(item)}
                        data={comments}
                    />
                    <View style={styles.person}>
                        <TouchableOpacity onPress={() => setShow(true)}><Text style={styles.following}>Following</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => setShow(false)} ><Text style={styles.foryou}>For You</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../constant/image/profilepic.png')}
                            style={styles.profile}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="heart" size={40} color="white" style={styles.heart} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <AntIcon name="message1" size={40} color="white" style={styles.heart} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onShare}>
                        <Icon name="share-a" size={40} color="white" style={styles.heart} />
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: height
    },
    person: {
        flexDirection: 'row',
        marginTop: hp('5%'),
        justifyContent: 'space-evenly'
    },
    following: {
        fontSize: hp('2.12%'),
        color: 'white'
    },
    foryou: {
        fontSize: hp('2.12%'),
        color: 'white'
    },
    profile: {
        height: hp('8%'),
        width: wp('17%'),
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: hp('45%'),
        alignSelf: 'flex-end',
        marginRight: wp('2%')
    },
    heart: {
        alignSelf: 'flex-end',
        marginRight: wp('4.2%'),
        marginTop: hp('2%')
    }
})

export default Dashboard
