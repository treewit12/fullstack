function criticacalCode() {
    // Simulating an error
    throw "throwing an exception";
}

function logErrors(theException)    {
    console.log(theException);

}

console.log("\n****** Try..Catch *****\n");
try {
    criticacalCode();
} catch (ex) {
    console.log("In catch block");
    logErrors(ex);
} 
console.log("\n****** thorowing in try..Catch *****\n");

try {
    throw "An exception that is thrown";
} catch (ex) {
    console.log("Got an error: ");
    logErrors(ex);

}

console.log("\n****** Try..Catch Finally *****\n");
try {
    criticacalCode();
} catch (ex) {
    console.log("Got an error");
    logErrors(ex);
} finally {
    console.log("Code that always will run");
}
