import { DEFAULT_TEAM_AVATAR } from '../config/media';

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  handle: string;
  status?: string;
  avatarUrl: string;
};

// Using a single default image for now; update avatarUrl per member later
export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Aarav Mehta',
    title: 'Club President',
    handle: 'aarav.mehta',
    status: 'Online',
    avatarUrl: DEFAULT_TEAM_AVATAR,
  },
  {
    id: '2',
    name: 'Diya Sharma',
    title: 'VP, Electronics',
    handle: 'diya.sharma',
    status: 'Away',
    avatarUrl: DEFAULT_TEAM_AVATAR,
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    title: 'SatCom Lead',
    handle: 'rohan.g',
    status: 'Online',
    avatarUrl: DEFAULT_TEAM_AVATAR,
  },
  {
    id: '4',
    name: 'Ishita Rao',
    title: 'Design & Outreach',
    handle: 'ishita.rao',
    status: 'Do not disturb',
    avatarUrl: DEFAULT_TEAM_AVATAR,
  },
  {
    id: '5',
    name: 'Kabir Singh',
    title: 'Hardware Lead',
    handle: 'kabirs',
    status: 'Offline',
    avatarUrl: DEFAULT_TEAM_AVATAR,
  },
];
