function openLinkInNewWindow(url){
    window.open(url);
}

function convertTime(inputString){
    const time = parseInt(inputString)
    if(time < 1200){
        return `${(time/100).toFixed(2)} am`
    }
    else if (time > 1200){
        return `${((time-1200)/100).toFixed(2)} pm`
    }
    else{
        return 'N/A'
    }
}

export {openLinkInNewWindow, convertTime}