import { useForm } from 'react-hook-form';
import style from './style.module.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={style.container}>
      <form className={style.form}>
        <label className={style.label}>Nama anda</label>
        <input
          className={style.name}
          type="text"
          name="name"
          {...register('name')}
        />

        <label className={style.label}>Email anda</label>
        {(errors.email?.type === 'required' && (
          <span className={style.error}>Email harus diisi</span>
        )) ||
          (errors.email?.type === 'pattern' && (
            <span className={style.error}>Email tidak valid</span>
          ))}
        <input
          className={style.email}
          type="email"
          name="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />

        <label className={style.label}>Pertanyaan anda</label>
        <textarea
          className={style.description}
          type="text"
          name="description"
          {...register('description')}
        />

        <button
          className={style.submit}
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
