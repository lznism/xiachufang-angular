export interface HttpResponse {
    code: number;
    data?: any;
    message?: string;
    isRedirect?: boolean;
    redirectUrl: string;
}