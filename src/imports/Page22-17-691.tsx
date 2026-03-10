import clsx from "clsx";
import imgFreeform6 from "figma:asset/cf2e9c08383ea533e36d13a133191487f2101207.png";
import imgContainer from "figma:asset/e8ec0dce266f6b7af5dbad92a1526b9b96769c32.png";
import imgContainer1 from "figma:asset/1f6e46c86051303b56a9d0f5fa4078e6a43aa098.png";
import imgContainer2 from "figma:asset/18fe71b2b65d8861766a7704a1e73b97c2566c21.png";
import imgContainer3 from "figma:asset/b6772eb294e49a528adb610bf028a1c8ce47bee7.png";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("h-[24.85px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper3>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper3 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper3>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[26.4px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(200,185,154,0.12)] border-solid border-t inset-0 pointer-events-none" />
      <p className="absolute font-['Cormorant:Italic',sans-serif] font-normal italic leading-[15.4px] left-0 text-[#fcfcfc] text-[11px] top-[11.2px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("pointer-events-none rounded-[18px] size-[36px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute inset-0 rounded-[18px]">
        <div className="absolute bg-[#2c2018] inset-0 rounded-[18px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[18px]">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(200,185,154,0.25)] border-solid inset-0 rounded-[18px]" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[12.6px] left-0 not-italic text-[#fcfcfc] text-[9px] top-[-0.2px] tracking-[0.45px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper>{text}</Wrapper>;
}
type SpanTextProps = {
  text: string;
};

