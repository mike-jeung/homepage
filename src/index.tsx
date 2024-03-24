import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';
import './index.scss';

const root:Root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);