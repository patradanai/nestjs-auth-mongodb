import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const RequireAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
