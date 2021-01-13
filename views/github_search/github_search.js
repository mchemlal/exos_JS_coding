// creation de l'appel API

const github_URI = "https://api.github.com/users/tankarasu";

fetch(github_URI).then(res => {
        return res.json();
    })
    .then(json => {


        let data = json;


        let { avatar_url, followers, following, login, name, public_repos } = data;


        // let avatar = document.createElement('img');
        // avatar.setAttribute("id", "avatar");
        // avatar.setAttribute("src", avatar_url);
        // avatar.setAttribute("alt", "photo-profil-github");
        // let getAvatar = document.getElementById("resultats");
        // getAvatar.appendChild(avatar);

        let avatar = document.querySelector("#avatar");
        avatar.setAttribute("src", avatar_url);
        avatar.setAttribute("alt", "photo_profil_github");

        let name_github = document.querySelector("#name");
        name_github.textContent = name;

        let following_github = document.querySelector("#following");
        following_github.textContent = following;

        let followers_github = document.querySelector("#followers");
        followers_github.textContent = followers;

        let public_repository = document.querySelector("#public_repository");
        public_repository.textContent = public_repos;





    })