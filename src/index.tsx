import React from 'react';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './app/App';
import bridge from "@vkontakte/vk-bridge";

import '@vkontakte/vkui/dist/vkui.css';

bridge.send('VKWebAppInit');

const queryClient = new QueryClient({});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AdaptivityProvider>
  </ConfigProvider>,
);