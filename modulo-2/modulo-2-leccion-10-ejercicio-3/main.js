'use strict'

function getUser() {
    const login = document.querySelector('.js-login');
const username =login.value;
    fetch (`https://api.github.com/users/${username}`)

    .then(response => response.json())
    .then (data => {
        const result = document.querySelector('.js-result')
        result.innerHTML= data.login

        const avatar = document.querySelector('.js-avatar')
        avatar.src = data.avatar_url

        const repo = document.querySelector('.repo')
        repo.innerHTML= data.public_repos
    })
}

const btn = document.querySelector('button');
btn.addEventListener ("click", getUser);