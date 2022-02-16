/// Load and instantiate Chance
var chance = require('chance').Chance();

export var robots = []

for (let i = 1; i < 100; i++) { 
    robots.push(
        {
            id: i,
            name: chance.name(),
            username: chance.twitter().slice(1),
            email: chance.email({domain: "gmail.com"}),
        }
    )
}