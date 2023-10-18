import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

function isAuthenticated() {
  try {
    verifyToken();
    return true;
  } catch {
    return false;
  }
}

function verifyToken() {
  const token = cookies().get('authorization')?.value ?? '';
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = decoded.sub as string;
  return userId;
}

export const auth = {
  isAuthenticated,
  verifyToken,
};
