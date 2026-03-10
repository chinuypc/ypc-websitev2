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

export default function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full" data-name="div">
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
  );
}