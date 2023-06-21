
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

export function getAdminToken(){
    return localStorage.getItem('x-auth-token')
}
export function getUserToken(){
    return localStorage.getItem('u-auth-token')
}

export function logoutAdmin(){
    return localStorage.removeItem('x-auth-token');
}
export function logoutUser(){
    return localStorage.removeItem('u-auth-token');
}