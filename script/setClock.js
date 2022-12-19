const 
    deg = 6,
    hrArrowCont = document.querySelector('.hour'),
    minArrowCont = document.querySelector('.min'),
    secArrowCont = document.querySelector('.sec'),
    secondAudio = new Audio('/audio/second-audio.mp3')

    setInterval(()=>{
    let date = new Date(),
        hr = date.getHours() * 30,
        mn = date.getMinutes() * deg,
        sc = date.getSeconds() * deg;

    hrArrowCont.style.transform = `rotate(${hr+(mn/12)}deg)`;
    minArrowCont.style.transform = `rotate(${mn}deg)`
    secArrowCont.style.transform = `rotate(${sc}deg)`;
    secondAudio.play()
    }, 1000)