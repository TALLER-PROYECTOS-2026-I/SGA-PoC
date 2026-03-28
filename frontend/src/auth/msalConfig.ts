import type { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "ebcc548b-5247-4bbe-8250-e943776b4490",
    authority: "https://login.microsoftonline.com/98201fef-d9f6-4e68-84f5-c2705074e342",
    redirectUri: "http://localhost:5001/",
  },
};