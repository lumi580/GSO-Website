/**
 * College bodies where graduate students hold a GSO seat
 * (from the 2026–27 SG committee appointments sheet).
 */
export const committeeGroups = [
  {
    body: "GSO & Brooklyn College Association",
    committees: [
      "Policy Council",
      "PC Committee on Faculty-Student Relations",
      "BCA Board",
      "BCA Budget Committee",
      "Tech Fee Committee",
      "College-Wide Election Review Committee",
    ],
  },
  {
    body: "Campus Services",
    committees: [
      "Student Services Corporation Advisory Committee",
      "Student Center Advisory Committee",
      "Auxiliary Enterprise Committee",
      "Advisory Committee on Campus Security",
      "Space Scheduling",
    ],
  },
  {
    body: "Faculty Council",
    committees: [
      "Graduate Curriculum & Degree Requirements",
      "Faculty-Student Disciplinary Committee",
      "Campus Planning",
      "Faculty Council Student Liaison",
    ],
  },
];

export const committeeCount = committeeGroups.reduce(
  (n, group) => n + group.committees.length,
  0
);
