import Input from "../components/Input";
import { useForm } from "react-hook-form";

export default {
  title: "Input",
  component: Input,
};

export const DefaultInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("testInput", { required: "this field is required!" })}
        errors={errors?.testInput?.message}
      />
    </form>
  );
};

export const StyledInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const wrapperStyle = {
    borderRadius: "5px",
    border: "1px solid #ffcc10",
    padding: "5px 10px",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("styledInput1", { required: "폰트 적용" })}
        errors={errors?.styledInput1?.message}
        width="400px"
        errorFontSize="1.2rem"
        wrapperStyle={wrapperStyle}
      />
    </form>
  );
};
