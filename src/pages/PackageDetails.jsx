import { useParams, Link } from "react-router-dom";
import packagesData from "../data/packagesData";
const PackageDetails = () => {
const { name } = useParams();
const selectedPackage = packagesData.find(
(tour) =>
tour.name === decodeURIComponent(name)
);
10
if (!selectedPackage) {
return (
<div className="pt-32 text-center text-4xl font-bold">
Package Not Found
</div>
);
}
return (
<div className="bg-gray-100 min-h-screen pt-28 md:pt-24 p-5 md:p-10">
<div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden 
shadow-2xl">
<img
src={selectedPackage.image}
alt={selectedPackage.name}
className="w-full h-[250px] md:h-[500px] object-cover"
/>
<div className="p-6 md:p-10">
<h1 className="text-3xl md:text-5xl font-bold">
{selectedPackage.name}
</h1>
<p className="text-2xl text-blue-600 mt-4 font-semibold">
{selectedPackage.price}
</p>
<p className="text-lg text-gray-600 mt-2">
{selectedPackage.days}
</p>
<p className="mt-8 text-lg leading-8 text-gray-700">
{selectedPackage.description}
</p>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
<h2 className="text-2xl font-bold mb-4">
✅Included
</h2>
<ul className="space-y-3 text-gray-700">
{selectedPackage.included.map((item, index) => (
<li key={index}>✔ {item}</li>
))}
</ul>
</div>
<div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
<h2 className="text-2xl font-bold mb-4">
❌Excluded
</h2>
<ul className="space-y-3 text-gray-700">
{selectedPackage.excluded.map((item, index) => (
<li key={index}>✘ {item}</li>
))}
</ul>
</div>
</div>
<div className="mt-10 bg-blue-50 p-8 rounded-3xl shadow-lg">
<h2 className="text-3xl font-bold mb-6">
🌟Tour Highlights
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{selectedPackage.highlights.map((item, index) => (
<div
key={index}
className="bg-white p-5 rounded-2xl text-center shadow-md"
>
<h3 className="text-xl font-bold">
🌍{item}
</h3>
</div>
))}
</div>
</div>
<div className="mt-10 bg-white p-8 rounded-3xl shadow-xl">
<h2 className="text-3xl font-bold mb-8">
🗓Detailed Itinerary
</h2>
12
<div className="space-y-10">
{selectedPackage.itinerary.map((item, index) => (
<div
key={index}
className="relative border-l-4 border-blue-600 pl-8"
>
<div className="absolute -left-[11px] top-2 w-5 h-5 bg
blue-600 rounded-full"></div>
<h3 className="font-bold text-2xl text-blue-600">
{item.day}
</h3>
<h4 className="text-xl font-semibold mt-2">
{item.title}
</h4>
<p className="mt-4 text-gray-700 leading-8">
{item.details}
</p>
</div>
))}
</div>
</div>
<Link
  to="/booking"
  state={{
    packageData:
      selectedPackage,
  }}
>
<button className="mt-10 bg-blue-600 text-white px-8 py-4 
rounded-2xl text-xl hover:bg-blue-700 hover:scale-105 duration-300">
Book Now
</button>
</Link>
</div>
</div>
</div>
);
};
export default PackageDetails;