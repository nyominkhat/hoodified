import { useState } from "react";

export type ModalStateItem<T> = {
  open: boolean;
} & T;

export const useModals = <T extends Record<string, object>>(initialModals: {
  [K in keyof T]: ModalStateItem<T[K]>;
}) => {
  const [modals, setModals] =
    useState<{ [K in keyof T]: ModalStateItem<T[K]> }>(initialModals);

  const handleOpenModal = <K extends keyof T>(
    modal: K,
    additional?: Partial<Omit<ModalStateItem<T[K]>, "open">>
  ) => {
    setModals((prev) => ({
      ...prev,
      [modal]: {
        ...prev[modal],
        ...additional,
        open: true,
      },
    }));
  };

  const handleCloseModal = <K extends keyof T>(modal: K) => {
    setModals((prev) => ({
      ...prev,
      [modal]: {
        ...prev[modal],
        open: false,
      },
    }));
  };

  return { modals, setModals, handleOpenModal, handleCloseModal };
};
