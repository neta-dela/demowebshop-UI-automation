import { IUser } from '../fixtures/UserInterface';

export type Gender = 'male' | 'female';

export function getRandomGender(): Gender {
  const genders: Gender[] = ['male', 'female'];
  return genders[Math.floor(Math.random() * genders.length)];
}

export function getNewUser(): IUser {
  const password = `neta_${Date.now()}_${Math.random()}`;
  return {
    gender: getRandomGender(),
    firstName: 'Neta',
    lastName: 'Dela',
    email: `neta_${Date.now()}@test.com`,
    password: password,
    confirmPassword: password,
  };
}
