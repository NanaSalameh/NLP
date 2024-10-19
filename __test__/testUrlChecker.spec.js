import { checkURL } from '../src/client/js/urlChecker';

test('validate URL', () => {
    expect(checkURL('https://example.com')).toBe(true);
    expect(checkURL('invalid-url')).toBe(false);
});
