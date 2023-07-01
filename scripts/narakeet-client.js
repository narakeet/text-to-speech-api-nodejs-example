document.getElementById('btn').addEventListener('click', async () => {
    const text = 'Hello from the client!';
    const response = await fetch('/api/narakeet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });
    
    if (response.ok) {
        const blob = await response.blob();
        const audioURL = URL.createObjectURL(blob);
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = audioURL;
        audioPlayer.play();
    } else {
        console.error('Audio creation failed');
    }
});
