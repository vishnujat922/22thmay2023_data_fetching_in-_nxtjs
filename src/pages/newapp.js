import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../app/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LeftAside from '@/components/LeftAside'
import RightAside from '@/components/RightAside'

const NewApp = (Component, pageProps) => {
    return (
        <>
            <Header />
            <main className='row'>
                <LeftAside />
                <Component {...pageProps} />
                <RightAside />
            </main>
            <Footer />
        </>
    );
} 
export default NewApp