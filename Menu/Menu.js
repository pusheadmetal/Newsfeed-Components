window.addEventListener("load", function(event){
  
  /* This is the data we will be using, study it but don't change anything, yet. */

  let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
  ];

  /* 

    Step 1: Write a function that will create a menu component as seen below:

    <div class="menu">
      <ul>
        {each menu item as a list item}
      </ul>
    </div>

    Pass the function an array as it's only argument.

    Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
    Add those items to the <ul>

    Step 3: Using a DOM selector, select the menu button currently on the DOM.
    
    Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

    Step 5: return the menu component.

    Step 6: add the menu component to the DOM.
    
  */


  function createMenu(arrayInput){
    
    //Create Elements
      let newDiv = document.createElement("div");
      let newList = document.createElement("ul");
    //Add Classes
      newDiv.classList.add("menu");
    //Create/Add List Items
      arrayInput.forEach( (item) => {
        let newListItem = document.createElement("li");
        let newListItemText = document.createTextNode(item);
        newListItem.appendChild(newListItemText);
        newList.appendChild(newListItem);
      } )
    //Class Toggle
      document.querySelector(".menu-button").addEventListener("click", function(e){
        newDiv.classList.toggle("menu--open");
      });
    //Append children
      newDiv.appendChild(newList);
    //Return component
      return newDiv;
  }

  let addMenu = createMenu(menuItems);
  let getHeader = document.querySelector(".header");
  getHeader.appendChild(addMenu);
})
