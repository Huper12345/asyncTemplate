// Функция генератор

function co(generator) {

    const iterator = generator();

    return new Promise((resolve, reject) => {
        function run(prev) {
            const { value, done } = iterator.next(prev);
    
            if (done) {
                resolve(value);
            } else if (value instanceof Promise) {
                value.then(run, reject);
            } else {
                run (value);
            }
        }
        run();
    });
    
}

co(function* () {
    try {
        let user = yield getUser(1);
        let posts = yield getPosts(user.id);
        let comments = yield getComents(posts[0].id);

        console.log(comments)
    } catch (error) {
        console.error(error);
    }
});