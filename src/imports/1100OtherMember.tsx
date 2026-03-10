import svgPaths from "./svg-4z43wwkuo9";
import imgHeader from "figma:asset/e9797124a3987247f2ad0d71e3e35f616cde54d5.png";
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-center justify-center p-[16px] relative rounded-[8px] shrink-0 w-[93px]">
      <div aria-hidden="true" className="absolute border border-[rgba(173,173,173,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] tracking-[-0.08px] whitespace-nowrap">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ddd] text-[12px] whitespace-nowrap">{text1}</p>
    </div>
  );
}

export default function Component1100OtherMember() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-start relative size-full" data-name="11.0.0 Other Member">
      <div className="content-stretch flex flex-col h-[469px] items-center justify-between overflow-clip relative shrink-0 w-[375px]" data-name="Header">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[119.94%] left-0 max-w-none top-[0.27%] w-full" src={imgHeader} />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(26, 20, 20, 0) 57.783%, rgb(26, 20, 20) 94.989%), linear-gradient(rgb(26, 20, 20) 10.476%, rgba(26, 20, 20, 0) 46.047%)" }} />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="h-[60px] relative shrink-0 w-full" data-name="Status Bar">
            <div className="absolute contents left-[27px] top-[20px]" data-name="Left">
              <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[22px] left-[54px] not-italic text-[17px] text-center text-white top-[20px] tracking-[-0.408px] w-[54px]" style={{ fontFeatureSettings: "'case'" }}>
                9:41
              </p>
            </div>
            <div className="absolute h-[13px] right-[23.6px] top-[23px] w-[77.401px]" data-name="Right">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4012 13">
                <g id="Right">
                  <g id="_StatusBar-battery">
                    <path d={svgPaths.p26f34780} id="Outline" opacity="0.35" stroke="var(--stroke-0, #272727)" />
                    <path d={svgPaths.p4c0c710} fill="var(--fill-0, #272727)" id="Battery End" opacity="0.4" />
                    <path d={svgPaths.p22239c00} fill="var(--fill-0, #272727)" id="Fill" />
                  </g>
                  <path d={svgPaths.p17d55700} fill="var(--fill-0, #272727)" id="Wifi" />
                  <g id="Icon / Mobile Signal">
                    <path d={svgPaths.p16816b00} fill="var(--fill-0, #272727)" />
                    <path d={svgPaths.p18ef7a00} fill="var(--fill-0, #272727)" />
                    <path d={svgPaths.p2262f080} fill="var(--fill-0, #272727)" />
                    <path d={svgPaths.pc5da680} fill="var(--fill-0, #272727)" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#141414] h-[36px] left-[calc(50%+0.5px)] rounded-[32px] top-[12px] w-[122px]" data-name="dynamic-island" />
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
                <div className="backdrop-blur-[2px] bg-[rgba(173,173,173,0.2)] content-stretch flex items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[36px]" data-name="Search Icon">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-left">
                    <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
                      <div className="absolute inset-[-7.5%_-15%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11.5">
                          <path d={svgPaths.p39b0780} id="Icon" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[2px] bg-[rgba(173,173,173,0.2)] content-stretch flex items-center justify-center opacity-0 p-[8px] relative rounded-[100px] shrink-0 size-[44px]" data-name="Search Icon">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Outline / Messages, Conversation / Chat Round Line">
                    <div className="absolute inset-[5.21%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.9167">
                        <path clipRule="evenodd" d={svgPaths.p1db43480} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative shrink-0 w-[375px]" data-name="Greeting">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Cormorant:Medium',sans-serif] font-medium h-[40px] leading-[32px] relative shrink-0 text-[#fcfcfc] text-[30px] tracking-[-0.6px] w-[230px]">Stephanie Jane Moss</p>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px not-italic relative text-[#fcfcfc] text-[0px] text-[14px]">
                    <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px]">4</span>
                    <span className="leading-[20px]">{` mutual followers.`}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[2px] bg-[rgba(173,173,173,0.2)] content-stretch flex items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[36px]" data-name="Search Icon">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Bold / Essentional, UI / Menu Dots">
                <div className="absolute inset-[41.67%_12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 3.33333">
                    <g id="Vector">
                      <path d={svgPaths.pf1b0e80} fill="var(--fill-0, #FCFCFC)" />
                      <path d={svgPaths.pdf95880} fill="var(--fill-0, #FCFCFC)" />
                      <path d={svgPaths.p276d1c00} fill="var(--fill-0, #FCFCFC)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="body">
        <div className="bg-[#1a1414] relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start pb-[18px] px-[16px] relative w-full">
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
                    <BackgroundImage text="34" text1="Received" />
                    <BackgroundImage text="48" text1="Given" />
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
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="about">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1414] text-[14px]">About</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Menu Item">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="AE">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1c665200} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                </svg>
                <div className="absolute inset-[67.39%_3.11%_0_28.26%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4709 7.82612">
                    <path d={svgPaths.p1d460980} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_3.11%_67.39%_28.26%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4709 7.82611">
                    <path d={svgPaths.p21d2b780} fill="var(--fill-0, #6DA544)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[3.11%_67.39%_3.11%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82611 22.5072">
                    <path d={svgPaths.p3090f0f0} fill="var(--fill-0, #A2001D)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1a1414] text-[14px]">
                <p className="leading-[20px]">United Arab Emirates</p>
              </div>
            </div>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#1a1414] text-[14px] w-full">I started YP Club to bring together driven, curious people who want more than just networking — a real sense of community, growth, and good times. As CEO, I’m building something I believe in: a club that feels like home for ambitious minds.</p>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0 w-[44px]">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="LinkedIn">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p2c926400} fill="var(--fill-0, #1A1414)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0 w-[44px]">
                <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="WhatsApp">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3b9c5900} fill="var(--fill-0, #1A1414)" id="Vector" />
                  </svg>
                  <div className="absolute inset-[24.31%_24.07%_25.94%_26.19%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.94934 9.94965">
                      <path d={svgPaths.p34bfe400} fill="var(--fill-0, #1A1414)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="h-[34px] relative shrink-0 w-full" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bg-[#1a1414] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}