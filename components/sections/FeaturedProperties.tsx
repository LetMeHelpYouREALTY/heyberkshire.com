"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mediaUrl } from "@/lib/media";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 md:h-64">
      <Image
        src={mediaUrl(property.image)}
        alt={property.name}
        fill
        className="object-cover"
      />
      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
        {property.price}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{property.name}</h3>
      <p className="text-slate-600 mb-4">{property.location}</p>
      <div className="flex justify-between items-center text-slate-600 mb-4">
        <div className="flex items-center gap-1">
          <Bed className="h-4 w-4 text-blue-600" />
          <span className="text-sm">{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="h-4 w-4 text-blue-600" />
          <span className="text-sm">{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center gap-1">
          <Square className="h-4 w-4 text-blue-600" />
          <span className="text-sm">{property.squareFeet.toLocaleString()} sq ft</span>
        </div>
      </div>
      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
        <Link href={`/listings/${property.id}`}>
          View Details <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  </div>
);

const properties: Property[] = [
  {
    id: 1,
    name: "Summerlin homes near Red Rock",
    location: "Summerlin, Las Vegas, NV",
    price: "From $625K median",
    image: "/images/neighborhoods/summerlin-red-rock.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
  },
  {
    id: 2,
    name: "Henderson parks and trails",
    location: "Henderson, NV",
    price: "From $485K median",
    image: "/images/neighborhoods/henderson-parks.jpg",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2400,
  },
  {
    id: 3,
    name: "Green Valley mature-tree streets",
    location: "Green Valley, Henderson, NV",
    price: "From $520K median",
    image: "/images/neighborhoods/green-valley-mature-trees.jpg",
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 text-lg">
              Discover exceptional homes in Las Vegas and Henderson
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">View All Properties</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
