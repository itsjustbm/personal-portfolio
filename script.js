// Greet the user based on the time of day
window.onload = function() {
    const greeting = document.getElementById('greeting');
    const hours = new Date().getHours();
    
    if (hours < 12) {
        greeting.textContent = 'Good Morning! Welcome to My Portfolio';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon! Welcome to My Portfolio';
    } else {
        greeting.textContent = 'Good Evening! Welcome to My Portfolio';
    }
};

// Learn More Button Interaction
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const extraContent = document.getElementById('extraContent');
    
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        extraContent.style.display = 'none';
        this.textContent = 'Learn More';
    }
});

// Change the border of the profile image when hovering over it
const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('mouseover', function() {
    this.style.border = '5px solid #007BFF';
});
profileImage.addEventListener('mouseout', function() {
    this.style.border = ''; // Remove border on mouse out
});

// Background color setting 
document.body.style.backgroundColor = 'gray'; // This can be commented out if CSS is preferred

// Set background color for the 'info' paragraph
let pElement = document.getElementById('info');
pElement.style.backgroundColor = 'red';

// To-Do List Functionality
function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Incomplete'}`;
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading todos:', error));
}

function addTodo() {
    const title = document.getElementById('title').value;
    const completed = document.getElementById('completed').checked;

    // Display the new to-do immediately in the main to-do list
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = `${title} - ${completed ? 'Completed' : 'Incomplete'}`;
    todoList.appendChild(li);

    // Clear the form after adding the to-do
    document.getElementById('todoForm').reset();
}


