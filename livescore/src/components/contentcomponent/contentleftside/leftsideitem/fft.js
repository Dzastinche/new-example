import Ressult from "../../contentcenter/contentcentaritem/result";
const Check=(ele)=>{
    console.log(ele.score.fullTime.home)
    let vrijeme=new Date(ele.utcDate)
    let sat=vrijeme.getHours();
    let min=vrijeme.getMinutes()
    return(ele.score.fullTime.home?<Ressult game={ele.score.fullTime}></Ressult>:`${sat} : ${min==0?'00':min}`)};
    export default Check    