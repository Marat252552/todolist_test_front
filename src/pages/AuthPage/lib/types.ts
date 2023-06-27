export type FormOptions_T = ({ isLoginForm, toggleForm }: {
    isLoginForm: boolean;
    toggleForm: () => void;
}) => JSX.Element

export type OnSigninFinishModal_T = ({ modalActive, setModalActive }: {
    modalActive: boolean;
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element