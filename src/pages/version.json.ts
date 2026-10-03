import { BUILD } from '../lib/build';

export function GET() {
  return Response.json({ build: BUILD });
}
