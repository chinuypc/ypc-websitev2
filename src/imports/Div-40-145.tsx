type Text2Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};

function Text2({ text, text1, text2, text3, text4, text5 }: Text2Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[16px]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[16px]">{text1}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[16px]">{text2}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
        <p className="leading-[16px]">{text3}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[16px]">{text4}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[16px]">{text5}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};

function Text1({ text, text1, text2, text3, text4, text5 }: Text1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[20px]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[20px]">{text1}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[20px]">{text2}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
        <p className="leading-[20px]">{text3}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[20px]">{text4}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[20px]">{text5}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};

function Text({ text, text1, text2, text3, text4, text5 }: TextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[22px]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[22px]">{text1}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[22px]">{text2}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
        <p className="leading-[22px]">{text3}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[22px]">{text4}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
        <p className="leading-[22px]">{text5}</p>
      </div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="content-stretch flex flex-col items-start p-[80px] relative size-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typeface">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[68px] not-italic relative shrink-0 text-[#12131a] text-[48px] whitespace-nowrap">Inter</p>
            </div>
            <div className="content-stretch flex gap-[56px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#12131a] text-[112px] whitespace-nowrap">Ag</p>
              <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
                <div className="flex flex-row items-end justify-center size-full">
                  <div className="content-stretch flex items-end justify-center py-[16px] relative size-full">
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-h-px min-w-px not-italic relative text-[#12131a] text-[22px]">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      <br aria-hidden="true" />
                      abcdefghijklmnopqrstuvwxyz
                      <br aria-hidden="true" />
                      {`0123456789 !@#$%^&*()`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
          <div className="relative rounded-[8px] shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] px-[32px] py-[16px] relative text-[#6f6f6f] text-[18px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[26px]">Name</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Text">
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[26px]">Font weight</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[26px]">Font size</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[26px]">Line height</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
                    <p className="leading-[26px]">Letter spacing</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[26px]">Paragraph spacing</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[26px]">Rems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Cormorant:Medium',sans-serif] font-medium gap-[24px] items-center leading-[0] px-[32px] py-[24px] relative text-[#12131a] text-[36px] tracking-[-0.72px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[44px]">H1</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Text">
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[44px]">Medium</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[44px]">36px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[44px]">44px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
                    <p className="leading-[44px]">-2%</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[44px]">16px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[44px]">2.25rem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Cormorant:Medium',sans-serif] font-medium gap-[24px] items-center leading-[0] px-[32px] py-[24px] relative text-[#12131a] text-[24px] tracking-[-0.6px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[32px]">H2</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Text">
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[32px]">Medium</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[32px]">24px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[32px]">32px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
                    <p className="leading-[32px]">-0,6%</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[32px]">16px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[32px]">1.5rem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Cormorant:Medium',sans-serif] font-medium gap-[24px] items-center leading-[0] px-[32px] py-[24px] relative text-[#12131a] text-[20px] tracking-[-0.4px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[24px]">H3</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Text">
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">Medium</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">20px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">24px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
                    <p className="leading-[24px]">-0,4%</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">16px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">{`	1.25rem`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[20px] tracking-[-0.4px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[28px]">H4</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Text">
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[28px]">Regular</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[28px]">20px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[28px]">28px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
                    <p className="leading-[28px]">-0,4%</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[28px]">16px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[28px]">{`	1.25rem`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Cormorant:Medium',sans-serif] font-medium gap-[24px] items-center leading-[0] px-[32px] py-[24px] relative text-[#12131a] text-[16px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[24px]">Caption 1</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Text">
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">Medium</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">16px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">24px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[190px]">
                    <p className="leading-[24px]">0%</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">16px</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                    <p className="leading-[24px]">1rem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[16px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[22px]">Display-lg-medium</p>
                </div>
                <Text text="Medium" text1="16px" text2="24px" text3="0%" text4="16px" text5="1rem" />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[16px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[22px]">Display-lg-regular</p>
                </div>
                <Text text="Regular" text1="16px" text2="24px" text3="0%" text4="16px" text5="1rem" />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[14px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[20px]">Display-md-medium</p>
                </div>
                <Text1 text="Medium" text1="14px" text2="20px" text3="0%" text4="16px" text5="0.875rem" />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[14px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[20px]">Display-md-regular</p>
                </div>
                <Text1 text="Regular" text1="14px" text2="20px" text3="0%" text4="16px" text5="0.875rem" />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Light',sans-serif] font-light gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[14px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[20px]">Display-md-light</p>
                </div>
                <Text1 text="Light" text1="12px" text2="20px" text3="0%" text4="16px" text5="0.75rem" />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[12px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[16px]">Display-sm-regular</p>
                </div>
                <Text2 text="Regular" text1="12px" text2="20px" text3="0%" text4="14px" text5="0.75rem" />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(26,20,20,0.06)] relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Inter:Light',sans-serif] font-light gap-[24px] items-center leading-[0] not-italic px-[32px] py-[24px] relative text-[#12131a] text-[12px] w-full">
                <div className="flex flex-col justify-center relative shrink-0 w-[260px]">
                  <p className="leading-[16px]">Display-sm-light</p>
                </div>
                <Text2 text="Light" text1="12px" text2="20px" text3="0%" text4="14px" text5="0.75rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}