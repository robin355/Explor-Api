const randomUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results));
}
randomUser();
const displayUser = data => {
    const uderDiv = document.getElementById('user');
    for (const user of data) {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <h1>User Name-${user.name.first} ${user.name.last}</h1>
        <h4>email-${user.email} </h4>
        <p>adrees-${user.location.city} ${user.location.country} </p>
        
        `;
        uderDiv.appendChild(div);
    }

}