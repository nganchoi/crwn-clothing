import SignUpForm from "../../components/sign-up-from copy/sign-up-from.component";
import SignInForm from "../../components/sign-in-from/sign-in-from.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
