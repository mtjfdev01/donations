import { 
    FaHome, 
    FaBuilding, 
    FaDoorOpen, 
    FaHome as FaRoof, 
    FaWindowMaximize,
    FaWater,
    FaTint,
    FaToilet,
    FaUtensils,
    FaHouseUser,
    FaProjectDiagram,
    FaGraduationCap,
    FaUsers,
    FaStore,
    FaLightbulb,
    FaSolarPanel,
    FaFan,
    FaMosque,
    FaBookOpen,
    FaHeart
  } from 'react-icons/fa';
  import { GiLifeJacket } from "react-icons/gi";
  import { GiOpenedFoodCan } from "react-icons/gi";
  import { PiBowlFoodFill } from "react-icons/pi";
  import { GiWaterBottle } from "react-icons/gi";

  import { FaCow } from 'react-icons/fa6';

// 🔹 Organized donation categories into 6 sections
export const donationSections = [
  {
    sectionTitle: "Building Hope, Brick by Brick",
    sectionSubtitle: "Lay the Foundation of a New Life",
    items: [
      {
        iconClass: FaHome,
        title: 'Lay the Foundation of a New Life',
        subtitle: 'Donate a Brick',
        price: 500,
        to: '/#',
      },
      {
        iconClass: FaBuilding,
        title: 'Raise Walls of Safety & Strength',
        subtitle: 'Contribute Toward a Wall',
        price: 2500,
        to: '/#',
      },
      {
        iconClass: FaDoorOpen,
        title: 'Open Doors to a Brighter Future',
        subtitle: 'Sponsor a Door',
        price: 1500,
        to: '/#',
      },
      {
        iconClass: FaRoof,
        title: 'Shelter Them Under a Roof of Love',
        subtitle: 'Fund a Roof',
        price: 5000,
        to: '/#',
      },
      {
        iconClass: FaWindowMaximize,
        title: 'Let Hope Shine Through Their Window',
        subtitle: 'Gift a Window',
        price: 800,
        to: '/#',
      }
    ]
  },
  {
    sectionTitle: "Essentials for Dignity & Survival",
    sectionSubtitle: "Give the Gift of Clean Water",
    items: [
      {
        iconClass: FaWater,
        title: 'Give the Gift of Clean Water',
        subtitle: 'Install a Filtration Plant',
        price: 15000,
        to: '/#',
      },
      {
        iconClass: FaTint,
        title: 'Ensure No Thirst Goes Unquenched',
        subtitle: 'Donate an Overhead Tank',
        price: 8000,
        to: '/#',
      },
      {
        iconClass: FaToilet,
        title: 'Restore Dignity with Sanitation',
        subtitle: 'Build a Toilet',
        price: 3000,
        to: '/#',
      },
      {
        iconClass: FaUtensils,
        title: 'Nourish Bodies, Feed Souls',
        subtitle: 'Equip a Kitchen',
        price: 4000,
        to: '/#',
      }
    ]
  },
  {
    sectionTitle: "A Complete Home – A New Beginning",
    sectionSubtitle: "Build a Haven for the Homeless",
    items: [
      {
        iconClass: FaHouseUser,
        title: 'Build a Haven for the Homeless',
        subtitle: 'Fund a Full Home',
        price: 25000,
        to: '/#',
      },
      {
        iconClass: FaProjectDiagram,
        title: 'Transform Lives, One Home at a Time',
        subtitle: 'Support the Entire Project',
        price: 100000,
        to: '/#',
      }
    ]
  },
  {
    sectionTitle: "Empowering the Community",
    sectionSubtitle: "Teach a Skill, Change a Destiny",
    items: [
      {
        iconClass: FaGraduationCap,
        title: 'Teach a Skill, Change a Destiny',
        subtitle: 'Establish the Vocational Training Center',
        price: 20000,
        to: '/#',
      },
      {
        iconClass: FaUsers,
        title: 'A Gathering Place for Growth',
        subtitle: 'Construct the Community Center',
        price: 30000,
        to: '/#',
      },
      {
        iconClass: FaCow,
        title: 'Sustain a Family with Livestock',
        subtitle: 'Donate a Cattle Farm',
        price: 35000,
        to: '/#',
      },
      {
        iconClass: FaStore,
        title: 'Help Them Stand on Their Own',
        subtitle: 'Sponsor a Small Shop',
        price: 12000,
        to: '/#',
      }
    ]
  },
  {
    sectionTitle: "Light, Power & Comfort",
    sectionSubtitle: "Illuminate Their Nights, Brighten Their Days",
    items: [
      {
        iconClass: FaLightbulb,
        title: 'Illuminate Their Nights, Brighten Their Days',
        subtitle: 'Install a Street Light',
        price: 2000,
        to: '/#',
      },
      {
        iconClass: FaSolarPanel,
        title: 'Power Their Dreams with Solar Energy',
        subtitle: 'Fund a Solar Grid',
        price: 25000,
        to: '/#',
      },
      {
        iconClass: FaFan,
        title: 'Bring Comfort in the Heat',
        subtitle: 'Gift a Ceiling Fan',
        price: 1500,
        to: '/#',
      }
    ]
  },
  {
    sectionTitle: "Faith & Knowledge for the Future",
    sectionSubtitle: "A Sacred Space for Solace & Prayer",
    items: [
      {
        iconClass: FaMosque,
        title: 'A Sacred Space for Solace & Prayer',
        subtitle: 'Build the Masjid',
        price: 40000,
        to: '/#',
      },
      {
        iconClass: FaBookOpen,
        title: 'Educate a Child, Empower a Generation',
        subtitle: 'Fund the Education Hub',
        price: 28000,
        to: '/#',
      }
    ]
  }
];

