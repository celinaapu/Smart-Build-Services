export type SignUpData = {
    name: string;
    email: string;
    username: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
}
export interface CloseSideBar{
    onClose: () => void;
}