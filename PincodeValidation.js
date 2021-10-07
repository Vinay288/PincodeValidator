const pincodeRegex = RegExp('^\\d{6}$');
function validatePincode(pincode)
{
    if(pincodeRegex.test(pincode))
        console.log(pincode + " is Valid");
    else
        throw new Error(pincode + " is Invalid");
}
try{
    validatePincode("A445656")
    validatePincode("400088B")
}
catch(e){
   console.error(e)
}