import { Button, Flex } from "antd";
import "./login.scss";
import { useState } from "react";
import { LoginApi } from "../../services/login";

const Login = () => {

    const [post, setPost] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await LoginApi.loginAdmin(post);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login">
            <form>
                <h1 className="title">Login Admin</h1>
                <div className="imputItem">
                    <label htmlFor="">Email</label>
                    <input onChange={onChange} name="email" value={post.email} type="email" />
                </div>
                <div className="imputItem">
                    <label htmlFor="">Password</label>
                    <input onChange={onChange} name="password" value={post.password} type="password" />
                </div>
                <Flex justify="center">
                    <Button type="primary" onClick={handleLogin}>Login</Button>
                </Flex>
            </form>
        </div>
    );
}

export default Login;