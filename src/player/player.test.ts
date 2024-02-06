import {test, expect, describe, beforeEach, beforeAll} from 'vitest';
import {Player} from './player';
import {Color} from '../Color/enums';
import {Dashboard} from '../dashboard/dashboard';


describe('Player test', () => {
    beforeAll(() => {
        const dashBoard = new Dashboard();
    });

    test('player', () => {  
        let player = new Player('Chris', Color.WHITE);
        expect(player).toBeDefined();
    });
    
    test("Player makes a move", () => {
        let player = new Player('Chris', Color.WHITE);
        let startingPosition = {x: 1, y: 2};
        let endingPosition = {x: 1, y: 3};
        let isSuccessful = player.makeMove(startingPosition.x, startingPosition.y, endingPosition.x, endingPosition.y);
        expect(isSuccessful).toBe(true);
    });
});

