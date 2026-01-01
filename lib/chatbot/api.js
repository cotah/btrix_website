// PRODUCTION API URL - Hardcoded as fallback to ensure it works
const PRODUCTION_API_URL = "https://ai-chatbot-plataform.onrender.com";

// Try to read from environment variable, fallback to production URL
const API_BASE_URL = typeof window !== 'undefined' 
  ? (process.env.NEXT_PUBLIC_API_URL || PRODUCTION_API_URL)
  : (process.env.NEXT_PUBLIC_API_URL || PRODUCTION_API_URL);

// Debug logs
if (typeof window !== 'undefined') {
  console.log('🔍 DEBUG - NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
  console.log('🔍 DEBUG - PRODUCTION_API_URL:', PRODUCTION_API_URL);
  console.log('🔍 DEBUG - API_BASE_URL (final):', API_BASE_URL);
}

const CLIENT_KEY = typeof window !== 'undefined'
  ? (process.env.NEXT_PUBLIC_CLIENT_KEY || "")
  : "";

function getSessionId() {
  if (typeof window === 'undefined') return 'server-session';
  
  const key = "chat_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = `sess_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(key, id);
  }
  return id;
}

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  
  console.log('🌐 Making request to:', url);

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(CLIENT_KEY ? { "x-client-key": CLIENT_KEY } : {}),
      "x-session-id": getSessionId(),
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status} ${res.statusText} - ${text}`);
  }

  return res.json();
}

export async function chatAPI({
  message,
  conversationId,
  languageOverride,
  languageOnly = false,
}) {
  const body = { message };

  // NÃO envie null
  if (conversationId) body.conversationId = conversationId;
  if (languageOverride) body.languageOverride = languageOverride;

  return request("/api/chat", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
