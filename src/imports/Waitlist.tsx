import clsx from "clsx";
import svgPaths from "./svg-c6t0uk55w3";
type ABackgroundImageProps = {
  additionalClassNames?: string;
};

function ABackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ABackgroundImageProps>) {
  return (
    <div className={clsx("bg-[#2a2020] relative rounded-[2px] w-[346px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.12)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pl-[21px] pr-px py-px relative size-full">{children}</div>
    </div>
  );
}
type DivBackgroundImage1Props = {
  additionalClassNames?: string;
};

function DivBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<DivBackgroundImage1Props>) {
  return (
    <div className={clsx("h-[36.5px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">{children}</div>
    </div>
  );
}

function DivBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("relative w-[572px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.07)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[28px] items-start pb-px pt-[28px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[1.1px] uppercase whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return <BackgroundImage2 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage2>;
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return <BackgroundImage2 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage2>;
}

function SvgBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="svg">{children}</g>
      </svg>
    </div>
  );
}
type SpanBackgroundImageAndText1Props = {
  text: string;
};

function SpanBackgroundImageAndText1({ text }: SpanBackgroundImageAndText1Props) {
  return (
    <div className="h-[21px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#fcfcfc] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
};

function SpanBackgroundImageAndText({ text }: SpanBackgroundImageAndTextProps) {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[0.72px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ABackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ABackgroundImageAndText({ text, additionalClassNames = "" }: ABackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames={clsx("h-[15px] relative", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1px] whitespace-nowrap">{text}</p>
    </BackgroundImage2>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return <BackgroundImage3>{text}</BackgroundImage3>;
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames={clsx("relative shrink-0 w-[40px]", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[36px] left-0 not-italic text-[36px] text-[rgba(30,77,87,0.35)] top-[2px] whitespace-nowrap">{text}</p>
    </BackgroundImage2>
  );
}

export default function Waitlist() {
  return (
    <div className="bg-white relative size-full" data-name="Waitlist">
      <div className="absolute bg-white content-stretch flex flex-col h-[880px] items-start left-0 top-0 w-[1535px]" data-name="Body">
        <div className="bg-[#1a1414] h-[2726.359px] overflow-clip relative shrink-0 w-full" data-name="div">
          <div className="absolute bg-[#211919] border-[rgba(252,252,252,0.06)] border-b border-solid border-t h-[108.5px] left-0 top-[1125.13px] w-[1535px]" data-name="Container">
            <div className="absolute h-[51px] left-[377.5px] top-[28px] w-[260px]" data-name="Container">
              <div className="absolute h-[32px] left-[40px] top-0 w-[180px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[32px] left-[90.11px] not-italic text-[#fcfcfc] text-[32px] text-center top-0 whitespace-nowrap">190</p>
              </div>
              <div className="absolute h-[13.5px] left-[40px] top-[37px] w-[180px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[90.88px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Active Members</p>
              </div>
              <div className="absolute bg-[rgba(252,252,252,0.1)] h-[32px] left-[259px] top-[9.25px] w-px" data-name="Container" />
            </div>
            <div className="absolute h-[51px] left-[637.5px] top-[28px] w-[260px]" data-name="Container">
              <div className="absolute h-[32px] left-[40px] top-0 w-[180px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[32px] left-[90.02px] not-italic text-[#fcfcfc] text-[32px] text-center top-0 whitespace-nowrap">1 in 5</p>
              </div>
              <div className="absolute h-[13.5px] left-[40px] top-[37px] w-[180px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[89.91px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Applications Approved</p>
              </div>
              <div className="absolute bg-[rgba(252,252,252,0.1)] h-[32px] left-[259px] top-[9.25px] w-px" data-name="Container" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[5px] h-[51px] items-start left-[897.5px] px-[40px] top-[28px] w-[260px]" data-name="Container">
              <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[32px] left-[90.3px] not-italic text-[#fcfcfc] text-[32px] text-center top-0 whitespace-nowrap">4</p>
              </div>
              <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[90.05px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Years in Dubai</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex h-[1001.734px] items-start left-[167.5px] pl-[64px] pr-[564px] pt-[120px] top-[1233.63px] w-[1200px]" data-name="Container">
            <BackgroundImage1 additionalClassNames="h-[761.734px]">
              <div className="absolute h-[15px] left-0 top-0 w-[572px]" data-name="Container">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#2a6b78] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">The Process</p>
              </div>
              <div className="absolute h-[158.391px] leading-[52.8px] left-0 text-[48px] top-[35px] tracking-[-0.48px] w-[572px]" data-name="h2">
                <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#fcfcfc] top-[-1px] whitespace-nowrap">Four Steps.</p>
                <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#816a54] top-[51.8px] w-[416px]">One Room That Changes Everything.</p>
              </div>
              <div className="absolute content-stretch flex flex-col h-[520.344px] items-start left-0 top-[241.39px] w-[572px]" data-name="Container">
                <ContainerBackgroundImage1 additionalClassNames="h-[125px] shrink-0">
                  <ContainerBackgroundImageAndText text="01" additionalClassNames="h-[67.688px]" />
                  <ContainerBackgroundImage additionalClassNames="h-[67.688px]">
                    <ContainerBackgroundImageAndText1 text="Download the YP Club App" />
                    <div className="h-[43.188px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[465px]">Your application starts in the app. Download it on iOS or Android and complete your founder profile, your company, your ambitions and why you’re a fit.</p>
                    </div>
                  </ContainerBackgroundImage>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1 additionalClassNames="h-[125px] shrink-0">
                  <ContainerBackgroundImageAndText text="02" additionalClassNames="h-[67.688px]" />
                  <ContainerBackgroundImage additionalClassNames="h-[67.688px]">
                    <ContainerBackgroundImageAndText1 text="Application Review" />
                    <div className="h-[43.188px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[494px]">{`We review every application personally. We're looking for alignment, ambition, and intent, not a pitch deck. This typically takes 3–5 business days.`}</p>
                    </div>
                  </ContainerBackgroundImage>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ContainerBackgroundImageAndText text="03" additionalClassNames="h-[89.281px]" />
                  <ContainerBackgroundImage additionalClassNames="h-[89.281px]">
                    <ContainerBackgroundImageAndText1 text="Founder Interview" />
                    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[498px]">{`If your application progresses, you'll be invited to a short interview with our memberships team. This is not a formality, it is how we protect every room, every introduction, and every relationship inside the network.`}</p>
                    </div>
                  </ContainerBackgroundImage>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1 additionalClassNames="h-[125px] shrink-0">
                  <ContainerBackgroundImageAndText text="04" additionalClassNames="h-[67.688px]" />
                  <ContainerBackgroundImage additionalClassNames="h-[67.688px]">
                    <BackgroundImage3>{`Decision & Onboarding`}</BackgroundImage3>
                    <div className="h-[43.188px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[495px]">{`Approved founders receive access to the ExecutiveOS, their first curated dinner match, and a personal onboarding call. You'll understand immediately why the standard matters.`}</p>
                    </div>
                  </ContainerBackgroundImage>
                </ContainerBackgroundImage1>
              </div>
            </BackgroundImage1>
          </div>
          <div className="absolute bg-[#211919] content-stretch flex flex-col h-[411px] items-start left-0 pb-px pt-[97px] px-[427.5px] top-[2235.36px] w-[1535px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[217px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[48px] left-0 top-0 w-[680px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[48px] left-[340.09px] not-italic text-[80px] text-[rgba(30,77,87,0.2)] text-center top-0 whitespace-nowrap">“</p>
              </div>
              <div className="absolute h-[93px] left-0 top-[56px] w-[680px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[46.5px] left-[340.02px] text-[#fcfcfc] text-[30px] text-center top-[-1px] w-[633px]">The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room.</p>
              </div>
              <div className="absolute bg-[#fcfcfc] h-px left-[316px] top-[181px] w-[48px]" data-name="Container" />
              <div className="absolute h-[15px] left-0 top-[202px] w-[680px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[340.31px] not-italic text-[#fcfcfc] text-[10px] text-center top-0 tracking-[2px] uppercase whitespace-nowrap">THE WORLD’S FIRST EXECUTIVE(OS)</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex h-[80px] items-center justify-between left-0 pt-px px-[64px] top-[2646.36px] w-[1535px]" data-name="footer">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.08)] border-solid border-t inset-0 pointer-events-none" />
            <BackgroundImage additionalClassNames="h-[15px] w-[64.078px]">
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">YP Club</p>
            </BackgroundImage>
            <div className="h-[15px] relative shrink-0 w-[278.797px]" data-name="div">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
                <ABackgroundImageAndText text="Club Rules" additionalClassNames="shrink-0 w-[59.859px]" />
                <ABackgroundImageAndText text="Privacy Policy" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                <ABackgroundImageAndText text="Cookie Policy" additionalClassNames="shrink-0 w-[76.141px]" />
              </div>
            </div>
          </div>
          <div className="absolute h-[1125.125px] left-0 overflow-clip top-0 w-[1535px]" data-name="section">
            <div className="absolute h-[1125.125px] left-0 top-0 w-[1535px]" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1535 1125.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -125.79 -171.62 0 767.5 0)\\'><stop stop-color=\\'rgba(30,77,87,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1535 1125.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -127.29 -173.67 0 307 900.1)\\'><stop stop-color=\\'rgba(30,77,87,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(26, 20, 20) 0%, rgb(26, 20, 20) 100%)" }} />
            <div className="absolute h-[327px] left-[337.5px] top-[120px] w-[860px]" data-name="div">
              <div className="absolute h-[15px] left-[191.98px] top-[10px] w-[476.016px]" data-name="Container">
                <div className="absolute bg-[#1e4d57] h-px left-0 top-[7px] w-[32px]" data-name="span" />
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[238px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">FOR THE PIONEERS</p>
                <div className="absolute bg-[#1e4d57] h-px left-[444.02px] top-[7px] w-[32px]" data-name="span" />
              </div>
              <div className="absolute h-[152.625px] leading-[76.32px] left-0 text-[72px] text-center top-[53px] tracking-[-0.72px] w-[860px] whitespace-nowrap" data-name="h1">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[429.69px] not-italic text-[#fcfcfc] top-[-1px]">Before You Apply,</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[430.48px] text-[#816a54] top-[75.31px]">Watch This.</p>
              </div>
              <div className="absolute h-[49.375px] left-[170px] top-[225.63px] w-[520px]" data-name="p">
                <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[260.33px] not-italic text-[#b8afa8] text-[13px] text-center top-0 w-[501px]">{`Two minutes. Everything you need to know about what YP Club is, who it's for, and why the room matters.`}</p>
              </div>
            </div>
            <div className="absolute bg-[#211919] h-[484.625px] left-[337.5px] rounded-[4px] top-[447px] w-[860px]" data-name="div">
              <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[482.625px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(150.642deg, rgb(33, 25, 25) 0%, rgb(42, 32, 32) 100%)" }}>
                  <div className="absolute bg-[rgba(30,77,87,0.9)] content-stretch flex items-center justify-center left-[393px] pl-[4px] pr-px py-px rounded-[36px] size-[72px] top-[185.56px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border border-[rgba(30,77,87,0.5)] border-solid inset-0 pointer-events-none rounded-[36px]" />
                    <SvgBackgroundImage>
                      <path d="M8 5V19L19 12L8 5Z" fill="var(--fill-0, #FCFCFC)" id="Vector" />
                    </SvgBackgroundImage>
                  </div>
                  <div className="absolute h-[19.5px] left-[313.86px] top-[277.56px] w-[230.281px]" data-name="Container">
                    <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[19.5px] left-[115px] text-[#b8afa8] text-[13px] text-center top-[-1px] tracking-[0.65px] whitespace-nowrap">Introducing the Executive Operating System</p>
                  </div>
                  <div className="absolute bg-[rgba(30,77,87,0.2)] border border-[rgba(30,77,87,0.35)] border-solid h-[25.5px] left-[20px] top-[20px] w-[140.078px]" data-name="Container">
                    <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[69px] not-italic text-[#2a6b78] text-[9px] text-center top-[5px] tracking-[1.8px] uppercase whitespace-nowrap">For the Pioneers</p>
                  </div>
                  <div className="absolute bg-[rgba(26,20,20,0.7)] h-[21.5px] left-[794.67px] top-[441.13px] w-[43.328px]" data-name="Container">
                    <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[22.5px] not-italic text-[#6e6260] text-[9px] text-center top-[4px] tracking-[1.35px] whitespace-nowrap">2:14</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_40px_120px_0px_rgba(0,0,0,0.6),0px_0px_0px_1px_rgba(30,77,87,0.15)]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[6.736px] h-[62px] items-center left-[719.73px] pb-[-1.265px] top-[983.63px] w-[96px]" data-name="div">
              <BackgroundImage additionalClassNames="h-[13.5px] w-[95.531px]">
                <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[48.5px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[2.25px] uppercase whitespace-nowrap">How to apply</p>
              </BackgroundImage>
              <div className="bg-gradient-to-b from-[#1e4d57] h-[42.529px] opacity-78 shrink-0 to-[rgba(0,0,0,0)] w-px" data-name="Container" />
            </div>
          </div>
          <div className="absolute bg-[#211919] h-[645.297px] left-[883.5px] rounded-[4px] top-[1353.63px] w-[420px]" data-name="Container">
            <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
              <div className="bg-[#1e4d57] h-[249.047px] overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-[rgba(252,252,252,0.04)] left-[298px] rounded-[80px] size-[160px] top-[-40px]" data-name="Container" />
                <div className="absolute bg-[rgba(252,252,252,0.03)] left-[-20px] rounded-[50px] size-[100px] top-[169.05px]" data-name="Container" />
                <div className="absolute h-[13.5px] left-[36px] top-[40px] w-[346px]" data-name="Container">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[9px] text-[rgba(252,252,252,0.6)] top-0 tracking-[2.25px] uppercase whitespace-nowrap">Start Your Application</p>
                </div>
                <div className="absolute h-[70.375px] leading-[35.2px] left-[36px] text-[#fcfcfc] text-[32px] top-[69.5px] w-[346px] whitespace-nowrap" data-name="Container">
                  <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic top-0">The app is where</p>
                  <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 top-[35.19px]">it begins.</p>
                </div>
                <div className="absolute h-[61.172px] left-[36px] top-[151.88px] w-[346px]" data-name="Container">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[12px] text-[rgba(252,252,252,0.75)] top-[-1px] w-[322px]">Download the YP Club app and complete your application directly from your phone. Applications are reviewed on a rolling basis.</p>
                </div>
              </div>
              <div className="h-[394.25px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-[rgba(30,77,87,0.12)] content-stretch flex gap-[10px] h-[58.375px] items-center left-[36px] px-[17px] py-px top-[32px] w-[346px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[rgba(30,77,87,0.25)] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#2a6b78] rounded-[3px] shrink-0 size-[6px]" data-name="Container" />
                  <BackgroundImage1 additionalClassNames="h-[36.375px]">
                    <p className="absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[18.2px] left-0 text-[#2a6b78] text-[13px] top-0 w-[278px]">We approve 1 in 5 applications. Standards exist to protect the room.</p>
                  </BackgroundImage1>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] h-[145px] items-start left-[36px] top-[114.38px] w-[346px]" data-name="Container">
                  <ABackgroundImage additionalClassNames="h-[66.5px] shrink-0">
                    <DivBackgroundImage>
                      <SvgBackgroundImage>
                        <path d={svgPaths.p2d7ae380} fill="var(--fill-0, #FCFCFC)" id="Vector" />
                      </SvgBackgroundImage>
                    </DivBackgroundImage>
                    <DivBackgroundImage1 additionalClassNames="w-[100.578px]">
                      <SpanBackgroundImageAndText text="Download on the" />
                      <SpanBackgroundImageAndText1 text="App Store" />
                    </DivBackgroundImage1>
                  </ABackgroundImage>
                  <ABackgroundImage additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                    <DivBackgroundImage>
                      <SvgBackgroundImage>
                        <path d={svgPaths.p3d619b80} fill="var(--fill-0, #FCFCFC)" id="Vector" />
                      </SvgBackgroundImage>
                    </DivBackgroundImage>
                    <DivBackgroundImage1 additionalClassNames="w-[82.922px]">
                      <SpanBackgroundImageAndText text="Get it on" />
                      <SpanBackgroundImageAndText1 text="Google Play" />
                    </DivBackgroundImage1>
                  </ABackgroundImage>
                </div>
                <div className="absolute content-stretch flex gap-[12px] h-[13.5px] items-center left-[36px] top-[287.38px] w-[346px]" data-name="Container">
                  <div className="bg-[rgba(252,252,252,0.08)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />
                  <BackgroundImage additionalClassNames="h-[13.5px] w-[16.344px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[1.8px] uppercase whitespace-nowrap">or</p>
                  </BackgroundImage>
                  <div className="bg-[rgba(252,252,252,0.08)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />
                </div>
                <div className="absolute h-[37.375px] leading-[18.7px] left-[36px] not-italic text-[11px] text-center top-[320.88px] w-[346px] whitespace-nowrap" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light left-[173.36px] text-[#6e6260] top-0">Questions before you apply?</p>
                  <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal left-[173.83px] text-[#b8afa8] top-[18.69px]">Email us at members@ypclub.com</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b content-stretch flex from-[rgba(26,20,20,0.97)] h-[66px] items-center justify-between left-0 px-[64px] to-[rgba(0,0,0,0)] top-0 w-[1535px]" data-name="nav">
        <BackgroundImage additionalClassNames="h-[16.5px] w-[74.344px]">
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[3.85px] uppercase whitespace-nowrap">YP Club</p>
        </BackgroundImage>
        <div className="h-[18px] relative shrink-0 w-[107.969px]" data-name="Link">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <BackgroundImage additionalClassNames="h-[18px] w-[13.5px]">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#6e6260] text-[12px] top-0 tracking-[1.5px] uppercase whitespace-nowrap">←</p>
            </BackgroundImage>
            <BackgroundImage1 additionalClassNames="h-[15px]">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1.5px] uppercase whitespace-nowrap">Back to site</p>
            </BackgroundImage1>
          </div>
        </div>
      </div>
    </div>
  );
}