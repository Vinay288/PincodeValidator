const pincodeRegex = RegExp('^[0-9]{3}\\s?[0-9]{3}$');
function validatePincode(pincode)
{
    if(pincodeRegex.test(pincode))
        console.log(pincode + " is Valid");
    else
        throw new Error(pincode + " is Invalid");
}
try{
    validatePincode("400 088")

    validatePincode("A445656")
    validatePincode("400088B")
}
catch(e){
   console.error(e)
}