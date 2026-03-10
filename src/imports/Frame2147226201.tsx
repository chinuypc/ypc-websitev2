import svgPaths from "./svg-cqdb3um53d";
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-center justify-center p-[16px] relative rounded-[8px] shrink-0 w-[93px]">
      <div aria-hidden="true" className="absolute border border-[rgba(173,173,173,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] tracking-[-0.08px] whitespace-nowrap">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ddd] text-[12px] whitespace-nowrap">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#1a1414] content-stretch flex flex-col gap-[20px] items-start pb-[18px] px-[16px] relative size-full">
      <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Club Impact</p>
          <div className="flex flex-row items-center self-stretch">
            <div className="backdrop-blur-[2px] bg-[#f8f2ec] h-full relative rounded-[100px] shrink-0" data-name="Tab Bar Badge">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[2px] h-full items-center justify-center px-[16px] py-[6px] relative">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1a1414] text-[12px] whitespace-nowrap">Add Impact</p>
                  <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                    <div className="-rotate-45 flex-none">
                      <div className="overflow-clip relative size-[16px]" data-name="x">
                        <div className="absolute inset-1/4" data-name="Icon">
                          <div className="absolute inset-[-9.37%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                              <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #1A1414)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="II">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <Helper text="34" text1="Received" />
            <Helper text="48" text1="Given" />
            <div className="bg-[rgba(141,141,141,0.2)] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[60px] items-center justify-center not-italic px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-[141px] whitespace-nowrap">
              <p className="leading-[28px] relative shrink-0 text-[#fcfcfc] text-[20px] tracking-[-0.08px]">$2.3M</p>
              <p className="leading-[20px] relative shrink-0 text-[#ddd] text-[12px]">Financial Impact</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] relative rounded-[40px] shrink-0 w-[343px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] whitespace-nowrap">See All Impact</p>
      </div>
    </div>
  );
}