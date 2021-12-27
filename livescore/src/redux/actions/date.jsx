        //set Date    
        let Today=new Date()
     export let year=Today.getFullYear();
            let day=Today.getDate();
     export let mjesec=Today.getMonth()+1;
     export const dan=(a)=>{
            let dan=day;
            if (a){
                dan += a;
            }
            else{
                if (dan<10){
                    return '0'+dan
                }
                else{return dan}
                
            }
            if (dan<10){
                return '0'+dan
            }
            else{return dan}
    
        }