console.log('Hello from js.');

let employees = []

let count = 0

// event #2
$(document).ready(onReady);

let favFoods =['Burgers','fajitas','donuts','cookies!']

function onReady(){
    console.log('hello from jQuery')
    
    $('#clickMe').on('click', buttonClicked); //event listener

    $('#submitForm').on('click', submitForm); //event listener

    $('#counter').on('click', countUp); // event listener

    $('#count').text(count);

    //descendant selector
    $('#favoriteFoods').on('click', '.deleteBtn', deleteFunc);

    $('#favoriteFoods').on('click', '.changeColor',ChangeColorS );

   
}

    function countUp (){
        console.log('UP');
        //increment the count variable
       count = count + 1; // this is counting up
       // or count ++
       console.log(count)

    //  $('#count').append(count); // this will put for each click on countUp will put 'attach' the new number on the screen.
        $('#count').text(count); // this just on the click shows the new number 

    }



function submitForm() {
    console.log('clicking the submit button');
    // this is where I want to grab input values;
    // getter .val()
    // setter .val('something')
    //.text() is another getter and setter | if you want to GET something leave .() open | setter you need to have .('something') inside.

    let name = $('#name').val();
    console.log('name: ', name);

    let title = $('#title').val();
    console.log('title: ', title);

   $('#name').val('') // this is an ex. of using .val as a setter
   $('#title').val('')

    let newEmployee = {
        nameKey: name,
        titleKey: title
    }

    employees.push(newEmployee)

}


//this would be event 3 
function buttonClicked(){
    console.log("I'm Clicked");

    let ulFoods = $('#favoriteFoods');  // the let ulFoods isn't nec. you can just have the $() on the next line.
   
    ulFoods.empty();  //clear out ulFoods to append a fresh list

    for (let i = 0 ; i < favFoods.length; i++){ 
        ulFoods.append(
            `<li> one of my favorite foods is: ${favFoods[i]}!
                 <button class= "deleteBtn"> DELETE </button> 
                 <button class= "changeColor"> Change Color </button> 
            </li>`);
    }
    
}

function deleteFunc(){
    console.log('delete');
    $(this).parent().remove();

    //this = the specific delete btn that was clicked
    //.parent() = the <li>
    //.remove() removes that element
}


function ChangeColorS(){
    console.log('reading rainbow')
    $(this).parent().toggleClass('blueColor')

}



    function hello(){
        console.log('hellooooo'); 
    }

    function goodbye(){
        console.log('goodbye');   
    }



    // // event #1 // this is saying this will be fired off first. 
    hello(); // 
    goodbye(); // 
    console.log('===============')
    hello(); // 
    goodbye();



 //  ulFoods.append('<li>' favFoods[i] '</li>');
    // ulFoods.append('<li>Hello</li>');
    // ulFoods.append('<li>Goodbye</li>'); 
    // ulFoods.append('<li>'+ favFoods[0] + '</li>');
    // ulFoods.append('<li>'+ favFoods[1] + '</li>');
    // ulFoods.append('<li>'+ favFoods[2] + '</li>');
    // ulFoods.append('<li>'+ favFoods[3] + '</li>');
   

