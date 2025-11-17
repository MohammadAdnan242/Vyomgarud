// Mock data for VyomGarud UAV Landing Page

export const products = [
  {
    id: 1,
    name: "VG-Sentinel X1",
    category: "Surveillance",
    description: "Advanced reconnaissance UAV with 4K thermal imaging and 12-hour flight endurance. Military-grade surveillance for critical operations.",
    image: "https://images.unsplash.com/photo-1731579883944-38716457768d",
    specs: {
      range: "50 km",
      altitude: "5,000 m",
      payload: "8 kg"
    }
  },
  {
    id: 2,
    name: "VG-Tactical T2",
    category: "Tactical Operations",
    description: "Rapid deployment tactical drone with real-time data transmission. Built for high-stakes missions requiring precision and reliability.",
    image: "https://images.unsplash.com/photo-1517586275874-7536fa583a82",
    specs: {
      range: "35 km",
      altitude: "4,000 m",
      payload: "6 kg"
    }
  },
  {
    id: 3,
    name: "VG-Recon R5",
    category: "Reconnaissance",
    description: "Long-range reconnaissance system with AI-powered target identification. Unmatched situational awareness for strategic planning.",
    image: "https://images.unsplash.com/photo-1731579884415-b337093fee9d",
    specs: {
      range: "80 km",
      altitude: "7,000 m",
      payload: "10 kg"
    }
  },
  {
    id: 4,
    name: "VG-Cargo C3",
    category: "Heavy-Lift Cargo",
    description: "Heavy-lift cargo UAV for logistics and supply operations. Autonomous navigation in challenging environments.",
    image: "https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde",
    specs: {
      range: "25 km",
      altitude: "3,000 m",
      payload: "50 kg"
    }
  }
];

export const highlights = [
  {
    id: 1,
    title: "Military-Grade Reliability",
    description: "Built to withstand extreme conditions with fail-safe redundancy systems."
  },
  {
    id: 2,
    title: "Advanced Autonomous Systems",
    description: "AI-powered navigation and obstacle avoidance for mission-critical operations."
  },
  {
    id: 3,
    title: "Precision Engineering",
    description: "Crafted with aerospace-grade materials for maximum performance and durability."
  }
];

export const companyInfo = {
  name: "VyomGarud",
  tagline: "Precision in Flight. Excellence in Mission.",
  description: "VyomGarud is a leading provider of advanced UAV systems for defense and strategic operations. We engineer autonomous aerial platforms that combine cutting-edge technology with military-grade reliability, delivering uncompromising performance in the most demanding environments.",
  mission: "Our mission is to redefine aerial superiority through innovation, precision engineering, and unwavering commitment to operational excellence."
};

export const contactSubmissions = [];

export const addContactSubmission = (submission) => {
  const newSubmission = {
    id: Date.now(),
    ...submission,
    timestamp: new Date().toISOString()
  };
  contactSubmissions.push(newSubmission);
  return newSubmission;
};