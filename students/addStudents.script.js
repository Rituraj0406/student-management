function addUser(e){
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const studentFormValues = {
        name: document.getElementById('name').value,
        classs: document.getElementById('classs').value,
        score: document.getElementById('score').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value
    }

    storedUsers.push(studentFormValues);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    reset('addUserForm');

    console.log('updated user in array:',storedUsers);
}

// document.getElementById('addUserForm').addEventListener('submit', addUser);
document.addEventListener('DOMContentLoaded', function () {
    const addUserForm = document.getElementById('addUserForm');
    if (addUserForm) {
        addUserForm.addEventListener('submit', addUser);
    } else {
        console.error("Could not find element with ID 'addUserForm'");
    }
});

function reset(formId){
    const form  = document.getElementById(formId);
    form.reset();
}


