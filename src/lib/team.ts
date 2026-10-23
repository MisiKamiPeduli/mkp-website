export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

// TODO: temporary data, replace with the real MKP 2027 team
export const teamMembers: TeamMember[] = Array.from({ length: 12 }, (_, i) => ({
  name: `Person ${i + 1}`,
  role: "Role",
  image: "/images/team/placeholder.jpg",
}));
