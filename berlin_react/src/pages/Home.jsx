import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const pulsado = () => {
        navigate("/page2");
    };

    return <button onClick={pulsado}>Pulsame</button>;
};
export default Home;
