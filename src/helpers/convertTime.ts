export const convertTime = (seconds : number)=>{
    let duration = seconds;
    let hours = duration/3600;
    duration = duration % (3600);
    
    let min :number|string = Math.floor(duration/60);
    duration = duration % (60);
    
    let sec:number|string = Math.floor(duration);
    
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if ( Math.floor(hours) > 0) {
      return (`${Math.floor(hours)}h:${min}m:${sec}s`)
    }
    return (`${min}m:${sec}s`)
}