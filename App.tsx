import { useEffect, useRef, useState, useCallback, memo } from "react";
import svgPaths from "./imports/svg-wzk77ebed";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";

// Skip to main content link for keyboard users
function SkipToMain() {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:bg-[#470068] focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
    >
      Skip to main content
    </a>
  );
}

// Memoize static components to prevent unnecessary re-renders
const NavigationMenu = memo(function NavigationMenu() {
  return (
    <div className="content-stretch hidden md:flex font-['Work_Sans:Medium',sans-serif] font-medium gap-[16px] md:gap-[24px] items-center leading-[16px] relative rounded-[20px] shrink-0 text-[#222222] text-[14px] md:text-[16px] text-nowrap tracking-[0.08px] whitespace-pre" data-name="Navigation Menu">
      <a href="#projects" className="relative shrink-0 hover:opacity-70 transition-opacity">Projects</a>
      <a href="#about" className="relative shrink-0 hover:opacity-70 transition-opacity">About</a>
      <a href="#contact" className="relative shrink-0 hover:opacity-70 transition-opacity">Contact</a>
    </div>
  );
});

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
      {/* Dark mode toggle hidden until implementation is ready */}
      {/* <Toggle /> */}
    </div>
  );
}

function TopBar() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] md:gap-0 relative shrink-0 w-full" data-name="Top Bar">
      <a href="#" className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#222222] text-[24px] md:text-[32px] lg:text-[39px] tracking-[-0.585px] hover:opacity-70 transition-opacity">Liz Covington</a>
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button" style={{ background: 'linear-gradient(90deg, rgba(239,209,253,0.4) 0%, rgba(176,181,255,0.4) 100%)' }}>
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] md:px-[24px] py-[12px] md:py-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[1.4] md:leading-[16px] relative text-[#222222] text-[14px] md:text-[16px] text-center tracking-[0.08px]">Pardon the pixel dust! This site is a work in progress as I am coding it myself without a platform host to ensure longevity and grow my working frontend knowledge.</p>
        </div>
      </div>
    </div>
  );
}

function Subheading() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-[#222222]" data-name="Subheading">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] md:text-[32px] lg:text-[39px] tracking-[-0.585px]">Crafting delightful digital experiences for world-changers.</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[14px] md:text-[16px] w-[min-content]">{`Enhance business to client harmony while increasing revenue, decreasing digital friction, and focusing your precious time on what you do best. I'll enhance your business and delight your users, allowing you to focus on the impact.`}</p>
    </div>
  );
}

function Button1() {
  return (
    <a href="#contact" className="bg-[#470068] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0 hover:bg-[#5c0087] transition-colors cursor-pointer" data-name="Button">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.08px] whitespace-pre">Let's Collaborate</p>
    </a>
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
    <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Hero Section">
      <Button />
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#222222] text-[36px] sm:text-[48px] md:text-[54px] lg:text-[61px] text-center tracking-[-1.22px]">Designer / Creative Strategist</p>
      <Subheading />
      <Actions />
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about" className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="About Section">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 text-[#222222] w-full" data-name="Section Header">
        <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[39px] tracking-[-0.585px] w-full">About Me</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] relative shrink-0 w-full">
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#222222] text-[16px] w-full">I am a passionate designer with experience in the full design lifecycle. My journey has taken me from conducting in-depth user research to community building and usability testing for a climate tech startup to leading design for a complex web application in a regulated industry.</p>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#222222] text-[16px] w-full">I have a strong foundation in user-centered design principles and a working knowledge of front-end development, which allows me to effectively collaborate with engineers and bridge the gap between design and technical feasibility. My goal is to create thoughtful and impactful digital experiences that empower users and drive meaningful change.</p>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#222222] text-[16px] w-full">I value people and prefer to work with Mission Driven organizations as I want to use my skills and talents to make the world a better place, little by little, every single day.</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 text-[#222222] w-full" data-name="Section Header">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[39px] tracking-[-0.585px] w-full">Projects</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Each project taught me something about design — and about people. I approach every opportunity with curiosity, empathy, and a commitment to creating digital spaces that serve and uplift.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="leading-[1.3] relative shrink-0 text-[31.25px] tracking-[-0.3906px] w-full">Vektor: Digitizing Regulated Processes</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Leading design for a complex web application in a regulated industry</p>
    </div>
  );
}

