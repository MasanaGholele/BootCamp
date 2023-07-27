import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJmM2IwMThkZTI0NDQ4YjYwODgxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTE4NjgzOSwiZXhwIjoxNjg5NDQ2MDM5fQ.m034TAnYCzAZnsdGMEOD3FvU3T5Y6LOoakfHRNL8J2I";

export const publicRequest = axios.create({
    baseURL: BASE_URL,    
});

export const userRequest = axios.create({
    baseURL: BASE_URL,  
    headers: {token:`Bearer ${TOKEN}`}
})