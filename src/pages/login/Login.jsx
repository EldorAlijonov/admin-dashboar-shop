import { Button, Flex } from "antd";
import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <form>
                <h1 className="title">Login Admin</h1>
                <div className="imputItem">
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div className="imputItem">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <Flex justify="center">
                    <Button type="primary" >Login</Button>
                </Flex>
            </form>
        </div>
    );
}

export default Login;