function Project() {
  return (
    <a href="/vektor/" className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[40px] shrink-0 hover:scale-[1.02] transition-transform duration-300 cursor-pointer" data-name="Project 1">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal items-start justify-between p-[40px] relative size-full text-[#222222]">
          <Description />
          <p className="leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-right w-full">
            <span className="font-['Work_Sans:Bold',sans-serif] font-bold">{`Highlights: `}</span>
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#8b0000]">UX/UI Design, Usability Testing</span>
          </p>
        </div>
      </div>
    </a>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="leading-[1.3] relative shrink-0 text-[31.25px] tracking-[-0.3906px] w-full">Hazel: Gamifying Carbon Removal</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">User research, community building, and low-fi prototyping for a climate tech startup</p>
    </div>
  );
}

function Project1() {
  return (
    <a href="/hazel/" className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[40px] shrink-0 hover:scale-[1.02] transition-transform duration-300 cursor-pointer" data-name="Project 2">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal items-start justify-between p-[40px] relative size-full text-[#222222]">
          <Description1 />
          <p className="leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-right w-full">
            <span className="font-['Work_Sans:Bold',sans-serif] font-bold">{`Highlights: `}</span>
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#8b0000]">User Research, Community Building</span>
          </p>
        </div>
      </div>
    </a>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="leading-[1.3] relative shrink-0 text-[31.25px] tracking-[-0.3906px] w-full">Media vs. Reality</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Research, information architecture, and storytelling to reshape global narratives</p>
    </div>
  );
}

