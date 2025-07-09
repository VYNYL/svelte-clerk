import { verifyWebhook as _verifyWebhook } from "@clerk/backend/webhooks";
export * from '@clerk/backend/webhooks';
export declare function verifyWebhook(...args: Parameters<typeof _verifyWebhook>): Promise<import("@clerk/backend/webhooks").WebhookEvent>;
