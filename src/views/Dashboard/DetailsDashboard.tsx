import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { usePostUserDetailsMutation } from "src/components/features/users/usersApiSlice";

import { UserDetailsType } from "src/types/UserDetails";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import FormField from "src/components/molecules/FormField/FormField";

import { Title } from "src/components/atoms/Title/Title.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
import {
  selectUserId,
  setUserDetails,
} from "src/components/features/auth/authSlice";

const DetailsDashboard = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userId = useSelector(selectUserId);
  const [postUserDetails, { isLoading, isError }] =
    usePostUserDetailsMutation();

  const onSubmitHandler = async (data: UserDetailsType) => {
    try {
      const result = await postUserDetails({ id: userId, userDetails: data });
      dispatch(setUserDetails(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
      <Title>Dodaj swoje dane</Title>
      <FormField
        label="Wiek"
        type="number"
        {...register("age", { required: true })}
      />
      {errors.lastname && <span>Wiek nie może być pusty</span>}
      <FormField
        label="Waga"
        type="number"
        {...register("weight", { required: true })}
      />
      {errors.lastname && <span>Wiek nie może być pusty</span>}
      <FormField
        label="Wzrost"
        type="number"
        {...register("height", { required: true })}
      />
      <FormField
        label="Obwód klatki"
        type="number"
        {...register("chestCircumference", { required: true })}
      />
      <FormField
        label="Obwód tali"
        type="number"
        {...register("waistCircumference", { required: true })}
      />
      <FormField
        label="Obwód bioder"
        type="number"
        {...register("hipCircumference", { required: true })}
      />
      <FormField
        label="Długość ramion"
        type="number"
        {...register("armCircumference", { required: true })}
      />
      <FormField
        label="Obwód uda"
        type="number"
        {...register("thighCircumference", { required: true })}
      />
      <FormField
        label="Obwód łydki"
        type="number"
        {...register("calfCircumference", { required: true })}
      />
      <Button type="submit">Potwierdź</Button>
    </FormWrapper>
  );
};

export default DetailsDashboard;
