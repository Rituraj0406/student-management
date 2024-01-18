document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link and check if it matches the current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');

        // Check if the link's data-page attribute matches the current page
        if (currentPage.includes(linkPage)) {
            link.classList.add('active');
        }
    });
});

function getStudentData(){
    let users;
    if(localStorage.getItem('users') === null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }
    return users;
}


function getTheTopScorers(){
    const list = document.getElementById('student-topscore');
    const users =  getStudentData();

    const topScore = users.filter((user) => user.score > 85);

    list.innerHTML = '';

    if(topScore){
        topScore.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                ${student.name}
            </th>
            <td class="px-6 py-4">
                ${student.classs}
            </td>
            <td class="px-6 py-4 bg-gray-50">
                ${student.score}
            </td>
            <td class="px-6 py-4">
                ${student.score}%
            </td>
            `;
            list.appendChild(row);
        })
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `
            <p class="text-center pt-10">No data found.</p>
        `
        list.appendChild(row);
    }
}

window.onload = function(){
    getTheTopScorers();
}