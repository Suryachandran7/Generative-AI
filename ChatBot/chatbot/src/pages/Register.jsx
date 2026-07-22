import { useState } from "react";
import axios from "axios";

function Register() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const register = async () => {
        try {

            const res = await axios.post(
                "http://127.0.0.1:5000/register",
                form
            );

            alert(res.data.message);

        } catch (err) {

            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Server Error");
            }

        }
    };

    return (
        <div style={{ width: "400px", margin: "50px auto" }}>

            <h2>Register</h2>

            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            /><br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            /><br /><br />

            <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                onChange={handleChange}
            /><br /><br />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            /><br /><br />

            <button onClick={register}>
                Register
            </button>

        </div>
    );
}

export default Register;