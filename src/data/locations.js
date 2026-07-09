const locations = [
  {
    id: "1",
    title: "Lodha Falls Eco-Camp",
    category: "Falls",
    price: 800,
    description:
      "Experience the breathtaking height of Lodha Falls with a forest trek, village homestay, and sustainable camping run by local hosts.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    guideName: "Sanjay Oraon",
    guidePhone: "919999999999",
    location: "Latehar District, Jharkhand",
    bestTime: "October to February",
    duration: "2 days / 1 night",
    highlights: [
      "Sunrise trek to the waterfall lookout",
      "Eco camping with local tribal cuisine",
      "Evening campfire and folklore stories",
    ],
    includes: [
      "Guide-led waterfall trek",
      "Overnight tents and meals",
      "Transportation from the nearby village",
    ],
  },
  {
    id: "2",
    title: "Betla Tribal Homestay",
    category: "Wildlife",
    price: 1200,
    description:
      "Stay near Betla National Park in a traditional tribal homestay, enjoy guided wildlife walks, and taste home-cooked regional food.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    guideName: "Ramesh Munda",
    guidePhone: "918888888888",
    location: "Palamu District, Jharkhand",
    bestTime: "November to March",
    duration: "3 days / 2 nights",
    highlights: [
      "Early morning wildlife safari",
      "Traditional tribal meals and craft demo",
      "Village walk with naturalists",
    ],
    includes: [
      "Park entry and safari guide",
      "Homestay accommodation",
      "Meals and cultural tour",
    ],
  },
  {
    id: "3",
    title: "Sohrai Art Village Tour",
    category: "Tribal Art",
    price: 500,
    description:
      "Immerse yourself in the mural traditions of Hazaribagh with an art village tour, craft workshops, and authentic meals served by local families.",
    image:
      "https://images.unsplash.com/photo-1520481894227-7d8e06b8a7c8?auto=format&fit=crop&w=1200&q=80",
    guideName: "Anita Devi",
    guidePhone: "917777777777",
    location: "Hazaribagh District, Jharkhand",
    bestTime: "October to January",
    duration: "1 day",
    highlights: [
      "Live mural painting with local artisans",
      "Hands-on clay and fabric workshop",
      "Traditional village lunch",
    ],
    includes: [
      "Art workshop materials",
      "Local guide and translator",
      "Meals with a host family",
    ],
  },
  {
    id: "4",
    title: "Netarhat Sunset Camp",
    category: "Hill Station",
    price: 950,
    description:
      "Watch the legendary Netarhat sunset from a community-run camp with guided forest walks, stargazing, and local storytelling.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    guideName: "Kamal Sharma",
    guidePhone: "917666666666",
    location: "Netarhat, Jharkhand",
    bestTime: "October to March",
    duration: "2 days / 1 night",
    highlights: [
      "Sunset viewpoint visit",
      "Forest nature walk",
      "Campfire with local stories",
    ],
    includes: [
      "Tent accommodation",
      "Meals and bonfire",
      "Walks with a naturalist",
    ],
  },
  {
    id: "5",
    title: "Tata Steel Nature Walk",
    category: "Falls",
    price: 700,
    description:
      "Explore the serene trails of Tamadam Forest near Ranchi with a local Bhil tracker and end the day by a hidden waterfall.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    guideName: "Lalita Soren",
    guidePhone: "919555555555",
    location: "Ranchi District, Jharkhand",
    bestTime: "September to February",
    duration: "1 day",
    highlights: [
      "Guided forest trail",
      "Hidden waterfall picnic",
      "Bird watching and nature photography",
    ],
    includes: ["Forest guide", "Picnic lunch", "Entrance permits"],
  },
  {
    id: "6",
    title: "Heritage Craft Village",
    category: "Tribal Art",
    price: 600,
    description:
      "Visit a living craft village where artisans paint Sohrai murals, weave tribal textiles, and share their ancestral traditions.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    guideName: "Meena Devi",
    guidePhone: "919444444444",
    location: "Hazaribagh District, Jharkhand",
    bestTime: "October to December",
    duration: "1 day",
    highlights: [
      "Traditional textile weaving demo",
      "Sohrai mural walk",
      "Meet local craftspeople",
    ],
    includes: ["Craft village tour", "Workshop session", "Local refreshments"],
  },
  {
    id: "7",
    title: "Hazaribagh Sunrise Safari",
    category: "Wildlife",
    price: 1100,
    description:
      "Set out before dawn for a safari across Hazaribagh’s teak forests, tracking deer, birds, and maybe even a sloth bear with an experienced guide.",
    image:
      "https://images.unsplash.com/photo-1526401281623-1a97e0b2fc3b?auto=format&fit=crop&w=1200&q=80",
    guideName: "Arun Patra",
    guidePhone: "919333333333",
    location: "Hazaribagh Wildlife Sanctuary, Jharkhand",
    bestTime: "November to March",
    duration: "Half day",
    highlights: [
      "Early morning wildlife safari",
      "Birdsong and nature photography",
      "Tea with local forest guides",
    ],
    includes: ["Safari guide", "Morning tea", "Transport from the village"],
  },
  {
    id: "8",
    title: "Amjhar Pool Bird Hide",
    category: "Wildlife",
    price: 650,
    description:
      "Spend a quiet morning at Amjhar Pool watching migratory waterfowl, kingfishers, and painted storks from a hidden village hide.",
    image:
      "https://images.unsplash.com/photo-1522177060633-9c3f67f0e3e3?auto=format&fit=crop&w=1200&q=80",
    guideName: "Deepa Kumari",
    guidePhone: "919222222222",
    location: "Ranchi District, Jharkhand",
    bestTime: "October to February",
    duration: "Half day",
    highlights: [
      "Birdwatching from an eco hide",
      "Guided wetlands walk",
      "Local breakfast by the water",
    ],
    includes: ["Birdwatching guide", "Breakfast", "Hide access fee"],
  },
  {
    id: "9",
    title: "Sunderkhal Heritage Walk",
    category: "Tribal Art",
    price: 550,
    description:
      "Walk through Sunderkhal village to discover tribal paintings, bamboo crafts, and the stories behind each feature of local life.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    guideName: "Sundar Lal",
    guidePhone: "919111111111",
    location: "Sunderkhal, Jharkhand",
    bestTime: "October to January",
    duration: "1 day",
    highlights: [
      "Tribal painting demonstration",
      "Traditional home visit",
      "Community storytelling session",
    ],
    includes: ["Local guide", "Craft tour", "Lunch with a host family"],
  },
];

export default locations;
