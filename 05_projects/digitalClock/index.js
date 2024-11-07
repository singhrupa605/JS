const clock = document.getElementById("clock");

setInterval(()=>
{
            let date = new Date()
            const time =  date.toLocaleTimeString('en-IN')
            clock.innerHTML = `${time}`
}, 1000)