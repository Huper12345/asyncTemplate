// Функции обратного вызова

const { reject } = require('async');

const { getUser, getPosts, getComents } = require('./db');


getUser(1, (error, user) => {
    if (error) return console.error(error);

    getPosts(user.id, (error, posts) => {
        if (error) return console.error(error);

        getComents(posts[0].id, (error, comments) => {
            console.log(comments);
        });
    });
});
