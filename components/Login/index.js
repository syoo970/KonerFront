import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { loginStatus } from "../../recoil/Authentication";
import Text from "../Text";
import Input from "../Input";
import Button from "../Button";
import * as S from "./Login.style";

const Login = ({ fontSize }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const setIsLogin = useSetRecoilState(loginStatus);

  const handleLogin = (data) => {
    console.log(data);
    setIsLogin(true);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.LoginInputWrapper>
        <Text fontSize={fontSize}>이메일</Text>
        <Input
          {...register("email", { required: "이메일을 입력해 주세요" })}
          errors={errors?.email?.message}
          errorFontSize={fontSize}
        />
      </S.LoginInputWrapper>
      <S.LoginInputWrapper>
        <Text fontSize={fontSize}>비밀번호</Text>
        <Input
          {...register("password", { required: "비밀번호를 입력해 주세요" })}
          errors={errors?.password?.message}
          errorFontSize={fontSize}
          type="password"
        />
      </S.LoginInputWrapper>
      <Button type="submit" text="로그인" btnColor="koner" color="white" />
    </form>
  );
};

Login.propTypes = {
  fontSize: PropTypes.string,
};

Login.defaultProps = {
  fontSize: "1.5rem",
};

export default Login;
