const communities = [
  {
    name: "Santhal",
    image:
      "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&w=800&q=80",
    note:
      "One of the largest tribal communities in India, concentrated across the Santhal Parganas. Known for the Sohrai and Baha festivals, the Santali language and Ol Chiki script, and a strong oral storytelling tradition.",
  },
  {
    name: "Munda",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    note:
      "Among the earliest inhabitants of the Chotanagpur plateau. Central to the region's agrarian history and the Munda Rebellion led by Birsa Munda, still commemorated across the state.",
  },
  {
    name: "Oraon",
    image:
      "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?auto=format&fit=crop&w=800&q=80",
    note:
      "Known for the Karma festival and the Sarna religious tradition, centred on sacred groves (Sarna Sthal) that are still actively protected and worshipped in villages today.",
  },
  {
    name: "Ho",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    note:
      "Concentrated in the Kolhan region of West Singhbhum. Distinct for the Warang Chiti script and a rich tradition of seasonal songs tied to the agricultural calendar.",
  },
];

const artForms = [
  {
    name: "Sohrai painting",
    category: "Mural art",
    image:
      "https://images.unsplash.com/photo-1582561833074-3ef331dbc4c9?auto=format&fit=crop&w=800&q=80",
    description:
      "Mud-wall murals made during the Sohrai harvest festival, using natural ochre, black manganese, and white chalk pigments to depict animals, trees, and plant motifs. Best experienced first-hand in the villages around Hazaribagh.",
    region: "Hazaribagh district",
  },
  {
    name: "Khovar painting",
    category: "Mural art",
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80",
    description:
      "A wedding-season wall art tradition made using a comb-cut technique on wet clay to reveal a lighter layer beneath. Practised mainly by women, alongside Sohrai, around the Hazaribagh region.",
    region: "Hazaribagh district",
  },
  {
    name: "Paitkar scroll painting",
    category: "Scroll art",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80",
    description:
      "A centuries-old scroll-painting tradition depicting folk stories and the afterlife journey of the soul, traditionally narrated by travelling artists as the scroll unrolls, panel by panel.",
    region: "Amadubi village, East Singhbhum",
  },
  {
    name: "Chhau dance",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    description:
      "A masked, martial-rooted dance form performed at the Chaitra Parva festival, combining acrobatics, folk theatre, and percussion. Seraikella Chhau, one of three regional styles, originates in Jharkhand.",
    region: "Seraikella-Kharsawan",
  },
];

const festivals = [
  {
    name: "Sarhul",
    season: "Spring (Chaitra, Mar\u2013Apr)",
    note: "Worship of the sal tree marking the new year and the start of the harvest cycle, celebrated by the Oraon, Munda, and other communities.",
  },
  {
    name: "Karma",
    season: "Monsoon (Bhadra, Aug\u2013Sep)",
    note: "Dedicated to the Karam tree, celebrated with the Karam Dand ritual, folk songs, and all-night community dance.",
  },
  {
    name: "Sohrai",
    season: "Post-harvest (Kartik, Oct\u2013Nov)",
    note: "A cattle and harvest festival marked by the mural-painting tradition of the same name, when homes are freshly painted to welcome the harvest.",
  },
  {
    name: "Shravani Mela",
    season: "Monsoon (Shravan, Jul\u2013Aug)",
    note: "Lakhs of Kanwariya pilgrims walk to the Baidyanath temple in Deoghar carrying holy water from the Ganges, one of India's longest annual pilgrim walks.",
  },
];

const etiquette = [
  "Ask before photographing people, homes, or ritual sites \u2014 many Sarna groves and ceremonies are not open to outsiders without permission.",
  "Buy Sohrai, Khovar, and Paitkar art directly from the artists or village cooperatives rather than resellers, so the income reaches the makers.",
  "Dress modestly when visiting temples, sacred groves, and village ceremonies.",
  "Hire local guides for forest and heritage walks \u2014 they carry knowledge that isn't written down, and it keeps tourism income within the community.",
];

export { communities, artForms, festivals, etiquette };
