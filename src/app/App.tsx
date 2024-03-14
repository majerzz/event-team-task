import React, { useState } from 'react';
import { AppRoot, SplitLayout, SplitCol, View, Panel, PanelHeader, usePlatform } from '@vkontakte/vkui';
import { PanelType } from '../shared/types';
import { Header } from '../widgets/Header';
import { CatPage } from '../pages/CatPage';
import { UserAgePage } from '../pages/UserAgePage';

import '@vkontakte/vkui/dist/vkui.css';

export const App: React.FC = () => {
  const platform = usePlatform();

  const [activePanel, setActivePanel] = useState<PanelType>(PanelType.CatFact);

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <Header onChangePanel={setActivePanel} />
          <View activePanel={activePanel}>
            <Panel id={PanelType.CatFact}>
              <CatPage />
            </Panel>
            <Panel id={PanelType.UserAge}>
              <UserAgePage />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
