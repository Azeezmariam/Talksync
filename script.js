document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate');
    translateButton.addEventListener('click', async () => {
        const textToTranslate = document.querySelector('.text textarea').value;
        const sourceLanguage = 'en'; // Assuming input language is English
        const targetLanguage = 'rw'; // Assuming output language is Kinyarwanda

        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'd413b30fefmsh6cfba2a3cf56ddap18b957jsn93fe1cc335fa',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: textToTranslate,
                target: targetLanguage,
                source: sourceLanguage
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse response as JSON
            const translatedText = result.data.translations[0].translatedText;

            // Update result textarea with translated text
            document.querySelector('.text-1 textarea').value = translatedText;
        } catch (error) {
            console.error(error);
        }
    });
});
