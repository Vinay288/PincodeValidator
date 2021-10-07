const pincodeRegex = RegExp('^\\d{6}$');
try{
    if(pincodeRegex.test("A400088"))
        console.log("correct")
    else
    throw new Error("incorrect pincode");
}
catch(e){
   console.error(e)
}