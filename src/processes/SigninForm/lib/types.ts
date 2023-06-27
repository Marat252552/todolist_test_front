import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SigninValues_T } from "..";

export type EmailField_T = ({ register, errors }: {
    register: UseFormRegister<SigninValues_T>;
    errors: FieldErrors<SigninValues_T>;
}) => JSX.Element