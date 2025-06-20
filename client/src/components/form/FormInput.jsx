export default function FormInput({ name, register, errors, type = "text" }) {
  return (
    <div>
      <label className="label mb-3">{name}</label>
      <input
        className="input"
        placeholder={name}
        {...register(name)}
        type={type}
      />
      <p>
        {errors[name] && (
          <p className="text-red-500 text-sm mt-1.5 text-center">
            {errors[name].message}
          </p>
        )}
      </p>
    </div>
  );
}
