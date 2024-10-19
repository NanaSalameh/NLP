import { checkURL } from './urlChecker';
import { fetchAnalysis } from './mockAPI';

export const handleSubmit = async (event) => {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;

    if (!checkURL(url)) {
        alert('Please enter a valid URL.');
        return;
    }

    try {
        const analysis = await fetchAnalysis(url);
        document.getElementById('result').innerHTML = `
            <p><strong>Polarity:</strong> ${analysis.polarity}</p>
            <p><strong>Subjectivity:</strong> ${analysis.subjectivity}</p>
            <p><strong>Text:</strong> ${analysis.text}</p>
        `;
    } catch (error) {
        console.error('Error fetching article analysis:', error);
    }
};
