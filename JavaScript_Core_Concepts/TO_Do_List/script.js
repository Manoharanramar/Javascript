// Get HTML elements using their IDs
let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')

// Array used to store all todos
let todos = []


// This function runs once when the page is loaded
window.onload = () => {

    // Get saved todos from localStorage
    // JSON.parse converts string back into JavaScript array
    // If no data exists, use empty array []
    todos = JSON.parse(localStorage.getItem('todoes')) || []

    // Display every saved todo on the webpage
    todos.forEach(todo => addtodo(todo))
}


// Add button click event
button.addEventListener('click', () => {

    // Prevent adding empty todos
    if (input.value.trim() === '') {
        return
    }

    // Store input value in a variable
    let todo = input.value

    // Add todo into the array
    todos.push(todo)

    // Convert array into string and save it in localStorage
    localStorage.setItem('todoes', JSON.stringify(todos))

    // Display the todo on the webpage
    addtodo(todo)

    // Clear the input box
    input.value = ''
})


// Function used to create and display a todo
function addtodo(todo) {

    // Create a new paragraph element
    let para = document.createElement('p')

    // Put the todo text inside the paragraph
    para.innerText = todo

    // Add the paragraph inside todoList div
    todoList.appendChild(para)


    // Single click → mark todo as completed
    para.addEventListener('click', () => {

        // Add line through the todo text
        para.style.textDecoration = 'line-through'
    })


    // Double click → delete todo
    para.addEventListener('dblclick', () => {

        // Remove todo from the webpage
        todoList.removeChild(para)

        // Remove todo from array and localStorage
        remove(todo)
    })
}


// Function used to remove todo
function remove(todo) {

    // Find the position (index) of todo in the array
    let index = todos.indexOf(todo)

    // Check whether todo exists in the array
    if (index > -1) {

        // Remove 1 element from the array
        todos.splice(index, 1)
    }

    // Update localStorage after deleting the todo
    localStorage.setItem('todoes', JSON.stringify(todos))
}