function SpanText({ text }: SpanTextProps) {
  return (
    <Wrapper2 additionalClassNames="h-[15px]">
      <p className="absolute font-['Cormorant_Garamond:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#3ba6a2] text-[10px] top-[-0.5px] tracking-[0.2px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <Wrapper3 additionalClassNames={clsx("h-[11.25px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[11.25px] left-0 not-italic text-[#fcfcfc] text-[8px] top-[0.12px] tracking-[0.6px] uppercase whitespace-nowrap">{text}</p>
    </Wrapper3>
  );
}
type FreeformImageProps = {
  additionalClassNames?: string;
};

function FreeformImage({ additionalClassNames = "" }: FreeformImageProps) {
  return (
    <div className={clsx("absolute h-[19px] top-[545px] w-[47px]", additionalClassNames)}>
      <img alt="" className="absolute block max-w-none size-full" height="19" src={imgFreeform6} width="47" />
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute h-0 top-[555.85px] w-[635px]", additionalClassNames)}>
      <div className="absolute inset-[-0.2px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 635 0.4">
          <path d="M0 0.2H635" id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
        </svg>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-[#1a1413] relative size-full" data-name="Page 22">
      <div className="absolute contents left-[60.09px] top-[536px]">
        <div className="absolute contents left-[60.09px] top-[536px]">
          <Helper additionalClassNames="left-[115.09px]" />
          <FreeformImage additionalClassNames="left-[60.09px]" />
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36.068px] left-[760.09px] not-italic text-[10px] text-white top-[536px] whitespace-nowrap">Page 22</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[83.42px] top-[149px] w-[329px]">
        <div className="h-[34px] shrink-0 w-full" />
      </div>
      <div className="absolute bg-[#1a1210] h-[613.283px] left-[0.31px] overflow-clip top-0 w-[859.883px]" data-name="Container">
        <div className="absolute h-[10.5px] left-[52px] top-[38px] w-[755.883px]" data-name="Container">
          <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[10.5px] left-0 text-[#2a7b78] text-[7px] top-[53.75px] tracking-[1.75px] uppercase whitespace-nowrap">Member Impact</p>
        </div>
        <div className="absolute h-[121px] leading-[37.8px] left-[52px] text-[32px] top-[59px] tracking-[-0.36px] w-[756px] whitespace-nowrap" data-name="Container">
          <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#e8e0d5] top-[54.4px]">The Room</p>
          <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#fcfcfc] top-[92.2px]">Changes Everything</p>
        </div>
        <div className="absolute bg-[#2a7b78] h-px left-[52px] top-[210.1px] w-[32px]" data-name="Container" />
        <div className="absolute h-[269px] left-[52px] top-[241px] w-[756px]" data-name="Container">
          <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex items-center pt-[24px] relative shrink-0" data-name="Container">
                <div aria-hidden="true" className="absolute border-[rgba(200,185,154,0.2)] border-solid border-t inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[43px] items-start relative shrink-0 w-[235.967px]">
                  <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[10px] h-[37.45px] items-center relative shrink-0 w-full" data-name="Container">
                      <Wrapper1 additionalClassNames="h-[36px] w-[62px]">
                        <Container additionalClassNames="absolute left-0 top-0">
                          <img alt="" className="absolute h-full left-[-3.59%] max-w-none top-0 w-[152.84%]" src={imgContainer} />
                        </Container>
                        <div className="absolute flex items-center justify-center left-[26px] size-[36px] top-0">
                          <div className="-scale-y-100 flex-none rotate-180">
                            <Container additionalClassNames="relative">
                              <img alt="" className="absolute h-[162.48%] left-[-97.07%] max-w-none top-[-32.57%] w-[243.87%]" src={imgContainer1} />
                            </Container>
                          </div>
                        </div>
                      </Wrapper1>
                      <div className="flex-[1_0_0] h-[37.45px] min-h-px min-w-px relative" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
                          <Wrapper2 additionalClassNames="w-[163.967px]">
                            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[12.6px] left-0 not-italic text-[#fcfcfc] text-[9px] top-[-0.2px] tracking-[0.45px] w-[121px]">{`Sonny Sangha & Nathan Priestley`}</p>
                          </Wrapper2>
                          <ContainerText text="Papafam · Priestley Group" additionalClassNames="w-[163.967px]" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(42,123,120,0.12)] content-stretch flex h-[23px] items-center px-[9px] py-px relative shrink-0 w-[130.883px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[rgba(42,123,120,0.3)] border-solid inset-0 pointer-events-none" />
                      <SpanText text="$150M+ real estate portfolio" />
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                      <p className="font-['Inter:Light',sans-serif] font-light leading-[14.8px] not-italic relative shrink-0 text-[#fcfcfc] text-[10px] w-[236px]">Sonny, founder of Papafam, met Nathan Priestley,$150M+ in real estate developments, inside YP Club. Together they built the first AI solution for real estate project management. The product is now going international, targeting a category that has never had a purpose-built AI tool at this level.</p>
                    </div>
                  </div>
                  <ContainerText1 text="One introduction. One product changing an entire industry." />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[236px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[rgba(200,185,154,0.2)] border-solid border-t inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[11px] items-start pt-[24px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[10px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="pointer-events-none relative rounded-[18px] shrink-0 size-[36px]" data-name="Container">
                    <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[18px]">
                      <div className="absolute bg-[#2c2018] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[18px]" />
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[18px] size-full" src={imgContainer2} />
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(200,185,154,0.25)] border-solid inset-0 rounded-[18px]" />
                  </div>
                  <Container1 additionalClassNames="w-[123.067px]">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[123.067px]" data-name="Container">
                      <Text text="Mohamed Mohamed" />
                    </div>
                    <ContainerText text="Smart Bricks" additionalClassNames="w-[123.067px]" />
                  </Container1>
                </div>
                <div className="bg-[rgba(42,123,120,0.12)] content-stretch flex h-[23px] items-center px-[9px] py-px relative shrink-0 w-[117px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[rgba(42,123,120,0.3)] border-solid inset-0 pointer-events-none" />
                  <SpanText text="$5M raised · a16z backed" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[59px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
                  <p className="font-['Inter:Light',sans-serif] font-light leading-[14.8px] not-italic relative shrink-0 text-[#fcfcfc] text-[10px] w-[232px]">{`Mohammed built the world's first agentic AI solution for real estate and raised $5 million from Andreessen Horowitz, becoming the first founder in the region to do so. Mohamed is also on the Forbes 30 under 30 list for his achievements.`}</p>
                </div>
                <Wrapper>{`The region's first a16z-backed founder. In the room with you.`}</Wrapper>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[236px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[rgba(200,185,154,0.2)] border-solid border-t inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[43.5px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[10px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="relative rounded-[18px] shrink-0 size-[36px]" data-name="Container">
                        <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[18px]">
                          <div className="absolute bg-[#2c2018] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[18px]" />
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[18px]">
                            <img alt="" className="absolute left-0 max-w-none size-full top-[5.38%]" src={imgContainer3} />
                          </div>
                        </div>
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
                          <div className="opacity-35 shrink-0 size-[20px]" data-name="svg" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(200,185,154,0.25)] border-solid inset-0 pointer-events-none rounded-[18px]" />
                      </div>
                      <Container1 additionalClassNames="w-[94.05px]">
                        <div className="h-[12.6px] relative shrink-0 w-[94.05px]" data-name="Container">
                          <Text text="James Augustin" />
                        </div>
                        <Wrapper1 additionalClassNames="h-[11.25px] w-[94.05px]">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[11.25px] left-0 not-italic text-[#fcfcfc] text-[8px] top-[0.12px] tracking-[0.6px] uppercase whitespace-nowrap">{`Particle Execution `}</p>
                        </Wrapper1>
                      </Container1>
                    </div>
                    <div className="bg-[rgba(42,123,120,0.12)] content-stretch flex h-[23px] items-center px-[9px] py-px relative shrink-0 w-[119.583px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[rgba(42,123,120,0.3)] border-solid inset-0 pointer-events-none" />
                      <SpanText text="Multi-six-figure contract" />
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
                      <p className="font-['Inter:Light',sans-serif] font-light leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[10px] w-[236px]">
                        <span className="leading-[14.8px]">{`James started as a YP Club team member before backing himself to found Particle Execution. His first major win came through the very network he helped build, a multi-six-figure contract with `}</span>
                        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[14.8px]">a</span>
                        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[14.8px]">{` music festival t`}</span>
                        <span className="leading-[14.8px]">o deliver AI-powered ticketing solutions, now expanding internationally.</span>
                      </p>
                    </div>
                  </div>
                  <ContainerText1 text="From employee to founder to international contract." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#214f59] left-[826px] size-[42px] top-[107px]" data-name="Container" />
        <div className="absolute bg-[#214f59] left-[847px] size-[21px] top-[149px]" data-name="Container" />
        <div className="absolute border-8 border-[red] border-solid h-[89px] left-[33.69px] top-[450px] w-[783px]" />
      </div>
      <div className="absolute contents left-[59.98px] top-[536px]">
        <div className="absolute contents left-[59.98px] top-[536px]">
          <Helper additionalClassNames="left-[114.98px]" />
          <FreeformImage additionalClassNames="left-[59.98px]" />
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36.068px] left-[759.98px] not-italic text-[10px] text-white top-[536px] whitespace-nowrap">Page 22</p>
        </div>
      </div>
    </div>
  );
}