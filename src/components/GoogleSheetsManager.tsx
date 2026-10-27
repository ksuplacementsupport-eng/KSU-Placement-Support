import React, { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  LogOut,
  AlertCircle,
  HelpCircle,
  X,
  UploadCloud,
  Layers,
  Settings2,
  Table,
  PlusCircle,
  ShieldCheck,
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  initAuth,
  googleSignIn,
  logoutGoogle,
  getAccessToken,
} from '../services/auth';
import {
  createKSUSpreadsheet,
  getStoredSpreadsheetId,
  setStoredSpreadsheetId,
  getStoredWebhookUrl,
  setStoredWebhookUrl,
  getQueuedSubmissions,
  syncQueuedSubmissionsToSheet,
  getSpreadsheetOverview,
  QueuedSubmission,
} from '../services/googleSheets';

interface GoogleSheetsManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetsManager: React.FC<GoogleSheetsManagerProps> = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [spreadsheetId, setSpreadsheetId] = useState<string>(getStoredSpreadsheetId() || '');
  const [inputCustomId, setInputCustomId] = useState('');
  const [webhookUrl, setWebhookUrl] = useState<string>(getStoredWebhookUrl() || '');
  const [isCreatingSheet, setIsCreatingSheet] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [queuedItems, setQueuedItems] = useState<QueuedSubmission[]>([]);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [sheetDetails, setSheetDetails] = useState<{ title: string; sheets: any[] } | null>(null);

  // Destructive operation confirmation modal state
  const [confirmModal, setConfirmModal] = useState<{
    show: boolean;
    title: string;
    description: string;
    action: () => Promise<void>;
  }>({
    show: false,
    title: '',
    description: '',
    action: async () => {},
  });

  const refreshQueue = () => {
    setQueuedItems(getQueuedSubmissions());
  };

  useEffect(() => {
    refreshQueue();
    const unsubscribe = initAuth(
      (user) => {
        setCurrentUser(user);
        refreshQueue();
      },
      () => {
        setCurrentUser(null);
        refreshQueue();
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (spreadsheetId && currentUser) {
      getSpreadsheetOverview(spreadsheetId).then((data) => {
        if (data) setSheetDetails(data);
      });
    }
  }, [spreadsheetId, currentUser]);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setIsLoadingAuth(true);
    setStatusMsg(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setCurrentUser(res.user);
        setStatusMsg({ type: 'success', text: `Connected as ${res.user.email}. Google Sheets access granted.` });
        refreshQueue();
      }
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Google authentication failed' });
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const handleLogout = async () => {
    await logoutGoogle();
    setCurrentUser(null);
    setSheetDetails(null);
    setStatusMsg({ type: 'info', text: 'Disconnected from Google account.' });
  };

  const handleCreateSheet = async () => {
    setIsCreatingSheet(true);
    setStatusMsg(null);
    try {
      const { spreadsheetId: newId, url } = await createKSUSpreadsheet();
      setSpreadsheetId(newId);
      setStatusMsg({
        type: 'success',
        text: 'Google Sheet created successfully with Candidate Registrations, Employer Requisitions & Inquiries tabs!',
      });
      // Immediately sync any pending submissions
      const syncRes = await syncQueuedSubmissionsToSheet(newId);
      refreshQueue();
      if (syncRes.syncedCount > 0) {
        setStatusMsg({
          type: 'success',
          text: `Google Sheet created and ${syncRes.syncedCount} queued submissions synced instantly!`,
        });
      }
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to create Google Sheet.' });
    } finally {
      setIsCreatingSheet(false);
    }
  };

  const handleSaveCustomId = () => {
    if (!inputCustomId.trim()) return;
    let cleanId = inputCustomId.trim();
    // Support pasting full URL
    const match = cleanId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      cleanId = match[1];
    }
    setStoredSpreadsheetId(cleanId);
    setSpreadsheetId(cleanId);
    setInputCustomId('');
    setStatusMsg({ type: 'success', text: 'Linked spreadsheet ID saved.' });
  };

  const handleSyncQueue = async () => {
    if (!spreadsheetId) {
      setStatusMsg({ type: 'error', text: 'Please create or link a Google Spreadsheet first.' });
      return;
    }
    const token = await getAccessToken();
    if (!token) {
      setStatusMsg({ type: 'error', text: 'Please sign in with Google to sync pending submissions.' });
      return;
    }

    setIsSyncing(true);
    try {
      const res = await syncQueuedSubmissionsToSheet(spreadsheetId);
      refreshQueue();
      setStatusMsg({
        type: 'success',
        text: `Successfully synced ${res.syncedCount} submission(s) to Google Sheets.${res.errors > 0 ? ` (${res.errors} failed)` : ''}`,
      });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Sync failed.' });
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSaveWebhook = () => {
    setStoredWebhookUrl(webhookUrl.trim());
    setStatusMsg({ type: 'success', text: 'Google Apps Script Webhook URL saved.' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-[#D8AC55]/40 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0B1F45] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#F36B12]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#FFF7E9] font-cinzel">Google Sheets Integration</h3>
              <p className="text-xs text-amber-200/80">Sync Candidate Registrations & Company Enquiries to Google Sheets</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-slate-800 text-xs">
          {/* Status Message */}
          {statusMsg && (
            <div
              className={`p-3 rounded-lg flex items-start gap-2.5 ${
                statusMsg.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : statusMsg.type === 'error'
                  ? 'bg-rose-50 text-rose-800 border border-rose-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="font-medium">{statusMsg.text}</span>
            </div>
          )}

          {/* Section 1: Authentication */}
          <div className="bg-[#FFF7E9]/60 p-4 rounded-xl border border-[#D8AC55]/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D94716] block">
                  Step 1 · Google Workspace Account
                </span>
                <h4 className="text-sm font-bold text-[#0B1F45]">
                  {currentUser ? `Connected: ${currentUser.email}` : 'Connect Your Google Account'}
                </h4>
                <p className="text-slate-600 mt-0.5">
                  Allows automatic appending of candidate & employer entries into your Google Spreadsheet.
                </p>
              </div>

              <div>
                {!currentUser ? (
                  <button
                    onClick={handleGoogleLogin}
                    disabled={isLoadingAuth}
                    className="gsi-material-button inline-flex items-center justify-center border border-slate-300 rounded-lg px-4 py-2 bg-white hover:bg-slate-50 transition-colors shadow-2xs font-semibold text-slate-700"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    <span>{isLoadingAuth ? 'Connecting...' : 'Sign in with Google'}</span>
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Disconnect</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Active Spreadsheet */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D94716] block">
              Step 2 · Target Google Sheet
            </span>

            {spreadsheetId ? (
              <div className="bg-emerald-50/50 p-3.5 rounded-lg border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-[#0B1F45]">
                      {sheetDetails?.title || 'KSU Placement Support — Inquiries & Registry'}
                    </span>
                  </div>
                  <a
                    href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-emerald-300 shadow-2xs"
                  >
                    <span>Open in Google Sheets</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 font-mono break-all">
                  Sheet ID: {spreadsheetId}
                </p>

                <div className="pt-2 border-t border-emerald-100 flex flex-wrap gap-2 text-[10px] text-slate-600">
                  <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                    Tab 1: Candidate Registrations
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                    Tab 2: Employer Requisitions
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                    Tab 3: Training & Quick Inquiries
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-slate-600">
                  You don't have an active Google Sheet linked yet. You can automatically create a pre-configured sheet with one click:
                </p>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleCreateSheet}
                    disabled={isCreatingSheet || !currentUser}
                    className="px-4 py-2.5 rounded-lg bg-[#F36B12] hover:bg-[#D94716] text-white font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>{isCreatingSheet ? 'Creating Sheet...' : '1-Click Create KSU Placement Sheet'}</span>
                  </button>
                </div>

                {!currentUser && (
                  <p className="text-[11px] text-amber-700 italic">
                    * Please sign in with Google above to create and link your spreadsheet.
                  </p>
                )}

                <div className="pt-3 border-t border-slate-200">
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Or Link an Existing Google Sheet ID / Link:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Paste Spreadsheet ID or full docs.google.com URL..."
                      value={inputCustomId}
                      onChange={(e) => setInputCustomId(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                    />
                    <button
                      onClick={handleSaveCustomId}
                      className="px-3 py-1.5 rounded-lg bg-[#0B1F45] text-white font-semibold hover:bg-[#152e61]"
                    >
                      Link
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Submissions Queue & Sync */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D94716] block">
                  Step 3 · Pending Inquiries Queue
                </span>
                <h4 className="text-sm font-bold text-[#0B1F45]">
                  {queuedItems.length} submission(s) currently stored in queue
                </h4>
              </div>
              <button
                onClick={handleSyncQueue}
                disabled={isSyncing || queuedItems.length === 0 || !currentUser}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-1.5 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : 'Sync All to Google Sheet'}</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-600">
              When visitors register or companies submit hiring needs, their data is securely queued and immediately synced to Google Sheets whenever you are connected!
            </p>

            {queuedItems.length > 0 && (
              <div className="max-h-36 overflow-y-auto space-y-1.5 border border-slate-200 rounded-lg p-2 bg-slate-50">
                {queuedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-[11px] bg-white p-1.5 rounded border border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold capitalize text-[#0B1F45]">
                        {item.type}: {item.data.fullName || item.data.companyName || item.data.name || item.data.organizationName}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{item.timestamp}</span>
                    </div>
                    <span className="text-amber-700 font-semibold text-[10px]">Pending Sync</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 4: Optional Webhook / Netlify Background Sync */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-[#0B1F45] font-bold">
              <Settings2 className="w-4 h-4 text-[#F36B12]" />
              <span>Optional: Direct Background Sync via Google Apps Script</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              If you want inquiries from external visitors on Netlify to silently post to your Google Sheet even when no admin is logged into this browser, you can paste a Google Apps Script Web App URL below:
            </p>
            <div className="flex gap-2 pt-1">
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/.../exec"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white"
              />
              <button
                onClick={handleSaveWebhook}
                className="px-3 py-1.5 rounded-lg bg-[#0B1F45] text-white font-semibold hover:bg-[#152e61]"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Google Workspace OAuth Token is held securely in memory only.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>

      {/* Confirmation Dialog for Destructive Operations */}
      {confirmModal.show && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-xl max-w-sm w-full p-5 shadow-2xl space-y-3">
            <h4 className="font-bold text-sm text-[#0B1F45]">{confirmModal.title}</h4>
            <p className="text-xs text-slate-600">{confirmModal.description}</p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setConfirmModal({ ...confirmModal, show: false })}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  setConfirmModal({ ...confirmModal, show: false });
                  await confirmModal.action();
                }}
                className="px-4 py-1.5 text-xs font-bold text-white bg-[#F36B12] hover:bg-[#D94716] rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
