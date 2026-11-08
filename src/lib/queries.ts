import groq from "groq";

export const galleryQuery = groq`
  *[_type == "galleryItem" && published == true]
    | order(order asc) {
      _id,
      label,
      type,
      wide,
      order,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }
`;

export const bookingQuery = groq`
  *[_type == "booking" && published == true][0] {
    _id,
    title,
    duration,
    price,
    description,
    features,
    bestFor,
    bookingUrl
  }
`;

export const masterclassQuery = groq`
  *[_type == "masterclass" && published == true][0] {
    _id,
    title,
    titleAccent,
    description,
    modules[] {
      title,
      description
    },
    highlights[] {
      label,
      sub
    },
    price,
    colleaguePrice,
    contactPhone,
    registrationUrl
  }
`;



export const eventPopupQuery = groq`
  *[
    _type == "eventPopup" &&
    published == true &&
    defined(endDate) &&
    endDate > now()
  ]
    | order(order asc) {
      _id,
      title,
      subtitle,
      description,
      tag,
      image,
      imageAlt,
      urgent,
      endDate,
      meta[] {
        icon,
        text
      },
      badges,
      cta: ctaText,
      ctaHref: ctaUrl,
      secondaryCta,
      secondaryHref: secondaryUrl,
      accentColor,
      accentGlow,
      order
    }
`;
