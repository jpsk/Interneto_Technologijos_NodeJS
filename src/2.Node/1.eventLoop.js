process.on("exit", () => console.log("Exiting the process"));

console.log("started work");

setTimeout(() => console.log("I'm still here!"), 1000);

console.log("finished work");
