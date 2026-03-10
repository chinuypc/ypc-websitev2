import clsx from "clsx";
import svgPaths from "./svg-lpuob5idwt";

function Div1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[34.5px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#1a1414] flex-[1_0_0] h-[322px] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type DivProps = {
  additionalClassNames?: string;
};

function Div({ children, additionalClassNames = "" }: React.PropsWithChildren<DivProps>) {
  return (
    <div className={clsx("h-[38px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative w-[628px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.07)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[28px] items-start pb-px pt-[28px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper2 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper2>;
}

function Svg1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="svg">{children}</g>
      </svg>
    </div>
  );
}

function Svg({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[26px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="svg">{children}</g>
      </svg>
    </div>
  );
}
type ATextProps = {
  text: string;
  additionalClassNames?: string;
};

function AText({ text, additionalClassNames = "" }: ATextProps) {
  return (
    <Wrapper2 additionalClassNames={clsx("h-[15px] relative", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type SpanText3Props = {
  text: string;
};

function SpanText3({ text }: SpanText3Props) {
  return (
    <div className="h-[21px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#fcfcfc] text-[14px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanText2Props = {
  text: string;
};

function SpanText2({ text }: SpanText2Props) {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[9px] text-[rgba(252,252,252,0.6)] top-0 tracking-[0.72px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText5Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText5({ text, additionalClassNames = "" }: ContainerText5Props) {
  return (
    <div className={clsx("absolute h-[13.5px] left-0 w-[294.672px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[0.9px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText4Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText4({ text, additionalClassNames = "" }: ContainerText4Props) {
  return (
    <div className={clsx("absolute h-[15px] left-0 w-[294.672px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#fcfcfc] text-[10px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText3({ text, additionalClassNames = "" }: ContainerText3Props) {
  return (
    <div className={clsx("absolute bg-[rgba(30,77,87,0.1)] border border-[rgba(30,77,87,0.25)] border-solid h-[32px] left-[28px] top-[33px]", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[18px] left-[10px] text-[#2a6b78] text-[12px] top-[7px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanText1Props = {
  text: string;
};

function SpanText1({ text }: SpanText1Props) {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#fcfcfc] text-[15px] top-[-2px] tracking-[0.3px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanTextProps = {
  text: string;
};

function SpanText({ text }: SpanTextProps) {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[0.72px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText2({ text, additionalClassNames = "" }: ContainerText2Props) {
  return (
    <Wrapper2 additionalClassNames={clsx("h-[16.5px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[1.1px] uppercase whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type ContainerText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText1({ text, additionalClassNames = "" }: ContainerText1Props) {
  return (
    <Wrapper2 additionalClassNames={clsx("relative shrink-0 w-[40px]", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[36px] left-0 not-italic text-[36px] text-[rgba(30,77,87,0.35)] top-[2px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type HProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function H({ text, text1, additionalClassNames = "" }: HProps) {
  return (
    <div className={clsx("absolute h-[96.781px] leading-[48.4px] left-0 text-[44px] top-[35px] tracking-[-0.44px] whitespace-nowrap", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#fcfcfc] top-0">{text}</p>
      <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#816a54] top-[48.39px]">{text1}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("absolute h-[15px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#2a6b78] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Referral() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Referral">
      <div className="bg-[#1a1414] content-stretch flex flex-col h-[3172.297px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
        <div className="bg-[#1a1414] h-[65.5px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-px px-[64px] relative size-full">
              <Wrapper additionalClassNames="h-[16.5px] w-[74.344px]">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[3.85px] uppercase whitespace-nowrap">YP Club</p>
              </Wrapper>
              <Wrapper additionalClassNames="h-[15px] w-[129.672px]">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1.5px] uppercase whitespace-nowrap">By Invitation Only</p>
              </Wrapper>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1414] h-[633.5px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute bg-[rgba(30,77,87,0.12)] content-stretch flex gap-[10px] h-[37px] items-center left-[607.86px] px-[25px] py-px top-[96px] w-[319.281px]" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[rgba(30,77,87,0.3)] border-solid inset-0 pointer-events-none" />
            <div className="bg-[#2a6b78] rounded-[3px] shrink-0 size-[6px]" data-name="Container" />
            <Wrapper1 additionalClassNames="h-[15px]">
              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[127px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[2px] uppercase whitespace-nowrap">A YP Club Member Has Invited You</p>
            </Wrapper1>
          </div>
          <div className="absolute h-[152.625px] leading-[76.32px] left-[464.27px] text-[72px] text-center top-[173px] tracking-[-0.72px] w-[606.469px] whitespace-nowrap" data-name="h1">
            <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[303px] not-italic text-[#fcfcfc] top-[-1px]">Someone in the Room</p>
            <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[303.66px] text-[#816a54] top-[75.31px]">Thinks You Belong in It.</p>
          </div>
          <div className="absolute h-[49.375px] left-[487.5px] top-[345.63px] w-[560px]" data-name="p">
            <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[280.13px] not-italic text-[#b8afa8] text-[13px] text-center top-0 w-[542px]">{`YP Club members only refer founders they'd personally vouch for. You are not receiving a marketing email. You are receiving a personal endorsement from someone already inside.`}</p>
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[508.98px] top-[415px] w-[517.016px]" data-name="Container">
            <div className="bg-[#1e4d57] h-px shrink-0 w-[32px]" data-name="Container" />
            <Wrapper1 additionalClassNames="h-[24px]">
              <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[24px] left-[215px] text-[#fcfcfc] text-[16px] text-center top-0 whitespace-nowrap">For referrals to be valid, they must be done through WhatsApp</p>
            </Wrapper1>
            <div className="bg-[#1e4d57] h-px shrink-0 w-[32px]" data-name="Container" />
          </div>
          <div className="absolute h-[50.5px] left-[444.34px] top-[503px] w-[646.313px]" data-name="Container" />
        </div>
        <div className="bg-[rgba(252,252,252,0.06)] h-px shrink-0 w-full" data-name="Container" />
        <div className="bg-[#1a1414] h-[1147.422px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex gap-[72px] items-start pt-[96px] px-[217.5px] relative size-full">
            <Wrapper1 additionalClassNames="h-[776.594px]">
              <ContainerText text="What Happens Next" additionalClassNames="w-[628px]" />
              <H text="Three steps." text1="One room that changes everything." additionalClassNames="w-[628px]" />
              <div className="absolute h-[74.063px] left-0 top-[147.78px] w-[480px]" data-name="p">
                <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-0 not-italic text-[#b8afa8] text-[13px] top-0 w-[472px]">{`Because you've been referred, your application goes to the front of the review queue. This is not a formality, it is how we protect every room, every introduction, and every relationship inside the network.`}</p>
              </div>
              <div className="absolute content-stretch flex flex-col h-[389.563px] items-start left-0 top-[269.84px] w-[628px]" data-name="Container">
                <Container1 additionalClassNames="h-[124.688px] shrink-0">
                  <ContainerText1 text="01" additionalClassNames="h-[67.688px]" />
                  <Container additionalClassNames="h-[67.688px]">
                    <div className="content-stretch flex h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
                      <ContainerText2 text="Download the App" additionalClassNames="w-[133.125px]" />
                    </div>
                    <div className="h-[43.188px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[535px]">Your application starts in the YP Club app. Complete your founder profile, your company, your revenue stage, your ambitions. Takes under five minutes.</p>
                    </div>
                  </Container>
                </Container1>
                <Container1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ContainerText1 text="02" additionalClassNames="h-[83.188px]" />
                  <Container additionalClassNames="h-[83.188px]">
                    <div className="content-stretch flex gap-[10px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
                      <ContainerText2 text="Priority Review" additionalClassNames="w-[113.281px]" />
                      <div className="bg-[rgba(30,77,87,0.15)] h-[32px] relative shrink-0 w-[126.828px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border border-[rgba(30,77,87,0.3)] border-solid inset-0 pointer-events-none" />
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[16.5px] left-[11px] text-[#2a6b78] text-[11px] top-[9px] whitespace-nowrap">Referred — ahead of queue</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[43.188px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[538px]">{`Your application is reviewed ahead of the standard queue. We're looking for alignment, ambition, and intent. Because you've been referred, we already have a strong signal.`}</p>
                    </div>
                  </Container>
                </Container1>
                <Container1 additionalClassNames="h-[124.688px] shrink-0">
                  <ContainerText1 text="03" additionalClassNames="h-[67.688px]" />
                  <Container additionalClassNames="h-[67.688px]">
                    <div className="content-stretch flex h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
                      <Wrapper additionalClassNames="h-[16.5px] w-[148.797px]">
                        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[1.1px] uppercase whitespace-nowrap">{`Interview & Decision`}</p>
                      </Wrapper>
                    </div>
                    <div className="h-[43.188px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[555px]">A short conversation with our memberships team. If approved, you receive immediate access to the ExecutiveOS, your first curated dinner match, and a personal onboarding call.</p>
                    </div>
                  </Container>
                </Container1>
              </div>
              <div className="absolute bg-[#211919] content-stretch flex h-[85.188px] items-start left-0 pb-px pl-[26px] pr-[25px] pt-[21px] top-[691.41px] w-[628px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[#1e4d57] border-b border-l-2 border-r border-solid border-t inset-0 pointer-events-none" />
                <Wrapper1 additionalClassNames="h-[43.188px]">
                  <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[561px]">Referral invitations are not open-ended. Membership cohorts are reviewed and approved on a rolling basis, available spots are finite. Your invitation is live now.</p>
                </Wrapper1>
              </div>
            </Wrapper1>
            <div className="h-[931.422px] relative shrink-0 w-[400px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                <div className="bg-[#211919] h-[651.172px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start p-px relative size-full">
                      <div className="bg-[#1e4d57] h-[230.672px] relative shrink-0 w-full" data-name="Container">
                        <div className="absolute h-[13.5px] left-[36px] top-[36px] w-[326px]" data-name="Container">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[9px] text-[rgba(252,252,252,0.6)] top-0 tracking-[2.25px] uppercase whitespace-nowrap">Start Here</p>
                        </div>
                        <div className="absolute h-[66px] leading-[33px] left-[36px] text-[#fcfcfc] text-[30px] top-[61.5px] w-[326px] whitespace-nowrap" data-name="Container">
                          <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic top-0">The app is where</p>
                          <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 top-[33px]">your application begins.</p>
                        </div>
                        <div className="absolute h-[61.172px] left-[36px] top-[137.5px] w-[326px]" data-name="Container">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[12px] text-[rgba(252,252,252,0.75)] top-[-1px] w-[305px]">Download the YP Club app and complete your founder profile in under five minutes. Your referral is already attached to your application.</p>
                        </div>
                      </div>
                      <div className="h-[418.5px] relative shrink-0 w-full" data-name="Container">
                        <div className="absolute bg-[rgba(30,77,87,0.12)] border border-[rgba(30,77,87,0.25)] border-solid h-[65px] left-[36px] top-[28px] w-[326px]" data-name="Container">
                          <div className="absolute bg-[#2a6b78] left-[16px] rounded-[3px] size-[6px] top-[16px]" data-name="Container" />
                          <div className="absolute h-[39px] left-[32px] top-[12px] w-[276px]" data-name="span">
                            <p className="absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[19.5px] left-0 text-[#2a6b78] text-[13px] top-[-1px] w-[269px]">{`Your referral puts you ahead of the standard review queue. Don't leave it sitting.`}</p>
                          </div>
                        </div>
                        <div className="absolute bg-[#2a2020] content-stretch flex gap-[14px] h-[72px] items-center left-[36px] pl-[21px] pr-px py-px rounded-[2px] top-[117px] w-[326px]" data-name="a">
                          <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.12)] border-solid inset-0 pointer-events-none rounded-[2px]" />
                          <Svg>
                            <path d={svgPaths.p276a5a00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
                          </Svg>
                          <Div additionalClassNames="w-[100.578px]">
                            <SpanText text="Download on the" />
                            <SpanText1 text="App Store" />
                          </Div>
                        </div>
                        <div className="absolute bg-[#2a2020] content-stretch flex gap-[14px] h-[72px] items-center left-[36px] pl-[21px] pr-px py-px rounded-[2px] top-[201px] w-[326px]" data-name="a">
                          <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.12)] border-solid inset-0 pointer-events-none rounded-[2px]" />
                          <Svg>
                            <path d={svgPaths.p18ce4000} fill="var(--fill-0, #FCFCFC)" id="Vector" />
                          </Svg>
                          <Div additionalClassNames="w-[88.844px]">
                            <SpanText text="Get it on" />
                            <SpanText1 text="Google Play" />
                          </Div>
                        </div>
                        <div className="absolute content-stretch flex gap-[12px] h-[13.5px] items-center left-[36px] top-[301px] w-[326px]" data-name="Container">
                          <div className="bg-[rgba(252,252,252,0.08)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />
                          <Wrapper additionalClassNames="h-[13.5px] w-[75.375px]">
                            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[1.8px] uppercase whitespace-nowrap">questions?</p>
                          </Wrapper>
                          <div className="bg-[rgba(252,252,252,0.08)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />
                        </div>
                        <div className="absolute h-[48px] left-[36px] top-[334.5px] w-[326px]" data-name="Container">
                          <div className="absolute content-stretch flex h-[14px] items-start left-[110.81px] top-[7px] w-[104.359px]" data-name="span">
                            <p className="font-['Inter:Light',sans-serif] font-light leading-[18.7px] not-italic relative shrink-0 text-[#6e6260] text-[11px] text-center whitespace-nowrap">Reach out directly at</p>
                          </div>
                          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[162.89px] not-italic text-[#b8afa8] text-[11px] text-center top-[28px] whitespace-nowrap">members@ypclub.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
                <div className="bg-[#211919] h-[256.25px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[29px] relative size-full">
                    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[1.8px] uppercase whitespace-nowrap">{`What You're Joining`}</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] h-[176.75px] items-start relative shrink-0 w-full" data-name="Container">
                      <Wrapper additionalClassNames="h-[35.188px] w-[342px]">
                        <div className="absolute bg-[#1e4d57] left-0 rounded-[2px] size-[4px] top-[5px]" data-name="Container" />
                        <div className="absolute h-[35.188px] left-[14px] top-0 w-[328px]" data-name="span">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[17.6px] left-0 not-italic text-[#b8afa8] text-[11px] top-[-1px] w-[304px]">Curated dinners matched by AI to the founders you actually need to meet</p>
                        </div>
                      </Wrapper>
                      <Wrapper additionalClassNames="h-[35.188px] w-[342px]">
                        <div className="absolute bg-[#1e4d57] left-0 rounded-[2px] size-[4px] top-[5px]" data-name="Container" />
                        <div className="absolute h-[35.188px] left-[14px] top-0 w-[328px]" data-name="span">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[17.6px] left-0 not-italic text-[#b8afa8] text-[11px] top-[-1px] w-[291px]">The Impact Index: See the financial value your network generates in real time</p>
                        </div>
                      </Wrapper>
                      <Wrapper additionalClassNames="h-[35.188px] w-[342px]">
                        <div className="absolute bg-[#1e4d57] left-0 rounded-[2px] size-[4px] top-[5px]" data-name="Container" />
                        <div className="absolute h-[35.188px] left-[14px] top-0 w-[328px]" data-name="span">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[17.6px] left-0 not-italic text-[#b8afa8] text-[11px] top-[-1px] w-[298px]">The Vault: Private founder education built around the six pillars of scale</p>
                        </div>
                      </Wrapper>
                      <Wrapper1 additionalClassNames="w-[342px]">
                        <div className="absolute bg-[#1e4d57] left-0 rounded-[2px] size-[4px] top-[5px]" data-name="Container" />
                        <div className="absolute h-[35.188px] left-[14px] top-0 w-[328px]" data-name="span">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[17.6px] left-0 not-italic text-[#b8afa8] text-[11px] top-[-1px] w-[313px]">Global activations: Your network follows you to Leap, Gitex, and beyond</p>
                        </div>
                      </Wrapper1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#211919] h-[672.031px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pb-px pt-[81px] px-[217.5px] relative size-full">
            <div className="h-[510.031px] relative shrink-0 w-full" data-name="Container">
              <ContainerText text="From Inside the Network" additionalClassNames="w-[1100px]" />
              <H text="The room has already" text1="changed everything for them." additionalClassNames="w-[1100px]" />
              <div className="absolute content-stretch flex gap-[24px] h-[322.25px] items-start left-0 pr-[-0.016px] top-[187.78px] w-[1100px]" data-name="Container">
                <Container2>
                  <ContainerText3 text="$5M raised · a16z backed" additionalClassNames="w-[125.203px]" />
                  <div className="absolute h-[88.75px] left-[28px] top-[81px] w-[294.672px]" data-name="Container">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.2px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[295px]">Mohammed built the world’s first agentic AI solution for real estate and raised $5 million from Andreessen Horowitz — becoming the first founder in the region to do so at this stage.</p>
                  </div>
                  <div className="absolute border-[rgba(252,252,252,0.08)] border-solid border-t h-[100.5px] left-[28px] top-[189.75px] w-[294.672px]" data-name="Container">
                    <div className="absolute h-[45px] left-0 top-[16px] w-[294.672px]" data-name="Container">
                      <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[22.5px] left-0 text-[#816a54] text-[15px] top-0 w-[291px]">The region’s first a16z-backed founder. In the room with you.</p>
                    </div>
                    <ContainerText4 text="Mohamed Mohamed" additionalClassNames="top-[69px]" />
                    <ContainerText5 text="Smart Bricks" additionalClassNames="top-[86px]" />
                  </div>
                </Container2>
                <Container2>
                  <ContainerText3 text="$150M+ real estate portfolio" additionalClassNames="w-[137.5px]" />
                  <div className="absolute h-[88.75px] left-[28px] top-[81px] w-[294.672px]" data-name="Container">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.2px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[293px]">Sonny met Nathan Priestley — $150M+ in real estate developments — inside YP Club. Together they built the first AI solution for real estate project management. Now going international.</p>
                  </div>
                  <div className="absolute border-[rgba(252,252,252,0.08)] border-solid border-t h-[100.5px] left-[28px] top-[189.75px] w-[294.672px]" data-name="Container">
                    <div className="absolute h-[45px] left-0 top-[16px] w-[294.672px]" data-name="Container">
                      <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[22.5px] left-0 text-[#816a54] text-[15px] top-0 w-[264px]">One introduction. One product changing an entire industry.</p>
                    </div>
                    <div className="absolute h-[15px] left-0 top-[69px] w-[294.672px]" data-name="Container">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#fcfcfc] text-[10px] top-0 whitespace-nowrap">{`Sonny Sangha & Nathan Priestley`}</p>
                    </div>
                    <ContainerText5 text="Papafam · Priestley Group" additionalClassNames="top-[86px]" />
                  </div>
                </Container2>
                <Container2>
                  <ContainerText3 text="Multi-six-figure contract" additionalClassNames="w-[125.938px]" />
                  <div className="absolute h-[88.75px] left-[28px] top-[81px] w-[294.672px]" data-name="Container">
                    <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.2px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[290px]">James started as a YP Club team member before backing himself to found Particle Execution. His first major contract came through the very network he helped build — now expanding internationally.</p>
                  </div>
                  <div className="absolute border-[rgba(252,252,252,0.08)] border-solid border-t h-[78px] left-[28px] top-[189.75px] w-[294.672px]" data-name="Container">
                    <div className="absolute h-[22.5px] left-0 top-[16px] w-[294.672px]" data-name="Container">
                      <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[22.5px] left-0 text-[#816a54] text-[15px] top-0 whitespace-nowrap">From employee to founder to international contract.</p>
                    </div>
                    <ContainerText4 text="James Augustin" additionalClassNames="top-[46.5px]" />
                    <ContainerText5 text="Particle Execution" additionalClassNames="top-[63.5px]" />
                  </div>
                </Container2>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1414] h-[572.844px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[43.188px] left-[447.5px] top-[96px] w-[640px]" data-name="Container">
            <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[43.2px] left-[320.44px] not-italic text-[72px] text-[rgba(30,77,87,0.2)] text-center top-[-2px] whitespace-nowrap">“</p>
          </div>
          <div className="absolute h-[86.781px] left-[447.5px] top-[163.19px] w-[640px]" data-name="Container" />
          <div className="absolute bg-[#1e4d57] h-px left-[743.5px] top-[277.97px] w-[48px]" data-name="Container" />
          <div className="absolute h-[49.375px] left-[447.5px] top-[318.97px] w-[640px]" data-name="Container">
            <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[320.27px] not-italic text-[#b8afa8] text-[13px] text-center top-0 w-[611px]">{`You've been put forward by someone already in the room. That means something. Your application is waiting.`}</p>
          </div>
          <div className="absolute h-[68.5px] left-[447.5px] top-[408.34px] w-[640px]" data-name="Container">
            <div className="absolute bg-[#1e4d57] content-stretch flex gap-[12px] h-[68.5px] items-center left-[123.78px] px-[33px] py-px rounded-[2px] top-0 w-[198.578px]" data-name="a">
              <div aria-hidden="true" className="absolute border border-[#1e4d57] border-solid inset-0 pointer-events-none rounded-[2px]" />
              <Svg1>
                <path d={svgPaths.p2ac3ab00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
              </Svg1>
              <Div1>
                <SpanText2 text="Download on the" />
                <SpanText3 text="App Store" />
              </Div1>
            </div>
            <div className="absolute bg-[#1e4d57] content-stretch flex gap-[12px] h-[68.5px] items-center left-[338.36px] px-[33px] py-px rounded-[2px] top-0 w-[177.844px]" data-name="a">
              <div aria-hidden="true" className="absolute border border-[#1e4d57] border-solid inset-0 pointer-events-none rounded-[2px]" />
              <Svg1>
                <path d={svgPaths.p2a3b07a0} fill="var(--fill-0, #FCFCFC)" id="Vector" />
              </Svg1>
              <Div1>
                <SpanText2 text="Get it on" />
                <SpanText3 text="Google Play" />
              </Div1>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1414] h-[80px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.08)] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pt-px px-[64px] relative size-full">
              <Wrapper additionalClassNames="h-[15px] w-[64.078px]">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">YP Club</p>
              </Wrapper>
              <div className="h-[15px] relative shrink-0 w-[278.797px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
                  <AText text="Club Rules" additionalClassNames="shrink-0 w-[59.859px]" />
                  <AText text="Privacy Policy" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                  <AText text="Cookie Policy" additionalClassNames="shrink-0 w-[76.141px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}