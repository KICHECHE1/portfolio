export const contactDetails = {
  // This address already exists in the portfolio. Keep public contact details
  // separate from the private delivery destination configured on the server.
  email: "hello@jumasaidi.com",
  profiles: {
    linkedin: null as string | null, // Add a verified personal LinkedIn URL.
    github: null as string | null, // Add a verified personal GitHub URL.
  },
  otherProfiles: [] as { label: string; href: string }[],
};
