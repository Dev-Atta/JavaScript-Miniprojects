
// Events HAnding

// stopPropagation(); 	The event from bubbling/capturing to other elements
// preventDefault(); stops the browser's default built-in behavior for an event, without stopping the event itself from firing.
// event.target 


// target.parentNode



// document.createElement(tag) — creates a new element in memory.

// javascript
// const p = document.createElement("p");

// .appendChild(node) — adds an element as the last child of a parent.

// javascript
// parent.appendChild(p);

// .removeChild(node) — removes a specified child element from its parent.

// javascript
// parent.removeChild(p);

// .parentElement — gets the parent of an element.

// javascript
// child.parentElement; // returns parent div

// .children — gets all child elements (HTML elements only).

// javascript
// parent.children; // HTMLCollection [p, p]

// .childNodes — gets all child nodes (elements + text/whitespace).

// javascript
// parent.childNodes; // includes text nodes too

// .firstElementChild — gets the first child element.

// javascript
// parent.firstElementChild; // first <p>

// .lastElementChild — gets the last child element.

// javascript
// parent.lastElementChild; // last <p>

// .innerHTML — sets/gets HTML content inside an element.

// javascript
// p.innerHTML = "<b>Bold text</b>";

// .textContent — sets/gets plain text content (no HTML parsing).

// javascript
// p.textContent = "Hello!";

// .classList.add(name) — adds a CSS class to an element.

// javascript
// p.classList.add("button");

// .setAttribute(name, value) — sets an attribute on an element.

// javascript
// input.setAttribute("disabled", "");

// .removeAttribute(name) — removes an attribute from an element.

// javascript
// input.removeAttribute("disabled");

const images = document.getElementById("images");

images.addEventListener("click", function(e){
   // console.log(e); Points us to whole Div Tag
   // console.log(e.target) //points us to the Only clicked Item tag
  // console.log(e.target.parentNode) // poINT us to parent of our clicked Item tag
 // console.log(e.target.tagName)
  
  if (e.target.tagName === "IMG"){
   let to_remove = e.target.parentNode;
   to_remove.remove();  // it will Remove the Pointed Tag on clcik
  }
 

})