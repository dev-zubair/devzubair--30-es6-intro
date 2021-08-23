//Using eventlistener for Border Button
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid green';
})
//Using onClick for Background color butoon
function backgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

//Using eventlistener for Add Friend Button
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Lorem ipsum dolor sit amet.</p>
    `;
    friendContainer.appendChild(friendDiv);
})
