import clsx from "clsx";
import svgPaths from "./svg-s4zebh5ext";

function ContainerBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#211919] flex-[1_0_0] h-[70px] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-px pt-[13px] px-[13px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("relative w-[660px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type PBackgroundImageProps = {
  additionalClassNames?: string;
};

function PBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<PBackgroundImageProps>) {
  return (
    <div className={clsx("absolute h-[88.75px] left-[40px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.2px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[295px]">{children}</p>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("h-[35px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ABackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ABackgroundImageAndText({ text, additionalClassNames = "" }: ABackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[15px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6060] text-[10px] top-0 tracking-[1px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText7Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText7({ text, additionalClassNames = "" }: ContainerBackgroundImageAndText7Props) {
  return (
    <div className={clsx("absolute h-[15px] left-[16px] w-[316px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText6Props = {
  text: string;
};

function ContainerBackgroundImageAndText6({ text }: ContainerBackgroundImageAndText6Props) {
  return (
    <div className="absolute h-[13.5px] left-[16px] top-[16px] w-[316px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#2a6b78] text-[9px] top-0 tracking-[1.35px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText5Props = {
  text: string;
};

function ContainerBackgroundImageAndText5({ text }: ContainerBackgroundImageAndText5Props) {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[1.1px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ additionalClassNames = "" }: ContainerBackgroundImage1Props) {
  return (
    <div className={clsx("absolute bg-[#2a2020] content-stretch flex items-center justify-center p-px rounded-[26px] size-[52px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.2)] border-solid inset-0 pointer-events-none rounded-[26px]" />
      <SvgBackgroundImage />
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText({ text, additionalClassNames = "" }: SpanBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[19.5px] left-[12px] top-[4px]", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[19.5px] left-0 text-[#2a6b78] text-[13px] top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText4Props = {
  text: string;
};

function ContainerBackgroundImageAndText4({ text }: ContainerBackgroundImageAndText4Props) {
  return (
    <div className="h-[15px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText3Props = {
  text: string;
};

function ContainerBackgroundImageAndText3({ text }: ContainerBackgroundImageAndText3Props) {
  return (
    <div className="h-[18px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#fcfcfc] text-[12px] top-0 tracking-[0.36px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="bg-[#2a2020] relative rounded-[26px] shrink-0 size-[52px]">
      <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.2)] border-solid inset-0 pointer-events-none rounded-[26px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <SvgBackgroundImage />
      </div>
    </div>
  );
}

function SvgBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="svg" opacity="0.3">
          <path d={svgPaths.padb6500} fill="var(--fill-0, #B8AFA8)" id="Vector" />
          <path d={svgPaths.p4e11180} fill="var(--fill-0, #B8AFA8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText2({ text, additionalClassNames = "" }: ContainerBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute h-[42px] left-[40px] top-[116px]", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Regular',sans-serif] leading-[42px] left-0 not-italic text-[#fcfcfc] text-[28px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText1({ text, additionalClassNames = "" }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[48px] left-[40px] top-[48px]", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-[rgba(30,77,87,0.2)] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type HBackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function HBackgroundImage({ text, text1, additionalClassNames = "" }: HBackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[123.188px] leading-[61.6px] left-0 text-[56px] top-[35px] whitespace-nowrap", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#fcfcfc] top-[-1px]">{text}</p>
      <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#816a54] top-[60.59px]">{text1}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[15px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#2a6b78] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="h-[15px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#2a6b78] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <div className="absolute bg-white content-stretch flex flex-col h-[880px] items-start left-0 top-0 w-[1535px]" data-name="Body">
        <div className="bg-[#1a1414] h-[6508.891px] overflow-clip relative shrink-0 w-full" data-name="div">
          <div className="absolute bg-[#211919] border-[rgba(252,252,252,0.08)] border-b border-solid border-t h-[121.5px] left-0 top-[880px] w-[1535px]" data-name="Container">
            <div className="absolute h-[55.5px] left-[347.5px] top-[32px] w-[280px]" data-name="Container">
              <div className="absolute h-[36px] left-[48px] top-0 w-[184px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[36px] left-[92.06px] not-italic text-[#fcfcfc] text-[36px] text-center top-0 whitespace-nowrap">190</p>
              </div>
              <div className="absolute h-[13.5px] left-[48px] top-[42px] w-[184px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[92.88px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Active Members</p>
              </div>
              <div className="absolute bg-[rgba(252,252,252,0.15)] h-[40px] left-[279px] top-[7.75px] w-px" data-name="Container" />
            </div>
            <div className="absolute h-[55.5px] left-[627.5px] top-[32px] w-[280px]" data-name="Container">
              <div className="absolute h-[36px] left-[48px] top-0 w-[184px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[36px] left-[92.39px] not-italic text-[#fcfcfc] text-[36px] text-center top-0 whitespace-nowrap">4</p>
              </div>
              <div className="absolute h-[13.5px] left-[48px] top-[42px] w-[184px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[92.05px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Years in Dubai</p>
              </div>
              <div className="absolute bg-[rgba(252,252,252,0.15)] h-[40px] left-[279px] top-[7.75px] w-px" data-name="Container" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[6px] h-[55.5px] items-start left-[907.5px] px-[48px] top-[32px] w-[280px]" data-name="Container">
              <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[36px] left-[92.02px] not-italic text-[#fcfcfc] text-[36px] text-center top-0 whitespace-nowrap">1 in 5</p>
              </div>
              <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[91.91px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Applications Approved</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[100px] h-[429px] items-center left-[167.5px] top-[1121.5px] w-[1200px]" data-name="Section">
            <div className="flex-[1_0_0] h-[429.063px] min-h-px min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <BackgroundImageAndText text="Why YP Club Exists" additionalClassNames="w-[700px]" />
                <HBackgroundImage text="Most Networks Sell You Access." text1="We Sell You Outcomes." additionalClassNames="w-[700px]" />
                <div className="absolute font-['Inter:Light',sans-serif] font-light h-[246.875px] leading-[24.7px] left-0 not-italic text-[#b8afa8] text-[13px] top-[182.19px] w-[560px]" data-name="p">
                  <p className="absolute left-0 top-0 w-[525px]">You have been in the rooms. The events with a hundred people you will never speak to again. The memberships that felt expensive and delivered nothing you could point to.</p>
                  <p className="absolute left-0 top-[74.06px] whitespace-nowrap">YP Club is not that.</p>
                  <p className="absolute left-0 top-[123.44px] w-[552px]">Every dinner is curated to the people you actually need to meet. Every piece of programming is designed to make you a sharper operator. Every introduction is tracked and attributed so you can see — in numbers — exactly what your membership is worth.</p>
                  <p className="absolute left-0 top-[222.19px] whitespace-nowrap">This is not a network. It is a growth operating system.</p>
                </div>
              </div>
            </div>
            <BackgroundImage additionalClassNames="h-[157.563px] w-[400px]">
              <div className="absolute h-[72px] left-0 top-0 w-[400px]" data-name="Container">
                <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[72px] left-0 not-italic text-[72px] text-[rgba(30,77,87,0.15)] top-[-1px] whitespace-nowrap">“</p>
              </div>
              <div className="absolute border-[#1e4d57] border-l-2 border-solid h-[105.563px] left-0 top-[52px] w-[400px]" data-name="Container">
                <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[35.2px] left-[24px] text-[#816a54] text-[22px] top-0 w-[373px]">The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room.</p>
              </div>
            </BackgroundImage>
          </div>
          <div className="absolute bg-[#211919] content-stretch flex flex-col h-[686.313px] items-start left-0 pb-px pt-[121px] px-[427.5px] top-[1670.56px] w-[1535px]" data-name="section">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[444px] relative shrink-0 w-full" data-name="div">
              <div className="absolute h-[15px] left-0 top-0 w-[680px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[340.81px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">{`Who It's For`}</p>
              </div>
              <div className="absolute h-[123.188px] leading-[61.6px] left-0 text-[56px] text-center top-[35px] w-[680px] whitespace-nowrap" data-name="h2">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[340.11px] not-italic text-[#fcfcfc] top-[-1px]">Built for One Person.</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[340.09px] text-[#816a54] top-[60.59px]">The Founder.</p>
              </div>
              <div className="absolute bg-[#1e4d57] h-px left-[316px] top-[190.19px] w-[48px]" data-name="Container" />
              <div className="absolute font-['Inter:Light',sans-serif] font-light h-[148.125px] leading-[24.7px] left-[60px] not-italic text-[#b8afa8] text-[13px] text-center top-[223.19px] w-[560px]" data-name="p">
                <p className="-translate-x-1/2 absolute left-[287.5px] top-[0.25px] w-[560px]">Built for those who started something from nothing, are scaling it into something significant, and understands that who you surround yourself with determines how far you go.</p>
                <p className="-translate-x-1/2 absolute left-[280.48px] top-[99.25px] w-[553px]">If you are a founder and serious about scaling, you are exactly who we built this for.</p>
              </div>
              <div className="absolute h-[33px] left-0 top-[411.31px] w-[680px]" data-name="Container">
                <div className="absolute border border-[rgba(30,77,87,0.3)] border-solid h-[33px] left-[43.59px] top-0 w-[108.719px]" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[53px] not-italic text-[#2a6b78] text-[10px] text-center top-[8px] tracking-[1.5px] uppercase whitespace-nowrap">Founders</p>
                </div>
                <div className="absolute border border-[rgba(30,77,87,0.3)] border-solid h-[33px] left-[164.31px] top-0 w-[132.844px]" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[65px] not-italic text-[#2a6b78] text-[10px] text-center top-[8px] tracking-[1.5px] uppercase whitespace-nowrap">Co-Founders</p>
                </div>
                <div className="absolute border border-[rgba(30,77,87,0.3)] border-solid h-[33px] left-[309.16px] top-0 w-[189.766px]" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[94.5px] not-italic text-[#2a6b78] text-[10px] text-center top-[8px] tracking-[1.5px] uppercase whitespace-nowrap">AED 1M – 30M Revenue</p>
                </div>
                <div className="absolute border border-[rgba(30,77,87,0.3)] border-solid h-[33px] left-[510.92px] top-0 w-[125.484px]" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[62px] not-italic text-[#2a6b78] text-[10px] text-center top-[8px] tracking-[1.5px] uppercase whitespace-nowrap">Dubai Based</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[72px] h-[538.563px] items-start left-[167.5px] top-[2476.88px] w-[1200px]" data-name="Section">
            <div className="content-stretch flex flex-col gap-[20px] h-[158px] items-start relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImageAndText text="The Framework" />
              <div className="h-[123.188px] leading-[61.6px] relative shrink-0 text-[56px] w-full whitespace-nowrap" data-name="h2">
                <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#fcfcfc] top-[-1px]">Everything a Founder Needs.</p>
                <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#816a54] top-[60.59px]">{`Nothing They Don't.`}</p>
              </div>
            </div>
            <div className="h-[308.375px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute bg-[#211919] h-[308px] left-0 overflow-clip top-0 w-[399px]" data-name="Container">
                <ContainerBackgroundImageAndText1 text="01" additionalClassNames="w-[318.656px]" />
                <ContainerBackgroundImageAndText2 text="Influence" additionalClassNames="w-[318.656px]" />
                <div className="absolute h-[64.781px] left-[40px] top-[174px] w-[318.656px]" data-name="p">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[311px]">Build the authority and personal brand that opens doors before you walk into them. Scale the reputation that follows your company everywhere it goes.</p>
                </div>
              </div>
              <div className="absolute bg-[#211919] h-[308px] left-[400.66px] overflow-clip top-0 w-[399px]" data-name="Container">
                <ContainerBackgroundImageAndText1 text="02" additionalClassNames="w-[318.672px]" />
                <ContainerBackgroundImageAndText2 text="Knowledge" additionalClassNames="w-[318.672px]" />
                <div className="absolute h-[86.375px] left-[40px] top-[174px] w-[318.672px]" data-name="p">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[315px]">Access the tools, frameworks, and subject matter experts that move you from operator to global executive. Programming designed to sharpen the person running the company.</p>
                </div>
              </div>
              <div className="absolute bg-[#211919] h-[308px] left-[801.33px] overflow-clip top-0 w-[399px]" data-name="Container">
                <ContainerBackgroundImageAndText1 text="03" additionalClassNames="w-[318.656px]" />
                <ContainerBackgroundImageAndText2 text="Wealth" additionalClassNames="w-[318.656px]" />
                <div className="absolute h-[64.781px] left-[40px] top-[174px] w-[318.656px]" data-name="p">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[308px]">The relationships, deals, and infrastructure to raise capital, build generational wealth, and protect what you are building as it scales.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#211919] content-stretch flex flex-col h-[871.203px] items-start left-0 pb-px pt-[121px] px-[167.5px] top-[3135.44px] w-[1535px]" data-name="section">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[64px] h-[629.203px] items-start relative shrink-0 w-full" data-name="div">
              <div className="content-stretch flex flex-col gap-[20px] h-[158px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImageAndText text="Member Impact" />
                <div className="h-[123.188px] leading-[61.6px] relative shrink-0 text-[56px] w-full whitespace-nowrap" data-name="h2">
                  <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#fcfcfc] top-[-1px]">The Room</p>
                  <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#816a54] top-[60.59px]">Changes Everything.</p>
                </div>
              </div>
              <div className="h-[407.016px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-[#1a1414] border-[rgba(252,252,252,0.1)] border-solid border-t h-[407px] left-0 top-0 w-[379px]" data-name="Container">
                  <div className="absolute content-stretch flex gap-[16px] h-[52px] items-center left-[40px] top-[40px] w-[298.656px]" data-name="Container">
                    <ContainerBackgroundImage />
                    <ContainerBackgroundImage2 additionalClassNames="w-[124.609px]">
                      <ContainerBackgroundImageAndText3 text="James Augustin" />
                      <ContainerBackgroundImageAndText4 text="Particle Execution" />
                    </ContainerBackgroundImage2>
                  </div>
                  <div className="absolute bg-[rgba(30,77,87,0.1)] border border-[rgba(30,77,87,0.25)] border-solid h-[29.5px] left-[40px] top-[116px] w-[138.609px]" data-name="Container">
                    <SpanBackgroundImageAndText text="Multi-six-figure contract" additionalClassNames="w-[112.609px]" />
                  </div>
                  <div className="absolute h-[133.125px] left-[40px] top-[165.5px] w-[298.656px]" data-name="p">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.2px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[292px]">James started as a YP Club team member before backing himself to found Particle Execution. His first major win came through the very network he helped build, a multi-six-figure contract with a music festival to deliver AI-powered ticketing solutions, now expanding internationally.</p>
                  </div>
                  <div className="absolute border-[rgba(252,252,252,0.1)] border-solid border-t h-[43.391px] left-[40px] top-[322.63px] w-[298.656px]" data-name="Container">
                    <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[22.4px] left-0 text-[#816a54] text-[16px] top-[20px] whitespace-nowrap">From employee to founder to international contract.</p>
                  </div>
                </div>
                <div className="absolute bg-[#1a1414] border-[rgba(252,252,252,0.1)] border-solid border-t h-[407px] left-[410.66px] top-0 w-[379px]" data-name="Container">
                  <div className="absolute content-stretch flex gap-[16px] h-[53px] items-center left-[40px] top-[40px] w-[298.672px]" data-name="Container">
                    <BackgroundImage additionalClassNames="h-[52px] w-[90px]">
                      <ContainerBackgroundImage1 additionalClassNames="left-0" />
                      <ContainerBackgroundImage1 additionalClassNames="left-[38px]" />
                    </BackgroundImage>
                    <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                        <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#fcfcfc] text-[12px] top-0 tracking-[0.36px] w-[146px]">{`Sonny Sangha & Nathan Priestley`}</p>
                        </div>
                        <ContainerBackgroundImageAndText4 text="Papafam · Priestley Group" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(30,77,87,0.1)] border border-[rgba(30,77,87,0.25)] border-solid h-[29.5px] left-[40px] top-[117px] w-[151.109px]" data-name="Container">
                    <SpanBackgroundImageAndText text="$150M+ real estate portfolio" additionalClassNames="w-[125.109px]" />
                  </div>
                  <PBackgroundImage additionalClassNames="top-[166.5px] w-[298.672px]">{`Sonny, founder of Papafam (largest online developer community on Youtube), met Nathan, $150M+ in real estate developments, inside YP Club. Together they built the first AI solution for real estate project management. `}</PBackgroundImage>
                  <div className="absolute border-[rgba(252,252,252,0.1)] border-solid border-t h-[65.781px] left-[40px] top-[279.25px] w-[298.672px]" data-name="Container">
                    <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[22.4px] left-0 text-[#816a54] text-[16px] top-[20px] w-[282px]">One introduction. One product changing an entire industry.</p>
                  </div>
                </div>
                <div className="absolute bg-[#1a1414] border-[rgba(252,252,252,0.1)] border-solid border-t h-[407px] left-[821.33px] top-0 w-[379px]" data-name="Container">
                  <div className="absolute content-stretch flex gap-[16px] h-[52px] items-center left-[40px] top-[40px] w-[298.656px]" data-name="Container">
                    <ContainerBackgroundImage />
                    <ContainerBackgroundImage2 additionalClassNames="w-[145.359px]">
                      <ContainerBackgroundImageAndText3 text="Mohammed Mohammed" />
                      <ContainerBackgroundImageAndText4 text="Smart Bricks" />
                    </ContainerBackgroundImage2>
                  </div>
                  <div className="absolute bg-[rgba(30,77,87,0.1)] border border-[rgba(30,77,87,0.25)] border-solid h-[29.5px] left-[40px] top-[116px] w-[137.797px]" data-name="Container">
                    <SpanBackgroundImageAndText text="$5M raised · a16z backed" additionalClassNames="w-[111.797px]" />
                  </div>
                  <PBackgroundImage additionalClassNames="top-[165.5px] w-[298.656px]">{`Mohammed built the world's first agentic AI solution for real estate and raised $5 million from Andreessen Horowitz, becoming the first founder in the region to do so at this stage. He is a YP Club member and on Forbes 30 under 30.`}</PBackgroundImage>
                  <div className="absolute border-[rgba(252,252,252,0.1)] border-solid border-t h-[65.781px] left-[40px] top-[278.25px] w-[298.656px]" data-name="Container">
                    <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[22.4px] left-0 text-[#816a54] text-[16px] top-[20px] w-[280px]">{`The region's first a16z-backed founder. In the room with you.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[824.875px] left-[167.5px] top-[4126.64px] w-[1200px]" data-name="Section">
            <div className="absolute h-[825px] left-0 top-0 w-[660px]" data-name="Container">
              <BackgroundImageAndText text="The Platform" additionalClassNames="w-[660px]" />
              <HBackgroundImage text="One Platform." text1="Every Tool You Need to Scale." additionalClassNames="w-[660px]" />
              <div className="absolute h-[74.063px] left-0 top-[182.19px] w-[560px]" data-name="p">
                <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[0.5px] not-italic text-[#b8afa8] text-[13px] top-[0.17px] w-[560px]">The ExecutiveOS is the digital infrastructure behind your membership, built to manage your network, track your impact, and give you access to everything YP Club offers in one place.</p>
              </div>
              <div className="absolute content-stretch flex flex-col h-[520.625px] items-start left-0 top-[304.25px] w-[660px]" data-name="Container">
                <ContainerBackgroundImage3 additionalClassNames="h-[112.281px] shrink-0">
                  <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[30px]" data-name="Container" />
                  <div className="absolute content-stretch flex flex-col gap-[6px] h-[63px] items-start left-[26.5px] top-[24.11px] w-[622px]" data-name="Container">
                    <ContainerBackgroundImageAndText5 text="Impact Index" />
                    <div className="h-[40.781px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[#b8afa8] text-[12px] top-[-1.5px] w-[482px]">See the financial value your network is generating in real time. Every introduction, referral, and deal tracked and attributed to your profile.</p>
                    </div>
                  </div>
                </ContainerBackgroundImage3>
                <ContainerBackgroundImage3 additionalClassNames="h-[112.281px] shrink-0">
                  <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[30px]" data-name="Container" />
                  <div className="absolute content-stretch flex flex-col gap-[6px] h-[63.281px] items-start left-[26px] top-[24px] w-[634px]" data-name="Container">
                    <ContainerBackgroundImageAndText5 text="Curated Dinners" />
                    <div className="h-[40.781px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-[0.5px] not-italic text-[#b8afa8] text-[12px] top-[-0.67px] w-[450px]">AI-matched gatherings based on your industry, ambitions, and who you need to meet. Seating confirmed two days in advance.</p>
                    </div>
                  </div>
                </ContainerBackgroundImage3>
                <ContainerBackgroundImage3 additionalClassNames="h-[91.891px] shrink-0">
                  <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[30px]" data-name="Container" />
                  <div className="absolute content-stretch flex flex-col gap-[6px] h-[42.891px] items-start left-[26px] top-[24px] w-[579.859px]" data-name="Container">
                    <ContainerBackgroundImageAndText5 text="The Vault" />
                    <div className="h-[20.391px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-[0.5px] not-italic text-[#b8afa8] text-[12px] top-[-0.95px] w-[447px]">On-demand access to a private library of founder-focused education built around the six pillars of scale.</p>
                    </div>
                  </div>
                </ContainerBackgroundImage3>
                <ContainerBackgroundImage3 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[30px]" data-name="Container" />
                  <div className="absolute content-stretch flex flex-col gap-[6px] h-[63.281px] items-start left-[26px] top-[24px] w-[634px]" data-name="Container">
                    <ContainerBackgroundImageAndText5 text="YP Concierge" />
                    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-[0.5px] not-italic text-[#b8afa8] text-[12px] top-[-0.84px] w-[452px]">24/7 travel desk with up to 50% off Emirates and Etihad business class, luxury hotel upgrades, and VIP arrival treatment.</p>
                    </div>
                  </div>
                </ContainerBackgroundImage3>
                <ContainerBackgroundImage3 additionalClassNames="h-[91.891px] shrink-0">
                  <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[30px]" data-name="Container" />
                  <div className="absolute content-stretch flex flex-col gap-[6px] h-[42.891px] items-start left-[26px] top-[24px] w-[633.484px]" data-name="Container">
                    <ContainerBackgroundImageAndText5 text="YP Nodes" />
                    <div className="h-[21px] relative shrink-0 w-[480px]" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-[0.5px] not-italic text-[#b8afa8] text-[12px] top-[-1.13px] w-[453px]">Our members travel frequently so their network should follow them. Pop-up activations and curated introductions globally and at conferences.</p>
                    </div>
                  </div>
                </ContainerBackgroundImage3>
              </div>
            </div>
            <div className="absolute bg-[#211919] border border-[rgba(252,252,252,0.1)] border-solid h-[548px] left-[760px] overflow-clip rounded-[32px] top-0 w-[440px]" data-name="Container">
              <div className="absolute bg-[rgba(252,252,252,0.1)] h-[6px] left-[179px] rounded-[3px] top-[20px] w-[80px]" data-name="Container" />
              <div className="absolute bg-[#1a1414] h-[480px] left-[20px] rounded-[20px] top-[46px] w-[398px]" data-name="Container">
                <div className="absolute h-[30px] left-[24px] top-[24px] w-[350px]" data-name="Container">
                  <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[30px] left-0 not-italic text-[#fcfcfc] text-[20px] top-0 whitespace-nowrap">Welcome back,</p>
                </div>
                <div className="absolute h-[30px] left-[24px] top-[58px] w-[350px]" data-name="Container">
                  <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[30px] left-0 not-italic text-[#816a54] text-[20px] top-0 whitespace-nowrap">Cameron.</p>
                </div>
                <div className="absolute h-[15px] left-[24px] top-[92px] w-[350px]" data-name="Container">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[0.5px] whitespace-nowrap">Your network is working.</p>
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[70px] items-start left-[24px] pr-[0.016px] top-[131px] w-[350px]" data-name="Container">
                  <ContainerBackgroundImage4>
                    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[30px] left-[42.78px] not-italic text-[#fcfcfc] text-[20px] text-center top-0 whitespace-nowrap">34</p>
                    </div>
                    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[43.53px] not-italic text-[#6e6260] text-[8px] text-center top-0 tracking-[0.8px] uppercase whitespace-nowrap">Received</p>
                    </div>
                  </ContainerBackgroundImage4>
                  <ContainerBackgroundImage4>
                    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[30px] left-[42.77px] not-italic text-[#fcfcfc] text-[20px] text-center top-0 whitespace-nowrap">48</p>
                    </div>
                    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[42.42px] not-italic text-[#6e6260] text-[8px] text-center top-0 tracking-[0.8px] uppercase whitespace-nowrap">Given</p>
                    </div>
                  </ContainerBackgroundImage4>
                  <ContainerBackgroundImage4>
                    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[30px] left-[43.16px] not-italic text-[#2a6b78] text-[20px] text-center top-0 whitespace-nowrap">$2.3M</p>
                    </div>
                    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[42.19px] not-italic text-[#6e6260] text-[8px] text-center top-0 tracking-[0.8px] uppercase whitespace-nowrap">Impact</p>
                    </div>
                  </ContainerBackgroundImage4>
                </div>
                <div className="absolute bg-[#211919] border border-[rgba(252,252,252,0.08)] border-solid h-[104.5px] left-[24px] rounded-[12px] top-[213px] w-[350px]" data-name="Container">
                  <ContainerBackgroundImageAndText6 text="Next Curated Dinner" />
                  <div className="absolute h-[36px] left-[16px] top-[33.5px] w-[316px]" data-name="Container">
                    <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[36px] left-0 not-italic text-[#fcfcfc] text-[24px] top-[-1px] whitespace-nowrap">Wednesday, 23 March</p>
                  </div>
                  <ContainerBackgroundImageAndText7 text="Tatei, Downtown · 8 founders matched to you" additionalClassNames="top-[71.5px]" />
                </div>
                <div className="absolute bg-[#211919] border border-[rgba(252,252,252,0.08)] border-solid h-[89.297px] left-[24px] rounded-[12px] top-[329.5px] w-[350px]" data-name="Container">
                  <ContainerBackgroundImageAndText6 text="New in The Vault" />
                  <div className="absolute content-stretch flex h-[20.797px] items-start left-[16px] top-[33.5px] w-[316px]" data-name="Container">
                    <p className="flex-[1_0_0] font-['Cormorant_Garamond:Light',sans-serif] leading-[20.8px] min-h-px min-w-px not-italic relative text-[#fcfcfc] text-[16px]">Scaling from $0 to $140M ARR</p>
                  </div>
                  <ContainerBackgroundImageAndText7 text="Calum White · 65 minutes" additionalClassNames="top-[56.3px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#211919] content-stretch flex flex-col h-[699.813px] items-start left-0 pb-px pt-[121px] px-[447.5px] top-[5071.52px] w-[1535px]" data-name="section">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[457px] relative shrink-0 w-full" data-name="div">
              <div className="absolute h-[15px] left-0 top-0 w-[640px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[320.48px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">The Standard</p>
              </div>
              <div className="absolute h-[123.188px] leading-[61.6px] left-0 text-[56px] text-center top-[35px] w-[640px] whitespace-nowrap" data-name="h2">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[320.97px] not-italic text-[#fcfcfc] top-[-1px]">Not Everyone</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[320.38px] text-[#816a54] top-[60.59px]">Gets In.</p>
              </div>
              <div className="absolute bg-[#1e4d57] h-px left-[296px] top-[190.19px] w-[48px]" data-name="Container" />
              <div className="absolute h-[80px] left-[-0.5px] top-[223.48px] w-[641px]" data-name="p">
                <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[320.11px] not-italic text-[#b8afa8] text-[13px] text-center top-0 w-[632px]">{`Every applicant completes an interview to assess alignment, ambition, and intent. We approve one in five applications, not because we are exclusive for exclusivity's sake, but because the quality of your network depends entirely on the quality of the people in it.`}</p>
              </div>
              <div className="absolute bg-[#1e4d57] border border-[#1e4d57] border-solid h-[46.5px] left-[203.83px] top-[411.31px] w-[232.344px]" data-name="a">
                <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[115.5px] not-italic text-[11px] text-center text-white top-[14px] tracking-[1.65px] uppercase whitespace-nowrap">Join the Waitlist</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex h-[80px] items-center justify-between left-0 pt-px px-[64px] top-[6428.89px] w-[1535px]" data-name="footer">
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
          <div className="absolute h-[880px] left-0 overflow-clip top-0 w-[1535px]" data-name="section">
            <div className="absolute h-[880px] left-0 top-0 w-[1535px]" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1535 880\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -75.7 -132.05 0 460.5 440)\\'><stop stop-color=\\'rgba(30,77,87,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1535 880\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -87.116 -151.96 0 1074.5 264)\\'><stop stop-color=\\'rgba(252,252,252,0.04)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(26, 20, 20) 0%, rgb(26, 20, 20) 100%)" }} />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[200px] left-[64px] to-[rgba(0,0,0,0)] top-[340px] via-1/2 via-[rgba(30,77,87,0.4)] w-px" data-name="div" />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[200px] left-[1470px] to-[rgba(0,0,0,0)] top-[340px] via-1/2 via-[rgba(30,77,87,0.4)] w-px" data-name="div" />
            <div className="absolute content-stretch flex flex-col gap-[6.118px] h-[62px] items-center left-[767.5px] pb-[-1.882px] top-[778.5px] w-[49px]" data-name="div">
              <BackgroundImage additionalClassNames="h-[13.5px] w-[48.703px]">
                <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[24.5px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[2.25px] uppercase whitespace-nowrap">Scroll</p>
              </BackgroundImage>
              <div className="bg-gradient-to-b from-[#1e4d57] h-[43.764px] opacity-97 shrink-0 to-[rgba(0,0,0,0)] w-px" data-name="Container" />
            </div>
            <div className="absolute h-[590px] left-[367.5px] top-[165.22px] w-[800px]" data-name="div">
              <div className="absolute h-[15px] left-[161.98px] top-[10px] w-[476.016px]" data-name="Container">
                <div className="absolute bg-[#1e4d57] h-px left-0 top-[7px] w-[32px]" data-name="span" />
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[238px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">FOR THE PIONEERS</p>
                <div className="absolute bg-[#1e4d57] h-px left-[444.02px] top-[7px] w-[32px]" data-name="span" />
              </div>
              <div className="absolute h-[336px] leading-[84px] left-0 text-[80px] text-center top-[57px] tracking-[-0.8px] w-[800px]" data-name="h1">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[400.8px] not-italic text-[#fcfcfc] top-[60.78px] whitespace-nowrap">The Operating System</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[400.59px] not-italic text-[#fcfcfc] top-[144.78px] whitespace-nowrap">for Founders Who Are</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[400px] text-[#816a54] top-[228.56px] w-[965px]">Serious About What Comes Next.</p>
              </div>
              <div className="absolute h-[74.063px] left-[120px] top-[421px] w-[560px]" data-name="p">
                <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[280.39px] not-italic text-[#b8afa8] text-[13px] text-center top-0 w-[546px]">YP Club is a private network built exclusively for founders. The infrastructure, the network, and the knowledge to scale your business, build your wealth, and get in the rooms that change your trajectory.</p>
              </div>
              <div className="absolute h-[46.5px] left-0 top-[543.06px] w-[800px]" data-name="Container">
                <div className="absolute bg-[#1e4d57] border border-[#1e4d57] border-solid h-[46.5px] left-[172.2px] top-0 w-[208.344px]" data-name="a">
                  <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[103.5px] not-italic text-[11px] text-center text-white top-[14px] tracking-[1.65px] uppercase whitespace-nowrap">Join the Waitlist</p>
                </div>
                <div className="absolute border border-[rgba(252,252,252,0.25)] border-solid h-[46.5px] left-[396.55px] top-0 w-[231.234px]" data-name="a">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[115.5px] not-italic text-[#b8afa8] text-[11px] text-center top-[14px] tracking-[1.65px] uppercase whitespace-nowrap">Download Brochure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[657.563px] left-0 overflow-clip top-[5771.33px] w-[1535px]" data-name="section">
            <div className="absolute h-[657.563px] left-0 top-0 w-[1535px]" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1535 657.56\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -46.497 -108.54 0 767.5 328.78)\\'><stop stop-color=\\'rgba(30,77,87,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(26, 20, 20) 0%, rgb(26, 20, 20) 100%)" }} />
            <div className="absolute h-[338px] left-[417.5px] top-[160px] w-[700px]" data-name="div">
              <div className="absolute h-[15px] left-0 top-0 w-[700px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[349.66px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">Ready?</p>
              </div>
              <div className="absolute h-[171.563px] leading-[57.2px] left-0 text-[52px] text-center top-[35px] w-[700px] whitespace-nowrap" data-name="h2">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[350.52px] not-italic text-[#fcfcfc] top-0">The Biggest Risk a Founder Takes</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[350.16px] not-italic text-[#fcfcfc] top-[57.19px]">Is Spending Years in</p>
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[350.44px] text-[#816a54] top-[114.38px]">The Wrong Room.</p>
              </div>
              <div className="absolute h-[16.5px] left-0 top-[222.56px] w-[700px]" data-name="p">
                <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[16.5px] left-[350.09px] not-italic text-[#6e6260] text-[11px] text-center top-0 tracking-[1.65px] uppercase whitespace-nowrap">Applications reviewed on a rolling basis · Membership is limited</p>
              </div>
              <div className="absolute h-[50.5px] left-[0.5px] top-[286.67px] w-[700px]" data-name="Container">
                <div className="absolute bg-[#1e4d57] border border-[#1e4d57] border-solid h-[50.5px] left-[98.2px] top-0 w-[232.344px]" data-name="a">
                  <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[115.5px] not-italic text-[11px] text-center text-white top-[16px] tracking-[1.65px] uppercase whitespace-nowrap">Join the Waitlist</p>
                </div>
                <div className="absolute border border-[rgba(252,252,252,0.25)] border-solid h-[50.5px] left-[346.55px] top-0 w-[255.234px]" data-name="a">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[127.5px] not-italic text-[#b8afa8] text-[11px] text-center top-[16px] tracking-[1.65px] uppercase whitespace-nowrap">Download Brochure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b content-stretch flex from-[rgba(26,20,20,0.95)] h-[85px] items-center justify-between left-0 px-[64px] to-[rgba(0,0,0,0)] top-0 w-[1535px]" data-name="nav">
        <BackgroundImage additionalClassNames="h-[16.5px] w-[74.344px]">
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[3.85px] uppercase whitespace-nowrap">YP Club</p>
        </BackgroundImage>
        <div className="h-[37px] relative shrink-0 w-[381.094px]" data-name="div">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
            <div className="flex-[1_0_0] h-[37px] min-h-px min-w-px relative" data-name="a">
              <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.25)] border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[25px] not-italic text-[#b8afa8] text-[10px] top-[11px] tracking-[1.5px] uppercase whitespace-nowrap">Download Brochure</p>
              </div>
            </div>
            <div className="bg-[#1e4d57] h-[37px] relative shrink-0 w-[172.141px]" data-name="a">
              <div aria-hidden="true" className="absolute border border-[#1e4d57] border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[25px] not-italic text-[10px] text-white top-[11px] tracking-[1.5px] uppercase whitespace-nowrap">Join the Waitlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}