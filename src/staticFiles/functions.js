
export function isLogedIn(err){
    if(err.response){
        if(err.response.status===401){
            
            return false        //not logged in
        }else{
            return true;
        }
    }
    return null;    //network error
}