import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
import { login } from "../api/auth";

const Login = () => {
    const [username, setUsername] = useState("kminchelle");
    const [password, setPassword] = useState("0lelplR");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const userData = await login(username, password);
        dispatch(setAuth(userData));
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl">Login</h2>
            <input className="border p-2 mt-2" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className="border p-2 mt-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 mt-3" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
