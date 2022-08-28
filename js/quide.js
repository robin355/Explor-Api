const quideData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuide(data))
}
const displayQuide = quit => {
    const quitData = document.getElementById('qude');
    quitData.innerText = quit.quote;
}