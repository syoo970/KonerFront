import { useForm } from "react-hook-form";
import Button from "../Button";
import MuiRadio from "../../mui_components/MuiRadio";
import MuiInput from "../../mui_components/MuiInput";
import * as S from "./SignUp.style";
import Departments from "../../utils/Departments";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <S.SignUpForm onSubmit={handleSubmit(handleSignUp)}>
      <S.SignUpInputWrapper>
        <MuiInput
          label="이메일"
          {...register("email", { required: "이메일을 입력해 주세요" })}
          isError={!!errors?.email}
          errorMessage={errors?.email?.message}
          useAdornment
          adornmentPosition="end"
        >
          <span>@koreatech.ac.kr</span>
        </MuiInput>
      </S.SignUpInputWrapper>
      <S.SignUpInputWrapper>
        <MuiInput
          label="패스워드"
          type="password"
          {...register("password", { required: "비밀번호를 입력해주세요!" })}
          isError={!!errors?.password}
          errorMessage={errors?.password?.message}
        />
      </S.SignUpInputWrapper>
      <S.SignUpInputWrapper>
        <MuiInput
          label="패스워드 확인"
          type="password"
          {...register("passwordConfirm", {
            required: "비밀번호를 확인해주세요!",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다!",
          })}
          isError={!!errors?.passwordConfirm}
          errorMessage={errors?.passwordConfirm?.message}
        />
      </S.SignUpInputWrapper>
      <S.SignUpRadioWrapper>
        <MuiRadio
          title="학과"
          data={Departments}
          horizontal
          {...register("department")}
          defaultValue="CSE"
          fontSize={16}
        />
      </S.SignUpRadioWrapper>
      <Button text="회원가입" btnColor="koner2" type="submit" />
    </S.SignUpForm>
  );
};

export default SignUp;
