import { useRef, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm, useWatch } from "react-hook-form";

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

export const InputWithFileUpload = () => {
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      image: null,
    },
  });
  const ref = useRef(null);
  const uploadImage = useWatch({
    control,
    name: "image",
  });

  useEffect(() => {
    console.log(uploadImage);
  }, [uploadImage]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onClick = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("image", {
          onChange: (e) => {
            const file = e.target.files[0];
            setValue("image", file);
          },
        })}
        type="file"
        useFileUpload
        ref={ref}
        accept="image/*"
      />
      <Button
        type="button"
        text="imageUpload"
        btnColor="koner2"
        onClick={onClick}
      />
      <Button type="submit" btnColor="primary">
        submit
      </Button>
    </form>
  );
};
