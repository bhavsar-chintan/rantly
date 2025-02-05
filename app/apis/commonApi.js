import API from "./config";

// Lead Form

export const postLeadForm = (formData) => {
  return API.post("/forms", formData);
};

// Project Inner API

export const postDeveloperContact = (formData) => {
  return API.post("/developer-contact-form", formData);
};

// brochure form

export const postBrochureForm = (formData) => {
  return API.post("/brochure-forms", formData);
};

// Faqs API

export const fetchFaqData = () => {
  return API.get("/faqs");
};

// Blogs API

export const fetchBlogData = () => {
  return API.get("/blogs");
};

export const fetchBlogDeatilsData = (id) => {
  return API.get(`/blogs/${id}`);
};

// Testimonials API

export const fetchTestimonialData = () => {
  return API.get("/testimonials");
};

// Developer API

export const fatchDeveloperList = () => {
  return API.get("/developers");
};

export const fatchDeveloperSingle = (id) => {
  return API.get(`/developers/${id}`);
};

export const fatchProjectsrList = () => {
  return API.get("/projects");
};
// Project API

export const fatchProjectList = () => {
  return API.get("/projects");
};

export const fatchProjectSingle = (id) => {
  return API.get(`/projects/${id}`);
};

// About API

export const fatchAboutData = () => {
  return API.get("/site-info/8");
};

// Zone-Locations API

export const fatchZonesList = () => {
  return API.get("/zones-with-locations");
};

// Home Banner Video

export const fatchHomeBannerVideo = () => {
  return API.get("/video-contents");
};

//  Pages API

export const fatchPagesContent = (route) => {
  return API.get(`/pages/${route}`);
};

//  Clients & Credentials API

export const fatchCredentialsClients = () => {
  return API.get(`/credentials`);
};
