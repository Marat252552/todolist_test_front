import { Card_T } from "../../../shared/types";

export type Editor_T = ({ card, setEditLoading, setEditActive }: {
    card: Card_T;
    setEditLoading: (value: boolean) => void;
    setEditActive: (value: boolean) => void;
}) => JSX.Element