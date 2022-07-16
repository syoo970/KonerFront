import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Input from "../Input";
import Text from "../Text";
import Button from "../Button";
import RadioItem from "../RadioItem";
import * as S from "./SignUp.style";
import Departments from "../../utils/Departments";

const SignUp = ({ fontSize, errorFontSize }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      department: "CSE",
    },
  });

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <S.SignUpForm onSubmit={handleSubmit(handleSignUp)}>
      <S.SignUpInputWrapper>
        <Text fontSize={fontSize}>이메일</Text>
        <Input
          {...register("email", { required: "이메일을 입력해 주세요" })}
          errors={errors?.email?.message}
          errorFontSize={errorFontSize}
          usePrefix
          prefix="@koreatech.ac.kr"
        />
      </S.SignUpInputWrapper>
      <S.SignUpInputWrapper>
        <Text fontSize={fontSize}>비밀번호</Text>
        <Input
          {...register("password", { required: "비밀번호를 입력해 주세요!" })}
          errors={errors?.password?.message}
          errorFontSize={errorFontSize}
          type="password"
        />
      </S.SignUpInputWrapper>
      <S.SignUpInputWrapper>
        <Text fontSize={fontSize}>비밀번호 확인</Text>
        <Input
          {...register("passwordCheck", {
            required: "비밀번호 확인이 필요합니다",
            validate: (value) => {
              return (
                watch("password") === value || "비밀번호가 일치하지 않습니다"
              );
            },
          })}
          errors={errors?.passwordCheck?.message}
          errorFontSize={errorFontSize}
          type="password"
        />
      </S.SignUpInputWrapper>
      <S.SignUpRadioWrapper>
        {Departments.map(({ id, label, value }) => (
          <RadioItem
            key={id}
            label={label}
            value={value}
            labelFont="ONE-Mobile-POP"
            {...register("department")}
          />
        ))}
      </S.SignUpRadioWrapper>
      <Button text="회원가입" btnColor="koner2" type="submit" />
    </S.SignUpForm>
  );
};

SignUp.propTypes = {
  fontSize: PropTypes.string,
  errorFontSize: PropTypes.string,
};

SignUp.defaultProps = {
  fontSize: "1.5rem",
  errorFontSize: "0.8rem",
};

export default SignUp;
