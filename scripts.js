function evaluateLove() {
    const loveName = prompt("What is your name?")
    const color = prompt(`${loveName} is a nice name. What's your favorite color, ${loveName}?`).toLowerCase()
    switch(color){
        case "red":
        case "yellow":
        case "blue":
            alert(`I like that color too, ${loveName}! perhaps we have other things in common!`)
        break;
        
        default:
            alert(`Oh. I just realized I had some errands to run. Nice to meet you though, ${loveName}`)
    }
}