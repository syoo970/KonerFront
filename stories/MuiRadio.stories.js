import { useEffect } from "react";
import MuiRadio from "../mui_components/MuiRadio";
import { useForm } from "react-hook-form";

export default {
  title: "Mui/Radio",
  component: MuiRadio,
};

const data = [
  { id: "1", value: "1", label: "첫번째 선택지" },
  { id: "2", value: "2", label: "두번째 선택지" },
  { id: "3", value: "3", label: "세번째 선택지" },
  { id: "4", value: "4", label: "네번째 선택지" },
];

export const Default = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      test: "1",
    },
  });

  const watchRadio = watch("test");

  useEffect(() => {
    console.log(watchRadio);
  }, [watchRadio]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MuiRadio
        title="Test"
        data={data}
        horizontal
        {...register("test")}
        fontSize={24}
      />
      <button type="submit">submit</button>
    </form>
  );
};
