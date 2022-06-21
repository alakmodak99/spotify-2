export function millisToMinutesAnsSeconds(millis){
    const minutes=(millis/60000) | 0
    const seconds =((millis%60000)/1000).toFixed(0)
    return seconds ==60
    ? minutes +1 + ":00"
    : minutes + ":" + (seconds <10 ? "0" : "") + seconds


}