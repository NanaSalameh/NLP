import { checkForName } from '../src/client/js/nameChecker';

test('check for valid names', () => {
    expect(checkForName('Picard')).toBe(true);
    expect(checkForName('Janeway')).toBe(true);
    expect(checkForName('Unknown')).toBe(false);
});
