const createPackage = (
name,
price,
days,
image,
description,
highlights
) => {
const totalDays = parseInt(days);
const itinerary = [];
for (
let i = 1;
i <= totalDays;
i++
) {
itinerary.push({
day: `Day ${i}`,
title:
i === 1
? `Arrival in ${name}`
: i === totalDays
? "Departure"
: `Explore ${name}`,
details:
i === 1
? `Arrival, hotel check-in, welcome drinks and evening local 
exploration in ${name}.`
: i === totalDays
? `Breakfast, hotel checkout and transfer for return journey with 
unforgettable memories.`
: `Enjoy sightseeing, photography, shopping, food exploration and 
premium experiences in ${name}.`,
});
}
return {
name,
price,
days: `${days} Days / ${days-1} Nights`,
image,
description,
highlights,
included: [
"Luxury Hotel Stay",
"Breakfast & Dinner",
"Sightseeing",
"Airport Pickup",
"Private Transport",
],
excluded: [
"Flight Tickets",
"Personal Expenses",
"Adventure Activities",
],
itinerary,
};
};
const packagesData = [
createPackage(
"Goa Beach Tour",
"₹14,999",
4,
"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
"Enjoy beaches, nightlife and water sports in Goa.",
["Baga Beach", "Cruise Party", "Water Sports"]
),
createPackage(
"Kashmir Heaven Tour",
"₹24,999",
5,
"https://images.unsplash.com/photo-1598091383021-15ddea10925d",
"Explore snow mountains, valleys and lakes in Kashmir.",
["Dal Lake", "Snow Mountains", "Shikara Ride"]
),
createPackage(
"Kerala Backwaters",
"₹21,999",
5,
"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
"Relax in Kerala backwaters and luxury houseboats.",
["Houseboat", "Tea Gardens", "Backwaters"]
),
createPackage(
"Manali Adventure",
"₹18,999",
6,
"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
"Adventure sports and snowfall in Manali.",
["Snowfall", "River Rafting", "Solang Valley"]
),
createPackage(
"Rajasthan Royal Tour",
"₹27,999",
6,
"https://images.unsplash.com/photo-1477587458883-47145ed94245",
"Experience royal palaces and desert culture.",
["Amber Fort", "Camel Safari", "Folk Dance"]
),
createPackage(
"Leh Ladakh Adventure",
"₹32,999",
7,
"https://images.unsplash.com/photo-1627894483216-2138af692e32",
"Bike rides and Himalayan landscapes.",
["Pangong Lake", "Bike Ride", "Mountains"]
),
createPackage(
"Darjeeling Escape",
"₹16,999",
4,
"https://images.unsplash.com/photo-1544735716-392fe2489ffa",
"Tea gardens and mountain sunrise views.",
["Tiger Hill", "Tea Gardens", "Toy Train"]
),
createPackage(
"Andaman Luxury Trip",
"₹39,999",
6,
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
"Crystal clear beaches and island luxury.",
["Scuba Diving", "Beach Resort", "Island Tour"]
),
createPackage(
"Shimla Snow Tour",
"₹19,999",
5,
"https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
"Snowfall and scenic hill station experience.",
["Kufri", "Snowfall", "Mall Road"]
),
createPackage(
"Ooty Hill Station",
"₹15,999",
4,
"https://images.unsplash.com/photo-1587474260584-136574528ed5",
"Beautiful tea gardens and peaceful hills.",
["Tea Garden", "Lake", "Toy Train"]
),
createPackage(
"Sikkim Nature Tour",
"₹23,999",
5,
"https://images.unsplash.com/photo-1528127269322-539801943592",
"Explore waterfalls and mountains.",
["Monastery", "Mountains", "Nature"]
),
createPackage(
"Munnar Tea Gardens",
"₹17,999",
4,
"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
"Tea plantations and cool climate.",
["Tea Garden", "Waterfalls", "Nature"]
),
createPackage(
"Pondicherry Beach Escape",
"₹13,999",
3,
"https://images.unsplash.com/photo-1493558103817-58b2924bce98",
"French architecture and beach vibes.",
["Beach", "French Colony", "Cafe"]
),
createPackage(
"Jaipur Heritage Tour",
"₹18,499",
4,
"https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
"Historic forts and royal culture.",
["Palace", "Fort", "Shopping"]
),
createPackage(
"Agra Taj Mahal Tour",
"₹11,999",
2,
"https://images.unsplash.com/photo-1564507592333-c60657eea523",
"Visit the iconic Taj Mahal.",
["Taj Mahal", "Fort", "History"]
),
createPackage(
"Varanasi Spiritual Tour",
"₹14,499",
3,
"https://images.unsplash.com/photo-1561361058-c24cecae35ca",
"Experience Ganga Aarti and spiritual culture.",
["Ganga Aarti", "Temple", "Spiritual"]
),
createPackage(
"Rishikesh River Rafting",
"₹16,499",
4,
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
"Adventure rafting and yoga retreats.",
["Rafting", "Yoga", "Adventure"]
),
createPackage(
"Mussoorie Hills",
"₹15,499",
4,
"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
"Relax in beautiful hill stations.",
["Hills", "Nature", "Waterfalls"]
),
createPackage(
"Udaipur Lake City",
"₹22,499",
5,
"https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
"Romantic lakes and royal palaces.",
["Lake", "Palace", "Boat Ride"]
),
createPackage(
"Kodaikanal Retreat",
"₹16,999",
4,
"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
"Peaceful lakes and nature escapes.",
["Lake", "Forest", "Nature"]
),
createPackage(
"Coorg Coffee Escape",
"₹18,999",
5,
"https://images.unsplash.com/photo-1510798831971-661eb04b3739",
"Coffee plantations and forest resorts.",
["Coffee Estate", "Nature", "Resort"]
),
createPackage(
"Hyderabad City Tour",
"₹13,499",
3,
"https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
"Charminar and city nightlife.",
["Charminar", "Biryani", "City Tour"]
),
createPackage(
"Bangalore Tech City",
"₹12,999",
3,
"https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
"Modern city vibes and nightlife.",
["City Life", "Cafe", "Tech Hub"]
),
createPackage(
"Mumbai City Lights",
"₹20,999",
4,
  "https://images.unsplash.com/photo-1566552881560-0be862a7c445",
"Marine Drive and Bollywood vibes.",
["Marine Drive", "Bollywood", "Gateway"]
),
createPackage(
"Delhi Historical Tour",
"₹14,999",
4,
"https://images.unsplash.com/photo-1587474260584-136574528ed5",
"Explore India's capital monuments.",
["Red Fort", "India Gate", "Qutub Minar"]
),
createPackage(
"Amritsar Golden Temple",
"₹15,999",
3,
"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
"Visit the spiritual Golden Temple.",
["Golden Temple", "Wagah Border", "Punjabi Food"]
),
createPackage(
"Meghalaya Waterfalls",
"₹25,999",
6,
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
"Clouds, waterfalls and scenic valleys.",
["Waterfalls", "Clouds", "Nature"]
),
createPackage(
"Kaziranga Wildlife Safari",
"₹28,999",
5,
"https://images.unsplash.com/photo-1472396961693-142e6e269027",
"Wildlife safari and rhino spotting.",
["Safari", "Wildlife", "Nature"]
),
createPackage(
"Sundarbans Boat Tour",
"₹19,499",
4,
"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
"Mangrove forests and boat adventures.",
["Boat Ride", "Mangroves", "Nature"]
),
createPackage(
"Chennai Marina Escape",
"₹13,999",
3,
"https://images.unsplash.com/photo-1493558103817-58b2924bce98",
"Marina beach and South Indian culture.",
["Marina Beach", "Temple", "Food"]
),
];
export default packagesData;