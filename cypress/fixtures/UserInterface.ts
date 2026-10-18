import { Gender } from '../utils/RegisterUtils';

export interface IUser {
  gender: Gender;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
