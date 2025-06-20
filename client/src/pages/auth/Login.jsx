import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import Buttons from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validator";
import { useNavigate } from "react-router";
import useAuthStore from "../../stores/auth-store";

export default function Login() {
  const navi = useNavigate()

  const actionLoginWithZustand = useAuthStore(
    (state) => state.actionLoginWithZustand
  );

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;

  const hdlSubmit = async (value) => {
    const res = await actionLoginWithZustand(value);
    console.log(res);
    if (res.success) {
      console.log(res.role);
      createAlert("success", res.msg);
      roleRedirect(res.role)
    } else {
      createAlert("info", res.msg);
    }
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // try {
    //   console.log(res);
    //   createAlert("success", res.data.msg);
    //   // reset();
    // } catch (error) {
    //   console.log(error);
    //   createAlert("info", error.response?.data?.msg);
    // }
  };


const roleRedirect = (role) => {
if(role ==="ADMIN") {
  navi("/admin")
} else {
  navi("/user")
}
}


  return (
    <div className="flex h-screen justify-end pr-5 pt-5">
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-8 flex flex-col gap-4">
          <legend className="fieldset-legend text-2xl">Login</legend>

          <FormInput register={register} errors={errors} name="email" />

          <FormInput
            register={register}
            type="password"
            errors={errors}
            name="password"
          />

          <Buttons label="Login" isSubmitting={isSubmitting} />
        </fieldset>
      </form>
    </div>
  );
}
