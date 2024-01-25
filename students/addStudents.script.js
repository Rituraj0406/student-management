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

//getting the index from the url params and change the page title to Edit Students to Database
// document.addEventListener('DOMContentLoaded', function(){
//     const urlParams = new URLSearchParams(window.location.search);
//     const studentIndex = urlParams.get('data')
//     console.log('print selected index:', studentIndex);

//     const heading = document.querySelector('.main-content p.text-2xl');

//     if(studentIndex){
//         heading.textContent = 'Edit Student Database';
//     }

//     const students = JSON.parse(localStorage.getItem('users')) || [];
//     const selectedStudent = students[studentIndex];

//     if(selectedStudent) {
//         populateForm(selectedStudent)
//     } else {
//         console.log('Student not found in localstorage.')
//     }

//     const editForm = document.getElementById('addUserForm'); // assuming you have an edit form with the id 'editUserForm'
//     if (editForm) {
//         editForm.addEventListener('submit', editFormSubmit);
//     } else {
//         console.error("Could not find element with ID 'editUserForm'");
//     }


//     function populateForm(data) {
//         document.getElementById('name').value = data.name;
//         document.getElementById('classs').value = data.classs;
//         document.getElementById('score').value = data.score;
//         document.getElementById('email').value = data.email;
//         document.getElementById('contact').value = data.contact;
//     }

//     function editFormSubmit(e){
//         e.preventDefault();

//         const editStudentFormValues = {
//             name: document.getElementById('name').value,
//             classs: document.getElementById('classs').value,
//             score: document.getElementById('score').value,
//             email: document.getElementById('email').value,
//             contact: document.getElementById('contact').value 
//         }
//     }
    


// })


function reset(formId){
    const form  = document.getElementById(formId);
    form.reset();
}


