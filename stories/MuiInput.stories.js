import MuiInput from "../mui_components/MuiInput";
import { useForm } from "react-hook-form";

export default {
  title: "mui/MuiInput",
  component: MuiInput,
};

export const Default = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setValue("test", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MuiInput
        {...register("test", { required: "위 데이터는 필수 입니다." })}
        label="test"
        isError={!!errors?.test}
        errorMessage={errors?.test?.message}
      />
    </form>
  );
};

export const WithAdornment = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MuiInput
        {...register("test")}
        label="test"
        useAdornment
        adornmentPosition="end"
      >
        <span>@test</span>
      </MuiInput>
    </form>
  );
};

export const Disabled = () => <MuiInput label="test" disabled />;

export const Filled = () => <MuiInput label="test" variant="filled" />;
