/// Load and instantiate Chance
var chance = require('chance').Chance();

export var robots = []

for (let i = 1; i < 100; i++) { 

    const c = `rgb(${rColorChannel(80,255)},${rColorChannel(80,128)},${rColorChannel(220,255)})`

    robots.push(
        {
            id: i,
            name: chance.name(),
            username: chance.twitter().slice(1),
            email: chance.email({domain: "gmail.com"}),
            hash: chance.hash({length: 10}),
            // color: chance.color({format: 'hex'}),
            color: c,
        }
    )
}

function rColorChannel(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}