//seed the database

// Import the models
const { User } = require('../models/user')
const { UserPost } = require('../models/userpost')
const { Admin} = require('../models/admin') 

function seed(){
    /** Clear Models */
	User.remove({}, function(err) {
        console.log('Users cleared')
    }) 
    UserPost.remove({}, function(err) {
        console.log('Posts cleared')
    }) 

    /** USERS **/
	const users = [
        {username: "user", password: "user", About: "Hello, I'm user.", Rate: 8,
        Language: "English", Level: "Gold", PlayStyle: "Aggressive", PlayTime: 10, ReportedTime: 1,
        PlayedGame: ["PUBG"], MessageReceived: [{"content":"Hello, I'm interesting to form team with you, please dm me if you are interested.",
        username:"user2", time:"2020/10/31"}], "CommentReceived": [{content: "Awesome Teammate!", username:"User2",
        time: "2020/11/01", rate:9}, {content: "Would never play with him again.", username:"User3",
        time: "2020/10/24", rate:1}],
        },
        {username: "user2", password: "user2", About: "Hello, I'm user2.", Rate: 9.8,
        Language: "English", Level: "Silver", PlayStyle: "Aggressive", PlayTime: 3, "ReportedTime":0,
        PlayedGame: ["PUBG"], MessageReceived:[], CommentReceived: [], Status:"Normal"
        },
        {username: "user3", password: "user3", About: "Hello, I'm user3.", Rate: 2,
        Language: "English", Level: "Platinum", PlayStyle: "Defensive", PlayTime: 20, ReportedTime:1,
        PlayedGame: ["PUBG"], MessageReceived:[], CommentReceived: [], Status:"Normal"
        }
    ]
    for (user of users) {
        let newUser = new User(user) 
        newUser.save().catch((error) => console.log(error)) 
    }

    /** USERPOSTS */

    const userposts = []
    for (user of users) {
        const tmp = {
            name : user.username,
            rating : user.Rate,
            level : user.Level,
            playstyle : user.PlayStyle,
            desc : user.About,
            PlayedGame : user.PlayedGame
        }

        userposts.push(tmp)
    }

    // use the Job Post model to insert/save
    for (post of userposts) {
        let newPost = new UserPost(post) 
        newPost.save().catch((error) => console.log(error)) 
    }

    // seeded!
    console.log('Database seeded!') 

    return true
}

module.exports = {seed}