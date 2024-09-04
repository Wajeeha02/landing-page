import Action from './components/Action';
import Choose from './components/Choose';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import LiveDemo from './components/LiveDemo';
import Solutions from './components/Solutions';
import { default as Client, default as Subscription } from './components/Subscription';

export default function Home() {
  return (
    <>
      <HeroSection />
     <Solutions/>
      <Choose />
      <Action />
      <Subscription />
      <Client />
      <LiveDemo />
      <Footer />
    </>
  );
}
