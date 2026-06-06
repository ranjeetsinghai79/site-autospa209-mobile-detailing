import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "AutoSpa209",
    tagline: "Mobile Detailing. Perfection Delivered.",
    phone: "(209) 555-0100",
    phoneHref: "tel:+12095550100",
    email: "info@autospa209.com",
    address: "123 Main St, Modesto, CA 95350",
    city: "Modesto",
    serviceAreas: ["Ceres", "Del Rio", "Escalon", "Hughson", "Modesto", "Oakdale", "Riverbank", "Salida", "Turlock", "Waterford"],
    license: "CA Detailing License #12345",
    since: "2018",
    google_rating: "5.0",
    review_count: "253",
    emergency: false,
    theme: "forest",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Full Detail", desc: "Complete interior and exterior rejuvenation for a showroom finish.", urgent: false },
    { icon: "home", title: "Interior Only", desc: "Deep cleaning, vacuuming, and conditioning for a pristine cabin.", urgent: false },
    { icon: "truck", title: "Exterior Only", desc: "Wash, wax, and tire dressing for a brilliant, protected shine.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Removes swirls and scratches, restoring your vehicle's paintwork.", urgent: false },
    { icon: "shield-check", title: "Tinting Services", desc: "Professional window tinting for privacy, style, and UV protection.", urgent: false }
  ],

  testimonials: [
    { name: "Matthew Winfrey", location: "Modesto, CA", stars: 5, text: "I’ve been with Auto Spa for 2 years now, and they are the best. Their attention to detail, professionalism, and consistency is unmatched. Every time they work my vehicles, it comes out looking spotless and better than expected. Great customer service, reliable, and they truly care about the quality of their work. If you want your car taken care of right, I highly recommend them hands down the best of the best!" },
    { name: "James", location: "Turlock, CA", stars: 5, text: "We recently had Kevin out for an interior/exterior service and we couldn't be more impressed. He was professional and his attention to detail was second to none. Our car looks better now than it did the day we drove it off the lot! The quality of the work is what really stands out. If you’re looking for a top-tier mobile detailer, AutoSpa209 is the one to call." },
    { name: "Sarah L.", location: "Riverbank, CA", stars: 5, text: "My car desperately needed a full detail after a road trip. AutoSpa209 came to my home, and the convenience was amazing. The results were even better! My car looked brand new, inside and out. The team was friendly and incredibly thorough. I'm so impressed and will definitely be a repeat customer." }
  ],

  trustBadges: [
    "Premium Mobile Detailing", "Central Valley's Top-Rated", "Unmatched Attention to Detail", "Satisfaction Guaranteed", "Licensed & Insured"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 250, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 5, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Convenience Delivered", desc: "We bring our premium detailing services directly to your home or office, saving you time and hassle." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront quotes with no hidden fees, so you know exactly what to expect before we start." },
    { icon: "award", title: "Certified Professionals", desc: "Our detailers are highly trained and passionate about restoring your vehicle to its best condition." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work. If you're not completely satisfied, we'll make it right." },
    { icon: "phone", title: "Easy Scheduling", desc: "Book your appointment online or by phone with our friendly and efficient customer service." },
    { icon: "truck", title: "Fully Equipped", desc: "Our mobile units are stocked with the latest tools and premium products for superior results." }
  ],

  formServiceOptions: ["Full Detail", "Interior Only", "Exterior Only", "Paint Correction", "Tinting Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!