import svgPaths from "./svg-wzk77ebed";

function NavigationMenu() {
  return (
    <div className="content-stretch flex font-['Work_Sans:Medium',sans-serif] font-medium gap-[24px] items-center leading-[16px] relative rounded-[20px] shrink-0 text-[#222222] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre" data-name="Navigation Menu">
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Work</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center relative rounded-[20px] shrink-0" data-name="Text Area">
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222222] text-[12px] text-nowrap whitespace-pre">Dark Mode Off</p>
    </div>
  );
}

function Callout() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Callout">
      <TextArea />
    </div>
  );
}

function ToggleButton() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.857px]" data-name="Toggle Button">
      <div className="absolute inset-[-10.71%_-6.67%_-17.86%_-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 26">
          <g filter="url(#filter0_dd_1_118)" id="Toggle Button">
            <rect fill="var(--fill-0, white)" height="20" rx="10" width="42.8571" x="2.85714" y="2.14286" />
            <rect height="19.6429" rx="9.82143" stroke="var(--stroke-0, #222222)" strokeWidth="0.357143" width="42.5" x="3.03571" y="2.32143" />
            <circle cx="12.857" cy="12.1428" fill="var(--fill-0, #222222)" id="Toggle" r="8.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.7143" id="filter0_dd_1_118" width="48.5714" x="1.19209e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="0.714286" result="effect1_dropShadow_1_118" />
              <feOffset dy="0.714286" />
              <feGaussianBlur stdDeviation="1.07143" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_118" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.714286" />
              <feGaussianBlur stdDeviation="0.714286" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_1_118" mode="normal" result="effect2_dropShadow_1_118" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_118" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <Callout />
      <ToggleButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <NavigationMenu />
      <Toggle />
    </div>
  );
}

function TopBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top Bar">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#222222] text-[39px] text-nowrap tracking-[-0.585px] whitespace-pre">Liz Covington</p>
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-r from-[rgba(239,209,253,0.2)] relative rounded-[12px] shrink-0 to-[rgba(176,181,255,0.2)] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.1px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#222222] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">Pardon the pixel dust! This site is a work in progress, with new projects and updates coming soon, as of Sept. 2025.</p>
        </div>
      </div>
    </div>
  );
}

function Subheading() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-[#222222]" data-name="Subheading">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[39px] text-nowrap tracking-[-0.585px] whitespace-pre">Crafting delightful digital experiences for world-changers.</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`Enhance business to client harmony while increasing revenue, decreasing digital friction, and focusing your precious time on what you do best. I'll enhance your business and delight your users, allowing you to focus on the impact.`}</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#470068] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Button">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.08px] whitespace-pre">Let’s Collaborate</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <Button1 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Hero Section">
      <Button />
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#222222] text-[61px] text-nowrap tracking-[-1.22px] whitespace-pre">Designer / Creative Strategist</p>
      <Subheading />
      <Actions />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[128px] items-center justify-center relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 text-[#222222] w-full" data-name="Section Header">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[39px] tracking-[-0.585px] w-full">Projects</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Each project taught me something about design — and about people. I approach every opportunity with curiosity, empathy, and a commitment to creating digital spaces that serve and uplift.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="leading-[1.3] relative shrink-0 text-[31.25px] tracking-[-0.3906px] w-full">Health SaaS Redesign</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Simplifying healthcare tech UX for real-world users</p>
    </div>
  );
}

function Project() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[40px] shrink-0" data-name="Project 1">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal items-start justify-between p-[40px] relative size-full text-[#222222]">
          <Description />
          <p className="leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-right w-full">
            <span className="font-['Work_Sans:Bold',sans-serif] font-bold">{`Highlights: `}</span>
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#a60202]">User Interface Design</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="leading-[1.3] relative shrink-0 text-[31.25px] tracking-[-0.3906px] w-full">Digital Storytelling</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Reshaping global narratives through multimedia design</p>
    </div>
  );
}

