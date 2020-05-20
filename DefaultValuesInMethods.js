function sayHello(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}
sayHello("Marcel"); // output Hello Marcel
sayHello("Marcel", "Hey There"); //output Hey There Marcel

// default values is the variable with something set - i.e. greeting = "Hello"