// residential
import residentialImg1 from "../assets/home/residential1.webp";
import residentialImg2 from "../assets/home/residential2.webp";
import residentialImg3 from "../assets/home/residential3.webp";
import residentialImg4 from "../assets/home/residential4.webp";
import sliderImg from "../assets/home/projslider1.webp";
import galleryImg from "../assets/home/projgallery1.webp";
// commercial
import commercialImg1 from "../assets/home/commercial1.webp";
import commercialImg2 from "../assets/home/commercial2.webp";
import commercialImg3 from "../assets/home/commercial3.webp";
import commercialImg4 from "../assets/home/commercial4.webp";
import comSliderImg from "../assets/home/comslider1.webp";
import comGalleryImg from "../assets/home/comgallery1.webp";
// banner Images
import residentialbanner from "../assets/banner/residentialbanner.webp";
import commercialbanner from "../assets/banner/commercialbanner.webp";
import preleasedbanner from "../assets/banner/preleasedbanner.webp";
import farmhousebanner from "../assets/banner/farmhousebanner.webp";
// developer img
import developerImg from "../assets/developers/developerInner.webp";

export const projectsData = [
  {
    id: 1,
    title: "Equestrian Family Home",
    route: "equestrian-family-home",
    featured_img: residentialImg1,
    price: "50.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:  "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Shela",
      route: "shela",
      zone: {
        title: "Zone 1",
        route: "zone-1",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
    seo: {
      meta_title: "Equestrian Family Home",
      meta_description: "Equestrian Family Home",
    },
  },
  {
    id: 2,
    title: "Luxury Villa",
    route: "luxury-villa",
    featured_img: residentialImg2,
    price: "1.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "South Bopal",
      route: "south-bopal",
      zone: {
        title: "Zone 1",
        route: "zone-1",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
    seo: {
      meta_title: "Luxury Villa",
      meta_description: "Luxury Villa",
    },
  },
  {
    id: 3,
    title: "Luxury Flat",
    route: "luxury-flat",
    featured_img: residentialImg3,
    price: "2.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Bopal",
      route: "bopal",
      zone: {
        title: "Zone 1",
        route: "zone-1",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
    seo: {
      meta_title: "Luxury Flat",
      meta_description: "Luxury Flat",
    },
  },
  {
    id: 4,
    title: "Rocksolid Family Home",
    route: "rocksolid-family-home",
    featured_img: residentialImg4,
    price: "2.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Ghuma",
      route: "ghuma",
      zone: {
        title: "Zone 1",
        route: "zone-1",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 5,
    title: "Luxury Villa",
    route: "luxury-villaa",
    featured_img: residentialImg2,
    price: "80.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "SP Ring Road",
      route: "sp-ring-road",
      zone: {
        title: "Zone 1",
        route: "zone-1",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 6,
    title: "Rocksolid Family Home",
    route: "rocksolid-family-homee",
    featured_img: residentialImg4,
    price: "3.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Satellite",
      route: "satellite",
      zone: {
        title: "Zone 2",
        route: "zone-2",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 7,
    title: "Equestrian Family Home",
    route: "equestrian-family-homee",
    featured_img: residentialImg1,
    price: "3.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Vastrapur",
      route: "vastrapur",
      zone: {
        title: "Zone 2",
        route: "zone-2",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 8,
    title: "Luxury Flat",
    route: "luxury-flatt",
    featured_img: residentialImg3,
    price: "1.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Bodakdev",
      route: "bodakdev",
      zone: {
        title: "Zone 2",
        route: "zone-2",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 9,
    title: "Equestrian Family Home",
    route: "equestrian-family-homeee",
    featured_img: residentialImg1,
    price: "5.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Sindhubhavan",
      route: "sindhubhavan",
      zone: {
        title: "Zone 2",
        route: "zone-2",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 10,
    title: "Luxury Flat",
    route: "luxury-flattt",
    featured_img: residentialImg3,
    price: "1.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Iscon-Ambli",
      route: "iscon-ambli",
      zone: {
        title: "Zone 2",
        route: "zone-2",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 11,
    title: "Rocksolid Family Home",
    route: "rocksolid-family-homeee",
    featured_img: residentialImg4,
    price: "2.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Prahladnagar",
      route: "prahladnagar",
      zone: {
        title: "Zone 2",
        route: "zone-2",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 12,
    title: "Luxury Villa",
    route: "luxury-villaaa",
    featured_img: residentialImg4,
    price: "1.2Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [sliderImg, sliderImg, sliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Residential",
      route: "residential",
      banner_image: residentialbanner,
      seo: {
        meta_title:
          "Luxury Homes for Sale | Exclusive Listings by Newedge Realty",
        meta_description:
          "Make your dream home come true with Newedge Realty. Browse from list of exquisite designs and world-class amenities.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Thaltej",
      route: "thaltej",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
      galleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Tower",
        value: "5",
        icon: "",
      },
      {
        id: 2,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 3,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
      {
        id: 4,
        name: "Per Floor Unit",
        value: "3",
        icon: "",
      },
      {
        id: 5,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Number of Lifts",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 13,
    title: "Corp Build Mani",
    route: "corp-build-mani",
    featured_img: commercialImg1,
    price: "95.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Shilaj",
      route: "shilaj",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 14,
    title: "Apex Corp Zone 3",
    route: "apex-corp-zone-3",
    featured_img: commercialImg2,
    price: "3.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Hebatpur",
      route: "hebatpur",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 15,
    title: "Multiplex Zone 3",
    route: "multiplex-zone-32",
    featured_img: commercialImg3,
    price: "4.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Sola",
      route: "sola",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 16,
    title: "Headquarter Mania",
    route: "headquarter-mania",
    featured_img: commercialImg4,
    price: "2.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Science City",
      route: "science-city",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 17,
    title: "Apex Corp Zone 3",
    route: "apex-corp-zone-3q",
    featured_img: commercialImg2,
    price: "1.2Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Drive-in Road",
      route: "drive-in-road",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 18,
    title: "Headquarter Mania",
    route: "headquarter-maniaq",
    featured_img: commercialImg4,
    price: "2.1Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Gota",
      route: "gota",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 19,
    title: "Corp Build Mani",
    route: "corp-build-manii",
    featured_img: commercialImg1,
    price: "50.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Vaishnodevi",
      route: "vaishnodevi",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 20,
    title: "Multiplex Zone 4",
    route: "multiplex-zone-4e",
    featured_img: commercialImg3,
    price: "2.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Jagatpur",
      route: "jagatpur",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 21,
    title: "Corp Build Mani",
    route: "corp-build-maniii",
    featured_img: commercialImg1,
    price: "55.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Chharodi",
      route: "chharodi",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 22,
    title: "Apex Corp Zone 4",
    route: "apex-corp-zone-4e",
    featured_img: commercialImg4,
    price: "1.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Tragad",
      route: "tragad",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 23,
    title: "Headquarter Mania",
    route: "headquarter-maniaw",
    featured_img: commercialImg2,
    price: "1.3Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Khoraj",
      route: "khoraj",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 24,
    title: "Multiplex Zone 5",
    route: "multiplex-zone-5r",
    featured_img: commercialImg3,
    price: "2.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    project_status: "Under Construction",
    property_sub_type: "Apartment, Retail",
    rera: "PBRERA-ASR03-PR0498",
    property_type: {
      title: "Commercial",
      route: "commercial",
      banner_image: commercialbanner,
      seo: {
        meta_title:
          "Commercial Real Estate in Dubai| Office Space for Rent | Newedge Realty",
        meta_description:
          "Top-tier commercial properties and flexible office spaces are available for lease with Newedge Realty. Explore options today!",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Ashram road",
      route: "ashram-road",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Total Floor",
        value: "14",
        icon: "",
      },
      {
        id: 2,
        name: "Total unit",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Showroom Floor Height",
        value: "6",
        icon: "",
      },
      {
        id: 4,
        name: "Showroom Size Starting from",
        value: "4",
        icon: "",
      },
      {
        id: 5,
        name: "Office Floor Height",
        value: "4",
        icon: "",
      },
      {
        id: 6,
        name: "Office Size starting from",
        value: "6",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 25,
    title: "Corp Build Mani",
    route: "corp-build-maniw",
    featured_img: commercialImg1,
    price: "65.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "C G Road",
      route: "c-g-road",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 26,
    title: "Apex Corp Zone 5",
    route: "apex-corp-zone-5r",
    featured_img: commercialImg2,
    price: "3.6Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Mithakhali",
      route: "mithakhali",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 27,
    title: "Multiplex Zone 5",
    route: "multiplex-zone-5t",
    featured_img: commercialImg3,
    price: "2.7Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Navrangpura",
      route: "navrangpura",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 28,
    title: "Headquarter Mania",
    route: "headquarter-maniae",
    featured_img: commercialImg4,
    price: "5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Ellis-bridge",
      route: "ellis-bridge",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 29,
    title: "Apex Corp Zone 5",
    route: "apex-corp-zone-5t",
    featured_img: commercialImg2,
    price: "5.5Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Ambawadi",
      route: "ambawadi",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 30,
    title: "Headquarter Mania",
    route: "headquarter-maniar",
    featured_img: commercialImg4,
    price: "10.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Vadaj",
      route: "vadaj",
      zone: {
        title: "Zone 6",
        route: "zone-6",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 31,
    title: "Corp Build Mani",
    route: "corp-build-manie",
    featured_img: commercialImg1,
    price: "95.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Sabarmati",
      route: "sabarmati",
      zone: {
        title: "Zone 6",
        route: "zone-6",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 32,
    title: "Multiplex Zone 6",
    route: "multiplex-zone-6u",
    featured_img: commercialImg3,
    price: "2.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "New Chandkheda",
      route: "new-chandkheda",
      zone: {
        title: "Zone 6",
        route: "zone-6",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 33,
    title: "Corp Build Mani",
    route: "corp-build-manir",
    featured_img: commercialImg1,
    price: "50.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Zundal",
      route: "zundal",
      zone: {
        title: "Zone 6",
        route: "zone-6",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 34,
    title: "Apex Corp Zone 6",
    route: "apex-corp-zone-6y",
    featured_img: commercialImg4,
    price: "1.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Motera",
      route: "motera",
      zone: {
        title: "Zone 6",
        route: "zone-6",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 35,
    title: "Headquarter Mania",
    route: "headquarter-maniat",
    featured_img: commercialImg2,
    price: "3.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Bhat",
      route: "bhat",
      zone: {
        title: "Zone 6",
        route: "zone-6",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 36,
    title: "Multiplex Zone 1",
    route: "multiplex-zone-1j",
    featured_img: commercialImg3,
    price: "2.0Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    company_type: "Lorem Ipsum",
    lease_duration: "Lorem Ipsum",
    monthly_rent: "25",
    property_location: "Lorem Ipsum",
    area: "1260sqft",
    roi: "12%",
    property_type: {
      title: "Pre-Leased",
      route: "pre-leased",
      banner_image: preleasedbanner,
      seo: {
        meta_title:
          "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
        meta_description:
          "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Shela",
      route: "shela",
      zone: {
        title: "Zone 1",
        route: "zone-1",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Property Floor",
        value: "3",
        icon: "",
      },
      {
        id: 2,
        name: "Super built-up Area",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Security Deposit",
        value: "4",
        icon: "",
      },
      {
        id: 4,
        name: "Type of Lease",
        value: "6",
        icon: "",
      },
      {
        id: 5,
        name: "Lock in Period",
        value: "2",
        icon: "",
      },
      {
        id: 6,
        name: "Escalation",
        value: "4",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 37,
    title: "Corp Build Mani",
    route: "corp-build-manio",
    featured_img: commercialImg1,
    price: "65.5L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Hebatpur",
      route: "hebatpur",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 38,
    title: "Apex Corp Zone 3",
    route: "apex-corp-zone-3f",
    featured_img: commercialImg2,
    price: "1.8Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Sola",
      route: "sola",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 39,
    title: "Multiplex Zone 3",
    route: "multiplex-zone-3x",
    featured_img: commercialImg3,
    price: "2.6Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Science City",
      route: "science-city",
      zone: {
        title: "Zone 3",
        route: "zone-3",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 40,
    title: "Headquarter Mania",
    route: "headquarter-maniap",
    featured_img: commercialImg4,
    price: "2.3Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Gota",
      route: "gota",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 41,
    title: "Apex Corp Zone 4",
    route: "apex-corp-zone-4g",
    featured_img: commercialImg2,
    price: "1.3Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Vaishnodevi",
      route: "vaishnodevi",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 42,
    title: "Headquarter Mania",
    route: "headquarter-maniaa",
    featured_img: commercialImg4,
    price: "2.2Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Jagatpur",
      route: "jagatpur",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 43,
    title: "Corp Build Mani",
    route: "corp-build-manip",
    featured_img: commercialImg1,
    price: "57.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Chharodi",
      route: "chharodi",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 44,
    title: "Multiplex Zone 4",
    route: "multiplex-zone-4z",
    featured_img: commercialImg3,
    price: "4.2Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Tragad",
      route: "tragad",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 45,
    title: "Corp Build Mani",
    route: "corp-build-mania",
    featured_img: commercialImg1,
    price: "85.0L",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Khoraj",
      route: "khoraj",
      zone: {
        title: "Zone 4",
        route: "zone-4",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 46,
    title: "Apex Corp Zone 5",
    route: "apex-corp-zone-5h",
    featured_img: commercialImg4,
    price: "3.1Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Ashram road",
      route: "ashram-road",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 47,
    title: "Headquarter Mania",
    route: "headquarter-manias",
    featured_img: commercialImg2,
    price: "1Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "C G Road",
      route: "c-g-road",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
  {
    id: 48,
    title: "Multiplex Zone 5",
    route: "multiplex-zone-5l",
    featured_img: commercialImg3,
    price: "2.3Cr",
    long_description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>`,
    slider_image: [comSliderImg, comSliderImg, comSliderImg],
    tagline: "Lorem Ipsum",
    property_location: "Mumbai",
    property_type: {
      title: "Farmhouse",
      route: "farmhouse",
      banner_image: farmhousebanner,
      seo: {
        meta_title:
          "Luxury Farmhouse Retreats in India | Tranquil Getaways| Newedge Realty",
        meta_description:
          "Discover exquisite luxury farmhouses in India, where serene landscapes meet modern comforts. Perfect for investment.",
      },
    },
    developer: {
      inner_page_image: developerImg,
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>",
      brochure:
        "http://147.93.102.47:8000/Newedge_Profile_2023.pdf",
    },
    location: {
      title: "Mithakhali",
      route: "mithakhali",
      zone: {
        title: "Zone 5",
        route: "zone-5",
      },
    },
    gallery_image: [
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
      comGalleryImg,
    ],
    key_details: [
      {
        id: 1,
        name: "Size of the land",
        value: "1250",
        icon: "",
      },
      {
        id: 2,
        name: "Size of the Plots",
        value: "2",
        icon: "",
      },
      {
        id: 3,
        name: "Types of villa",
        value: "7 Villa Designs",
        icon: "",
      },
      {
        id: 4,
        name: "Unit Type",
        value: "3 BHK, 4 BHK",
        icon: "",
      },
    ],
    amenities: [
      {
        id: 1,
        name: "Parking",
        icon: "",
      },
      {
        id: 2,
        name: "Wifi",
        icon: "",
      },
      {
        id: 3,
        name: "Shopes",
        icon: "",
      },
      {
        id: 4,
        name: "Park",
        icon: "",
      },
      {
        id: 5,
        name: "Market",
        icon: "",
      },
      {
        id: 6,
        name: "Bus Stop",
        icon: "",
      },
    ],
  },
];

export default projectsData;
