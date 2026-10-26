export type Club = {
  name: string;
  category: string;
  president: string;
  email: string;
};

// Registered graduate clubs for 2026–27 (from the "Club List 2026-2027" sheet), with each
// club's president as its point of contact. Categories are our grouping for
// the filter bar; the source list only marks these as "Graduate".
export const clubs: Club[] = [
  {
    name: "English Graduate Students Organization",
    category: "Academic & Professional",
    president: "Kenneth Schultz",
    email: "kenneth.schultz87@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "Feirstein AES Club",
    category: "Academic & Professional",
    president: "Gabriel Buzack",
    email: "gabriel.buzack19@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "Graduate Association of School Psychologists",
    category: "Academic & Professional",
    president: "Arlene Mercedes De La Crux",
    email: "arlene.mercedes@cuny.edu",
  },
  {
    name: "Graduate Industrial Organizational Psychology",
    category: "Academic & Professional",
    president: "Kiri Clancy",
    email: "kiri.clancy90@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "Graduate School Counseling Association",
    category: "Academic & Professional",
    president: "Cassandra Dragone",
    email: "cassandra.dragone01@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "Graduate Speech-Language Hearing Organization",
    category: "Academic & Professional",
    president: "Sienna O'Connor",
    email: "sienna.oconnor25@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "Graduate Art Student Union",
    category: "Arts & Performance",
    president: "Edwin Padilla Villa",
    email: "edwin.padillavilla67@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "Graduate Organization Directors of Theater",
    category: "Arts & Performance",
    president: "Samuel Plattus",
    email: "samuel.plattus38@stu-mail.brooklyn.cuny.edu",
  },
  {
    name: "The Brooklyn College Musical Theatre Collective",
    category: "Arts & Performance",
    president: "Ryan Martin",
    email: "ryan.martin@brooklyn.cuny.edu",
  },
  {
    name: "Feirstein Black Student Union",
    category: "Cultural & Identity",
    president: "Brian Wade",
    email: "brian.wade53@stu-mail.brooklyn.cuny.edu",
  },
];
