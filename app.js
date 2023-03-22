// Write an async function called `getQuote`.
 // Inside the function, use fetch to send a GET request to `https://zenquotes.io/api/random/` and store the resolved value of the returned promise in a variable called `response`.
 // attach await to the fetch call
  // async function
// Call the `.json()` method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called `data`.
  //attach response.json() to the response variable
  // attach await to the response.json() call
    //console.log(data) to see the structure of the data object
//Use that data to set the text of the `h1` with id `"quote"`.
  // Call the function so that the quote appears as soon as the page loads.
 //You can use `console.log` to have a look at the structure of the data object to figure out how to get just the quote out!

//Call this function so that the quote appears as soon as the page loads.

async function getQuote() {
  const response = await fetch("https://meowfacts.herokuapp.com");
  console.log (response);
  const data = await response.json();
  console.log(data);
  document.querySelector("#quote").textContent = data.data[0];

  let newQuote = document.querySelector("#new-quote-button");
   newQuote.addEventListener("click", getQuote);

        let newListItem = document.createElement("li");
        newListItem.innerText = data.data[0]
        let list = document.querySelector("ol");
        list.appendChild(newListItem);
      };

getQuote()

// Attach an event listener to the button already on the page with id `"new-quote-button"` to call `getQuote` when the user clicks.
 

// Create a function that takes in a string, 
// creates a new list item with that string, 
//adds it to the `ol` with the id `"quote-history"`.
//Call this function within your `getQuote` function so that the quotes get stored in the `"quote-history"` list.


