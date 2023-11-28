import { useForm } from "react-hook-form";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import FormField from "src/components/molecules/FormField/FormField";
import { useLocation } from "react-router-dom";

import { Button } from "src/components/atoms/Button/Button.styles";
import { UserDetailsType } from "src/types/UserDetails";
import { usePostUserDetailsMutation } from "src/components/features/users/usersApiSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserId,
  setUserDetails,
} from "src/components/features/auth/authSlice";

const DetailsDashboardEdit = () => {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const { state: userData } = useLocation();
  const [postUserDetails, { isLoading, isError }] =
    usePostUserDetailsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data: UserDetailsType) => {
    try {
      console.log(data);
      const result = await postUserDetails({ id: userId, userDetails: data });
      console.log(result);
      dispatch(setUserDetails(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
      <Title>Edytuj swoje dane</Title>
      <Button type="submit">Potwierdź</Button>
      <FormField
        label="Wiek"
        defaultValue={userData.age}
        type="number"
        {...register("age", { required: true })}
      />
      {errors.lastname && <span>Wiek nie może być pusty</span>}
      <FormField
        label="Waga"
        value={userData.weight}
        type="number"
        {...register("weight", { required: true })}
      />
      {errors.lastname && <span>Wiek nie może być pusty</span>}
      <FormField
        label="Wzrost"
        value={userData.height}
        type="number"
        {...register("height", { required: true })}
      />
      <FormField
        label="Obwód klatki"
        value={userData.chestCircumference}
        type="number"
        {...register("chestCircumference", { required: true })}
      />
      <FormField
        label="Obwód tali"
        value={userData.waistCircumference}
        type="number"
        {...register("waistCircumference", { required: true })}
      />
      <FormField
        label="Obwód bioder"
        value={userData.hipCircumference}
        type="number"
        {...register("hipCircumference", { required: true })}
      />
      <FormField
        label="Długość ramion"
        value={userData.armCircumference}
        type="number"
        {...register("armCircumference", { required: true })}
      />
      <FormField
        label="Obwód uda"
        value={userData.thighCircumference}
        type="number"
        {...register("thighCircumference", { required: true })}
      />
      <FormField
        label="Obwód łydki"
        value={userData.calfCircumference}
        type="number"
        {...register("calfCircumference", { required: true })}
      />
      {/* {errors.lastname && <span>Wiek nie może być pusty</span>} */}
    </FormWrapper>
  );
};

export default DetailsDashboardEdit;
