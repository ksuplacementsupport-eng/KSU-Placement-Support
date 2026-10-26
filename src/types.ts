export interface JobCategory {
  id: string;
  title: string;
  sector: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  qualifications: string;
  openingsEstimate?: string;
  status: 'Accepting Applications' | 'Immediate Requirement' | 'Screening Profiles';
}

export interface HiringRequirementFormData {
  companyName: string;
  contactPerson: string;
  designation: string;
  businessEmail: string;
  mobileNumber: string;
  companyLocation: string;
  jobRole: string;
  vacanciesCount: string;
  requiredQualification: string;
  requiredExperience: string;
  expectedSalaryRange: string;
  jobType: string;
  jobDescription: string;
  preferredJoiningDate: string;
}

export interface CandidateRegistrationFormData {
  fullName: string;
  phone: string;
  email: string;
  currentLocation: string;
  preferredJobLocation: string;
  highestQualification: string;
  totalExperience: string;
  primaryDomain: string;
  currentSalary: string;
  expectedSalary: string;
  noticePeriod: string;
  keySkills: string;
  consentAgreed: boolean;
}

export interface TrainingEnquiryFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  trainingTopics: string[];
  participantCount: string;
  preferredTimeline: string;
  notes: string;
}
