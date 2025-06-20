import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import Buttons from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";

export default function Register() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;

  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const res = await actionRegister(value)
      console.log(res);
      createAlert("success", res.data.msg);
      reset()
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.msg);
    }
  };

  return (
    <div className="flex h-screen justify-end pr-5 pt-5">
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-8 flex flex-col gap-4">
          <legend className="fieldset-legend text-2xl">Register</legend>
          <FormInput register={register} errors={errors} name="email" />
          <FormInput register={register} errors={errors} name="name" />
          <FormInput register={register} type="password"  errors={errors} name="password" />
          <FormInput register={register} type="password"  errors={errors} name="confirmPassword" />
          <Buttons label="Register" isSubmitting={isSubmitting} />
        </fieldset>
      </form>
    </div>
  );
}
