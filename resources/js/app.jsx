import './bootstrap';
import '../css/app.css';



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Welcome from './Pages/Welcome';
import { NextUIProvider } from '@nextui-org/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

function App() {
    return (
        <NextUIProvider>
            <main className={isDark ? "dark" : "light"}>
        <Component {...pageProps} />
             </main>
        </NextUIProvider>

    );
}
export default App;
