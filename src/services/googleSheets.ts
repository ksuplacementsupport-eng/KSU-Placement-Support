import { getAccessToken } from './auth';
import { CandidateRegistrationFormData, HiringRequirementFormData, TrainingEnquiryFormData } from '../types';

export const SHEET_NAME_CANDIDATES = 'Candidate Registrations';
export const SHEET_NAME_EMPLOYERS = 'Employer Requisitions';
export const SHEET_NAME_INQUIRIES = 'Training & Quick Inquiries';

export const CANDIDATE_HEADERS = [
  'Timestamp',
  'Full Name',
  'Mobile Number',
  'Email',
  'Current Location',
  'Preferred Location',
  'Highest Qualification',
  'Experience',
  'Primary Domain',
  'Expected Salary',
  'Notice Period',
  'Key Skills',
  'Consent Agreed',
];

export const EMPLOYER_HEADERS = [
  'Timestamp',
  'Company Name',
  'Contact Person',
  'Designation',
  'Mobile Number',
  'Business Email',
  'Company Location',
  'Job Role',
  'Vacancies',
  'Required Qualification',
  'Required Experience',
  'Salary Budget',
  'Job Type',
  'Preferred Joining Date',
  'Description & Skills',
];

export const INQUIRY_HEADERS = [
  'Timestamp',
  'Inquiry Type',
  'Organization / Name',
  'Contact Person',
  'Phone Number',
  'Email',
  'Topics / Message',
  'Participant Count / Timeline',
];

// Helper to get or set active spreadsheet ID
const STORAGE_KEY_SHEET_ID = 'ksu_active_spreadsheet_id';
const STORAGE_KEY_WEBHOOK = 'ksu_sheet_webhook_url';
const STORAGE_KEY_OFFLINE_QUEUE = 'ksu_pending_offline_submissions';

export const getStoredSpreadsheetId = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY_SHEET_ID);
  } catch (e) {
    return null;
  }
};

export const setStoredSpreadsheetId = (id: string) => {
  try {
    localStorage.setItem(STORAGE_KEY_SHEET_ID, id);
  } catch (e) {
    console.warn('Could not persist spreadsheet ID:', e);
  }
};

export const getStoredWebhookUrl = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY_WEBHOOK);
  } catch (e) {
    return null;
  }
};

export const setStoredWebhookUrl = (url: string) => {
  try {
    localStorage.setItem(STORAGE_KEY_WEBHOOK, url);
  } catch (e) {
    console.warn('Could not persist webhook URL:', e);
  }
};

// Queue handling for public submissions when admin is not signed in
export interface QueuedSubmission {
  id: string;
  type: 'candidate' | 'employer' | 'training' | 'quick';
  timestamp: string;
  data: any;
}

export const getQueuedSubmissions = (): QueuedSubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_OFFLINE_QUEUE);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const queueSubmission = (submission: Omit<QueuedSubmission, 'id' | 'timestamp'>) => {
  const current = getQueuedSubmissions();
  const newItem: QueuedSubmission = {
    ...submission,
    id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };
  current.push(newItem);
  try {
    localStorage.setItem(STORAGE_KEY_OFFLINE_QUEUE, JSON.stringify(current));
  } catch (e) {
    console.warn('Could not queue submission locally:', e);
  }
  return newItem;
};

export const clearQueuedSubmissions = () => {
  try {
    localStorage.removeItem(STORAGE_KEY_OFFLINE_QUEUE);
  } catch (e) {
    console.warn('Could not clear queue:', e);
  }
};

// Google Sheets REST API Wrappers

/**
 * Creates a brand new Google Spreadsheet in the user's Drive with structured tabs
 */
export const createKSUSpreadsheet = async (): Promise<{ spreadsheetId: string; url: string }> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Not authenticated with Google Workspace. Please sign in first.');

  const body = {
    properties: {
      title: 'KSU Placement Support — Inquiries & Candidate Registry',
    },
    sheets: [
      {
        properties: {
          title: SHEET_NAME_CANDIDATES,
          gridProperties: { rowCount: 1000, columnCount: 15, frozenRowCount: 1 },
        },
      },
      {
        properties: {
          title: SHEET_NAME_EMPLOYERS,
          gridProperties: { rowCount: 1000, columnCount: 18, frozenRowCount: 1 },
        },
      },
      {
        properties: {
          title: SHEET_NAME_INQUIRIES,
          gridProperties: { rowCount: 1000, columnCount: 12, frozenRowCount: 1 },
        },
      },
    ],
  };

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Failed to create Google Spreadsheet');
  }

  const result = await response.json();
  const spreadsheetId = result.spreadsheetId;

  // Initialize header rows on all sheets
  await appendRowToSheet(spreadsheetId, SHEET_NAME_CANDIDATES, CANDIDATE_HEADERS);
  await appendRowToSheet(spreadsheetId, SHEET_NAME_EMPLOYERS, EMPLOYER_HEADERS);
  await appendRowToSheet(spreadsheetId, SHEET_NAME_INQUIRIES, INQUIRY_HEADERS);

  setStoredSpreadsheetId(spreadsheetId);

  return {
    spreadsheetId,
    url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
  };
};

