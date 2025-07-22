export const apiUrl = 'https://construction-project-backend-1.onrender.com/api';
export const fileUrl = 'https://construction-project-backend-1.onrender.com';
export const token = () => {
    const userInfo = localStorage.getItem('userInfo');
    const data = JSON.parse(userInfo)
    return data.token;
}
