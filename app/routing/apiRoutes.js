var friends = require("../data/friend.js");

module.exports = function(app)
{
    app.get("/api/friends", function(req, res)
    {
        res.json(friends);
    });

    var newUser;
    app.post("/api/friends", function (req, res)
    {
        newUser = req.body;
        var newName = newUser.name;
        var newPhoto = newUser.photo;
        var newScores = newUser.scores;  
        var totalDifference;  
        var closestMatch = {
            name: "",
            photo: "",
            difference: 50
        }
        
        for(var i = 0; i < friends.length; i++)
        {
            totalDifference = 0;
            for(var j = 0; j < 10; j++)
            {
                totalDifference += Math.abs(parseInt(newScores[j])- friends[i].scores[j]);
            }
         
            if(totalDifference < closestMatch.difference)
                {
                    closestMatch.name = friends[i].name;
                    closestMatch.photo = friends[i].photo;
                    closestMatch.difference = totalDifference;
                }
        }

        friends.push(newUser);

        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        res.end(JSON.stringify(closestMatch));
    });
}



