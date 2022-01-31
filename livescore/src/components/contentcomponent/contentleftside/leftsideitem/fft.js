const Check=(ele)=>{
    let vrijeme=new Date(ele.utcDate)
    let sat=vrijeme.getHours();
    let min=vrijeme.getMinutes()
    return(ele.score.fullTime.homeTeam?`<>${ele.score.fullTime.homeTeam}</><>${ele.score.fullTime.awayTeam}</>`:`${sat} : ${min==0?'00':min}`)};
    export default Check