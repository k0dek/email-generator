// src/pages/_app.tsx
import "../styles/global.css"; // Ensure this imports your global CSS, where Tailwind is applied
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
