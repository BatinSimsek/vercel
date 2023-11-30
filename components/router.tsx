import Footer from '@/components/footer'
import Header from '@/components/header'
import {BrowserRouter as Router} from "react-router-dom";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Routers({
   children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Router>
            <body>
            <Header />
            <main className={inter.className}>{children}</main>
            <Footer />
            </body>
        </Router>
    );
}