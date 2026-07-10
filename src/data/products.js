const BASE = 'https://nfc.dgtechsoln.com/wp-content/uploads/2025/08'

// desc: short trade copy per reference — used by the ring-gallery callouts and
// the index popup. Standard jewellery-trade descriptions of each chain type.
export const products = [
  { id: 1,  name: 'Hollow Rope Chain',       category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-21.jpeg`, desc: 'The classic twisted-rope profile drawn hollow — full visual presence at a lighter gold weight, a fast-moving retail staple.' },
  { id: 2,  name: 'IPL Chain',               category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-11.jpeg`, desc: 'A high-shine interlocked-link pattern with diamond-cut facets that catch light from every angle of the counter.' },
  { id: 3,  name: 'Rajcot Boll Mop Sundari', category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-17.jpeg`, desc: 'A Rajkot-tradition pattern of beaded and polished elements — ornate, regional, and made for festive stock.' },
  { id: 4,  name: 'Box Link Chain',          category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-22.jpeg`, desc: 'Crisp square links in perfect repetition — geometric, durable, and a natural partner for pendants.' },
  { id: 5,  name: 'Figaro Chain',            category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-16.jpeg`, desc: 'The Italian classic: flattened links in a three-and-one rhythm, equally at home on men’s and women’s counters.' },
  { id: 6,  name: 'Rope Chain',              category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-12.jpeg`, desc: 'Solid twisted strands that read as one continuous spiral of light — our most requested weight range.' },
  { id: 7,  name: 'Flat Snake Chain',        category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-13.jpeg`, desc: 'Tightly-set plates forming a smooth, flexible ribbon of gold with a liquid drape on the skin.' },
  { id: 8,  name: 'Curb Chain',              category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-14.jpeg`, desc: 'Uniform interlocking links filed flat to lie flush — the everyday workhorse of any chain counter.' },
  { id: 9,  name: 'Singapore Chain',         category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-15.jpeg`, desc: 'A twisted, diamond-cut curb that flickers with every movement — delicate in look, strong in wear.' },
  { id: 10, name: 'Gold Bracelet',           category: 'Bracelets',  img: `${BASE}/Saravana-Chains-PVT.-LTD-18.jpeg`, desc: 'A wrist-scaled companion to our chain range, sized and clasped for confident daily wear.' },
  { id: 11, name: 'Kada Bracelet',           category: 'Bracelets',  img: `${BASE}/Saravana-Chains-PVT.-LTD-20.jpeg`, desc: 'The traditional rigid kada, machine-finished for consistency with hand-detailed edges.' },
  { id: 12, name: 'Twisted Rope Chain',      category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-3.jpeg`,  desc: 'A tighter, higher-torsion rope with pronounced spiral shadowing for extra depth.' },
  { id: 13, name: 'Marine Link Chain',       category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-4.jpeg`,  desc: 'Anchor-style links with a centre bar — nautical structure and a substantial feel in the hand.' },
  { id: 14, name: 'Wheat Chain',             category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-5.jpeg`,  desc: 'Four strands of oval links woven into a smooth braided taper, like a head of wheat.' },
  { id: 15, name: 'Franco Chain',            category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-6.jpeg`,  desc: 'A dense V-linked weave, square in cross-section — strong enough to carry heavy pendants.' },
  { id: 16, name: 'Herringbone Chain',       category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-7.jpeg`,  desc: 'Slanted parallel plates laid in alternating directions — a flat, mirror-like surface of gold.' },
  { id: 17, name: 'Ball Chain',              category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-8.jpeg`,  desc: 'Uniform polished spheres on a fine trace — minimal, playful and modern.' },
  { id: 18, name: 'Box Chain',               category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-9.jpeg`,  desc: 'Clean cubic links in quiet repetition — the dependable foundation for solitaire pendants.' },
  { id: 19, name: 'Anchor Chain',            category: 'Chains',     img: `${BASE}/Saravana-Chains-PVT.-LTD-10.jpeg`, desc: 'Bold oval links in the maritime tradition — statement weight and unmistakable presence.' },
  { id: 20, name: 'Diamond Cut Bracelet',    category: 'Bracelets',  img: `${BASE}/Saravana-Chains-PVT.-LTD-19.jpeg`, desc: 'Faceted link-work cut to sparkle under showroom light — a counter piece that sells itself.' },
  { id: 21, name: 'Custom Gold Ornament',    category: 'Customised', img: `${BASE}/Saravana-Chains-PVT.-LTD-23.jpeg`, desc: 'Made-to-order ornaments from your reference or sketch — weight, purity and finish to your spec.' },
  { id: 22, name: 'Custom Pendant Chain',    category: 'Customised', img: `${BASE}/Saravana-Chains-PVT.-LTD-1.jpeg`,  desc: 'Chain and pendant engineered together, balanced for drape and everyday wear.' },
  { id: 23, name: 'Custom Bridal Jewellery', category: 'Customised', img: `${BASE}/Saravana-Chains-PVT.-LTD-2.jpeg`,  desc: 'Complete bridal sets developed with your buyers — from first design to final delivery.' },
]

export const categories = ['All', 'Chains', 'Bracelets', 'Customised']

export const contact = {
  phone1: '+919944442901',
  phone2: '+919597924916',
  whatsapp: 'https://wa.me/+919944442901',
  email: 'saravanachains19@gmail.com',
  address: '42L, CVR Complex, South Avani Moola Street, Madurai, Tamil Nadu - 625001',
  maps: 'https://maps.app.goo.gl/7yfPisLZi2Dk5FWi6',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d78.1198!3d9.9195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f3f7c1!2sSARAVANA%20CHAINS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1700000000000',
}
