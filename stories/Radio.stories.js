import RadioItem from "../components/RadioItem";
import { useForm } from "react-hook-form";

export default {
  title: "RadioItem",
  component: RadioItem,
};

export const Default = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      department: "cse",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioItem {...register("department")} label="컴퓨터공학부" value="cse" />
      <RadioItem {...register("department")} label="전자공학부" value="ee" />
      <button type="submit">submit</button>
    </form>
  );
};
