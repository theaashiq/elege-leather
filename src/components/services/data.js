//import wallet from '../../images'
import wallet1 from '../../images/wallet1.avif'
import wallet2 from '../../images/wallet2.avif'
import wallet3 from '../../images/wallet3.avif'
import wallet4 from '../../images/wallet4.avif'
import wallet5 from '../../images/wallet5.avif'
import belt1 from '../../images/belt1.avif'
import belt2 from '../../images/belt2.avif'
import belt3 from '../../images/belt3.avif'
import shoe1 from '../../images/shoe1.jpg'
import shoe2 from '../../images/shoe2.jpg'
import shoe3 from '../../images/shoe3.jpg'
import shoe4 from '../../images/shoe4.jpg'
import shoe5 from '../../images/shoe5.jpg'
import shoe6 from '../../images/shoe6.jpg'
import jacket1 from '../../images/jacket1.jpg'
import jacket2 from '../../images/jacket2.jpg'
import jacket3 from '../../images/jacket3.jpg'
import jacket4 from '../../images/jacket4.jpg'
import bag1 from '../../images/bag1.jpg'
import bag2 from '../../images/bag2.jpg'
import bag3 from '../../images/bag3.jpg'
import bag4 from '../../images/bag4.jpg'
import bag5 from '../../images/bag5.jpg'
import accessory1 from '../../images/accessory1.jpg'
import accessory2 from '../../images/accessory2.jpg'
import accessory3 from '../../images/accessory3.jpg'
import phoneCover1 from '../../images/phoneCover1.jpg'
import earpodCase1 from '../../images/earpodCase1.jpg'

