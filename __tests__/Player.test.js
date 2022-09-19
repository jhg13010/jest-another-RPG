const Player = require('../lib/Player.js');
const Potion = require('../lib//Potion.js');
//will look into the __mocks__ folder for a file that matching Potion.js
jest.mock('../lib/Potion.js');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual( 
        expect.arrayContaining([expect.any(Object)])
    );
});

//test('gets player stats as an object', () => {
//});

//test('gets inventory from player or returns false', () => {
//});cl