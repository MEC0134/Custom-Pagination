

// Store a limiter for the number of items we want per page
var itemPerPage = 10;


// Create an array from the number of li elements we have representing the contacts 
var contactListArr = Array.from(document.querySelectorAll("ul li"));


// Create a constant variable to store the number of pages we need 
const numOfPages = Math.ceil(contactListArr.length/itemPerPage); 


//Grab the li in our div and create buttons as needed by using a for loop
for(var i = 0; i < numOfPages; i++){

    document.querySelector(".pagination-container li").innerHTML += "<a href = '#' class = 'nums'>" + (i+1) + "</a>";
}


// Store my buttons created in the code above in a variable, we grab them by using the class we assigned it above
var myBtns = document.querySelectorAll('.nums'); 

for(var i = 0; i < myBtns.length; i++){

    myBtns[i].addEventListener('click', showContacts, false);
}


// store the number of contacts we have in a variable
var numOfConctacts = document.getElementsByClassName("contact-item cf");


// Only display the first 10 contacts during the launching of the page
for(var i = 10; i < numOfConctacts.length; i++){
    numOfConctacts[i].style.display = "none" 
}


function showContacts(){

    transition();
    
    // Index of the page the user is in times itemPerPage
    var contacts = ((this.innerText-1) * itemPerPage); 


    // if the contacts are less than the itemsPerPage then store it in  the variable lastPage 
    if(contactListArr.length - contacts < itemPerPage) 
    {

        var lastPage = contactListArr.length - contacts;
    }
    else
    {
        lastPage = 10;
    }


    for(var i = contacts; i < (contacts + lastPage); i++)
    {
        numOfConctacts[i].style.display = "block";

    }
}


// Function to transition through the pages
function transition(){

    for (var j = 0; j < numOfConctacts.length; j++) {
        numOfConctacts[j].style.display = "none";
    }
}