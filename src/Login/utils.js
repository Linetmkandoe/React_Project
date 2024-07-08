const baseUrl =process.env.REACT_APP_BASE_URL;
console.log({baseUrl})
    


export const login = async({username,password})=>{
    try{
        const response = await fetch(`${baseUrl}/auth/login`,{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify({username,password})
        })
        if(!response.ok){
            const errorDetails =await response.json()
            return {success:false,message: errorDetails.message}
        }
        const result = await response.json();
        return{success:true,data:result}
        
    }
    catch(error){
        return `Error during login: ${error.message}`;
    }
}