const
    hrPointer = document.querySelector('#hour'),
    minPointer = document.querySelector('#min'),
    secPointer = document.querySelector('#sec'),
    multiplier = 6, // value resulting from dividing 360 (total number of degrees) by 60 (maximum minutes and seconds)
    secondSound = new Audio('/audio/second-audio.mp3')

    updateHr()
    setInterval(()=>{
        updateHr()
        secondSound.play();
    }, 1000)

function updateHr(){
    let 
        date = new Date(),
        hr = date.getHours() * 30,// value resulting from dividing 360 (total number of degrees) by 30 (maximum hour in a day)
        mn = date.getMinutes() * multiplier,
        sc = date.getSeconds() * multiplier;

    hrPointer.style.transform = `rotateZ(${hr + (mn / 12)}deg)`;
    minPointer.style.transform = `rotateZ(${mn}deg)`;
    secPointer.style.transform = `rotateZ(${sc}deg)`;
}