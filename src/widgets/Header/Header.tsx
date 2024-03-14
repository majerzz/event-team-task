import React from "react"
import { PanelHeader, PanelHeaderButton, Text } from "@vkontakte/vkui"
import { Icon16User, Icon28MessageQuestionCircleFillViolet } from "@vkontakte/icons"
import { PanelType } from "../../shared/types"

type Props = {
  onChangePanel: (panel: PanelType) => void
}

export const Header: React.FC<Props> = ({ onChangePanel }) => {
  return (
    <PanelHeader
      before={
        <>
          <PanelHeaderButton onClick={() => onChangePanel(PanelType.CatFact)} style={{ display: 'flex', alignItems: 'center' }}>
            <Icon28MessageQuestionCircleFillViolet width={24} height={24} />
            <Text>Факты о котах</Text>
          </PanelHeaderButton>
          <PanelHeaderButton onClick={() => onChangePanel(PanelType.UserAge)} style={{ display: 'flex', alignItems: 'center' }}>
            <Icon16User width={24} height={24} />
            <Text>Возраст пользователя</Text>
          </PanelHeaderButton >
        </>
      }
    />
  )
}
