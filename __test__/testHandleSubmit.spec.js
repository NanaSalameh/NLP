import "babel-polyfill";
import { handleSubmit } from '../src/client/js/formHandler';

test('handle form submit', async () => {
    document.body.innerHTML = `
        <form id="newsForm">
            <input type="url" id="urlInput" required />
            <button type="submit">Analyze</button>
            <div id="result"></div>
        </form>
    `;
    
    const urlInput = document.getElementById('urlInput');
    urlInput.value = 'https://example.com';

    const mockEvent = {
        preventDefault: jest.fn(),
    };

    await handleSubmit(mockEvent);
    expect(document.getElementById('result').innerHTML).toContain('Polarity');
});
