const obj ={
    name: "Adrian's computer",
    greet: function()
    {
        //console.log("Hello, "+this.name);
        console.log(`Hello, ${this.name}`);

    },
    greet2: () => {
        //Asa nu se poate accesa numele!
        console.log("Hello, "+this.name);
    }
}

obj.name = "Mihai";
obj.greet = function() {

    console.log("Adrian yoktur!");
}


obj.greet();