function Project1() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[40px] shrink-0" data-name="Project 2">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal items-start justify-between p-[40px] relative size-full text-[#222222]">
          <Description1 />
          <p className="leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-right w-full">
            <span className="font-['Work_Sans:Bold',sans-serif] font-bold">{`Highlights: `}</span>
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#a60202]">Design Enhancements</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="leading-[1.3] relative shrink-0 text-[31.25px] tracking-[-0.3906px] w-full">Community App Audit</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Finding hidden UX gaps to build better connections through continuous UX app audits and user interactions.</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[40px] shrink-0" data-name="Project 3">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal gap-[20px] items-start p-[40px] relative size-full text-[#222222]">
          <Description2 />
          <p className="leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-right w-full">
            <span className="font-['Work_Sans:Bold',sans-serif] font-bold">{`Highlights: `}</span>
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#a60202]">User Research</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Bottom">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Project />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Project1 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Project2 />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Projects">
      <SectionHeader />
      <Bottom />
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#222222] text-[16px] text-right w-full">View More Projects +</p>
    </div>
  );
}

function Butterfly() {
  return (
    <div className="h-[24px] relative shrink-0 w-[26.286px]" data-name="Butterfly 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
        <g clipPath="url(#clip0_1_105)" id="Butterfly 2">
          <path d={svgPaths.p2be79d00} fill="url(#paint0_linear_1_105)" id="Vector" />
          <path d={svgPaths.p32b55680} fill="url(#paint1_linear_1_105)" id="Vector_2" />
          <path d={svgPaths.p2066ec00} fill="url(#paint2_linear_1_105)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_105" x1="-2.09552" x2="14.8065" y1="10.1166" y2="6.24902">
            <stop stopColor="#A45DC2" />
            <stop offset="1" stopColor="#7700A7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_105" x1="14.8567" x2="0.636612" y1="12.5929" y2="16.6998">
            <stop stopColor="#7700A7" />
            <stop offset="1" stopColor="#A45DC2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_105" x1="3.23769" x2="24.1067" y1="14.0738" y2="20.2723">
            <stop stopColor="#A45DC2" />
            <stop offset="1" stopColor="#7700A7" />
          </linearGradient>
          <clipPath id="clip0_1_105">
            <rect fill="white" height="24" width="26.2857" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ToggleButton1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] items-center px-[24px] py-[16px] right-[40.71px] rounded-[26.667px] top-[729px]" data-name="Toggle Button">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.571px] border-solid inset-0 pointer-events-none rounded-[26.667px] shadow-[0px_1.143px_2.286px_0px_rgba(0,0,0,0.3),0px_1.143px_3.429px_1.143px_rgba(0,0,0,0.15)]" />
      <Butterfly />
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#222222] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">Cursor ON</p>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[128px] items-center justify-center relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 text-[#222222] text-nowrap w-full whitespace-pre" data-name="Section Header">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[39px] tracking-[-0.585px]">Let’s Connect</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px]">I’m currently open to new opportunities and would love to hear from you.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#470068] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Button">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.08px] whitespace-pre">Contact Form</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#222222] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Button">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.08px] whitespace-pre">Email</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#222222] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">LinkedIn</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Projects1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Projects">
      <SectionHeader1 />
      <Actions1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal gap-[16px] items-end leading-[1.5] relative shrink-0 text-[#222222] text-[16px] text-nowrap w-full whitespace-pre" data-name="Footer">
      <p className="relative shrink-0">{`Sustainability `}</p>
      <p className="relative shrink-0">{`Diversity & Inclusion`}</p>
      <p className="relative shrink-0">{`Security & Privacy`}</p>
      <p className="relative shrink-0">Help</p>
    </div>
  );
}

export default function PortfolioVersion() {
  return (
    <div className="relative size-full" data-name="Portfolio Version 9" style={{ backgroundImage: "linear-gradient(244.812deg, rgba(71, 0, 104, 0.2) 12.194%, rgba(255, 255, 255, 0.15) 8.8336%, rgba(255, 255, 255, 0.1) 55.82%, rgba(71, 0, 104, 0.2) 106.86%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start px-[80px] py-[24px] relative size-full">
          <TopBar />
          <HeroSection />
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120 1">
                    <line id="Line 10" stroke="var(--stroke-0, #222222)" strokeOpacity="0.25" x2="1120" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Projects />
          <ToggleButton1 />
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120 1">
                    <line id="Line 10" stroke="var(--stroke-0, #222222)" strokeOpacity="0.25" x2="1120" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Projects1 />
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120 1">
                    <line id="Line 10" stroke="var(--stroke-0, #222222)" strokeOpacity="0.25" x2="1120" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}