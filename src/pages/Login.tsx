import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userInfok, setUserInfo] = useState({id: "", password: ''});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:8080/api/user/auth")
    });

}

export default Login;