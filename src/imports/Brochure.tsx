import clsx from "clsx";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative w-[420px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.07)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[67px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper1>;
}
type ATextProps = {
  text: string;
  additionalClassNames?: string;
};

function AText({ text, additionalClassNames = "" }: ATextProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[15px] relative", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="absolute h-[13.5px] left-0 top-[114.19px] w-[354px]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[0.9px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="absolute h-[15px] left-0 top-[97.19px] w-[354px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#fcfcfc] text-[10px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText1({ text, additionalClassNames = "" }: ContainerText1Props) {
  return (
    <div className={clsx("absolute bg-[rgba(30,77,87,0.1)] border border-[rgba(30,77,87,0.25)] border-solid h-[32px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[18px] left-[10px] text-[#2a6b78] text-[12px] top-[7px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[1.1px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanText({ text, additionalClassNames = "" }: SpanTextProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[19.5px] relative", additionalClassNames)}>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#b8afa8] text-[13px] top-0 whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="bg-[#2a2020] h-[45.5px] relative rounded-[2px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(252,252,252,0.5)] whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#6e6260] text-[9px] top-0 tracking-[1.8px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Brochure() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Brochure">
      <div className="bg-[#1a1414] content-stretch flex flex-col h-[2301.969px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
        <div className="bg-[#1a1414] h-[65.5px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-px px-[64px] relative size-full">
              <Wrapper additionalClassNames="h-[16.5px] w-[74.344px]">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[3.85px] uppercase whitespace-nowrap">YP Club</p>
              </Wrapper>
              <Wrapper additionalClassNames="h-[15px] w-[102.141px]">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1.5px] uppercase whitespace-nowrap">← Back to site</p>
              </Wrapper>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1414] h-[675.5px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[152.625px] leading-[76.32px] left-[348.2px] text-[72px] text-center top-[139px] tracking-[-0.72px] w-[838.594px] whitespace-nowrap" data-name="h1">
            <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] left-[419px] not-italic text-[#fcfcfc] top-[-1px]">Everything You Need to Know.</p>
            <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-[419.63px] text-[#816a54] top-[75.31px]">In One Document.</p>
          </div>
          <div className="absolute h-[49.375px] left-[487.5px] top-[311.63px] w-[560px]" data-name="p">
            <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24.7px] left-[280.28px] not-italic text-[#b8afa8] text-[13px] text-center top-0 w-[555px]">The full YP Club playbook — our membership model, the ExecutiveOS, member results, and what the next 12 months looks like for founders inside the network.</p>
          </div>
          <div className="absolute h-[24px] left-[419.98px] top-[377px] w-[695.031px]" data-name="p">
            <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[24px] left-[348px] text-[#816a54] text-[16px] text-center top-0 whitespace-nowrap">Submit your details and receive the brochure instantly. A member of our team will follow up on WhatsApp within 24 hours.</p>
          </div>
          <div className="absolute h-[50.5px] left-[417.03px] top-[465px] w-[700.922px]" data-name="Container" />
        </div>
        <div className="bg-[#1a1414] h-[1111.188px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex gap-[64px] items-start px-[217.5px] relative size-full">
            <div className="bg-[#211919] flex-[1_0_0] h-[858.734px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
                  <div className="bg-[#1e4d57] h-[233.859px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute h-[13.5px] left-[40px] top-[36px] w-[534px]" data-name="Container">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[9px] text-[rgba(252,252,252,0.6)] top-0 tracking-[2.25px] uppercase whitespace-nowrap">Request the Playbook</p>
                    </div>
                    <div className="absolute h-[67.188px] leading-[33.6px] left-[40px] text-[#fcfcfc] text-[28px] top-[61.5px] w-[534px] whitespace-nowrap" data-name="Container">
                      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic top-[-1px]">Get the brochure.</p>
                      <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 top-[32.59px]">Start the conversation.</p>
                    </div>
                    <div className="absolute h-[61.172px] left-[40.5px] top-[137px] w-[534px]" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[12px] text-[rgba(252,252,252,0.7)] top-[-1px] w-[516px]">Fill in your details below. The brochure lands in your inbox immediately. One of our team will reach out on WhatsApp, no hard sell, just a real conversation about whether YP Club is the right fit.</p>
                    </div>
                  </div>
                  <div className="h-[622.875px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex gap-[16px] h-[67px] items-start left-[40px] top-[36px] w-[534px]" data-name="Container">
                      <Container>
                        <LabelText text="First Name" />
                        <InputText text="Cameron" />
                      </Container>
                      <Container>
                        <LabelText text="Last Name" />
                        <InputText text="Lee" />
                      </Container>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[67px] items-start left-[40px] top-[123px] w-[534px]" data-name="Container">
                      <LabelText text="Email Address" />
                      <InputText text="cameron@company.com" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[67px] items-start left-[40px] top-[210px] w-[534px]" data-name="Container">
                      <LabelText text="LinkedIn Profile" />
                      <InputText text="linkedin.com/in/cameronlee" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[90px] items-start left-[40px] top-[297px] w-[534px]" data-name="Container">
                      <div className="h-[13.5px] relative shrink-0 w-full" data-name="label">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#2a6b78] text-[9px] top-0 tracking-[1.8px] uppercase whitespace-nowrap">WhatsApp Number</p>
                      </div>
                      <div className="content-stretch flex h-[45.5px] items-start relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#2a2020] h-[45.5px] relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[85.453px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[rgba(30,77,87,0.4)] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[2px] rounded-tl-[2px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[17px] pr-[16px] py-px relative size-full">
                            <SpanText text="🇦🇪" additionalClassNames="shrink-0 w-[16px]" />
                            <SpanText text="+971" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                          </div>
                        </div>
                        <div className="bg-[#2a2020] flex-[1_0_0] h-[45.5px] min-h-px min-w-px relative rounded-br-[2px] rounded-tr-[2px]" data-name="input">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                              <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(252,252,252,0.5)] whitespace-nowrap">50 123 4567</p>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[rgba(30,77,87,0.4)] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[2px] rounded-tr-[2px]" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#2a6b78] rounded-[2px] shrink-0 size-[4px]" data-name="Container" />
                        <Wrapper additionalClassNames="h-[15px] w-[365.625px]">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 whitespace-nowrap">Our team will reach out here within 24 hours — one conversation, no pressure.</p>
                        </Wrapper>
                      </div>
                    </div>
                    <div className="absolute h-[37.375px] left-[40px] top-[419px] w-[534px]" data-name="Container">
                      <div className="absolute left-0 size-[13px] top-[3px]" data-name="input" />
                      <div className="absolute h-[37.375px] left-[25px] top-0 w-[509px]" data-name="label">
                        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[18.7px] left-0 not-italic text-[#6e6260] text-[11px] top-0 w-[457px]">{`I'm happy for YP Club to contact me about membership. I understand this is a one-to-one conversation, not a mailing list.`}</p>
                      </div>
                    </div>
                    <div className="absolute bg-[#1e4d57] border border-[#1e4d57] border-solid h-[58px] left-[40px] rounded-[2px] top-[488.38px] w-[534px]" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[266.27px] not-italic text-[#fcfcfc] text-[11px] text-center top-[20px] tracking-[1.65px] uppercase whitespace-nowrap">Send Me the Brochure</p>
                    </div>
                    <div className="absolute h-[24.5px] left-[40px] top-[562.38px] w-[534px]" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Italic',sans-serif] italic leading-[19.5px] left-[267px] text-[#6e6260] text-[13px] text-center top-[3px] whitespace-nowrap">We will contact you as soon as we can.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <div className="h-[991.188px] relative shrink-0 w-[420px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
                <div className="h-[555.313px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[15px] left-0 top-0 w-[420px]" data-name="Container">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#2a6b78] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">{`What's Inside`}</p>
                  </div>
                  <div className="absolute h-[79.188px] leading-[39.6px] left-0 text-[36px] top-[35px] tracking-[-0.36px] w-[420px] whitespace-nowrap" data-name="h2">
                    <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] left-0 not-italic text-[#fcfcfc] top-0">The full picture.</p>
                    <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic left-0 text-[#816a54] top-[39.59px]">No gatekeeping.</p>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[409.125px] items-start left-0 top-[146.19px] w-[420px]" data-name="Container">
                    <Container1 additionalClassNames="h-[102.281px] shrink-0">
                      <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[25px]" data-name="Container" />
                      <div className="absolute content-stretch flex flex-col gap-[4px] h-[61.281px] items-start left-[26px] top-[20px] w-[394px]" data-name="Container">
                        <ContainerText text="The ExecutiveOS" />
                        <div className="h-[40.781px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[#b8afa8] text-[12px] top-[-1px] w-[376px]">Every feature of the platform - mpact Index, Curated Dinners, The Vault, YP Concierge, explained in full.</p>
                        </div>
                      </div>
                    </Container1>
                    <Container1 additionalClassNames="h-[102.281px] shrink-0">
                      <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[25px]" data-name="Container" />
                      <div className="absolute content-stretch flex flex-col gap-[4px] h-[61.281px] items-start left-[26px] top-[20px] w-[394px]" data-name="Container">
                        <ContainerText text="Member Results" />
                        <div className="h-[40.781px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[#b8afa8] text-[12px] top-[-1px] w-[385px]">The deals, raises, and introductions members have attributed directly to their YP Club network.</p>
                        </div>
                      </div>
                    </Container1>
                    <Container1 additionalClassNames="h-[102.281px] shrink-0">
                      <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[25px]" data-name="Container" />
                      <div className="absolute content-stretch flex flex-col gap-[4px] h-[61.281px] items-start left-[26px] top-[20px] w-[394px]" data-name="Container">
                        <ContainerText text="Membership Options" />
                        <div className="h-[40.781px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[#b8afa8] text-[12px] top-[-1px] w-[390px]">{`Pricing, what's included, and how the application process works, so you can make an informed decision.`}</p>
                        </div>
                      </div>
                    </Container1>
                    <Container1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                      <div className="absolute bg-[#1e4d57] left-0 rounded-[3px] size-[6px] top-[25px]" data-name="Container" />
                      <div className="absolute content-stretch flex flex-col gap-[4px] h-[61.281px] items-start left-[26px] top-[20px] w-[394px]" data-name="Container">
                        <ContainerText text="2025 Programming" />
                        <div className="h-[40.781px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20.4px] left-0 not-italic text-[#b8afa8] text-[12px] top-[-1px] w-[382px]">The full event calendar, curated dinners, wellness sessions, global activations at Leap and Gitex.</p>
                        </div>
                      </div>
                    </Container1>
                  </div>
                </div>
                <div className="bg-[#211919] h-[403.875px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="absolute h-[13.5px] left-[33px] top-[33px] w-[354px]" data-name="Container">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#fcfcfc] text-[9px] top-0 tracking-[2.25px] uppercase whitespace-nowrap">From Inside the Network</p>
                  </div>
                  <div className="absolute border-[rgba(252,252,252,0.07)] border-b border-solid h-[152.688px] left-[33px] top-[66.5px] w-[354px]" data-name="Container">
                    <ContainerText1 text="$5M raised · a16z backed" additionalClassNames="w-[125.203px]" />
                    <div className="absolute h-[43.188px] left-0 top-[44px] w-[354px]" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[336px]">{`"Mohammed built the region's first a16z-backed company at this stage. He did it as a YP Club member."`}</p>
                    </div>
                    <ContainerText2 text="Mohamed Mohamed" />
                    <ContainerText3 text="Smart Bricks" />
                  </div>
                  <div className="absolute h-[127.688px] left-[33px] top-[243.19px] w-[354px]" data-name="Container">
                    <ContainerText1 text="Multi-six-figure contract" additionalClassNames="w-[125.938px]" />
                    <div className="absolute h-[43.188px] left-0 top-[44px] w-[354px]" data-name="Container">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[21.6px] left-0 not-italic text-[#b8afa8] text-[12px] top-0 w-[339px]">{`"James went from YP Club team member to founder. His first contract came through the network he helped build."`}</p>
                    </div>
                    <ContainerText2 text="James Augustin" />
                    <ContainerText3 text="Particle Execution" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#211919] h-[369.781px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pb-px pt-[81px] px-[447.5px] relative size-full">
            <div className="h-[208px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[43.188px] left-0 top-0 w-[640px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[43.2px] left-[320.44px] not-italic text-[72px] text-[rgba(30,77,87,0.2)] text-center top-[-2px] whitespace-nowrap">“</p>
              </div>
              <div className="absolute h-[80.594px] left-0 top-[67.19px] w-[640px]" data-name="Container" />
              <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[40.3px] left-[320px] text-[#fcfcfc] text-[26px] text-center top-[126.81px] w-[625px]">The World’s First ExecutiveOS</p>
              <div className="absolute bg-[#1e4d57] h-px left-[296px] top-[175.78px] w-[48px]" data-name="Container" />
              <div className="absolute h-[15px] left-0 top-[192.78px] w-[640px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[320.31px] not-italic text-[#fcfcfc] text-[10px] text-center top-0 tracking-[2px] uppercase whitespace-nowrap">FOR THE PIONEERS</p>
              </div>
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