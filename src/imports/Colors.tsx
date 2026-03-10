import clsx from "clsx";
import imgSwatch from "figma:asset/1b37c80fc394a67240df2777dc0a5b1b10388b4a.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[400px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#8d8d8d] text-[16px] w-full">{children}</p>
    </Wrapper1>
  );
}
type DesignNoteText1Props = {
  text: string;
};

function DesignNoteText1({ text }: DesignNoteText1Props) {
  return <Wrapper>{text}</Wrapper>;
}
type TextAndSupportingTextProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function TextAndSupportingText({ text, text1, additionalClassNames = "" }: TextAndSupportingTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#1a1414] text-[18px] w-full">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#8d8d8d] text-[16px] w-full">{text1}</p>
    </div>
  );
}
type DesignNoteTextProps = {
  text: string;
};

function DesignNoteText({ text }: DesignNoteTextProps) {
  return (
    <Wrapper1>
      <p className="font-['Cormorant:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#101828] text-[24px] tracking-[-0.6px] w-full">{text}</p>
    </Wrapper1>
  );
}

export default function Colors() {
  return (
    <div className="bg-white relative rounded-[24px] size-full" data-name="Colors">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[100px] relative rounded-[inherit] size-full">
        <div className="bg-[rgba(26,20,20,0.06)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Design system header">
          <div className="relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex flex-col gap-[128px] items-start pb-[96px] pt-[64px] px-[80px] relative w-full">
              <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Heading and resources">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1024px]" data-name="Heading and supporting text">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[90px] not-italic relative shrink-0 text-[#12131a] text-[64px] tracking-[-1.2px] whitespace-nowrap">Colors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative shrink-0" data-name="div">
          <div className="relative shrink-0 w-[960px]" data-name="Design note">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
              <p className="font-['Cormorant:Medium',sans-serif] font-medium leading-[68px] relative shrink-0 text-[#12131a] text-[48px] tracking-[-1.2px] w-full">Primary colors</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <DesignNoteText text="Gray" />
                <Wrapper>{`Gray color palette includes a range of light and dark shades. These neutral tones enhance the design's elegance and depth, complementing primary colors without overshadowing them.`}</Wrapper>
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#fcfcfc] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Pure White" text1="#FCFCFC" additionalClassNames="w-[119px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#ddd] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Light Grey" text1="#DDDDDD" additionalClassNames="w-[113px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#8d8d8d] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Grey" text1="#8D8D8D" additionalClassNames="w-[99px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#4f4f4f] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Dark Grey" text1="#4F4F4F" additionalClassNames="w-[110px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#1a1414] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Deep Black" text1="#1A1414" additionalClassNames="w-[121px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <DesignNoteText text="Main colors" />
                <DesignNoteText1 text="These are the core colors that we use to create style for our application" />
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0 w-[152px]">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-[120px] relative" data-name="Row">
                    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                      <div className="bg-[#f8f2ec] h-[80px] shrink-0 w-full" data-name="Swatch" />
                      <TextAndSupportingText text="Soft Beige" text1="#F8F2EC" additionalClassNames="w-[114px]" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-[152px]">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-[120px] relative" data-name="Row">
                    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                      <div className="bg-[#1e4d57] h-[80px] shrink-0 w-full" data-name="Swatch" />
                      <TextAndSupportingText text="Teal Green" text1="#1E4D57" additionalClassNames="w-[117px]" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-[152px]">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-[120px] relative" data-name="Row">
                    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                      <div className="bg-[#816a54] h-[80px] shrink-0 w-full" data-name="Swatch" />
                      <TextAndSupportingText text="Sandy Tone" text1="#816A54" additionalClassNames="w-[126px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <DesignNoteText text="Semantic" />
                <DesignNoteText1 text="We use semantic colors like red and green to clearly communicate status, feedback, or important actions within the interface." />
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#9b0003] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Error" text1="#9B0003" additionalClassNames="w-[95px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[#00872f] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Success" text1="#02A73C" additionalClassNames="w-[97px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <DesignNoteText text="Transparent" />
                <DesignNoteText1 text="These transparent colors are used to create depth, subtle hierarchy, and focus without distracting from the main content." />
              </div>
              <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[rgba(252,252,252,0.6)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Label" text1="#FCFCFC (60%)" additionalClassNames="w-[147px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[rgba(255,255,255,0.1)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Stroke" text1="#FFFFFF (10%)" additionalClassNames="w-[137px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[rgba(255,255,255,0.5)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Icon" text1="#FFFFFF (50%)" additionalClassNames="w-[140px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[rgba(173,173,173,0.2)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Blur" text1="#ADADAD (20%)" additionalClassNames="w-[149px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0" data-name="_Swatch base">
                    <div className="bg-[rgba(221,221,221,0.2)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Light Grey" text1="#DDDDDD (20%)" additionalClassNames="w-[152px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[rgba(141,141,141,0.2)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Grey" text1="#8D8D8D (20%)" additionalClassNames="w-[147px]" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0 w-[152px]" data-name="Row">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" data-name="_Swatch base">
                    <div className="bg-[rgba(129,106,84,0.2)] h-[80px] shrink-0 w-full" data-name="Swatch" />
                    <TextAndSupportingText text="Sandy Tone" text1="#816A54 (20%)" additionalClassNames="w-[141px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <DesignNoteText text="Linear" />
                <DesignNoteText1 text="We use gradient colors to add depth, visual interest, and highlight important areas in the interface." />
              </div>
              <div className="content-start flex flex-wrap gap-y-[32px] items-start relative shrink-0 w-full" data-name="Row">
                <div className="content-stretch flex items-center justify-end min-w-[120px] relative shrink-0" data-name="Row">
                  <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0" data-name="_Swatch base">
                    <div className="h-[80px] relative shrink-0 w-full" data-name="Swatch">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSwatch} />
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative shrink-0 w-[185px]" data-name="Text and supporting text">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#1a1414] text-[18px] w-full">Linear 1</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#8d8d8d] text-[16px] w-full">#1A1414 (0% , 100% )</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#8d8d8d] text-[16px] w-full">#1A1414 (100%, 0%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[2879px] overflow-clip relative shrink-0 w-[3786px]" data-name="Solid Colors">
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[166px] text-[24px] text-black top-[317px] whitespace-nowrap">Primary</p>
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[2953px] text-[24px] text-black top-[1146px] whitespace-nowrap">Accent Green - Success</p>
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[166px] text-[24px] text-black top-[1146px] whitespace-nowrap">Accent Blue - Information</p>
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[1095px] text-[24px] text-black top-[1148px] whitespace-nowrap">Accent Yellow - Warning</p>
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[2024px] text-[24px] text-black top-[1146px] whitespace-nowrap">Accent Red - Error</p>
          <div className="absolute bg-[#c6e5eb] h-[73px] left-[166px] top-[369px] w-[733px]" />
          <div className="absolute bg-[#89c9d6] h-[73px] left-[166px] top-[442px] w-[733px]" />
          <div className="absolute bg-[#51afc3] h-[73px] left-[166px] top-[515px] w-[733px]" />
          <div className="absolute bg-[#328090] h-[73px] left-[166px] top-[588px] w-[733px]" />
          <div className="absolute bg-[#1e4d57] h-[73px] left-[166px] top-[661px] w-[733px]" />
          <div className="absolute bg-[#183c44] h-[73px] left-[166px] top-[734px] w-[733px]" />
          <div className="absolute bg-[#122f35] h-[73px] left-[166px] top-[807px] w-[733px]" />
          <div className="absolute bg-[#0c1e22] h-[73px] left-[166px] top-[880px] w-[733px]" />
          <div className="absolute bg-[#071113] h-[73px] left-[166px] top-[953px] w-[733px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[406px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[406px] whitespace-nowrap">
            <p className="leading-[1.6]">#C6E5EB</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[479px] whitespace-nowrap">
            <p className="leading-[1.6]">#89C9D6</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[552px] whitespace-nowrap">
            <p className="leading-[1.6]">#51AFC3</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[625px] whitespace-nowrap">
            <p className="leading-[1.6]">#328090</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[479px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[552px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[625px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[698px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[771px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[844px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[917px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[990px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <div className="absolute bg-[#ebfcd5] h-[73px] left-[2953px] top-[1198px] w-[733px]" />
          <div className="absolute bg-[#d3e5fe] h-[73px] left-[166px] top-[1198px] w-[733px]" />
          <div className="absolute bg-[#fff5ce] h-[73px] left-[1095px] top-[1200px] w-[733px]" />
          <div className="absolute bg-[#ffe3d6] h-[73px] left-[2024px] top-[1198px] w-[733px]" />
          <div className="absolute bg-[#d4f9ac] h-[73px] left-[2953px] top-[1271px] w-[733px]" />
          <div className="absolute bg-[#a7c9fd] h-[73px] left-[166px] top-[1271px] w-[733px]" />
          <div className="absolute bg-[#ffe89e] h-[73px] left-[1095px] top-[1273px] w-[733px]" />
          <div className="absolute bg-[#ffc0ad] h-[73px] left-[2024px] top-[1271px] w-[733px]" />
          <div className="absolute bg-[#b1ee80] h-[73px] left-[2953px] top-[1344px] w-[733px]" />
          <div className="absolute bg-[#7ba8f9] h-[73px] left-[166px] top-[1344px] w-[733px]" />
          <div className="absolute bg-[#ffd76d] h-[73px] left-[1095px] top-[1346px] w-[733px]" />
          <div className="absolute bg-[#ff9783] h-[73px] left-[2024px] top-[1344px] w-[733px]" />
          <div className="absolute bg-[#8fde5d] h-[73px] left-[2953px] top-[1417px] w-[733px]" />
          <div className="absolute bg-[#598cf4] h-[73px] left-[166px] top-[1417px] w-[733px]" />
          <div className="absolute bg-[#ffc749] h-[73px] left-[1095px] top-[1419px] w-[733px]" />
          <div className="absolute bg-[#ff6f65] h-[73px] left-[2024px] top-[1417px] w-[733px]" />
          <div className="absolute bg-[#5fc92e] h-[73px] left-[2953px] top-[1490px] w-[733px]" />
          <div className="absolute bg-[#2561ed] h-[73px] left-[166px] top-[1490px] w-[733px]" />
          <div className="absolute bg-[#ffad0d] h-[73px] left-[1095px] top-[1492px] w-[733px]" />
          <div className="absolute bg-[#ff3236] h-[73px] left-[2024px] top-[1490px] w-[733px]" />
          <div className="absolute bg-[#44ac21] h-[73px] left-[2953px] top-[1563px] w-[733px]" />
          <div className="absolute bg-[#1b4acb] h-[73px] left-[166px] top-[1563px] w-[733px]" />
          <div className="absolute bg-[#db8c09] h-[73px] left-[1095px] top-[1565px] w-[733px]" />
          <div className="absolute bg-[#db2438] h-[73px] left-[2024px] top-[1563px] w-[733px]" />
          <div className="absolute bg-[#2d9017] h-[73px] left-[2953px] top-[1636px] w-[733px]" />
          <div className="absolute bg-[#1236aa] h-[73px] left-[166px] top-[1636px] w-[733px]" />
          <div className="absolute bg-[#b76f06] h-[73px] left-[1095px] top-[1638px] w-[733px]" />
          <div className="absolute bg-[#b71938] h-[73px] left-[2024px] top-[1636px] w-[733px]" />
          <div className="absolute bg-[#1a740e] h-[73px] left-[2953px] top-[1709px] w-[733px]" />
          <div className="absolute bg-[#0b2589] h-[73px] left-[166px] top-[1709px] w-[733px]" />
          <div className="absolute bg-[#935404] h-[73px] left-[1095px] top-[1711px] w-[733px]" />
          <div className="absolute bg-[#930f35] h-[73px] left-[2024px] top-[1709px] w-[733px]" />
          <div className="absolute bg-[#0d6008] h-[73px] left-[2953px] top-[1782px] w-[733px]" />
          <div className="absolute bg-[#071971] h-[73px] left-[166px] top-[1782px] w-[733px]" />
          <div className="absolute bg-[#7a4102] h-[73px] left-[1095px] top-[1784px] w-[733px]" />
          <div className="absolute bg-[#7a0933] h-[73px] left-[2024px] top-[1782px] w-[733px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1235px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1235px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1237px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1235px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1308px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1308px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1310px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1308px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1381px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1381px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1383px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1381px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1454px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1454px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1456px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1454px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1527px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1527px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1529px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1527px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1600px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1600px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1602px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1600px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1673px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1673px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1675px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1673px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1746px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1746px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1748px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1746px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[2908.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1819px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1819px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1821px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1979.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[1819px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[166px] text-[24px] text-black top-[1975px] whitespace-nowrap">Accent Dark/Light - Text</p>
          <div className="absolute bg-[#f8f8f8] h-[73px] left-[166px] top-[2027px] w-[733px]" />
          <div className="absolute bg-[#e6e6e6] h-[73px] left-[166px] top-[2100px] w-[733px]" />
          <div className="absolute bg-[#d5d5d5] h-[73px] left-[166px] top-[2173px] w-[733px]" />
          <div className="absolute bg-[#b1b1b1] h-[73px] left-[166px] top-[2246px] w-[733px]" />
          <div className="absolute bg-[#909090] h-[73px] left-[166px] top-[2319px] w-[733px]" />
          <div className="absolute bg-[#6c6c6c] h-[73px] left-[166px] top-[2392px] w-[733px]" />
          <div className="absolute bg-[#464646] h-[73px] left-[166px] top-[2465px] w-[733px]" />
          <div className="absolute bg-[#222] h-[73px] left-[166px] top-[2538px] w-[733px]" />
          <div className="absolute bg-[#0a0a0a] h-[73px] left-[166px] top-[2611px] w-[733px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2064px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2137px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2210px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2283px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2356px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2429px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2502px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2575px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[121.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[2648px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-black text-right top-[2063px] whitespace-nowrap">
            <p className="leading-[1.6]">#F8F8F8</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-right text-white top-[2355px] whitespace-nowrap">
            <p className="leading-[1.6]">#909090</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-black text-right top-[2136px] whitespace-nowrap">
            <p className="leading-[1.6]">#E6E6E6</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-right text-white top-[2428px] whitespace-nowrap">
            <p className="leading-[1.6]">#050505</p>
          </div>
          <div className="absolute bg-[#1e4d57] h-[73px] left-[166px] top-[195px] w-[733px]" />
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] left-[442px] not-italic text-[#f8f2ec] text-[28px] top-[210px] whitespace-nowrap">YP’s Primary</p>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-black text-right top-[1234px] whitespace-nowrap">
            <p className="leading-[1.6]">#EBFCD5</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[1234px] whitespace-nowrap">
            <p className="leading-[1.6]">#D3E5FE</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[1236px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFF5CE</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-black text-right top-[2209px] whitespace-nowrap">
            <p className="leading-[1.6]">#D5D5D5</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-right text-white top-[2501px] whitespace-nowrap">
            <p className="leading-[1.6]">#050505</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-black text-right top-[1234px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFE3D6</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-black text-right top-[1526px] whitespace-nowrap">
            <p className="leading-[1.6]">#FF3236</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[1528px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFAD0D</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[1526px] whitespace-nowrap">
            <p className="leading-[1.6]">#2561ED</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-right text-white top-[1526px] whitespace-nowrap">
            <p className="leading-[1.6]">#5FC92E</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[697px] whitespace-nowrap">
            <p className="leading-[1.6]">#1E4D57</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-black text-right top-[1307px] whitespace-nowrap">
            <p className="leading-[1.6]">#D4F9AC</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-black text-right top-[2282px] whitespace-nowrap">
            <p className="leading-[1.6]">#B1B1B1</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-right text-white top-[2574px] whitespace-nowrap">
            <p className="leading-[1.6]">#020303</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[1307px] whitespace-nowrap">
            <p className="leading-[1.6]">#A7C9FD</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[1309px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFE89E</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-black text-right top-[1307px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFC0AD</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-right text-white top-[1599px] whitespace-nowrap">
            <p className="leading-[1.6]">#DB2438</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[1601px] whitespace-nowrap">
            <p className="leading-[1.6]">#DB8C09</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[1599px] whitespace-nowrap">
            <p className="leading-[1.6]">#1B4ACB</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-right text-white top-[1599px] whitespace-nowrap">
            <p className="leading-[1.6]">#44AC21</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[770px] whitespace-nowrap">
            <p className="leading-[1.6]">#183C44</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-black text-right top-[1380px] whitespace-nowrap">
            <p className="leading-[1.6]">#B1EE80</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[1380px] whitespace-nowrap">
            <p className="leading-[1.6]">#7BA8F9</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[1382px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFD76D</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-black text-right top-[1380px] whitespace-nowrap">
            <p className="leading-[1.6]">#FF9783</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-right text-white top-[1672px] whitespace-nowrap">
            <p className="leading-[1.6]">#B71938</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[1674px] whitespace-nowrap">
            <p className="leading-[1.6]">#B76F06</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[1672px] whitespace-nowrap">
            <p className="leading-[1.6]">#1236AA</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-right text-white top-[1672px] whitespace-nowrap">
            <p className="leading-[1.6]">#2D9017</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[843px] whitespace-nowrap">
            <p className="leading-[1.6]">#122F35</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-black text-right top-[1453px] whitespace-nowrap">
            <p className="leading-[1.6]">#8FDE5D</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-black text-right top-[1453px] whitespace-nowrap">
            <p className="leading-[1.6]">#598CF4</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[1455px] whitespace-nowrap">
            <p className="leading-[1.6]">#FFC749</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-black text-right top-[1453px] whitespace-nowrap">
            <p className="leading-[1.6]">#FF6F65</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-right text-white top-[1745px] whitespace-nowrap">
            <p className="leading-[1.6]">#930F35</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[1747px] whitespace-nowrap">
            <p className="leading-[1.6]">#935404</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[1745px] whitespace-nowrap">
            <p className="leading-[1.6]">#0B2589</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-right text-white top-[1745px] whitespace-nowrap">
            <p className="leading-[1.6]">#1A740E</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[916px] whitespace-nowrap">
            <p className="leading-[1.6]">#0C1E22</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[990px] whitespace-nowrap">
            <p className="leading-[1.6]">#071113</p>
          </div>
          <p className="absolute font-['Cormorant:Medium',sans-serif] font-medium leading-[1.5] left-[1095px] text-[24px] text-black top-[317px] whitespace-nowrap">Primary</p>
          <div className="absolute bg-[#fdfcfb] h-[73px] left-[1095px] top-[369px] w-[733px]" />
          <div className="absolute bg-[#fcf9f6] h-[73px] left-[1095px] top-[442px] w-[733px]" />
          <div className="absolute bg-[#faf6f2] h-[73px] left-[1095px] top-[515px] w-[733px]" />
          <div className="absolute bg-[#f9f5f0] h-[73px] left-[1095px] top-[588px] w-[733px]" />
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[861px] not-italic text-[16px] text-right text-white top-[2648px] whitespace-nowrap">
            <p className="leading-[1.6]">#0A0A0A</p>
          </div>
          <div className="absolute bg-[#f8f2ec] h-[73px] left-[1095px] top-[661px] w-[733px]" />
          <div className="absolute bg-[#d9b991] h-[73px] left-[1095px] top-[734px] w-[733px]" />
          <div className="absolute bg-[#9d8568] h-[73px] left-[1095px] top-[807px] w-[733px]" />
          <div className="absolute bg-[#675743] h-[73px] left-[1095px] top-[880px] w-[733px]" />
          <div className="absolute bg-[#362d21] h-[73px] left-[1095px] top-[953px] w-[733px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050px] not-italic text-[#a4a9b6] text-[20px] text-center top-[406px] whitespace-nowrap">
            <p className="leading-[1.6]">100</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[406px] whitespace-nowrap">
            <p className="leading-[1.6]">#FDFCFB</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[479px] whitespace-nowrap">
            <p className="leading-[1.6]">#FCF9F6</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[552px] whitespace-nowrap">
            <p className="leading-[1.6]">#FAF6F2</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[625px] whitespace-nowrap">
            <p className="leading-[1.6]">#F9F5F0</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[479px] whitespace-nowrap">
            <p className="leading-[1.6]">200</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[552px] whitespace-nowrap">
            <p className="leading-[1.6]">300</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050px] not-italic text-[#a4a9b6] text-[20px] text-center top-[625px] whitespace-nowrap">
            <p className="leading-[1.6]">400</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[698px] whitespace-nowrap">
            <p className="leading-[1.6]">500</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[771px] whitespace-nowrap">
            <p className="leading-[1.6]">600</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050px] not-italic text-[#a4a9b6] text-[20px] text-center top-[844px] whitespace-nowrap">
            <p className="leading-[1.6]">700</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[917px] whitespace-nowrap">
            <p className="leading-[1.6]">800</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1050.5px] not-italic text-[#a4a9b6] text-[20px] text-center top-[990px] whitespace-nowrap">
            <p className="leading-[1.6]">900</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-black text-right top-[697px] whitespace-nowrap">
            <p className="leading-[1.6]">#F8F2EC</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[770px] whitespace-nowrap">
            <p className="leading-[1.6]">#6433C4</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[843px] whitespace-nowrap">
            <p className="leading-[1.6]">#4A23A4</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[916px] whitespace-nowrap">
            <p className="leading-[1.6]">#331684</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[990px] whitespace-nowrap">
            <p className="leading-[1.6]">#220D6D</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[3650px] not-italic text-[16px] text-right text-white top-[1819px] whitespace-nowrap">
            <p className="leading-[1.6]">#0D6008</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[863px] not-italic text-[16px] text-right text-white top-[1819px] whitespace-nowrap">
            <p className="leading-[1.6]">#071971</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[1792px] not-italic text-[16px] text-right text-white top-[1821px] whitespace-nowrap">
            <p className="leading-[1.6]">#7A4102</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[2721px] not-italic text-[16px] text-right text-white top-[1819px] whitespace-nowrap">
            <p className="leading-[1.6]">#7A0933</p>
          </div>
          <div className="absolute content-stretch flex flex-col items-start justify-end left-0 px-[80px] top-0 w-[1053px]">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[1003px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Cormorant:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#1a1414] text-[48px] whitespace-nowrap">Colors</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <DesignNoteText1 text="We use a 100–900 scale to keep colors consistent. Light tones are for backgrounds, mid-tones for elements, and dark tones for text and emphasis." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}