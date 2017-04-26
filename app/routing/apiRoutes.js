var friendList = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.json(friendList);
    });

    app.post("/api/friends", function(request, response) {
        var newFriendScore = request.body.scores;
        var scoreArray = [];
        var friendCount = 0;
        var closestMatch = 0;

        //runs through the current list of friends
        for (var i = 0; i < friendList.length; i++) {
            var scoreDifference = 0;
            //Loop to go through and compare all of the scores!!!!
            for (var x = 0; x < newFriendScore.length; x++) {
                scoreDifference += (Math.abs(parseInt(friendList[i].scores[x]) - parseInt(newFriendScore[x])));
                console.log(scoreDifference);
            }
            scoreArray.push(scoreDifference);
        }
        for (var j = 0; j < scoreArray.length; j++) {
            if (scoreArray[j] <= scoreArray[closestMatch]) {
                closestMatch = j;
            }
            console.log(closestMatch);
        }
        var bestFriend = friendList[closestMatch];
        console.log(bestFriend);
        response.json(bestFriend);

        friendList.push(request.body);
    });
};
