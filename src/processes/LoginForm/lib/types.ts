import { UseFormRegister, FieldErrors } from "react-hook-form";
import { LoginValues_T } from "..";

export type PasswordField_T = ({ register, errors }: {
    register: UseFormRegister<LoginValues_T>;
    errors: FieldErrors<LoginValues_T>;
}) => JSX.Element