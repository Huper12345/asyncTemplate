
// функция обещания

const { reject } = require('async');

const { getUser, getPosts, getComents } = requre('./db');

getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => getComents(posts[0]))
    .then(comments => console.error(comments))
    .catch(error => console.error(error));