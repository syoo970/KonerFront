import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { loginStatus } from "../../recoil/Authentication";
import Text from "../Text";
import Input from "../Input";
import Button from "../Button";
import * as S from "./Login.style";

const Login = ({ fontSize, errorFontSize }) => {
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
    <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
      <S.LoginInputWrapper>
        <Text fontSize={fontSize}>이메일</Text>
        <Input
          {...register("email", { required: "이메일을 입력해 주세요" })}
          errors={errors?.email?.message}
          errorFontSize={errorFontSize}
        />
      </S.LoginInputWrapper>
      <S.LoginInputWrapper>
        <Text fontSize={fontSize}>비밀번호</Text>
        <Input
          {...register("password", { required: "비밀번호를 입력해 주세요" })}
          errors={errors?.password?.message}
          errorFontSize={errorFontSize}
          type="password"
        />
      </S.LoginInputWrapper>
      <S.Spacer marginTop="1rem" />
      <Button type="submit" text="로그인" btnColor="koner" color="white" />
    </S.LoginForm>
  );
};

Login.propTypes = {
  fontSize: PropTypes.string,
  errorFontSize: PropTypes.string,
};

Login.defaultProps = {
  fontSize: "1.5rem",
  errorFontSize: "0.8rem",
};

export default Login;
