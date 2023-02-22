const domain = process.env.API_URL || 'https://api.peacetime.xyz';
// const domain = process.env.API_URL || "http://localhost:4000";


interface CustomRequestInfo {
  url: string;
  options?: object;
}

const get = async ({ url, options }: CustomRequestInfo) => {
  try {
    let res = await fetch(url, {
      ...options,
      method: "GET",
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

const post = async ({ url, options }: CustomRequestInfo) => {
  try {
    let res = await fetch(url, {
      ...options,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

const send = async ( body: string) => {
  try {
    let res = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "key=AAAAONv6aZc:APA91bFW9eKHq_L0GTuCGSRiYB-dj-rjLJTrwhzzOPZg5-2DXxKRylB7VAwxUJc4p4FuVYFsC3_mo-2kcZV1vP4-YxfBrkD-UeuZFEO5E4GudRMXvAETSc0XLQTvAVvrrgvvTJiNRLaz" },
        body: body,
      });
    return res.json();
  } catch (error) {
    return null;
  }
};

const patch = async ({ url, options }: CustomRequestInfo) => {
  try {
    let res = await fetch(url, {
      ...options,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

const Api = {
  get,
  post,
  send,
  patch,
  URL_DOMAIN: domain,
  ADMIN_PROFILE: `${domain}/api/v1/admin/profile`,
  ADMIN_LOGIN: `${domain}/api/v1/admin/login`,
  ADMIN_LOGOUT: `${domain}/api/v1/admin/logout`,
  ADMIN_OFFERS: `${domain}/api/v1/admin/offer/getAll`,
  ADMIN_OFFER_CREATE: `${domain}/api/v1/admin/offer/store`,
  ADMIN_OFFER_CHANGE_STATUS: `${domain}/api/v1/admin/offer/change-status/`,
  ADMIN_OFFER_TRASH: `${domain}/api/v1/admin/offer/delete/`,
  ADMIN_OFFER_RESTORE: `${domain}/api/v1/admin/offer/restore/`,

  ADMIN_APP: `${domain}/api/v1/admin/app/getAll`,
  ADMIN_APP_CREATE: `${domain}/api/v1/admin/app/store`,
  ADMIN_APP_UPDATE: `${domain}/api/v1/admin/app/update/`,
  ADMIN_APP_CHANGE_STATUS: `${domain}/api/v1/admin/app/change-status/`,
  ADMIN_APP_TRASH: `${domain}/api/v1/admin/app/delete/`,
  ADMIN_APP_RESTORE: `${domain}/api/v1/admin/app/restore/`,

  USER_PROFILE: `${domain}/api/v1/admin/user/profile/`,
  USER_GAME_PROFILES: `${domain}/api/v1/admin/user/game-profiles/`,
  USER_GOLDS: `${domain}/api/v1/admin/user/golds/`,
  USER_TOPUP_LIST: `${domain}/api/v1/admin/user/topup/`,
  USER_NOTIFICATIONS: `${domain}/api/v1/admin/user/notifications/`,
  USER_ACCOUNT_LIST: `${domain}/api/v1/admin/user/accounts/`,

  ADMIN_USERS: `${domain}/api/v1/admin/user/getAll?`,
  ADMIN_USER_TRASH: `${domain}/api/v1/admin/user/delete/`,
  ADMIN_USER_RESTORE: `${domain}/api/v1/admin/user/restore/`,
  ADMIN_USER_CHANGE_STATUS: `${domain}/api/v1/admin/user/change-status/`,

  ADMIN_TOPUP: `${domain}/api/v1/admin/topup/getAll?`,
  ADMIN_TOPUP_TRASH: `${domain}/api/v1/admin/topup/delete/`,
  ADMIN_TOPUP_RESTORE: `${domain}/api/v1/admin/topup/restore/`,
  ADMIN_TOPUP_CANCEL: `${domain}/api/v1/admin/topup/canceled/`,
  ADMIN_TOPUP_REJECT: `${domain}/api/v1/admin/topup/rejected/`,
  ADMIN_TOPUP_COMPLETED: `${domain}/api/v1/admin/topup/completed/`,
  ADMIN_TOPUP_PROCCESSING: `${domain}/api/v1/admin/topup/proccessing/`,
  ADMIN_TOPUP_PENDING: `${domain}/api/v1/admin/topup/pending/`,
  ADMIN_TOPUP_DETAILS: `${domain}/api/v1/admin/topup/get/`,

  SETTINGS_EMERGENCY_ALERT_MESSAGE: `${domain}/api/v1/admin/settings/emergency-alert-message`,

  ADMIN_REPORTS_DASHBOARD: `${domain}/api/v1/admin/dashboard`,
  ADMIN_REPORTS_NEW_USERS_BY_DATE: `${domain}/api/v1/admin/new-users-by-date`,
  ADMIN_REPORTS_CLAIMED_GOLD_BY_DATE: `${domain}/api/v1/admin/claimed-gold-by-date`,
  ADMIN_REPORTS_CORS: `${domain}/api/v1/admin/cors`,

  PLACEHOLDER: `https://sabuj0338.github.io/portfolio/images/placeholder.png`,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default Api;
