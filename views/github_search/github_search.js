// creation de l'appel API

const github_URI = "https://api.github.com/users/tankarasu";

fetch(github_URI).then(res => {
        return res.json();
    })
    .then(json => {


        let data = json;
        console.log(data);

        let { avatar_url, followers, following, login, name, public_repos } = data;
        console.log(name);

        // let avatar = document.createElement('img');
        // avatar.setAttribute("id", "avatar");
        // avatar.setAttribute("src", avatar_url);
        // avatar.setAttribute("alt", "photo-profil-github");
        // let getAvatar = document.getElementById("resultats");
        // getAvatar.appendChild(avatar);

        let avatar = document.querySelector("#avatar");
        avatar.setAttribute("src", avatar_url);
        avatar.setAttribute("alt", "photo_profil_github");






    })