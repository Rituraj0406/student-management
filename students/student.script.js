let users = getStudentData();

function getStudentData(){
    let users;
    if(localStorage.getItem('users') === null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }
    return users;
}

function addStudentRecordToTable(){
    const list = document.getElementById('student-list');
    const users = getStudentData();

    list.innerHTML = '';
    if(users){
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 font-medium text-gray-900" >
                    ${user.name}
                </td>
                <td class="px-6 py-4">
                    ${user.classs}
                </td>
                <td class="px-6 py-4">
                    ${user.score}
                </td>
                <td class="px-6 py-4">
                    ${user.email}
                </td>
                <td class="px-6 py-4">
                    ${user.contact}
                </td>
                <td class="px-6 py-4">
                    <button class="bg-red-500 px-5 py-2 text-white" onclick="deleteRow(${index})">Delete</button>
                </td>
            `;
            list.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `
            <p class="text-center pt-10">No data found.</p>
        `
        list.appendChild(row);

    }
    
}

function deleteRow(index){
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    addStudentRecordToTable();
}

window.onload = function() {
    // This code will be executed when the entire page is fully loaded
    addStudentRecordToTable();
};