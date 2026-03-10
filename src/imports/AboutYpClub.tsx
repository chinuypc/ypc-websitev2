import clsx from "clsx";
import imgDiv from "figma:asset/7bb49d3ad48324f3d0fe0d8d7919e1e4ea1b1a23.png";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[69.5px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start px-[32px] relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ATextProps = {
  text: string;
  additionalClassNames?: string;
};

function AText({ text, additionalClassNames = "" }: ATextProps) {
  return (
    <div className={clsx("h-[15px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#6e6260] text-[10px] top-0 tracking-[1px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function AboutYpClub() {
  return (
    <div className="bg-white relative size-full" data-name="About YP Club">
      <div className="absolute bg-white content-stretch flex flex-col h-[880px] items-start left-0 top-0 w-[1535px]" data-name="Body">
        <div className="bg-[#1a1414] content-stretch flex flex-col h-[2039.734px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
          <div className="bg-[#1a1414] h-[86px] relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pb-px px-[64px] relative size-full">
                <Wrapper additionalClassNames="h-[16.5px] w-[74.344px]">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#fcfcfc] text-[11px] top-0 tracking-[3.85px] uppercase whitespace-nowrap">YP Club</p>
                </Wrapper>
                <div className="h-[37px] relative shrink-0 w-[171.609px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                    <div className="flex-[1_0_0] h-[37px] min-h-px min-w-px relative" data-name="Link">
                      <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0.25)] border-solid inset-0 pointer-events-none" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[25px] not-italic text-[#b8afa8] text-[10px] top-[11px] tracking-[1.5px] uppercase whitespace-nowrap">Join the Waitlist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1a1414] content-stretch flex flex-col gap-[28px] h-[287.313px] items-center pb-[72px] pt-[96px] relative shrink-0 w-full" data-name="Container">
            <div className="h-[15px] relative shrink-0 w-[263.969px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                <div className="bg-[#1e4d57] h-px shrink-0 w-[32px]" data-name="Container" />
                <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="span">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[88.5px] not-italic text-[#2a6b78] text-[10px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">Dubai · Founded 2022</p>
                  </div>
                </div>
                <div className="bg-[#1e4d57] h-px shrink-0 w-[32px]" data-name="Container" />
              </div>
            </div>
            <Wrapper additionalClassNames="h-[76.313px] w-[402.141px]">
              <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[0] left-[201.5px] not-italic text-[#fcfcfc] text-[0px] text-[72px] text-center top-[-1px] tracking-[-0.72px] whitespace-nowrap">
                <span className="leading-[76.32px]">{`About `}</span>
                <span className="font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[76.32px] text-[#816a54]">YP Club</span>
              </p>
            </Wrapper>
          </div>
          <div className="bg-[rgba(252,252,252,0.06)] h-px shrink-0 w-full" data-name="Container" />
          <div className="bg-[#1a1414] h-[1215.641px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[91.172px] left-[407.5px] top-[80px] w-[720px]" data-name="p">
              <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[30.4px] left-0 not-italic text-[#fcfcfc] text-[16px] top-[-1px] w-[710px]">YP Club is a private, application-only community of founders building and scaling businesses in the UAE. Founded in 2022 and based in Dubai, the club brings together 190 members who are serious about what comes next — not just what came before.</p>
            </div>
            <div className="absolute h-[121.563px] left-[407.5px] top-[199.17px] w-[720px]" data-name="p">
              <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[30.4px] left-0 not-italic text-[#b8afa8] text-[16px] top-[-1px] w-[718px]">{`Membership is selective. Roughly 1 in 5 applicants are accepted, and every member is vetted to ensure the room stays sharp, generous, and outcome-focused. YP Club is not a networking group. It is a curated environment where founders access peer-to-peer insight, private deal flow, and the kind of conversations that don't happen at conferences.`}</p>
            </div>
            <div className="absolute content-stretch flex h-[151.5px] items-center left-[407.5px] pr-[0.016px] py-px top-[384.73px] w-[720px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
              <Container>
                <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[48px] left-[88.08px] not-italic text-[#fcfcfc] text-[48px] text-center top-0 whitespace-nowrap">190</p>
                </div>
                <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[87.94px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Members</p>
                </div>
              </Container>
              <div className="bg-[rgba(252,252,252,0.1)] h-[48px] shrink-0 w-px" data-name="Container" />
              <Container>
                <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[48px] left-[87.69px] not-italic text-[#fcfcfc] text-[48px] text-center top-0 whitespace-nowrap">1 in 5</p>
                </div>
                <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[87.83px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Accepted</p>
                </div>
              </Container>
              <div className="bg-[rgba(252,252,252,0.1)] h-[48px] shrink-0 w-px" data-name="Container" />
              <Container>
                <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[48px] left-[87.86px] not-italic text-[#fcfcfc] text-[48px] text-center top-0 whitespace-nowrap">4</p>
                </div>
                <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[87.84px] not-italic text-[#6e6260] text-[9px] text-center top-0 tracking-[1.8px] uppercase whitespace-nowrap">Years Running</p>
                </div>
              </Container>
            </div>
            <div className="absolute content-stretch flex gap-[12px] h-[15px] items-center left-[407.5px] top-[600.23px] w-[720px]" data-name="Container">
              <div className="bg-[#1e4d57] rounded-[3px] shrink-0 size-[6px]" data-name="Container" />
              <Wrapper additionalClassNames="h-[15px] w-[112.672px]">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#2a6b78] text-[10px] top-0 tracking-[3px] uppercase whitespace-nowrap">The Platform</p>
              </Wrapper>
            </div>
            <div className="absolute h-[39.594px] left-[407.5px] top-[635.23px] w-[720px]" data-name="h2">
              <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[39.6px] left-0 not-italic text-[#fcfcfc] text-[36px] top-0 tracking-[-0.36px] whitespace-nowrap">PioneerOS</p>
            </div>
            <div className="absolute h-[121.563px] left-[407.5px] top-[694.83px] w-[720px]" data-name="p">
              <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[30.4px] left-0 not-italic text-[#b8afa8] text-[16px] top-[-1px] w-[720px]">At the core of the membership is PioneerOS — a structured operating system designed to help founders move faster on the decisions that matter. Through curated events, private introductions, and a members-only digital platform, PioneerOS gives founders a rhythm for growth that operates alongside their business, not on top of it.</p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[140.75px] items-start left-[407.5px] pl-[30px] top-[864.39px] w-[720px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#1e4d57] border-l-2 border-solid inset-0 pointer-events-none" />
              <div className="h-[140.75px] relative shrink-0 w-full" data-name="p">
                <p className="absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[35.2px] left-0 text-[#816a54] text-[22px] top-0 w-[688px]">YP Club has operated for four years across Dubai, hosting hundreds of private events and facilitating connections that have led to partnerships, funding rounds, and market expansions for its members. If you are a founder building something real in the UAE, YP Club is where your next chapter gets written.</p>
              </div>
            </div>
            <div className="absolute h-[50.5px] left-[407.5px] top-[1069.14px] w-[720px]" data-name="Container">
              <div className="absolute bg-[#1e4d57] border border-[#1e4d57] border-solid h-[50.5px] left-0 top-0 w-[232.344px]" data-name="Link">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[48px] not-italic text-[#fcfcfc] text-[11px] top-[16px] tracking-[1.65px] uppercase whitespace-nowrap">Join the Waitlist</p>
              </div>
              <div className="absolute border border-[rgba(252,252,252,0.25)] border-solid h-[50.5px] left-[248.34px] top-0 w-[185.781px]" data-name="Link">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[48px] not-italic text-[#b8afa8] text-[11px] top-[16px] tracking-[1.65px] uppercase whitespace-nowrap">Learn More</p>
              </div>
            </div>
          </div>
          <div className="bg-[#211919] h-[369.781px] relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(252,252,252,0.06)] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start pb-px pt-[81px] px-[447.5px] relative size-full">
              <div className="h-[207.781px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[43.188px] left-0 top-0 w-[640px]" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[43.2px] left-[320.44px] not-italic text-[72px] text-[rgba(30,77,87,0.2)] text-center top-[-2px] whitespace-nowrap">“</p>
                </div>
                <div className="absolute h-[80.594px] left-0 top-[67.19px] w-[640px]" data-name="p">
                  <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Light_Italic',sans-serif] italic leading-[40.3px] left-[320.23px] text-[#816a54] text-[26px] text-center top-0 w-[625px]">The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room.</p>
                </div>
                <div className="absolute bg-[#1e4d57] h-px left-[296px] top-[175.78px] w-[48px]" data-name="Container" />
                <div className="absolute h-[15px] left-0 top-[192.78px] w-[640px]" data-name="Container">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[320.31px] not-italic text-[#6e6260] text-[10px] text-center top-0 tracking-[2px] uppercase whitespace-nowrap">YP Club — A Private Network for Pioneers</p>
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
                <div className="h-[15px] relative shrink-0 w-[343.359px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
                    <Wrapper additionalClassNames="h-[15px] w-[32.563px]">
                      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[#fcfcfc] text-[10px] top-0 tracking-[1px] whitespace-nowrap">About</p>
                    </Wrapper>
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
      <div className="absolute h-[880px] left-0 opacity-40 top-0 w-[1535px]" data-name="div">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[17.05%] left-0 max-w-none top-0 w-[9.77%]" src={imgDiv} />
        </div>
      </div>
    </div>
  );
}