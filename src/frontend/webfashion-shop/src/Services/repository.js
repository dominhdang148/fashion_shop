import axios from "axios";

export async function getProduct() {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/products/`);
        const data = response.data;
        if (data) {
            return data.results;
        }
        else {
            return null;
        }
    } catch (error) {
        console.log('Error', error.messge);
        return null;
    }
}

export async function getProductById(id = 0) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/products/${id}`);
        const data = response.data;
        console.log(data);
        if (data) {
            return data.results;
        }
        else {
            return null;
        }
    } catch (error) {
        console.log('Error', error.messge);
        return null;
    }
}