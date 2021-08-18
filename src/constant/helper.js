import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const colorImage = require('./image/color.jpg')
const waterdropImage = require('./image/droplet.jpg')
const orangeleafImage = require('./image/leaf.png')
const mountainImage = require('./image/mountain.jpg')
const openspaceImage = require('./image/openflower.jpg')
const personImage = require('./image/person.jpeg')
const rabbitImage = require('./image/rabit.jpg')
const redgardenImage = require('./image/redleaf.jpg')
const gardenstairImage = require('./image/stair.jpg')
const eiffelTowerImage = require('./image/tower.jpeg')
const redflowerImage = require('./image/voiletleaf.jpg')
const waterfallImage = require('./image/waterfall.png')


const data = [
    {id:1,image:colorImage},{id:2,image:waterdropImage},{id:3,image:orangeleafImage},{id:4,image:mountainImage},{id:5,image:openspaceImage},
    {id:6,image:personImage},{id:7,image:rabbitImage},{id:8,image:redgardenImage},{id:9,image:gardenstairImage},{id:10,image:eiffelTowerImage},
    {id:11,image:redflowerImage},{id:12,image:waterfallImage},
]

export{
    wp,hp,colorImage,waterdropImage,orangeleafImage,mountainImage,openspaceImage,personImage,rabbitImage,redgardenImage,gardenstairImage,
    eiffelTowerImage,redflowerImage,waterfallImage,data
}