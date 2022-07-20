import { useForm } from "react-hook-form";
import Button from "../Button";
import MuiRadio from "../../mui_components/MuiRadio";
import MuiInput from "../../mui_components/MuiInput";
import ImageUploader from "../ImageUploader";
import * as S from "./SignUp.style";
import Departments from "../../utils/Departments";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
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
          {...register("newPassword", { required: "비밀번호를 입력해주세요!" })}
          isError={!!errors?.newPassword}
          errorMessage={errors?.newPassword?.message}
        />
      </S.SignUpInputWrapper>
      <S.SignUpInputWrapper>
        <MuiInput
          label="패스워드 확인"
          type="password"
          {...register("newPasswordConfirm", {
            required: "비밀번호를 확인해주세요!",
            validate: (value) =>
              value === watch("newPassword") || "비밀번호가 일치하지 않습니다!",
          })}
          isError={!!errors?.newPasswordConfirm}
          errorMessage={errors?.newPasswordConfirm?.message}
        />
      </S.SignUpInputWrapper>
      <S.SignUpInputWrapper>
        <MuiInput
          label="닉네임"
          {...register("nickname", { required: "닉네임을 입력해주세요!" })}
          isError={!!errors?.nickname}
          errorMessage={errors?.nickname?.message}
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
      <S.SignUpInputWrapper>
        <ImageUploader
          width="600px"
          height="600px"
          {...register("profile", {
            onChange: (e) => {
              setValue("profile", e.target.files[0]);
            },
          })}
        />
      </S.SignUpInputWrapper>
      <Button text="회원가입" btnColor="koner2" type="submit" />
    </S.SignUpForm>
  );
};

export default SignUp;
