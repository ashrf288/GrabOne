import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TheCard from "./TheCard";
import { Card, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./Nested_drop.css";

export default function NestedDrop() {
  const [cardData, setCardData] = useState([]);
  const [name, setName] = useState(" ");

  let handleDetails = (name) => {
    setCardData(data[name]);
    setName(name);
  };

  return (
    <div>
      <UncontrolledDropdown>
        <DropdownToggle className="categories-drop-down">
          <span className="categorie head-lines">
            Browse Categories
            <Icon
              icon="ri:arrow-drop-down-line"
              color="cyan"
              className="Icon"
              width="30"
            />{" "}
          </span>
        </DropdownToggle>
        <div>
          <DropdownMenu style={{ position: "relative", top: "80%",paddingBlock:"0" ,height:"38rem"}}>
            <div style={{display:"flex"}}>
            <div>
              {Object.keys(data).map((ele) => {
                return (
                  <DropdownItem  toggle={false} style={{backgroundColor:"white"}} key={ele}>
                    <div onClick={() => handleDetails(ele)} className="drop-item">
                      <span>{ele}</span>{" "}
                      <Icon className="drop-icon" icon="dashicons:arrow-right-alt2" />
                    </div>
                  </DropdownItem>
                );
              })}
              <hr style={{width:"90%" ,margin:"2% auto 4% auto"}}/>
              <DropdownItem style={{color:"#01B2EE",fontSize:"1rem"}}>
                <p>Browse all Categories</p>
              </DropdownItem>
            </div>
                {cardData.length>1 && <TheCard details={cardData} name={name} />} 
            </div>
            {/* <DropdownItem header toggle={false}>Header</DropdownItem>
        <DropdownItem disabled toggle={false}>Action</DropdownItem> */}
 

          </DropdownMenu>
        </div>
      </UncontrolledDropdown>

    </div>
  );
}
let data = {
  "Activities, Events & Outdoors": [
    "Adventure & Outdoors",
    "Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking",
    "Events, Shows & Tickets",
    "Circus, Comedy, Concerts, Expos & Conventions, Festivals",
    "Fun & Leisure",
    "Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours",
    "Kids Activities",
    "Kid's Camps, Kid's Classes, Kid's Shows, Play ",
  ],
  "Automotive": [
    "Automotive Parts & Accessories",
    "Automotive Accessories, Car Parts, Motorbike Parts, Tyres",
    "Car Electronics",
    "Car Alarms, Car Amplifiers, Car GPS, Car Handsfree, Car Speakers",
    "Wash, Repairs & Maintenance",
    "Automotive Servicing, Car Wash & Groom",
  ],
  "Baby, Kids & Toys": [
    "Baby Essentials",
    "Baby Feeding, Baby Gates, Baby Health & Safety, Baby Monitors, Bathing & Changing",
    "Baby Gear",
    "Baby Travel Accessories, Car Seats & Strollers, Carriers & Slings, High Chairs & Boosters, Jumpers & Bouncers",
    "Clothing & Accessories - Boys",
    "Boys Accessories, Boys Bags, Boys Bodysuits, Boys Growsuits, Boys Hats & Caps",
    "Clothing & Accessories - Girls",
    "Girls Accessories, Girls Bags, Girls Bodysuits, Girls Dresses, Girls Growsuits",
    "Nursery & Toddlers Room",
    "Baby Furniture, Nursery & Toddlers Bedding, Nursery & Toddlers Decor, Toddler Furniture",
    "Toys",
    "Action Figures & Accessories, Bikes, Sc",
  ],
  "Beauty, Massage & Spa":[
    "Face & Skincare",
    "Acne Care, Appearance Medicine, Eyebrow Threading & Tinting, Facials, Microdermabrasion",
    "Hair Salons & Products",
    "Barbers & Men's Haircuts, Hair Colour & Highlights, Hair Straightening & Curling, Hair Styling Products, Hairdressing & Haircuts",
    "Makeup",
    "Eyes & Brow Makeup, Face Makeup, Lips, Makeup Brushes & Applicators",
    "Nails",
    "Manicure & Pedicure, Nail Polish",
    "Spa & Massage",
    "Aromatherapy, Body Scrubs & Wraps, Massage Therapy, Natural Hot Spring, Pampering",
    "Waxing & Hair Removal",
    "IPL Hair Removal, Laser Hair Removal, Shav"
  ],
  "Books & Magazines":[
    "Children's Books",
    "Colouring Books, Pre-School, Story Time",
    "Non-Fiction",
    "Biographies, Cooking Books, General Non-Fictio",

  ],
  "Clothing & Fashion - Men's":[
    "Men's Accessories",
    "Men's Beanies, Men's Belts & Braces, Men's Gloves, Men's Hats & Caps, Men's Scarves & Snoods",
    "Men's Activewear",
    "Men's Compression Clothing, Men's Golfwear, Men's Leisurewear, Men's Outdoor, Men's Sport Accessories",
    "Men's Jewellery & Watches",
    "Men's Cufflinks, Men's Jewellery, Men's Watches",
    "Men's Shoes",
    "Men's Boat Shoes, Men's Boots, Men's Brogues, Men's Dress Shoes, Men's Loafers & Drivers",
    "Men's Socks & Underwear",
    "Men's Boxers, Men's Briefs, Men's Socks", 

  ],
 " Clothing & Fashion - Women's":[
   "Socks & Hosiery",
   "Tights & Hosiery, Women's Socks",
   "Women's Accessories",
   "Women's Belts, Women's Cufflinks, Women's Gloves, Women's Hair Accessories, Women's Hats & Caps",
   "Women's Activewear",
   "Women's Compression Clothing, Women's Leisurewear, Women's Outdoor Activewear, Women's Sport Accessories, Women's Sports Underwear",
   "Women's Bags",
   "Clutches, Purses, Totes, Women's Backpacks, Women's Satchels",
   "Women's Jewellery & Watches",
   "Bracelets, Earrings, Necklaces & Pendants, Women's Rings, Women's Watches",
   "Women's Shoes",
   "Women's Boots, Women's Flats, Women's Sandals", 
     
 ],
 "Electronics & Computers":[
   "Audio Electronics",
   "Electronic Musical Instruments, Headphones & Ear Plugs, Speakers, Subwoofers",
   "Computers",
   "Apple, Desktops, Hardware, Laptops, Networking",
   "Electronic Gadgets & Wearables",
   "Heart Rate Monitors & Fitbit, Quadcopters & Drones, Robots",
   "Film & Photography",
   "Camera Bags & Cases, Camera Flashes, Camera Lenses, Camera Lighting & Studio, Cameras",
   "Gaming & Consoles",
   "Nintendo, PC Gaming, PlayStation, Virtual Reality, Xbox",
   "Home Security & Automation",
   "Electronic Safe, Home Alarm System, Home Fire Safety, Security Cameras & Monitoring",
   "Mobile Phones & Tablet",
   "Android Phones, Android Tablets, Mobile Phones & Tablets Accessories, IPad, IPhone",
   "TV & Video",
   "DVD & Blu Ray, Home Theatre Systems, Proj",
 ],
 "Fitness & Sports":[

   "Backyard & Indoor Games",
   "Darts, Frisbee, Pool & Billiard",
   "Ball Sports",
   "Cricket, Football & Soccer, Golf, Hockey, Rugby",
   "Cycling & Biking" ,
   "BMX, Cycling Parts & Accessories, Mountain Bike, Road Bike",
   "Gym & Training",
   "Boot Camp, Boxing, Crossfit, Gym, Pilates",
   "Skates, Boards & Scooters",
   "Quad & Inline Skates, Scooters, Skateboards & Long Boards",
   "Ski & Snowboarding",
   "Skiing, Snowboarding",
   "Water Sports",
   "Rowing, Surfing, Swimming, Water Polo",
 ],
 "Grocery & Food":[

   "First Aid",
   "Bandages, Disinfectant, First Aid Kit, Gauze",
   "Household",
   "Air Fresheners, Cleaning Supplies, Insect Repellent, Lighting & Batteries",
   "Personal Care",
   "Deodorant, Sanitary Products, Sunscreen, Tissues & Cotton Products",
   "Retail Food & Drink",
   "Baking, Beverages, Breakfast & Cereal, Butche",
 ],
 "Health, Nutrition & Dental":[

   "Dental",
   "Braces & Orthodontist, Dental Checkup, Dental Hygiene, Dental Implants & Crowns, Teeth Whitening",
   "Natural Medicine",
   "Acupuncture, Chiropractor, Herbal Medicine",
   "Nutrition",
   "Nutritionists, Vitamins & Supplements, Weight Management",
   "Vision",
   "Eye Tests & Lenses, Prescription Eyewear",
 ],

 "Holidays, Hotels & Travel":[

   "Flights, Travel Packages & Cruises",
   "Africa Flights, Travel Packages & Cruises, Asia Flights, Travel Packages & Cruises, Australia Flights, Travel Packages & Cruises, Latin America Flights, Travel Packages & Cruises, Middle East Flights, Travel Packages & Cruises",
   "Hotels & Accommodation",
   "Bed & Breakfasts, Hotels, Lodges, Motels, Resorts",
   "Travel Accessories & Luggage",
   "Money Belts & Wallets, Pillows & Sleep Aid, Securit",
 ],
 "House & Garden":[

   "Bathroom & Laundry",
   "Basins & Vanities, Bathroom & Laundry Accessories, Baths & Showers, Laundry Cabinets & Tubs, Toilets & Bidets",
   "Bedding",
   "Bed Pillows, Blankets & Throws, Comforters, Duvet Covers, Mattress Toppers & Pads",
   "Home Appliances",
   "Heat Pumps, Small Appliances, Vacuum & Floor Care, Whiteware",
   "Home Decor",
   "Art, Candles & Fragrances, Clocks, Curtains & Blinds, Cushions & Throws",
   "Indoor Furniture",
   "Bedroom Furniture, Kitchen & Dining Furniture, Living Room Furniture, Office Furniture",
   "Kitchen & Dining",
   "Cookware, Bakeware & Tools, Cutlery, Dinnerware, Drinkware, Food Storage",
   "Lawn & Garden",
   "Garden Power Tools, Gardening, Hoses & Watering, Landscaping, Lawn & Garden Accessories & Consumables",
   "Outdoor Furniture",
   "Hammocks, Outdoor Benches & Sofas, Outdoor Chairs & Recliners, Outdoor Furniture Covers & Accessories, Outdoor Sets & Tables",
   "Storage & Organisation",
   "Bathroom Storage & Organisation, Garage Storage & Organisation, Kids Storage & Organisation, Laundry Storage & Organisation, Office Storage & Organisation",
   "Tools & Equipment",
   "Hand Tools, Ladders & Trolleys, Power Tool Acces",
 ],
 "Pets":[

   "Cats Supplies & Services",
   "Cat Accessories & Apparel, Cat Flea & Worm Treatments, Cat Food, Cat Grooming, Cat Toys & Treats",
   "Dog Supplies & Services",
   "Dog Accessories & Apparel, Dog Beds, Kennels & Crates, Dog Daycare, Boarding Kennels & Walking, Dog Flea & Worm Treatments, Dog Food",
   "Fish, Birds & Small Animals",
   "Rabbit Hutches & Chicken Coops, Small Animal Ca",
 ],
 "Restaurants, Bars, Cafes":
 [

  "Bars & Pub",
   "Bar & Bistro, Cocktail Bar, Gastro Pub, Pub, Wine Bar",
   "Cafes, Deli & Fast Food",
   "Bakery & Pastry, Burgers, Cafe, Deli, Dessert",
   "Premium Dining & Degustation",
   "Degustation, High Tea, Premium Dining, Vineyards & Wineries",
   "Restaurants",
   "Chinese Restaurants, European Restaurants, Indian R",
 ],
 "Stationery, Art & Craft":[

   "Art Supplies",
   "Brushes & Sponges, Canvas, Pads & Books, Paint & Ink",
   "Colouring & Scrapbooking",
   "Adult Colouring Books, Scrapbooking Albums, Stickers",
   "Craft Kits & Supplies",
   "Clay & Modelling, Craft Components",
   "General Stationery",
   "Notebooks & Calendars, Pens & Pencils, Tape, Glue &",
 ],
 "Training & Courses":[

   "Personal Development",
   "Driving Lessons, Flying Lessons, Language Classes, L",
 ],
" Weddings, Special Occasions & Parties":[

  "Flowers & Gift Baskets",
  "Flowers & Florists, Gift Baskets",
  "Party Supplies",
  "Mens Costumes, Party Decorations, Party Games, P",
],
"Wine, Beer & Spirits":
[

  "Beer & Cider",
  "Cider, Craft Beer, International Beer, Light Beer, New Zealand Beer",
  "Spirits & Liqueurs",
  "Bourbon, Bourbon Liqueur, Brandy, Gin, Rum",
  "Wine",
  "Champagne & Sparkling Wine, Dessert Wine & St"
]



};
