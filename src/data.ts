import { Project, Experience, SkillCategory, Testimonial } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "brutalist-web",
    name: "Architectural Brutalism",
    category: "Web Design",
    year: "2026",
    tagline: "A structural online exhibition celebrating stark concrete geometry and raw design systems.",
    thumbnail: "/src/assets/images/brutalist_web_1780204865903.png",
    description: "An advanced responsive WebGL portfolio created for the Berlin Neue Architecture Biennale, focusing on raw layout structures, high-contrast typography grids, and minimal load overhead.",
    technologies: ["React", "Three.js", "Vite", "Tailwind CSS", "Motion"],
    results: "35% increase in user retention, listed on multiple design showcase platforms, and 99/100 Lighthouse performance rating under extreme layouts.",
    caseStudy: {
      challenge: "Providing a virtual digital representation of towering stone and concrete physical monuments without losing their overwhelming weight, texture, and emotional visual dominance.",
      research: "We analyzed late 1960s typographic layouts, classic print magazines (e.g., Novum), and interactive physical architecture models, defining a strict 1px-outline grid schema.",
      process: "Created light-to-dark spatial transition elements. Mounted Three.js models into standard layout boxes. Designed responsive high-fidelity typography that morphs seamlessly from desktop wide screens to portrait grids.",
      solution: "Implemented an offline-capable React layout utilizing absolute CSS coordinates, extreme letter spacing, and a customizable WebGL background that shifts with subtle cursor tracking.",
      outcome: "An immersive, digital brutalist gallery that responds smoothly on standard mobile screens without frame drops, securing critical accolades in worldwide design surveys."
    },
    details: {
      client: "Neue Architecture Biennale",
      role: "Lead Creative Developer",
      services: ["Interactive Architecture", "Web3D Execution", "Visual Design System"]
    }
  },
  {
    id: "luxury-packaging",
    name: "Avant-Garde Identity",
    category: "Branding",
    year: "2025",
    tagline: "Redefining premium sustainable perfume packaging through high-contrast tactile elements.",
    thumbnail: "/src/assets/images/luxury_branding_1780204883152.png",
    description: "A complete physical-to-digital branding transformation for Parisian Haute Parfumerie, blending raw matte charcoal materials with shimmering premium silver outlines.",
    technologies: ["Visual Identity", "Cinema 4D", "Brand Guidelines", "Front-end SPA"],
    results: "Voted Best Eco-Luxury Brand Concept 2025. Immediate online sales uplift of 42% on digital brand launch.",
    caseStudy: {
      challenge: "Translating physical physical sensations—the cold sheen of embossed metal foil and the coarse texture of recycled cardboard—into purely flat digital pixels.",
      research: "Investigated light scattering patterns across high-contrast matte objects. Concretized a signature monochromatic theme utilizing exactly 90% space of black backgrounds and 10% space of brand highlights.",
      process: "Rendered real-world packaging shadows under multiple light directions. Built matching CSS filters and ambient SVG filters that dynamically recreate foil shine during cursor scrolls.",
      solution: "Designed a digital storefront highlighting premium product scale and typography. Implemented custom tactile responsive hover patterns that distort products gracefully as users interact.",
      outcome: "A groundbreaking luxury brand presence that feels premium. The identity conveys both the weight of high fashion and the clarity of modern systems, establishing true commercial aura."
    },
    details: {
      client: "Éclat de Noir",
      role: "Creative Director",
      services: ["Product Packaging Mockups", "Digital Brand Presence", "Creative Guidelines"]
    }
  },
  {
    id: "kinetic-typography",
    name: "Warped Typography Art",
    category: "Motion Graphics",
    year: "2025",
    tagline: "An interactive, web-based typography installation warping characters through fluid-dynamics.",
    thumbnail: "/src/assets/images/kinetic_motion_1780204900981.png",
    description: "A generative art concept designed for cultural events, allowing users to paint text directly via mouse input with custom physics parameters.",
    technologies: ["TypeScript", "Canvas API", "WebGL Shaders", "Audio Analysis"],
    results: "Showcased in 3 national galleries, going viral with 2.1 million impressions across digital art forums.",
    caseStudy: {
      challenge: "Ensuring highly performant canvas math processing in real-time, executing over 5,000 distinct floating letter structures while avoiding performance stutter on basic mobile platforms.",
      research: "Reviewed academic papers on fluid-dynamics models alongside traditional Swiss Typography grid theories to blend structured logic with fluid human physics.",
      process: "Drafted custom vertex shaders to handle vector letter warping on GPU. Built a secondary Audio Analyzer using the Web Audio API to sync movement with local ambient noise.",
      solution: "Coded a high-performing Canvas-to-Webpack template that relies on local web workers to do spatial coordinate math calculations, returning outcomes immediately for viewport rendering.",
      outcome: "Highly interactive vector canvas artwork where typography breathes, responds, and dances based on human touch or audio streams with perfect 60FPS fluid motion."
    },
    details: {
      client: "Zurich Design Museum",
      role: "Interactive Developer",
      services: ["GPU Shading", "Generative Systems Design", "Exhibition Concept"]
    }
  },
  {
    id: "immersive-mobile",
    name: "Cinematic Workspace",
    category: "UI Design",
    year: "2025",
    tagline: "An elegant, dark mode task synthesizer created for minimal creative work sessions.",
    thumbnail: "https://picsum.photos/seed/editorial4/800/600",
    description: "A fluid mobile application concept combining sound design, focus timers, and high-contrast, editorial layout systems to maximize creator deep work.",
    technologies: ["React Native", "Framer Motion", "Design Systems", "Sound Design"],
    results: "Awarded top app concept honors. 85,000 active beta registrants waiting for the production rollout.",
    caseStudy: {
      challenge: "Rethinking the cluttered interface design standard in modern tasks/reminders apps to create something genuinely relaxing and atmospheric instead.",
      research: "We analyzed mindfulness physical objects, traditional sand timers, and dark ambient creative spaces to engineer an eye-safe, typographic micro-productivity suite.",
      process: "Established hierarchical lists where items fade out when inactive. Mounted subtle sound waveforms to interactions to deliver high-quality audio feedback upon completion.",
      solution: "Configured gesture-controlled circles representing focus periods that expand with beautiful spring physics, making work tracking feel completely artistic.",
      outcome: "An award-winning interface setting a benchmark for calm design, proving that utilities can be highly functional and highly beautiful simultaneously."
    },
    details: {
      client: "Monomind Lab",
      role: "Lead UI/UX Designer",
      services: ["Microinteractions", "Audio-Visual Strategy", "Mobile Architecture"]
    }
  },
  {
    id: "film-direction",
    name: "Interactive Cinema Space",
    category: "Development",
    year: "2024",
    tagline: "An interactive video portfolio designed for award-winning Scandinavian movie directors.",
    thumbnail: "https://picsum.photos/seed/editorial5/800/600",
    description: "A gorgeous luxury landing environment built around continuous fullscreen high-fidelity media, dynamic film borders, and smooth custom navigation.",
    technologies: ["React", "Vite", "Motion", "Tailwind CSS", "Video Synthesis"],
    results: "Secured 'Site of the Month' nominations. Delivered a 140% increase in inquiry emails from creative studios.",
    caseStudy: {
      challenge: "Delivering massive 4K cinematic showreels seamlessly over standard client web browsers and mobile devices while preserving gorgeous aspect ratios.",
      research: "Studied widescreen cinema standards (2.39:1), classical theatrical programs, and traditional high-end magazine indices to craft seamless navigation grids.",
      process: "Engineered elegant lazy-loading systems for video tiles. Overlayed film grain filters and custom aspect letterbox layouts to support authentic cinematic flavor.",
      solution: "Created interactive video thumbnails that scale smoothly to fullscreen on click. Implemented responsive transitions that slide like camera shutter actions.",
      outcome: "A stunning showcase that highlights dramatic scenes, leaving filmmakers in awe and setting the golden benchmark for cinematic web presentation."
    },
    details: {
      client: "Sonder Film Alliance",
      role: "Lead Portfolio Architect",
      services: ["Video Performance Tuning", "Creative Layouts", "Custom Media Controls"]
    }
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Creative Director & Developer",
    company: "Studio Noir / Paris",
    duration: "2024 - Present",
    location: "Paris, France",
    description: "Orchestrating the creative blueprint and frontend interactive architecture for some of the world's most prestigious luxury brands and digital exhibitions.",
    achievements: [
      "Directed a team of 8 designers and developers, delivering high-end award-winning visual layouts.",
      "Established core responsive design guidelines that improved framework performance by 40% across physical installations.",
      "Consulted Fortune 500 agencies on tactile high-contrast creative design and responsive typography mechanics."
    ]
  },
  {
    id: "exp-2",
    role: "Lead UI/UX Designer & Engineer",
    company: "Lumina Labs / Zurich",
    duration: "2022 - 2024",
    location: "Zurich, Switzerland",
    description: "Bridged the visual design and frontend execution gap. Crafted ultra-intuitive interactive prototypes that scaled smoothly to global distribution platforms.",
    achievements: [
      "Innovated a custom motion design system reducing layout loading times to milliseconds.",
      "Delivered over 12 high-impact commercial client systems with exceptional typographic control and high conversion metrics.",
      "Fostered deep collaborations with engineering teams to eliminate design-handoff overhead."
    ]
  },
  {
    id: "exp-3",
    role: "Interaction Designer",
    company: "Aspect Studio / Stockholm",
    duration: "2020 - 2022",
    location: "Stockholm, Sweden",
    description: "Authored experimental web installations, responsive layouts, and digital branding assets, focusing on stark editorial layouts and micro-interactions.",
    achievements: [
      "Pioneered tactile digital touchpoints for museum archives using React and raw SVG/Canvas architectures.",
      "Engineered bespoke typographic systems for Scandinavian art publications.",
      "Recognized by regional design councils for excellence in aesthetic minimalism and digital accessibility."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Creative Systems",
    skills: [
      { name: "Frontend Development", proficiency: 98 },
      { name: "UI Design & Art Direction", proficiency: 95 },
      { name: "UX Research & Strategy", proficiency: 88 },
      { name: "Motion & Animation Design", proficiency: 92 }
    ]
  },
  {
    title: "Digital Artistry",
    skills: [
      { name: "Branding & Typography", proficiency: 95 },
      { name: "Creative AI Implementation", proficiency: 90 },
      { name: "WebGL, Shaders & Canvas Art", proficiency: 85 },
      { name: "Interaction Architecture", proficiency: 94 }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Brigitte's ability to turn clean code into high-end, premium editorial art is absolutely unparalleled. Working with her completely elevated our luxury brand's global digital presence, resulting in instant design acclaim.",
    author: "Hélène de Belmont",
    role: "Chief Brand Director",
    company: "Éclat de Noir",
    avatar: "https://picsum.photos/seed/portrait1/150/150"
  },
  {
    id: "test-2",
    quote: "She is both an incredible creative director and an exceptionally fast technical developer. Her work for our biennial exhibition is a literal masterpiece of interactive, structural geometry.",
    author: "Marcello Vanzetti",
    role: "Exhibition Curator",
    company: "Berlin Neue Architecture Biennale",
    avatar: "https://picsum.photos/seed/portrait3/150/150"
  },
  {
    id: "test-3",
    quote: "Her design process is strict, artistic, and entirely focused on pristine typography and visual rhythm. Our engagement led to a monumental surge in client inquiries and secured core industry honors.",
    author: "Astrid Lindqvist",
    role: "Co-Founder",
    company: "Sonder Film Alliance",
    avatar: "https://picsum.photos/seed/portrait4/150/150"
  }
];
