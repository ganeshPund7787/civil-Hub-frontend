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
