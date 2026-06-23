import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "AutoSpa209",
    tagline: "Mobile Detailing. Convenience Meets Perfection.",
    phone: "(209) 555-1234",
    phoneHref: "tel:+12095551234",
    email: "info@autospa209.com",
    address: "123 Main St",
    city: "Modesto",
    serviceAreas: ["Ceres", "Del Rio", "Escalon", "Hughson", "Modesto", "Oakdale", "Riverbank", "Salida", "Turlock", "Waterford"],
    license: "CA-123456",
    since: "2020",
    google_rating: "5.0",
    review_count: "254",
    emergency: false,
    theme: "forest",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Full Detail", desc: "Comprehensive cleaning and restoration for your vehicle, inside and out.", urgent: false },
    { icon: "home", title: "Interior Only", desc: "Deep cleaning, vacuuming, and conditioning for a pristine cabin environment.", urgent: false },
    { icon: "truck", title: "Exterior Only", desc: "Thorough wash, wax, and tire dressing for a brilliant, protected finish.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Removes swirls, scratches, and oxidation to restore your paint's clarity.", urgent: false },
    { icon: "shield-check", title: "Tinting Services", desc: "Professional window tinting for enhanced privacy, style, and UV protection.", urgent: false }
  ],

  testimonials: [
    { name: "Ramon Cibrian", location: "Modesto, CA", stars: 5, text: "After getting flaked on by two different detailers, I was honestly skeptical going into this. AutoSpa209 Mobile Detailing completely turned that around. From the first phone call, Edgar's communication was excellent. He was straight with me, recommending I bring it into the shop. The car was heavily oxidized, and within an hour of dropping it off, Edgar sent me a video showing exactly what the results would look like before they committed to the work. They had the car for two days, and the finish they pulled off genuinely impressed me. My wife loved it, which is the real seal of approval in my house. Kevin took the time to explain how to maintain the paint, and Edgar even coached me on what to look for." },
    { name: "Sarah L.", location: "Turlock, CA", stars: 5, text: "I've used AutoSpa209 twice now for my SUV and they always do an incredible job. The convenience of them coming to my home is a game-changer. My car looks brand new every time, and their attention to detail is unmatched. Highly recommend their full detail service!" },
    { name: "Mark T.", location: "Oakdale, CA", stars: 5, text: "Edgar and his team are true professionals. I had them do a paint correction on my classic car, and the results were stunning. They took the time to explain the process and educate me on how to maintain the finish. Excellent communication and a fantastic outcome. Worth every penny!" }
  ],

  trustBadges: [
    "Premium Mobile Detailing", "Central Valley's Top-Rated", "Excellent Communication", "Video Before Commitment", "Client Education", "5-Star Rated"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 250, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 3, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We respond quickly to your inquiries and schedule services promptly." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, transparent pricing with no hidden fees, so you know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our detailers are highly trained and certified in the latest techniques." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work and ensure you're delighted with the results." },
    { icon: "phone", title: "Excellent Communication", desc: "We keep you informed every step of the way, from booking to completion." },
    { icon: "truck", title: "Premium Mobile Service", desc: "We bring our top-tier detailing services directly to your home or office." }
  ],

  formServiceOptions: ["Full Detail", "Interior Only", "Exterior Only", "Paint Correction", "Tinting Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!