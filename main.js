const container = document.querySelector('#container'); //Reference element for placement later

const p = document.createElement('p');
p.classList.add('content');
p.textContent = "Hey I'm red!"
p.style.color = 'red'

container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!"
h3.style.color = 'blue'

container.appendChild(h3);

const div = document.createElement('div');
div.style.border = '2px solid black' //Border requires more input after object.style.border
div.style.backgroundColor = 'pink'

    const h1 = document.createElement('h1');
    h1.textContent = "I'm in the div!"

    const p1 = document.createElement('p')
    p1.textContent = "ME TOO!"

    div.appendChild(h1);
    div.appendChild(p1);

container.appendChild(div);


//btn.addEventListener('click', function (e) {//btn references html element, 'click' is event to call funciton.
  //  e.target.style.background = 'blue';  //on event, the button turns blue
 // });

 //Below shows how to attach listeners to group of nodes.

 const buttons = document.querySelectorAll('button') //Selects all 'button' elements

 buttons.forEach((button) => { // => acts as function callout
    
    button.addEventListener('click', () => {
        alert(button.id);
    });


 });
 