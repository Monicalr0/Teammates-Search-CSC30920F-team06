//seed the database

// Import the models
const { User } = require('../models/user')
const { UserPost } = require('../models/userpost')
const { Admin} = require('../models/admin')

function seed(){
    /** Clear Models */
	
    UserPost.remove({}, function(err) {
        console.log('Posts cleared')
    });

    /** USERS **/
	// const _user = {

    // }
    // const _user1 = {

    // }

    // const user = new User(_user);
    // user.save();
    // const user1 = new User(_user1);
    // user1.save();

    /** USERPOSTS */
    const userposts = [
        {
            name: "user",
            rating: 6.6,
            level: "Gold",
            playStyle: "Aggressive",
            desc: "Hi. My name is user. I am looking for teammate to play 'among us' with."
        },
        {
            name: "user1",
            rating: 4.3,
            level: "Silver",
            playStyle: "Defensive",
            desc: "Hi. My name is user1. I am looking for teammate to play 'raging loop' with."
        }
    ]

    // use the Job Post model to insert/save
    for (post of userposts) {
        let newPost = new UserPost(post);
        newPost.save().catch((error) => console.log(error));
    }

    // seeded!
    console.log('Database seeded!');

    return true
}

module.exports = {seed}