import Styles from "../ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={Styles.container}>
      <form action="" className={Styles.form}>
        <h1>Login</h1>
        <input type="username" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
