import adilPhoto from "@/assets/team/adil-hussain-mughal.jpg";
import lumbardhPhoto from "@/assets/team/lumbardh-halitjaha.jpg";
import aniquePhoto from "@/assets/team/anique-gulston.jpg";
import tekeyahPhoto from "@/assets/team/tekeyah-howell.jpg";

/**
 * The people currently serving (titles and photos from the GSO page on
 * clubs.brooklyn.cuny.edu), with the college committees each sits on
 * (from the 2026–27 SG committee appointments sheet). Public site — names and
 * seats only; no personal contact details.
 */
type Member = {
  name: string;
  role: string;
  photo?: string;
  email?: string;
  committees: string[];
};

export const members: Member[] = [
  {
    name: "Adil Hussain Mughal",
    role: "President",
    photo: adilPhoto,
    email: "GSOPresident@brooklyn.cuny.edu",
    committees: [
      "Policy Council",
      "Faculty Council Student Liaison",
      "BCA GSO Representative",
      "BCA Budget Committee",
      "PC Committee on Faculty-Student Relations",
      "Auxiliary Enterprise Committee",
      "Tech Fee Committee",
      "Space Scheduling",
    ],
  },
  {
    name: "Anique Gulston",
    role: "Treasurer",
    photo: aniquePhoto,
    committees: [
      "Student Services Corporation Advisory Committee",
      "Campus Planning",
    ],
  },
  {
    name: "Tekeyah Howell",
    role: "Secretary",
    photo: tekeyahPhoto,
    committees: [
      "Student Services Corporation Advisory Committee",
      "Student Center Advisory Committee",
      "Graduate Curriculum & Degree Requirements",
    ],
  },
  {
    name: "Lumbardh Halitjaha",
    role: "Vice President",
    photo: lumbardhPhoto,
    committees: [
      "BCA GSO Alternate",
      "Student Services Corporation Advisory Committee",
      "Advisory Committee on Campus Security",
      "Tech Fee Committee",
    ],
  },
];
