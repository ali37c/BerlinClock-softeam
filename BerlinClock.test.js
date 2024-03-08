// berlinClock.test.js

const BerlinClock = require('./BerlinClock');

test('Berlin Clock for 00:00:00 should be O\nRRRR\nRRRR\nOOOOOOOOOOO\nOOOO', () => {
    expect(BerlinClock("00:00:00")).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
});

test('Berlin Clock for 13:17:01 should be O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO', () => {
    expect(BerlinClock("13:17:1")).toBe('O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO');
});

test('Berlin Clock for 23:59:59 should be O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY', () => {
    expect(BerlinClock("23:59:59")).toBe('O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY');
});
