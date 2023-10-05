export interface User {
    userId: number,
    userName: string,
    userEmail: string,
    password: string,
    role: string,
    otp: number,
    otpTime: Date
}