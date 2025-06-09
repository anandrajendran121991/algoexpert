var Twitter = function () {
  this.time = 0;
  this.followersMap = new Map();
  this.usersTweetMap = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (this.usersTweetMap.has(userId)) {
    this.usersTweetMap.get(userId).push([this.time, tweetId]);
  } else {
    this.usersTweetMap.set(userId, [[this.time, tweetId]]);
  }
  this.time++;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let users = [userId];
  const tweets = [];
  if (this.followersMap.has(userId)) {
    const followers = Array.from(this.followersMap.get(userId));
    users = users.concat(followers);
  }

  for (const user of users) {
    const userTweets = this.usersTweetMap.get(user) || [];
    tweets.push(...userTweets);
  }

  const topTweets = tweets.sort((a, b) => b[0] - a[0]).slice(0, 10);

  const res = [];

  for (const [_, tweet] of topTweets) {
    res.push(tweet);
  }

  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.followersMap.has(followerId)) {
    this.followersMap.get(followerId).add(followeeId);
  } else {
    const followees = new Set();
    followees.add(followeeId);
    this.followersMap.set(followerId, followees);
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.followersMap.has(followerId)) {
    this.followersMap.get(followerId).delete(followeeId);
  }
};

var obj = new Twitter();
obj.postTweet(1, 5);
var param_1 = obj.getNewsFeed(1);
obj.postTweet(2, 6);
obj.postTweet(3, 7);
obj.follow(1, 2);
obj.follow(1, 3);
var param_2 = obj.getNewsFeed(1);
console.log(param_2);
obj.unfollow(1, 3);
