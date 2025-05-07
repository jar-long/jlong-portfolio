import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '../components/HeaderSimple/HeaderSimple';
import { HeroContentLeft } from '../components/HeroContentLeft/HeroContentLeft';

export default function HomePage() {
  return (
    <>
      <HeaderSimple/>
      <ColorSchemeToggle />
      <HeroContentLeft/>
    </>
  );
}