/**
 * Appends a row of values to a specific sheet tab
 */
export const appendRowToSheet = async (
  spreadsheetId: string,
  sheetName: string,
  rowValues: (string | number)[]
) => {
  const token = await getAccessToken();
  if (!token) throw new Error('Google Workspace access token missing.');

  const encodedRange = encodeURIComponent(`${sheetName}!A:A`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      range: `${sheetName}!A:A`,
      majorDimension: 'ROWS',
      values: [rowValues],
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || `Failed to append row to ${sheetName}`);
  }

  return response.json();
};

/**
 * Appends candidate registration data directly to the active Google Sheet
 */
export const saveCandidateToSheet = async (data: CandidateRegistrationFormData): Promise<boolean> => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const row = [
    timestamp,
    data.fullName,
    data.phone,
    data.email || 'N/A',
    data.currentLocation,
    data.preferredJobLocation,
    data.highestQualification,
    data.totalExperience,
    data.primaryDomain,
    data.expectedSalary || 'N/A',
    data.noticePeriod,
    data.keySkills || 'N/A',
    data.consentAgreed ? 'Yes (Verified Consent)' : 'No',
  ];

  // Try optional Webhook if user configured Google Apps Script endpoint
  const webhookUrl = getStoredWebhookUrl();
  if (webhookUrl) {
    try {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'candidate', timestamp, data }),
        mode: 'no-cors',
      }).catch((e) => console.warn('Webhook post:', e));
    } catch (e) {
      // ignore webhook failures
    }
  }

  const spreadsheetId = getStoredSpreadsheetId();
  const token = await getAccessToken();

  if (spreadsheetId && token) {
    try {
      await appendRowToSheet(spreadsheetId, SHEET_NAME_CANDIDATES, row);
      return true;
    } catch (err) {
      console.warn('Direct Google Sheet append failed, queuing for admin sync:', err);
      queueSubmission({ type: 'candidate', data });
      return false;
    }
  } else {
    // Queue locally for instant admin sync
    queueSubmission({ type: 'candidate', data });
    return false;
  }
};

/**
 * Appends employer hiring requirement data directly to the active Google Sheet
 */
export const saveEmployerToSheet = async (data: HiringRequirementFormData): Promise<boolean> => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const row = [
    timestamp,
    data.companyName,
    data.contactPerson,
    data.designation || 'N/A',
    data.mobileNumber,
    data.businessEmail || 'N/A',
    data.companyLocation,
    data.jobRole,
    data.vacanciesCount || '1',
    data.requiredQualification || 'N/A',
    data.requiredExperience || 'N/A',
    data.expectedSalaryRange || 'N/A',
    data.jobType,
    data.preferredJoiningDate || 'Immediate',
    data.jobDescription || 'N/A',
  ];

  const webhookUrl = getStoredWebhookUrl();
  if (webhookUrl) {
    try {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'employer', timestamp, data }),
        mode: 'no-cors',
      }).catch((e) => console.warn('Webhook post:', e));
    } catch (e) {
      // ignore
    }
  }

  const spreadsheetId = getStoredSpreadsheetId();
  const token = await getAccessToken();

  if (spreadsheetId && token) {
    try {
      await appendRowToSheet(spreadsheetId, SHEET_NAME_EMPLOYERS, row);
      return true;
    } catch (err) {
      console.warn('Direct Google Sheet append failed, queuing:', err);
      queueSubmission({ type: 'employer', data });
      return false;
    }
  } else {
    queueSubmission({ type: 'employer', data });
    return false;
  }
};

/**
 * Appends training enquiry data
 */
export const saveTrainingToSheet = async (data: TrainingEnquiryFormData): Promise<boolean> => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const row = [
    timestamp,
    'Corporate / HR Training',
    data.organizationName,
    data.contactPerson,
    data.phone,
    data.email || 'N/A',
    (data.trainingTopics || []).join(', '),
    `Participants: ${data.participantCount} | Timeline: ${data.preferredTimeline} | Note: ${data.notes || 'N/A'}`,
  ];

  const spreadsheetId = getStoredSpreadsheetId();
  const token = await getAccessToken();

  if (spreadsheetId && token) {
    try {
      await appendRowToSheet(spreadsheetId, SHEET_NAME_INQUIRIES, row);
      return true;
    } catch (err) {
      queueSubmission({ type: 'training', data });
      return false;
    }
  } else {
    queueSubmission({ type: 'training', data });
    return false;
  }
};

