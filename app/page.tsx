import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '../components/HeaderSimple/HeaderSimple';
import { HeroContentLeft } from '../components/HeroContentLeft/HeroContentLeft';
import { FooterSocial } from '../components/FooterSocial/FooterSocial';
import { GetInTouchSimple } from '../components/GetInTouchSimple/GetInTouchSimple';

export default function HomePage() {
  return (
    <>
      <HeaderSimple/>
      <ColorSchemeToggle />
      <HeroContentLeft/>
      <GetInTouchSimple/>
      <FooterSocial/>
    </>
  );
}
