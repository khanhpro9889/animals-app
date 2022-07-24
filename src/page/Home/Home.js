import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Title, SubTitle, Wrapper, WrapLink, Button } from "./styles";
import { LOGIN_PATH, ANIMALS_PATH } from "../../constants/path";
import { removeUser } from "../../store/users/actions";
export default function Home() {
  const userStore = useSelector(({ UserReducer }) => UserReducer);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("id");
    dispatch(removeUser());
  };

  return (
    <Wrapper>
      <div>
        <Title>SNT Solutions</Title>
        <SubTitle>Test for ReactJS Internship</SubTitle>
      </div>
      <div>
        {userStore.user ? (
          <>
            <p>
              Welcome back <strong>{userStore.user.name}</strong>
            </p>
            <div>
              <Button onClick={handleLogOut}>LOGOUT</Button>
            </div>
          </>
        ) : (
          <WrapLink>
            <Link to={LOGIN_PATH}>LOGIN</Link>
          </WrapLink>
        )}
        {userStore.user && (
          <WrapLink>
            <Link to={ANIMALS_PATH}>ANIMALS LIST</Link>
          </WrapLink>
        )}
      </div>
    </Wrapper>
  );
}
