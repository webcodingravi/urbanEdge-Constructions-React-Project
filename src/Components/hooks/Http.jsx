export const apiUrl = 'https://construction-project-backend-lkb5.onrender.com/api';
export const fileUrl = 'https://construction-project-backend-lkb5.onrender.com';

// export const apiUrl = 'http://127.0.0.1:8000/api';
// export const fileUrl = 'http://127.0.0.1:8000';
export const token = () => {
    const userInfo = localStorage.getItem('userInfo');
    const data = JSON.parse(userInfo)
    return data.token;
}


