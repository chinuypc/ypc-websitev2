import imgHeroSection from "figma:asset/7ef23a5b136f9c397a747eb08f8bff4b07e6ca7b.png";

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="HERO_SECTION">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroSection} />
      <div className="aspect-[4096/2731] shrink-0 w-full" data-name="DSC02706 1" />
    </div>
  );
}