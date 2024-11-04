export const validatePassword = (password:string)=>{
    const patternMayus = /^(?=.*[A-Z]).*$/;
    const patternLength = /^[A-Za-z\d]{8,}$/
    if(!patternMayus.test(password)) return {valid:false,text:"At least one UpperCase"}
    if(!patternLength.test(password)) return {valid:false,text:"At least 8 character length"}
    return {valid:true,text:""}
    
}
