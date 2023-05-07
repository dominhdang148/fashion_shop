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
        // console.log(data);
        if (data) {
            return data;
        }
        else {
            return null;
        }
    } catch (error) {
        console.log('Error', error.messge);
        return null;
    }
}

// export async function updateProduct(formData, id, navigate) {
//     try {
//         fetch(`http://127.0.0.1:8000/products/${id}/`, {
//             method: "PUT",
//             body:formData
//         })
//         .then((response)=>{
//             if(!response.ok){
//                 throw new Error("Network respose was not ok");
//             }
//             console.log("add to product successful!");
//             return true;
//         })
//         .catch((error)=> {
//             console.log("Error occurred during add to product: ", error);
//             return false;
//         });
//     } catch (error) {
//         return false;
//     }
// }

export async function updateProduct(id, formData, navigate) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/products/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        // body: formData
      });
  
      if (!response.ok) {
        throw new Error('Error updating product');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  

export async function getCategories() {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/categories/`);
        const data = response.data;
        // console.log(data);
        if (data) {
            return data;
        }
        else {
            return null;
        }
    } catch (error) {
        console.log('Error', error.messge);
        return null;
    }
}