export const flooddDonationSections = [
  {
    sectionTitle: "Emergency Relief Items",
    sectionSubtitle: "Essential Supplies for Flood Victims",
    items: [
      {
        iconClass: GiOpenedFoodCan,
        title: 'Meal Box',
        subtitle: 'Essential Food Supply',
        price: 550,
        to: '/#',
      },
      {
        iconClass: FaCow,
        title: 'Animal Feed (100 KG)',
        subtitle: 'Livestock Nutrition',
        price: 2500,
        to: '/#',
      },
      {
        iconClass: GiLifeJacket,
        title: 'Life Jacket',
        subtitle: 'Safety Equipment',
        price: 4000,
        to: '/#',
      },
      {
        iconClass: FaHome,
        title: 'Tent',
        subtitle: 'Emergency Shelter',
        price: 25000,
        to: '/#',
      },
      {
        iconClass: PiBowlFoodFill,
        title: 'Ration Pack',
        subtitle: 'Food Supplies',
        price: 6500,
        to: '/#',
      },
      {
        iconClass: GiWaterBottle,
        title: 'Water Bottles (Pack of 12)',
        subtitle: 'Clean Drinking Water',
        price: 400,
        to: '/#',
      },
      {
        iconClass: FaToilet,
        title: 'Disposable Washroom',
        subtitle: 'Sanitation Facility',
        price: 8000,
        to: '/#',
      }
    ]
  }
];

// General donation sections (combining both apna_ghar and general use cases)
export const generalDonationSections = [
  {
    sectionTitle: "General Community Support",
    sectionSubtitle: "Support Our Community Initiatives",
    items: [
      {
        iconClass: FaUsers,
        title: 'Community Development Fund',
        subtitle: 'General Community Support',
        price: 1000,
        to: '/#',
      },
      {
        iconClass: FaGraduationCap,
        title: 'Education Support',
        subtitle: 'Help Fund Education Programs',
        price: 2000,
        to: '/#',
      },
      {
        iconClass: FaHeart,
        title: 'Healthcare Fund',
        subtitle: 'Support Medical Assistance',
        price: 3000,
        to: '/#',
      },
      {
        iconClass: FaLightbulb,
        title: 'Innovation & Technology',
        subtitle: 'Support Tech Initiatives',
        price: 1500,
        to: '/#',
      }
    ]
  }
];

// Donation type mapping for easy query parameter handling
export const DONATION_TYPES = {
  APNA_GHAR: 'apna_ghar',
  FLOOD: 'flood',
  GENERAL: 'general'
};

// Function to get donation sections based on type
export const getDonationSectionsByType = (type) => {
  switch (type) {
    case DONATION_TYPES.APNA_GHAR:
      return donationSections;
    case DONATION_TYPES.FLOOD:
      return flooddDonationSections;
    case DONATION_TYPES.GENERAL:
      return generalDonationSections;
    default:
      return donationSections; // Default to apna_ghar
  }
};