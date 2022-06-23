import { createRoot } from 'react-dom/client';
import { App } from './App';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const root = createRoot(MOUNT_NODE);

root.render(<App />);
