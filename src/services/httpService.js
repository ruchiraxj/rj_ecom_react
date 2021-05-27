import axios from "axios";

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("HTTP Error", error);
        alert("API Error - For More Information Check The Console");
        return false;
    }
});

export default{
    get: axios.get,
    post: axios.post
}