const data = [
  {
    id: 12,
    product_name: "Fashionable High-Heel Boots",
    category: "shoes",
    price: 1499,
    offer_price: 1199,
    image: shoe4,
    product_details: "Step into the spotlight with our Fashionable High-Heel Boots. These trendy boots not only elevate your style but also provide all-day comfort. The chic design and sturdy construction make them perfect for any occasion, from casual outings to special events. Make a statement with every step.",
    rating: 4.5, 
  },
  {
    id: 22,
    product_name: "Canvas Backpack",
    category: "bags",
    price: 799,
    offer_price: 599,
    image: bag2,
    product_details: "Explore the world with our Canvas Backpack, a perfect blend of style and durability. Crafted from high-quality canvas, this backpack is not only a fashion statement but also a reliable companion for your daily adventures. Multiple compartments offer practicality without compromising on aesthetics.",
    rating: 4.2, 
  },
  {
    id: 5,
    product_name: "Executive Essentials Folio",
    category: "wallet",
    price: 799,
    offer_price: 499,
    image: wallet5,
    product_details: "Embrace vintage charm with our Executive Essentials Folio. This leather pocketbook is more than a stylish accessory; it's a statement of timeless elegance. The rustic-inspired design adds character, while the functional layout keeps your essentials organized. Carry a piece of history with you.",
    rating: 4.8, 
  },
  {
    id: 6,
    product_name: "Urban Explorer Waistband",
    category: "belt",
    price: 599,
    offer_price: 299,
    image: belt3,
    product_details: "Navigate urban landscapes with confidence using our Urban Explorer Waistband. Adventure-ready and designed for functionality, this wallet goes beyond the ordinary. With ample space for your essentials, it's the perfect companion for those who appreciate both style and practicality. Explore the city in style.",
    rating: 4.0, 
  },
  {
    id: 8,
    product_name: "Elite Elegance Belt",
    category: "belt",
    price: 699,
    offer_price: 499,
    image: belt1,
    product_details: "Elegance meets functionality with this elite belt. Elevate your style with precision craftsmanship, making it the perfect addition to your wardrobe for a touch of sophistication.",
    rating: 4.7, 
  },
  {
    id: 10,
    product_name: "Sporty White Sneakers",
    category: "shoes",
    price: 899,
    offer_price: 649,
    image: shoe2,
    product_details: "Step into comfort and style with our Sporty White Sneakers. Designed for casual wear, these sneakers offer the perfect blend of comfort and fashion. Whether you're running errands or meeting friends, these sneakers are the ideal choice for a laid-back yet stylish look.",
    rating: 4.3, 
  },
  {
    id: 11,
    product_name: "Formal Black Oxford Shoes",
    category: "shoes",
    price: 1299,
    offer_price: 999,
    image: shoe3,
    product_details: "Make a lasting impression with our Formal Black Oxford Shoes. These classic black oxfords are crafted for a polished and formal appearance. Whether it's a business meeting or a special occasion, these shoes ensure you exude confidence and style.",
    rating: 4.9, 
  },
  
  {
    id: 28,
    product_name: "Classic Fedora Hat",
    category: "accessories",
    price: 89,
    offer_price: 69,
    image: accessory3,
    product_details: "Complete your look with the Classic Fedora Hat. This timeless accessory adds a touch of sophistication to any outfit. Whether you're dressing up for an event or want to elevate your everyday style, this fedora hat is the perfect choice for a refined and polished appearance.",
    rating: 4.6, // Add the rating property
  },
  {
    id: 25,
    product_name: "Luxury Leather Backpack",
    category: "bags",
    price: 1499,
    offer_price: 1299,
    image: bag5,
    product_details: "Indulge in luxury with our Luxury Leather Backpack. This backpack is more than a practical accessory; it's a statement of sophistication. The high-quality leather and meticulous craftsmanship make it an ideal choice for those who appreciate both style and substance.",
    rating: 4.8, // Add the rating property
  },
  {
    id: 17,
    product_name: "Denim Jacket with Hood",
    category: "jackets",
    price: 999,
    offer_price: 799,
    image: jacket3,
    product_details: "Casual denim jacket with a hood for a relaxed style. Embrace casual style with our Denim Jacket with Hood. Perfect for relaxed occasions, this jacket combines comfort with fashion. The added hood brings an extra layer of versatility, making it an ideal choice for those who appreciate a laid-back and effortless look.",
    rating: 4.2, // Add the rating property
  },
  {
    id: 1,
    product_name: "Men Brown Textured Leather Wallet",
    category: "wallet",
    price: 2799,
    offer_price: 1499,
    image: wallet1,
    product_details: "Sleek folio design for executive style and functionality. Elevate your executive style with our Men Brown Textured Leather Wallet. The sleek folio design not only adds a touch of sophistication but also provides functionality for organized professionals. Make a statement with this wallet that seamlessly combines style and practicality.",
    rating: 4.5, // Add the rating property
  },
  {
    id: 29,
    product_name: "Phone Cover with Pattern",
    category: "accessories",
    price: 499,
    offer_price: 399,
    image: phoneCover1,
    product_details: "Protective phone cover with a stylish pattern. Protect your phone with flair using our Phone Cover with Pattern. This accessory not only shields your device but also adds a stylish touch with its eye-catching pattern. Stay trendy while keeping your phone safe from daily wear and tear.",
    rating: 4.4, // Add the rating property
  },
  {
    id: 13,
    product_name: "Casual Slip-On Canvas Shoes",
    category: "shoes",
    price: 1799,
    offer_price: 1599,
    image: shoe5,
    product_details: "Easy-to-wear canvas shoes for a laid-back style. Step into laid-back style with our Casual Slip-On Canvas Shoes. Designed for ease and comfort, these shoes are perfect for those who appreciate a relaxed and effortless look. The easy-to-wear design makes them an ideal choice for casual outings and everyday comfort.",
    rating: 4.7, // Add the rating property
  },
  {
    id: 2,
    product_name: "Rustic Leather Pocketbook",
    category: "wallet",
    price: 1599,
    offer_price: 2399,
    image: wallet2,
    product_details: "Executive essentials folio for organized professionals. Stay organized with our Rustic Leather Pocketbook. This executive essentials folio is designed for professionals who value both style and organization. The rustic-inspired design adds a classic touch, making it a timeless accessory for your everyday needs.",
    rating: 4.5, // Add the rating property
  },
  {
    id: 3,
    product_name: "Adventure Wallet Explore",
    category: "wallet",
    price: 699,
    offer_price: 499,
    image: wallet3,
    product_details: "Timeless and elegant wallet for a classic touch. Embark on timeless elegance with our Adventure Wallet Explore. This wallet is crafted for those who appreciate a classic touch in their accessories. The elegant design and functional layout make it an ideal companion for both formal and casual occasions.",
    rating: 4.8, // Add the rating property
  },
    
  {
    id: 16,
    product_name: "Quilted Puffer Jacket",
    category: "jackets",
    price: 1199,
    offer_price: 999,
    image: jacket2,
    product_details: "Warm quilted puffer jacket for cold weather. Stay warm and stylish with our Quilted Puffer Jacket. Perfect for cold weather, this jacket combines fashion with functionality. The quilted design adds a touch of sophistication, making it an ideal choice for both casual and semi-formal occasions.",
    rating: 4.2, // Add the rating property
  },
  {
    id: 9,
    product_name: "Classic Brown Leather Loafers",
    category: "shoes",
    price: 999,
    offer_price: 799,
    image: shoe1,
    product_details: "Handcrafted leather loafers for a timeless look. Step into timeless elegance with our Classic Brown Leather Loafers. Handcrafted to perfection, these loafers offer a timeless and sophisticated look. Ideal for both formal and casual occasions, they are a must-have in every wardrobe.",
    rating: 4.6, // Add the rating property
  },
  {
    id: 23,
    product_name: "Chic Tote Bag",
    category: "bags",
    price: 699,
    offer_price: 499,
    image: bag3,
    product_details: "Elegant tote bag for a sophisticated and functional look. Elevate your style with our Chic Tote Bag. This elegant tote combines sophistication with functionality, making it a versatile accessory for various occasions. Carry your essentials in style with this chic and functional tote.",
    rating: 4.9, // Add the rating property
  },
  {
    id: 18,
    product_name: "Classic Black Blazer",
    category: "jackets",
    price: 1299,
    offer_price: 1099,
    image: jacket4,
    product_details: "Timeless black blazer for a sophisticated look. Make a statement with our Classic Black Blazer. Timeless and sophisticated, this blazer adds a touch of class to any outfit. Whether for formal events or a polished everyday look, this black blazer is a wardrobe essential.",
    rating: 4.6, // Add the rating property
  },
  {
    id: 21,
    product_name: "Leather Messenger Bag",
    category: "bags",
    price: 899,
    offer_price: 699,
    image: bag1,
    product_details: "Classic leather messenger bag for everyday use. Stay organized and stylish with our Leather Messenger Bag. Crafted from premium leather, this classic messenger bag is designed for everyday use. The timeless design and functional compartments make it an essential accessory for both work and leisure.",
    rating: 4.7, // Add the rating property
  },
  {
    id: 14,
    product_name: "Hiking Adventure Boots",
    category: "shoes",
    price: 1099,
    offer_price: 899,
    image: shoe6,
    product_details: "Sturdy hiking boots for outdoor adventures. Conquer the outdoors with our Hiking Adventure Boots. Designed for rugged terrains, these boots offer both style and functionality. The sturdy construction and comfortable fit make them an ideal choice for hiking and other outdoor adventures.",
    rating: 4.4, // Add the rating property
  },
  {
    id: 30,
    product_name: "Leather Earpod Case",
    category: "accessories",
    price: 29,
    offer_price: 19,
    image: earpodCase1,
    product_details: "Durable leather case for your earpods. Protect your earpods in style with our Leather Earpod Case. Crafted from durable leather, this case ensures the safety of your earpods while adding a touch of sophistication. The compact design makes it easy to carry and perfect for everyday use.",
    rating: 4.8, // Add the rating property
  },
  {
    id: 24,
    product_name: "Travel Duffel Bag",
    category: "bags",
    price: 1299,
    offer_price: 1099,
    image: bag4,
    product_details: "Spacious travel duffel bag for your on-the-go adventures. Whether you're heading for a weekend getaway or a business trip, our Travel Duffel Bag offers ample space for your essentials. The durable construction ensures longevity, making it the perfect companion for your travels.",
    rating: 4.5, // Add the rating property
  },
  
  
  {
    id: 7,
    product_name: "Executive Essentials Folio",
    category: "belt",
    price: 699,
    offer_price: 499,
    image: belt2,
    product_details: "Versatile waistband for the urban explorer. Stay organized and stylish with our Executive Essentials Folio. This versatile waistband is designed for the urban explorer, offering ample space for your essentials. The sleek design adds a touch of sophistication to your everyday carry.",
    rating: 4.5, // Add the rating property
  },
  {
    id: 4,
    product_name: "Classic Elegance Wallet",
    category: "wallet",
    price: 399,
    offer_price: 299,
    image: wallet4,
    product_details: "Premium leather wallet with textured design for a sophisticated look. Elevate your style with our Classic Elegance Wallet. Crafted from premium leather, this wallet features a textured design for a sophisticated and elegant appearance. The functional design ensures both style and convenience.",
    rating: 4.7, // Add the rating property
  },
  {
    id: 26,
    product_name: "Cuff Bracelet Set",
    category: "accessories",
    price: 79,
    offer_price: 59,
    image: accessory1,
    product_details: "Trendy cuff bracelet set for a fashionable statement. Complete your look with our Cuff Bracelet Set. This trendy set adds a fashionable statement to your accessories collection. The versatile design allows you to mix and match, creating a unique and stylish appearance.",
    rating: 4.3, // Add the rating property
  },
  {
    id: 27,
    product_name: "Adjustable Belt",
    category: "accessories",
    price: 129,
    offer_price: 99,
    image: accessory2,
    product_details: "Versatile adjustable belt for a perfect fit. Achieve the perfect fit with our Adjustable Belt. The versatile design and adjustable buckle make it easy to customize for a comfortable and stylish look. Whether you're dressing up or down, this belt is a versatile addition to your wardrobe.",
    rating: 4.6, // Add the rating property
  },
  {
    id: 15,
    product_name: "Leather Biker Jacket",
    category: "jackets",
    price: 1499,
    offer_price: 1199,
    image: jacket1,
    product_details: "Stylish leather biker jacket for a rugged look. Make a bold statement with our Leather Biker Jacket. The stylish design and rugged appearance add an edge to your look. Crafted from high-quality leather, this jacket is not just a fashion piece but a timeless addition to your wardrobe.",
    rating: 4.8, // Add the rating property
  },

]

export default data