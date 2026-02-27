const btn = document.getElementById('rain-btn')
const rain = document.getElementById('rain-sound')

btn.addEventListener("click", () => {
    rain.play();
    btn.style.display = 'none';
})

rain.volume = 0.2;