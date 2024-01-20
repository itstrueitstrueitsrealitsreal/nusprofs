import axios from "axios";

names = [

]

for (let i = 0; i < names.length; i++) {
    const response = await axios.post("http://localhost:3500/professors", { 
        "name" : names[i]
    });
    console.log(response.message)
}