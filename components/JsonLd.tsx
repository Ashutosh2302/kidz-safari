export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ChildDaycare",
    "name": "Kidz Safari Preschool",
    "alternateName": "Kidz Safari",
    "description": "Kidz Safari is a Waldorf inspired preschool and day care centre in Greenfield Colony, Faridabad for children ages 2 to 6. We also offer evening tuition classes and pickup and drop services.",
    "url": "https://kidzsafari.in",
    "logo": "https://kidzsafari.in/logo.png",
    "image": "https://kidzsafari.in/hero.png",
    "telephone": "+919711333568",
    "email": "hello@kidzsafari.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-292, Ground Floor Back, Greenfield Colony",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4089,
      "longitude": 77.3178
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:30",
        "closes": "12:45",
        "description": "School Hours"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00",
        "description": "Day Care Hours"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00",
        "description": "Office Hours"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Mrs. Anjali Bansal",
      "jobTitle": "Founder and Principal"
    },
    "areaServed": [
      { "@type": "City", "name": "Faridabad" },
      { "@type": "Place", "name": "Greenfield Colony, Faridabad" },
      { "@type": "Place", "name": "Sector 42, Faridabad" },
      { "@type": "Place", "name": "Sector 43, Faridabad" },
      { "@type": "Place", "name": "NIT Faridabad" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Programmes",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre Nursery (Ages 2 to 3)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nursery (Ages 3 to 4)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "L.KG Lower Kindergarten (Ages 4 to 5)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "U.KG Upper Kindergarten (Ages 5 to 6)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Day Care (Ages 2 to 12)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Evening Tuition Classes (Classes 1 to 5)" } }
      ]
    },
    "sameAs": [
      "https://instagram.com/kidzsafari",
      "https://www.facebook.com/anjali.bansal.9674"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "keywords": "preschool faridabad, play school faridabad, day care faridabad, nursery faridabad, kindergarten faridabad, pre nursery greenfield colony, waldorf preschool faridabad, best preschool faridabad, tuition classes faridabad, kidz safari"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What ages do you accept at Kidz Safari?",
        "acceptedAnswer": { "@type": "Answer", "text": "We welcome children between 2 and 6 years old, across our Pre Nursery, Nursery, L.KG, and U.KG programmes. Day care is available for ages 2 to 12." }
      },
      {
        "@type": "Question",
        "name": "What are the school hours at Kidz Safari Faridabad?",
        "acceptedAnswer": { "@type": "Answer", "text": "School runs Monday to Friday, 9:30 AM to 12:45 PM. Day care is available Monday to Saturday from 8:00 AM to 7:00 PM." }
      },
      {
        "@type": "Question",
        "name": "What is the Waldorf approach to education?",
        "acceptedAnswer": { "@type": "Answer", "text": "Waldorf is a play based, holistic philosophy that nurtures the whole child. Head, heart, and hands. No worksheets or screens, just meaningful activities, stories, art, and outdoor play." }
      },
      {
        "@type": "Question",
        "name": "Does Kidz Safari provide meals and pickup drop service?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve freshly cooked, nutritious lunches and healthy snacks every day. We also offer safe door to door transport with trained staff and child friendly vehicles." }
      },
      {
        "@type": "Question",
        "name": "How can I enroll my child at Kidz Safari preschool in Faridabad?",
        "acceptedAnswer": { "@type": "Answer", "text": "The easiest first step is to book a visit. Come tour the school, meet the teachers, and see if it feels right. Call us at +91 97113 33568 or email hello@kidzsafari.in." }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
