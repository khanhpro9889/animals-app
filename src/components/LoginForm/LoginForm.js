import { useState } from "react";
import { Form, Label, Input, Button, FormInput } from "./styles";
import PropTypes from "prop-types";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) return;
    onSubmit(email.trim(), password.trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="test@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormInput>
      <FormInput>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormInput>
      <Button type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
