import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { Wrapper, Button, Div } from "./styles";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../../store/users/actions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    const response = await fetch("http://localhost:3000/users");
    const usersList = await response.json();
    const finded = usersList.find(
      (user) => user.email === email && user.password === password
    );
    if (finded) {
      localStorage.setItem("id", finded.id);
      dispatch(storeUser(finded));
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <Wrapper>
      <LoginForm onSubmit={handleSubmit} />
      <Div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </Div>
    </Wrapper>
  );
}
