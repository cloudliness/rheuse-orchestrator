export interface Product {
  sku: string;
  name: string;
  category: string;
  slug: string;
  material: string;
  price: number;
  shortDescription: string;
  ecoClaim: string;
}

const CATEGORY_SLUG_MAP: Record<string, string> = {
  "Utensils & Cutlery": "utensils",
  "Drink Bottles & Tumblers": "bottles",
  "Food Wraps & Bags": "wraps",
  "Straws & Cleaning Brushes": "straws",
  "Coffee Cups & Travel Mugs": "cups",
  "Shopping & Produce Bags": "bags",
  "Zero-Waste Personal Care": "personal-care",
};

const SLUG_CATEGORY_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUG_MAP).map(([k, v]) => [v, k])
);

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const products: Product[] = [
  {
    sku: "RH-UTN-001",
    name: "Bamboo Travel Cutlery Set",
    category: "Utensils & Cutlery",
    slug: slugify("Bamboo Travel Cutlery Set"),
    material: "FSC-certified bamboo; organic cotton pouch",
    price: 12.99,
    shortDescription:
      "Fork, knife, spoon, and chopsticks in a roll-up cotton carrying pouch",
    ecoClaim:
      "FSC-certified bamboo; GOTS-certified organic cotton pouch; fully compostable utensils",
  },
  {
    sku: "RH-UTN-002",
    name: "Stainless Steel Cutlery Set with Case",
    category: "Utensils & Cutlery",
    slug: slugify("Stainless Steel Cutlery Set with Case"),
    material: "18/8 stainless steel; recycled ABS case",
    price: 22.99,
    shortDescription:
      "Fork, knife, spoon, and chopsticks in a compact snap-lock case",
    ecoClaim:
      "BPA-free 18/8 stainless steel; carrying case made from recycled ABS plastic",
  },
  {
    sku: "RH-UTN-003",
    name: "Wheat Straw Cutlery Set",
    category: "Utensils & Cutlery",
    slug: slugify("Wheat Straw Cutlery Set"),
    material: "wheat straw composite",
    price: 8.99,
    shortDescription:
      "Lightweight fork, knife, and spoon set in a snap-lock carrying case",
    ecoClaim:
      "Made from wheat straw agricultural byproduct; BPA-free and food-safe composite",
  },
  {
    sku: "RH-UTN-004",
    name: "Premium Stainless Steel Utensil Kit",
    category: "Utensils & Cutlery",
    slug: slugify("Premium Stainless Steel Utensil Kit"),
    material: "18/10 stainless steel; organic cotton canvas roll",
    price: 34.99,
    shortDescription:
      "8-piece set including 2 forks, 2 knives, 2 spoons, straw, and cleaning brush in canvas roll",
    ecoClaim:
      "18/10 stainless steel; GOTS-certified organic cotton canvas roll",
  },
  {
    sku: "RH-BTL-001",
    name: "Stainless Steel Water Bottle 500ml",
    category: "Drink Bottles & Tumblers",
    slug: slugify("Stainless Steel Water Bottle 500ml"),
    material: "18/8 stainless steel; bamboo cap",
    price: 22.99,
    shortDescription:
      "Single-wall water bottle with leak-proof bamboo and silicone cap, 500ml capacity",
    ecoClaim:
      "BPA-free 18/8 stainless steel; sustainably sourced bamboo lid",
  },
  {
    sku: "RH-BTL-002",
    name: "Insulated Stainless Steel Bottle 750ml",
    category: "Drink Bottles & Tumblers",
    slug: slugify("Insulated Stainless Steel Bottle 750ml"),
    material: "18/8 stainless steel; double-wall vacuum",
    price: 29.99,
    shortDescription:
      "Double-wall vacuum insulated bottle, keeps drinks cold 24h or hot 12h, 750ml",
    ecoClaim:
      "BPA-free 18/8 stainless steel; double-wall vacuum insulation; powder-coated finish free of lead and BPA",
  },
  {
    sku: "RH-BTL-003",
    name: "Borosilicate Glass Bottle 500ml",
    category: "Drink Bottles & Tumblers",
    slug: slugify("Borosilicate Glass Bottle 500ml"),
    material: "borosilicate glass; food-grade silicone sleeve",
    price: 19.99,
    shortDescription:
      "Glass water bottle with protective silicone sleeve and stainless steel cap, 500ml",
    ecoClaim:
      "Borosilicate glass (thermal shock resistant); food-grade silicone sleeve; BPA-free stainless steel cap",
  },
  {
    sku: "RH-BTL-004",
    name: "Insulated Tumbler 350ml",
    category: "Drink Bottles & Tumblers",
    slug: slugify("Insulated Tumbler 350ml"),
    material: "18/8 stainless steel; double-wall vacuum",
    price: 24.99,
    shortDescription:
      "Double-wall vacuum insulated tumbler with splash-proof sliding lid, 350ml",
    ecoClaim:
      "BPA-free 18/8 stainless steel; BPA-free Tritan lid; keeps drinks hot 4h or cold 8h",
  },
  {
    sku: "RH-BTL-005",
    name: "Insulated Tumbler with Handle 600ml",
    category: "Drink Bottles & Tumblers",
    slug: slugify("Insulated Tumbler with Handle 600ml"),
    material: "18/8 stainless steel; double-wall vacuum",
    price: 32.99,
    shortDescription:
      "Large double-wall vacuum insulated tumbler with handle and straw lid, 600ml",
    ecoClaim:
      "BPA-free 18/8 stainless steel; includes reusable stainless steel straw; keeps drinks hot 5h or cold 10h",
  },
  {
    sku: "RH-WRP-001",
    name: "Beeswax Wrap Set (S/M/L)",
    category: "Food Wraps & Bags",
    slug: slugify("Beeswax Wrap Set (S/M/L)"),
    material: "organic cotton; beeswax; jojoba oil; tree resin",
    price: 17.99,
    shortDescription:
      "Set of 3 reusable food wraps in small (18cm), medium (26cm), and large (33cm)",
    ecoClaim:
      "GOTS-certified organic cotton infused with sustainably sourced beeswax; compostable at end of life",
  },
  {
    sku: "RH-WRP-002",
    name: "Silicone Food Storage Bags 4-Pack",
    category: "Food Wraps & Bags",
    slug: slugify("Silicone Food Storage Bags 4-Pack"),
    material: "platinum-grade silicone",
    price: 24.99,
    shortDescription:
      "Set of 4 leak-proof bags (2 medium, 2 large) with pinch-lock seal; freezer and dishwasher safe",
    ecoClaim:
      "Platinum-grade silicone; BPA-free, BPS-free, and phthalate-free; rated to 3000+ uses per bag",
  },
  {
    sku: "RH-WRP-003",
    name: "Silicone Stretch Lids 6-Pack",
    category: "Food Wraps & Bags",
    slug: slugify("Silicone Stretch Lids 6-Pack"),
    material: "food-grade silicone",
    price: 13.99,
    shortDescription:
      "Set of 6 stretchable silicone lids in graduated sizes, fits containers from 6cm to 21cm",
    ecoClaim:
      "Food-grade silicone; BPA-free; replaces single-use cling wrap",
  },
  {
    sku: "RH-WRP-004",
    name: "Organic Cotton Snack Bags 5-Pack",
    category: "Food Wraps & Bags",
    slug: slugify("Organic Cotton Snack Bags 5-Pack"),
    material: "GOTS-certified organic cotton",
    price: 15.99,
    shortDescription:
      "Set of 5 drawstring bags in assorted sizes for snacks, sandwiches, and dry goods",
    ecoClaim:
      "GOTS-certified organic cotton; machine washable; plastic-free construction",
  },
  {
    sku: "RH-STR-001",
    name: "Stainless Steel Straw Set of 4",
    category: "Straws & Cleaning Brushes",
    slug: slugify("Stainless Steel Straw Set of 4"),
    material: "18/8 stainless steel",
    price: 9.99,
    shortDescription:
      "4 straight straws (21.5cm) with sisal cleaning brush and cotton carrying pouch",
    ecoClaim:
      "BPA-free 18/8 stainless steel; food-grade; dishwasher safe",
  },
  {
    sku: "RH-STR-002",
    name: "Glass Drinking Straw Set of 4",
    category: "Straws & Cleaning Brushes",
    slug: slugify("Glass Drinking Straw Set of 4"),
    material: "borosilicate glass",
    price: 12.99,
    shortDescription:
      "4 straight borosilicate glass straws (20cm) with sisal cleaning brush",
    ecoClaim:
      "Borosilicate glass; lead-free and cadmium-free; dishwasher safe",
  },
  {
    sku: "RH-STR-003",
    name: "Bamboo Straw Set of 8",
    category: "Straws & Cleaning Brushes",
    slug: slugify("Bamboo Straw Set of 8"),
    material: "organically grown bamboo",
    price: 8.99,
    shortDescription:
      "8 hand-finished bamboo straws (20cm) with sisal fiber cleaning brush",
    ecoClaim:
      "Organically grown bamboo; fully compostable straws and brush",
  },
  {
    sku: "RH-STR-004",
    name: "Mixed Stainless Steel Straw Pack of 8",
    category: "Straws & Cleaning Brushes",
    slug: slugify("Mixed Stainless Steel Straw Pack of 8"),
    material: "18/8 stainless steel; organic cotton pouch",
    price: 17.99,
    shortDescription:
      "4 straight and 4 bent straws (21.5cm) with 2 sisal cleaning brushes and cotton pouch",
    ecoClaim:
      "BPA-free 18/8 stainless steel; sisal fiber brushes; organic cotton carrying pouch",
  },
  {
    sku: "RH-CUP-001",
    name: "Bamboo Fiber Coffee Cup 350ml",
    category: "Coffee Cups & Travel Mugs",
    slug: slugify("Bamboo Fiber Coffee Cup 350ml"),
    material: "bamboo fiber composite; food-grade silicone",
    price: 13.99,
    shortDescription:
      "Lightweight reusable coffee cup with silicone lid and heat sleeve, 350ml capacity",
    ecoClaim:
      "Bamboo fiber composite shell; BPA-free food-grade silicone lid and sleeve",
  },
  {
    sku: "RH-CUP-002",
    name: "Borosilicate Glass Coffee Cup 350ml",
    category: "Coffee Cups & Travel Mugs",
    slug: slugify("Borosilicate Glass Coffee Cup 350ml"),
    material: "double-wall borosilicate glass; food-grade silicone",
    price: 18.99,
    shortDescription:
      "Double-wall glass coffee cup with silicone lid and grip sleeve, 350ml capacity",
    ecoClaim:
      "Double-wall borosilicate glass; BPA-free silicone lid; stays cool to touch without a sleeve",
  },
  {
    sku: "RH-CUP-003",
    name: "Insulated Travel Mug 350ml",
    category: "Coffee Cups & Travel Mugs",
    slug: slugify("Insulated Travel Mug 350ml"),
    material: "18/8 stainless steel; double-wall vacuum",
    price: 26.99,
    shortDescription:
      "Vacuum insulated travel mug with flip lid and lock mechanism, keeps drinks hot 6h, 350ml",
    ecoClaim:
      "BPA-free 18/8 stainless steel; double-wall vacuum insulation; leak-proof flip lid",
  },
  {
    sku: "RH-CUP-004",
    name: "Insulated Travel Mug 500ml",
    category: "Coffee Cups & Travel Mugs",
    slug: slugify("Insulated Travel Mug 500ml"),
    material: "18/8 stainless steel; double-wall vacuum",
    price: 34.99,
    shortDescription:
      "Large vacuum insulated mug with one-hand flip lid, keeps drinks hot 8h, 500ml capacity",
    ecoClaim:
      "BPA-free 18/8 stainless steel; double-wall vacuum insulation; leak-proof one-hand operation lid",
  },
  {
    sku: "RH-BAG-001",
    name: "Organic Cotton Tote Bag",
    category: "Shopping & Produce Bags",
    slug: slugify("Organic Cotton Tote Bag"),
    material: "GOTS-certified organic cotton; 10oz canvas",
    price: 11.99,
    shortDescription:
      "Sturdy canvas tote with reinforced handles, 38cm x 42cm, holds up to 15kg",
    ecoClaim:
      "GOTS-certified organic cotton; 10oz canvas; AZO-free dyes",
  },
  {
    sku: "RH-BAG-002",
    name: "Organic Cotton Mesh Produce Bags 5-Pack",
    category: "Shopping & Produce Bags",
    slug: slugify("Organic Cotton Mesh Produce Bags 5-Pack"),
    material: "GOTS-certified organic cotton mesh",
    price: 15.99,
    shortDescription:
      "Set of 5 mesh bags (2 small, 2 medium, 1 large) with printed tare weight labels",
    ecoClaim:
      "GOTS-certified organic cotton mesh; tare weight tag for easy checkout; machine washable",
  },
  {
    sku: "RH-BAG-003",
    name: "Recycled Polyester Foldable Shopping Bag",
    category: "Shopping & Produce Bags",
    slug: slugify("Recycled Polyester Foldable Shopping Bag"),
    material: "100% recycled PET polyester (rPET)",
    price: 9.99,
    shortDescription:
      "Compact foldable bag with carabiner clip, unfolds to full grocery bag size",
    ecoClaim:
      "Made from 100% post-consumer recycled PET bottles (equivalent of 6 bottles per bag)",
  },
  {
    sku: "RH-BAG-004",
    name: "Organic Cotton Market Bag Set of 3",
    category: "Shopping & Produce Bags",
    slug: slugify("Organic Cotton Market Bag Set of 3"),
    material: "GOTS-certified organic cotton; 12oz canvas",
    price: 27.99,
    shortDescription:
      "Set of 3 heavy-duty canvas bags with flat bottoms, inside pockets, and reinforced seams",
    ecoClaim:
      "GOTS-certified organic cotton; 12oz canvas; reinforced seams; each bag supports up to 20kg",
  },
  {
    sku: "RH-PCA-001",
    name: "Bamboo Toothbrush 4-Pack",
    category: "Zero-Waste Personal Care",
    slug: slugify("Bamboo Toothbrush 4-Pack"),
    material: "FSC-certified bamboo handle; nylon-6 bristles",
    price: 9.99,
    shortDescription:
      "Set of 4 medium-firmness toothbrushes with color-coded bases for household use",
    ecoClaim:
      "FSC-certified bamboo handle (compostable); BPA-free nylon-6 bristles",
  },
  {
    sku: "RH-PCA-002",
    name: "Stainless Steel Safety Razor",
    category: "Zero-Waste Personal Care",
    slug: slugify("Stainless Steel Safety Razor"),
    material: "chrome-plated zinc alloy head; stainless steel handle",
    price: 32.99,
    shortDescription:
      "Long-handle double-edge safety razor with textured grip, includes 5 stainless steel blades",
    ecoClaim:
      "Zinc alloy head with stainless steel handle; eliminates plastic cartridge razor waste; compatible with standard DE blades",
  },
  {
    sku: "RH-PCA-003",
    name: "Natural Loofah Sponge 3-Pack",
    category: "Zero-Waste Personal Care",
    slug: slugify("Natural Loofah Sponge 3-Pack"),
    material: "natural loofah (Luffa aegyptiaca)",
    price: 8.99,
    shortDescription:
      "Set of 3 natural loofah sponges for kitchen or body use, approximately 10cm each",
    ecoClaim:
      "100% natural Luffa aegyptiaca plant fiber; fully compostable; no synthetic additives or dyes",
  },
  {
    sku: "RH-PCA-004",
    name: "Reusable Bamboo Cotton Rounds 16-Pack",
    category: "Zero-Waste Personal Care",
    slug: slugify("Reusable Bamboo Cotton Rounds 16-Pack"),
    material: "organic cotton; bamboo fiber blend",
    price: 12.99,
    shortDescription:
      "16 reusable dual-sided facial rounds with cotton mesh laundry bag, machine washable",
    ecoClaim:
      "Organic cotton and bamboo fiber blend; includes cotton mesh wash bag; replaces approximately 3000 disposable rounds per set",
  },
  {
    sku: "RH-PCA-005",
    name: "Premium Safety Razor Kit",
    category: "Zero-Waste Personal Care",
    slug: slugify("Premium Safety Razor Kit"),
    material:
      "chrome-plated zinc alloy; stainless steel; FSC-certified bamboo stand",
    price: 48.99,
    shortDescription:
      "Safety razor with bamboo display stand, 10 replacement blades, and organic cotton travel pouch",
    ecoClaim:
      "Zinc alloy head with stainless steel handle; FSC-certified bamboo stand; eliminates plastic cartridge razor waste",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(category: string): Product[] {
  const categoryName = SLUG_CATEGORY_MAP[category];
  if (!categoryName) return [];
  return products.filter((p) => p.category === categoryName);
}

export function getProductBySlug(
  category: string,
  slug: string
): Product | undefined {
  const categoryName = SLUG_CATEGORY_MAP[category];
  if (!categoryName) return undefined;
  return products.find((p) => p.category === categoryName && p.slug === slug);
}

export function getCategories(): { name: string; slug: string; count: number }[] {
  const categoryOrder = [
    "Utensils & Cutlery",
    "Drink Bottles & Tumblers",
    "Food Wraps & Bags",
    "Straws & Cleaning Brushes",
    "Coffee Cups & Travel Mugs",
    "Shopping & Produce Bags",
    "Zero-Waste Personal Care",
  ];

  return categoryOrder.map((name) => ({
    name,
    slug: CATEGORY_SLUG_MAP[name],
    count: products.filter((p) => p.category === name).length,
  }));
}

export function getCategorySlug(categoryName: string): string {
  return CATEGORY_SLUG_MAP[categoryName] ?? slugify(categoryName);
}

export function getCategoryName(slug: string): string | undefined {
  return SLUG_CATEGORY_MAP[slug];
}
