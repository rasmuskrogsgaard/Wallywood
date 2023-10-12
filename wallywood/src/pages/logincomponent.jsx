import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext } from "../usercontext/logincontext";
const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser } = useContext(LoginContext);

  const onSubmit = (data) => {
    console.log(data);

    const url = "http://localhost:4000/login";

    const body = new URLSearchParams();
    body.append("username", data.username);
    body.append("password", data.password);

    const options = {
      method: "POST",
      body: body,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Brugernavn</label>
        <input {...register("username", { required: true, minLength: 4 })} />
        {errors.username?.type == "required" && (
          <span>Du skal udfylde brugernavn</span>
        )}
        {errors.username?.type == "minLength" && (
          <span>mindst 4 bogstaver</span>
        )}
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Du skal udfylde password</span>}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default LoginComponent;
