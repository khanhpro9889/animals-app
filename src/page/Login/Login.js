import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { Wrapper, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../../store/users/actions";
import { HOME_PATH } from "../../constants/path";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    const response = await fetch(
      "https://animals-json-server.herokuapp.com/users"
    );
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
      <Button onClick={() => navigate(HOME_PATH, { replace: true })}>X</Button>
    </Wrapper>
  );
}
