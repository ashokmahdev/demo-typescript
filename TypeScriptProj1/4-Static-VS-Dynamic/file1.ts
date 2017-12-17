module demo_static_dynamic {

    var person;
    //var person: string;  // This line will fix the issue runtime issue 

    person = 'Jhon papa';

    console.log(person.substring(1,4));

    person = {
        name: "Jhon",
        age :25
    }

    // This give a runtime error
    //to fix this we need to use annotations when declaring the variable
    console.log(person.substring(1, 4)); 

}