function Project2() {
  return (
    <a href="/research-doc/" className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[40px] shrink-0 hover:scale-[1.02] transition-transform duration-300 cursor-pointer" data-name="Project 3">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal gap-[20px] items-start p-[40px] relative size-full text-[#222222]">
          <Description2 />
          <p className="leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-right w-full">
            <span className="font-['Work_Sans:Bold',sans-serif] font-bold">{`Highlights: `}</span>
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#8b0000]">Research, Information Architecture</span>
          </p>
        </div>
      </div>
    </a>
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
    <div id="projects" className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Projects">
      <SectionHeader />
      <Bottom />
      {/* Hidden until more projects are added */}
      {/* <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#222222] text-[16px] text-right w-full hover:underline cursor-pointer">View More Projects +</p> */}
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

function ButterflyLarge() {
  return (
    <svg width="69" height="67" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.0334 27.0624C6.0334 27.0624 2.63026 23.5334 1.47607 20.4309C-0.32648 15.5855 -0.650897 11.3574 1.47607 6.72599C1.47607 6.72599 4.2806 -3.88433 21.4582 10.7048C31.8688 19.5468 28.4694 34.1359 28.4694 34.1359C17.602 38.1147 6.0334 27.0624 6.0334 27.0624Z" fill="url(#paint0_linear_1_66)"/>
      <path d="M28.9706 38.3401C27.4851 48.107 21.1795 53.2587 21.1795 53.2587C16.3947 56.4978 9.07152 56.4519 7.36821 48.4321C5.59755 40.0952 7.14906 39.3299 14.9171 33.9553C22.6851 28.5806 30.456 28.5732 28.9706 38.3401Z" fill="url(#paint1_linear_1_66)"/>
      <path d="M57.6721 28.5481C57.6721 28.5481 62.3238 24.323 63.7954 20.7374C66.0937 15.1376 66.3207 10.3387 63.0331 5.25618C63.0331 5.25618 58.4477 -6.53263 34.7889 11.1524C20.4502 21.8706 26.1043 38.1122 26.1043 38.1122C41.8069 41.8444 57.6721 28.5481 57.6721 28.5481Z" fill="url(#paint2_linear_1_66)"/>
      <path d="M25.9007 41.2615C28.5428 52.2744 37.7235 57.6999 37.7235 57.6999C44.6525 61.0543 54.9769 60.4935 56.9294 51.2476C58.9591 41.6361 56.7283 40.8727 45.4728 35.295C34.2173 29.7173 23.2586 30.2485 25.9007 41.2615Z" fill="url(#paint3_linear_1_66)"/>
      <defs>
        <linearGradient id="paint0_linear_1_66" x1="-5.5" y1="25.5" x2="38.8678" y2="15.3476" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A45DC2"/>
          <stop offset="1" stopColor="#7700A7"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_66" x1="39" y1="32" x2="1.67221" y2="42.7806" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7700A7"/>
          <stop offset="1" stopColor="#A45DC2"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_66" x1="34.6554" y1="8.44165" x2="58.3331" y2="31.8054" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A45DC2"/>
          <stop offset="1" stopColor="#7700A7"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1_66" x1="-1.15489" y1="25.0841" x2="62.2812" y2="52.2147" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A45DC2"/>
          <stop offset="1" stopColor="#7700A7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function ButterflyToggleButton({ isCursorEnabled, onToggle }: { isCursorEnabled: boolean; onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className="fixed bottom-[40px] right-[40px] z-[10000] bg-white box-border content-stretch flex gap-[8px] items-center px-[24px] py-[16px] rounded-[26.667px] hover:scale-105 transition-all duration-300 cursor-pointer"
      data-name="Toggle Button"
      aria-label={`Turn butterfly cursor ${isCursorEnabled ? 'off' : 'on'}`}
    >
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.571px] border-solid inset-0 pointer-events-none rounded-[26.667px] shadow-[0px_1.143px_2.286px_0px_rgba(0,0,0,0.3),0px_1.143px_3.429px_1.143px_rgba(0,0,0,0.15)]" />
      <Butterfly />
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#222222] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">
        Cursor {isCursorEnabled ? 'ON' : 'OFF'}
      </p>
    </button>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 text-[#222222] text-center w-full" data-name="Section Header">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[39px] tracking-[-0.585px]">Let's Connect</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px]">I'm currently open to new opportunities and would love to hear from you.</p>
    </div>
  );
}

function Button2() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Memoize form field handlers
  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, name: e.target.value }));
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
  }, []);

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, message: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '744afdf5-2428-441a-9ea9-e734104827c5',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError('Something went wrong. Please try again or email me directly.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#470068] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0 hover:bg-[#5c0087] transition-colors cursor-pointer">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.08px] whitespace-pre">Contact Form</p>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        {!isSubmitted && (
          <DialogHeader>
            <DialogTitle className="font-['Work_Sans:SemiBold',sans-serif] text-[24px] text-[#222222]">Get in Touch</DialogTitle>
            <DialogDescription className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#666]">
              Fill out the form below and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
        )}
        {isSubmitted ? (
          <div className="py-8 text-center">
            <p className="font-['Work_Sans:Medium',sans-serif] text-[18px] text-[#470068] mb-2">Thank you for reaching out!</p>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#666]">I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-['Work_Sans:Medium',sans-serif] text-[14px] text-[#222222]">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleNameChange}
                className="font-['Work_Sans:Regular',sans-serif] border-[#222222]/20"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-['Work_Sans:Medium',sans-serif] text-[14px] text-[#222222]">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                className="font-['Work_Sans:Regular',sans-serif] border-[#222222]/20"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-['Work_Sans:Medium',sans-serif] text-[14px] text-[#222222]">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleMessageChange}
                className="font-['Work_Sans:Regular',sans-serif] border-[#222222]/20 min-h-[120px]"
                required
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[8px]">
                <p className="font-['Work_Sans:Regular',sans-serif] text-[14px]">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#470068] text-white font-['Work_Sans:Medium',sans-serif] py-3 px-6 rounded-[12px] hover:bg-[#5c0087] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Button3() {
  return (
    <a href="mailto:lizcovi@proton.me" className="bg-[#222222] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0 hover:bg-[#333333] transition-colors cursor-pointer" data-name="Button">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.08px] whitespace-pre">Email</p>
    </a>
  );
}

function Button4() {
  return (
    <a href="https://www.linkedin.com/in/lizsoos/" target="_blank" rel="noopener noreferrer" className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shrink-0 hover:bg-gray-50 transition-colors cursor-pointer" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#222222] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#222222] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">LinkedIn</p>
    </a>
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

function ContactSection() {
  return (
    <div id="contact" className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Contact">
      <SectionHeader1 />
      <Actions1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[1.5] relative shrink-0 text-[#222222] text-[16px] text-nowrap w-full whitespace-pre" data-name="Footer">
      <a href="/sustainability.html" className="relative shrink-0 hover:underline">Sustainability</a>
      <a href="/diversity-inclusion.html" className="relative shrink-0 hover:underline">Diversity & Inclusion</a>
      <a href="/security-privacy.html" className="relative shrink-0 hover:underline">Security & Privacy</a>
      <a href="/help.html" className="relative shrink-0 hover:underline">Help</a>
      <p className="relative shrink-0 mt-[16px] opacity-60">© 2025 Liz Covington. All rights reserved.</p>
    </div>
  );
}

function ButterflyCanvas({ isCursorEnabled }: { isCursorEnabled: boolean }) {
  const butterflyRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const butterfly = butterflyRef.current;
    
    if (!butterfly) {
      return;
    }

    // Initialize butterfly at center
    butterfly.style.left = `${window.innerWidth / 2}px`;
    butterfly.style.top = `${window.innerHeight / 2}px`;
    butterfly.style.transform = 'translate(-50%, -50%)';

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const mouse = mouseRef.current;
      // Smooth easing for butterfly movement
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      if (butterfly) {
        butterfly.style.left = `${mouse.x}px`;
        butterfly.style.top = `${mouse.y}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    if (isCursorEnabled) {
      animate();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isCursorEnabled]);

  if (!isCursorEnabled) {
    return null;
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <div 
        ref={butterflyRef}
        className="fixed z-[9999] pointer-events-none"
        style={{ 
          transform: 'translate(-50%, -50%) rotate(-5deg)',
          width: '60px',
          height: '60px'
        }}
        aria-hidden="true"
      >
        <div 
          className="w-full h-full"
          style={{ 
            transformStyle: 'preserve-3d',
            animation: prefersReducedMotion ? 'none' : 'flap 1.5s infinite ease-in-out'
          }}
        >
          <ButterflyLarge />
        </div>
      </div>
      <style>{`
        @keyframes flap {
          0%, 100% { transform: rotateY(0deg) rotateX(5deg); }
          50% { transform: rotateY(15deg) rotateX(5deg); }
        }
      `}</style>
    </>
  );
}

export default function PortfolioVersion() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('butterflyCursorEnabled');
      return saved !== 'false';
    }
    return true;
  });

  const toggleCursor = useCallback(() => {
    setIsCursorEnabled(prev => {
      const newState = !prev;
      localStorage.setItem('butterflyCursorEnabled', String(newState));
      return newState;
    });
  }, []);

  useEffect(() => {
    document.body.style.cursor = isCursorEnabled ? 'none' : 'auto';
    
    // Cleanup on unmount
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isCursorEnabled]);

  return (
    <div 
      className="relative min-h-screen"
      data-name="Portfolio Version 9"
      style={{ 
        background: 'linear-gradient(244.812deg, rgba(71, 0, 104, 0.2) 0%, rgba(255, 255, 253, 0.15) 25%, rgba(255, 255, 253, 0.1) 50%, rgba(71, 0, 104, 0.2) 100%), rgb(255, 255, 253)'
      }}
    >
      <ButterflyCanvas isCursorEnabled={isCursorEnabled} />
      
      <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-start px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] py-[16px] md:py-[24px] relative">
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
        
        <AboutSection />
        
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
        
        <ContactSection />
        
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

      <ButterflyToggleButton isCursorEnabled={isCursorEnabled} onToggle={toggleCursor} />
    </div>
  );
}