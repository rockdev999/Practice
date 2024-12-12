import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/form-login")}>Form Login</button>
      <button onClick={() => navigate("/form-register")}>Form Register</button>
    </>
  );
};
