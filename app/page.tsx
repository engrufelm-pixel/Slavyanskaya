import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Advantages } from '@/components/Advantages';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Reviews } from '@/components/Reviews';
import { About } from '@/components/About';
import { Faq } from '@/components/Faq';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';
import { FloatingCta } from '@/components/FloatingCta';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Gallery />
        <Services />
        <Process />
        <Reviews />
        <About />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
