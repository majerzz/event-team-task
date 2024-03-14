import React from "react";
import { Snackbar } from "@vkontakte/vkui";
import { Icon24ErrorCircleFillRed } from "@vkontakte/icons";

type Props = {
  refetch: () => void;
  error: { message: string };
}

export const ErrorModal: React.FC<Props> = ({ refetch, error }) => {
  return (
    <Snackbar
      onClose={() => refetch()}
      before={
        <Icon24ErrorCircleFillRed />
      }
    >
      {error.message}
    </Snackbar>
  )
}
