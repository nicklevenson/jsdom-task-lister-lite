document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  form.childNodes[5].addEventListener("click", function(e) {
    e.preventDefault()
    let newText = form.childNodes[3].value
    const todos = document.getElementById("tasks")
    todos.innerHTML += `<li>${newText}</li>`
  })
});
