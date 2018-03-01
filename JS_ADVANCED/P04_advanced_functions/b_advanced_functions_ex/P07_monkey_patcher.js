function monkeyPatcher(command) {

    let currentPost = this;

    let getTotalVotes = () => {
        return Math.abs(currentPost.upvotes) + Math.abs(currentPost.downvotes)
    };
    let getObscuredResult = (a) => {
        return a + Math.ceil(25 * (Math.max(currentPost.upvotes, currentPost.downvotes)) / 100)
    };
    let getRating = () => {
        let rating = '';
        if (getTotalVotes() < 10) {
            rating = 'new';
        } else if ((currentPost.upvotes / (getTotalVotes())) * 100 > 66) {
            rating = 'hot';
        } else if ((currentPost.upvotes - currentPost.downvotes >= 0) && (currentPost.upvotes > 100 || currentPost.downvotes > 100)) {
            rating = 'controversial';
        } else if (currentPost.upvotes - this.downvotes < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        return rating;
    };

    if (command === 'upvote') {
        currentPost.upvotes += 1;
    } else if (command === 'downvote') {
        currentPost.downvotes += 1;
    }

    function getReport() {
        let report;
        if (getTotalVotes() > 50) {
            report = [getObscuredResult(currentPost.upvotes), getObscuredResult(currentPost.downvotes), currentPost.upvotes - currentPost.downvotes, getRating()];
        } else {
            report = [currentPost.upvotes, currentPost.downvotes, currentPost.upvotes - currentPost.downvotes, getRating()];
        }
        return report;
    }

    return getReport();
}

let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

/////test
let answer = monkeyPatcher.call(forumPost, 'score');
let expected = [4, 5, -1, 'new'];

monkeyPatcher.call(forumPost, 'downvote');
answer = monkeyPatcher.call(forumPost, 'score');
expected = [4, 6, -2, 'unpopular'];

monkeyPatcher.call(forumPost, 'upvote');
monkeyPatcher.call(forumPost, 'upvote');
answer = monkeyPatcher.call(forumPost, 'score');
expected = [6, 6, 0, 'new'];

console.log(answer);