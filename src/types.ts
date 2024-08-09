import { ReactNode } from "react";

export type workExperienceType = {
  id?: string;
  jobTitle?: string;
  company?: string;
  experiance?: string;
  location?: string;
};

export type ProjectsType = {
  id?: string;
  title?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  role?: string;
  client?: string;
  teamSize?: number;
};

export type EducationType = {
  id?: string;
  degree?: string;
  fieldOfStudy?: string;
  university?: string;
  collegeName?: string;
};

export type CivilUserType = {
  email?: string;
  role?: string;
  isAdmin?: Boolean;
  password?: string;
  fullName?: string;
  dateOfBirth?: Date;
  photoUrl?: string;
  city?: string;
  state?: string;
  country?: string;
  bio?: string;
  workExperience?: workExperienceType[];
  education?: EducationType[];
  skills?: string[];
  certification?: string;
  projects?: ProjectsType[];
  language?: string;
};

export type ClientType = {
  _id?: string;
  role?: string;
  isAdmin?: Boolean;
  fullName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  company?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  profilePictureUrl?: string;
  website?: string;
  bio?: string;
};

export type PostType = {
  _id?: any;
  image?: string;
  userId?: any;
  description?: string | ReactNode;
  likes?: string[];
  comments?: {
    userId: string;
    comment: string;
  }[];
};

export type JobPostType = {
  _id?: string;
  clientId?: any;
  heading?: string;
  salary?: string;
  description?: string;
  experianceLevel?: string;
  skills?: string[];
  HoursePerWeak?: number;
  location?: string;
  lastUpdated?: Date;
};

// Name :text

// Taluka:text

// Gav:text

// Photo: file

// Address : textarea

// Adhar_no : 12 digit

// Adhar photo: file

// Birthdate : date

// Mobile no : 10 digit 

// Family Member: 5 input text      for family members 

// Caste : select tag

// registration_no: text

// registration_date : date

// Renewal_date : date

// Milalela_labh: select tag


// Tekedar_name
// Drag_down list name (select tag)

// Form_upload: file upload

// Shifaras_denayache_name: text

// Gav_pramukg Name: text


// Sabhad_fee
// New Sabhasad=400 Rs
// Old Sabhasad=200 Rs
// : Radio ,only one select here


// Form_satus
// Approved
// Pending
// Rejected : 
// Select tag


// Labh_sanch Milala
// Yes
// No : radio



// Helpful
// Yes