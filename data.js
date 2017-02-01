
// Adding text after the hover effects from the DOM
var para = function(e){

	var data = document.getElementById('data');

	data.innerText = 'Pease visit me on ' + e.alt + '...';
	// data.style.display = 'block';
};


// Deleting the innerText inside  below the icons
data.addEventListener('mouseout', function(){
	data.innerText = '';
});



// Changing the connect color style every 2 seconds
var colors = ['red', 'blue', 'orange', 'green', 'purple', 'lightgrey', 'black'],
	connect = document.getElementById('connect'),
	container = document.getElementById('page'),
	backgroundOne = ['background.png', 'background-one.png', 'background-two.png', 'background-three.png', 'background-four.png', 'background-five.png', 'background-six.png'];

	console.log(backgroundOne[Math.round(Math.random() * backgroundOne.length) - 1]);

setInterval(function(){
		connect.style.color = colors[Math.round(Math.random() * colors.length)];
		container.style.backgroundImage = 'url('+ 'assets/images/' + backgroundOne[Math.round(Math.random() * backgroundOne.length)] +')';
}, 2000);



// Gradding the user input from the Contact page
var person = document.getElementById('name'),
	email = document.getElementById('email'),
	message = document.getElementById('message'),
	button = document.getElementById('button'),
	content = document.getElementById('content');

// Sending message
	button.addEventListener('click', function(){
		alert('Your message has been sent!');
		person.value = '';
		email.value = '';
		message.value = '';

	});



var background = ['', '', '', '', '', '', ''];
var section = document.getElementById('section');













