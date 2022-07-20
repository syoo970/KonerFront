import { useForm } from "react-hook-form";
import ImageUploader from "../components/ImageUploader";

export default {
  title: "ImageUploader",
  component: ImageUploader,
};

export const DefaultImageUploader = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader
        {...register("image", {
          onChange: (e) => {
            setValue("image", e.target.files[0]);
          },
        })}
        width="300px"
        height="300px"
      />
      <button type="submit">업로드</button>
    </form>
  );
};
