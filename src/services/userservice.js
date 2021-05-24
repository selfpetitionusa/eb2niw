import config  from "../config/config";

export const userService = {
    login,
    logout,
    register,
    uploadImage,
    getProfile,
    updateNameInfo,
    updateLinksInfo,
    updateEducationInfo,
    updateBio
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', user.token);
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getProfile(userId, token) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',  }
    };
    let params;
    if(userId) params= `userId=${userId}`;
    else params = `token=${token}`;
    return fetch(`${config.apiUrl}/tutors?${params}`, requestOptions).then(handleResponse);
}

function uploadImage(photo, sex) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            photo: photo,
            sex: sex
        })
    };

    return fetch(`${config.apiUrl}/tutors/photo`, requestOptions).then(handleResponse)
}

function updateNameInfo(firstName, lastName, email, shortBio) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            shortBio: shortBio
        })
    };

    return fetch(`${config.apiUrl}/tutors/name-info`, requestOptions).then(handleResponse)
}

function updateLinksInfo(instagram, youtube, linkedin, facebook) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            facebookLink: facebook,
            youtubeLink: youtube,
            instagramLink: instagram,
            linkedInLink: linkedin
        })
    };

    return fetch(`${config.apiUrl}/tutors/links-info`, requestOptions).then(handleResponse)
}
function updateEducationInfo(educationInfo) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(educationInfo)
    };

    return fetch(`${config.apiUrl}/tutors/education-info`, requestOptions).then(handleResponse)
}

function updateBio(bio) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            bio: bio
        })
    };

    return fetch(`${config.apiUrl}/tutors/bio`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        } else {
            const token = response.headers.get('Authorization')
            if(token) {
                data.token = token.replace('Bearer ','');
            }

            return data;
        }

    });
}