/**
 * Appends quick contact note
 */
export const saveQuickInquiryToSheet = async (
  name: string,
  phone: string,
  category: string,
  message: string
): Promise<boolean> => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const row = [
    timestamp,
    `Quick Note (${category})`,
    name,
    name,
    phone,
    'N/A',
    message || 'No message provided',
    category,
  ];

  const spreadsheetId = getStoredSpreadsheetId();
  const token = await getAccessToken();

  if (spreadsheetId && token) {
    try {
      await appendRowToSheet(spreadsheetId, SHEET_NAME_INQUIRIES, row);
      return true;
    } catch (err) {
      queueSubmission({ type: 'quick', data: { name, phone, category, message } });
      return false;
    }
  } else {
    queueSubmission({ type: 'quick', data: { name, phone, category, message } });
    return false;
  }
};

/**
 * Syncs all pending queued submissions to Google Sheets when user connects
 */
export const syncQueuedSubmissionsToSheet = async (
  spreadsheetId: string
): Promise<{ syncedCount: number; errors: number }> => {
  const queued = getQueuedSubmissions();
  if (queued.length === 0) return { syncedCount: 0, errors: 0 };

  let synced = 0;
  let errors = 0;
  const remaining: QueuedSubmission[] = [];

  for (const item of queued) {
    try {
      if (item.type === 'candidate') {
        const row = [
          item.timestamp,
          item.data.fullName,
          item.data.phone,
          item.data.email || 'N/A',
          item.data.currentLocation,
          item.data.preferredJobLocation,
          item.data.highestQualification,
          item.data.totalExperience,
          item.data.primaryDomain,
          item.data.expectedSalary || 'N/A',
          item.data.noticePeriod,
          item.data.keySkills || 'N/A',
          item.data.consentAgreed ? 'Yes' : 'No',
        ];
        await appendRowToSheet(spreadsheetId, SHEET_NAME_CANDIDATES, row);
      } else if (item.type === 'employer') {
        const row = [
          item.timestamp,
          item.data.companyName,
          item.data.contactPerson,
          item.data.designation || 'N/A',
          item.data.mobileNumber,
          item.data.businessEmail || 'N/A',
          item.data.companyLocation,
          item.data.jobRole,
          item.data.vacanciesCount || '1',
          item.data.requiredQualification || 'N/A',
          item.data.requiredExperience || 'N/A',
          item.data.expectedSalaryRange || 'N/A',
          item.data.jobType,
          item.data.preferredJoiningDate || 'Immediate',
          item.data.jobDescription || 'N/A',
        ];
        await appendRowToSheet(spreadsheetId, SHEET_NAME_EMPLOYERS, row);
      } else if (item.type === 'training') {
        const row = [
          item.timestamp,
          'Corporate / HR Training',
          item.data.organizationName,
          item.data.contactPerson,
          item.data.phone,
          item.data.email || 'N/A',
          (item.data.trainingTopics || []).join(', '),
          `Participants: ${item.data.participantCount} | Notes: ${item.data.notes || 'N/A'}`,
        ];
        await appendRowToSheet(spreadsheetId, SHEET_NAME_INQUIRIES, row);
      } else if (item.type === 'quick') {
        const row = [
          item.timestamp,
          `Quick Note (${item.data.category})`,
          item.data.name,
          item.data.name,
          item.data.phone,
          'N/A',
          item.data.message || 'N/A',
          item.data.category,
        ];
        await appendRowToSheet(spreadsheetId, SHEET_NAME_INQUIRIES, row);
      }
      synced++;
    } catch (e) {
      console.error('Error syncing queued item:', e);
      errors++;
      remaining.push(item);
    }
  }

  localStorage.setItem(STORAGE_KEY_OFFLINE_QUEUE, JSON.stringify(remaining));
  return { syncedCount: synced, errors };
};

/**
 * Reads row counts and sheet information
 */
export const getSpreadsheetOverview = async (spreadsheetId: string) => {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      title: data.properties?.title || 'KSU Placement Google Sheet',
      sheets: (data.sheets || []).map((s: any) => ({
        title: s.properties?.title,
        rowCount: s.properties?.gridProperties?.rowCount || 0,
      })),
    };
  } catch (e) {
    return null;
  }
};
