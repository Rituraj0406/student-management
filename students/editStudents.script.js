document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const studentIndex = urlParams.get('data');

    console.log('selected Index=====', studentIndex)

    const students = JSON.parse(localStorage.getItem('users')) || [];

    const selectedStudentData = students[studentIndex];
    console.log('selectedStudenet Data-----', selectedStudentData);

    if (selectedStudentData) {
        populateForm(selectedStudentData)
    } else {
        console.log('Student not found in localStorage');
    }

    function populateForm(data) {
        document.getElementById('name').value = data.name;
        document.getElementById('classs').value = data.classs;
        document.getElementById('score').value = data.score;
        document.getElementById('email').value = data.email;
        document.getElementById('contact').value = data.contact;
    }


    const editForm = document.getElementById('editStudentForm');
    if (editForm) {
        editForm.addEventListener('submit', editFormSubmit);
    } else {
        console.log('Could not find element with ID editUserForm');
    }


    function editFormSubmit(e) {
        e.preventDefault();


        const storedStudent = JSON.parse(localStorage.getItem('users')) || [];
        const editFormValues = {
            name: document.getElementById('name').value,
            classs: document.getElementById('classs').value,
            score: document.getElementById('score').value,
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value
        }

        if(studentIndex !==null && studentIndex < storedStudent.length) {
            storedStudent[studentIndex] = editFormValues;

            localStorage.setItem('users', JSON.stringify(storedStudent));
            console.log('updated array in localStorage-----', storedStudent)
        } else {
            console.log('Invalid student index');
        }
    }
})