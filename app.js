// SINGLE ELEMENT SELECTOR

// document.getElementById()
console.log(document.getElementById('list-title'));

// Getting things from the element
console.log(document.getElementById('list-title').id);
console.log(document.getElementById('list-title').className);

const listTitle = document.getElementById('list-title');

// Change styling
listTitle.style.background = '#ddd';
listTitle.style.padding = '.5rem';
// listTitle.style.color = 'teal';

// Change Content 
listTitle.textContent = 'Hey JavaScript';

// document.querySelector()

console.log(document.querySelector('#list-title'));
console.log(document.querySelector('.items-class'));
console.log(document.querySelector('li'));
console.log(document.querySelector('.item-div'));

// document.querySelector('li').style.color = 'red';
// // document.querySelector('ol li').style.color = 'yellow';

// document.querySelector('li:last-child').style.color = 'green';