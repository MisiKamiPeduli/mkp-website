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

export type PastTeamMember = {
  name: string;
  role: string;
  // Programme division, or "Co-Project Directors" for the leadership group.
  division: string;
  study: string;
  // null when the source reused another member’s photo; shown as initials.
  image: string | null;
};

export type PastTeam = {
  year: number;
  members: PastTeamMember[];
};

export const TEAM_ARCHIVE_SOURCE =
  "https://directorsmkp.wixsite.com/misikamipeduli/meet-the-team";

// Past teams from every slide of the original Wix archive, directors first and
// then each division (head before members). Study programme and graduation
// year (’26 etc.) are as listed at the time of each programme.
export const pastTeams: PastTeam[] = [
  {
    "year": 2019,
    "members": [
      {
        "name": "Justinus",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’20",
        "image": "/images/team/2019/justinus.jpg"
      },
      {
        "name": "Shania Mustika",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Economics ’21",
        "image": "/images/team/2019/shania-mustika.jpg"
      },
      {
        "name": "Wilson Wongso",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’21",
        "image": "/images/team/2019/wilson-wongso.jpg"
      },
      {
        "name": "Alvina Nathania",
        "role": "Programme Head",
        "division": "Infrastructure",
        "study": "Civil Engineering ’21",
        "image": "/images/team/2019/alvina-nathania.jpg"
      },
      {
        "name": "Andrew Wijaya",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Mechanical Engineering ’22",
        "image": "/images/team/2019/andrew-wijaya.jpg"
      },
      {
        "name": "Anna Yenardi",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Architecture ’21",
        "image": "/images/team/2019/anna-yenardi.jpg"
      },
      {
        "name": "Eric Santoso",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Chemical Engineering ’21",
        "image": "/images/team/2019/eric-santoso.jpg"
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2019/hokiewan-thezeus.jpg"
      },
      {
        "name": "Ryvan Firdy",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Applied Mathematics ’20",
        "image": "/images/team/2019/ryvan-firdy.jpg"
      },
      {
        "name": "Radita Dionisius",
        "role": "Programme Head",
        "division": "Technology",
        "study": "Industrial Systems Engineering ’21",
        "image": "/images/team/2019/radita-dionisius.jpg"
      },
      {
        "name": "Alex Runako",
        "role": "Member",
        "division": "Technology",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2019/alex-runako.jpg"
      },
      {
        "name": "Christopher Williams",
        "role": "Member",
        "division": "Technology",
        "study": "Business Administration ’22",
        "image": "/images/team/2019/christopher-williams.jpg"
      },
      {
        "name": "Stefina Aryani Winoto",
        "role": "Member",
        "division": "Technology",
        "study": "Chemical Engineering ’22",
        "image": "/images/team/2019/stefina-aryani-winoto.jpg"
      },
      {
        "name": "William Ryan Kusnadi",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’22",
        "image": "/images/team/2019/william-ryan-kusnadi.jpg"
      },
      {
        "name": "Stephanie Gunawan",
        "role": "Programme Head",
        "division": "Education",
        "study": "Business Administration ’20",
        "image": "/images/team/2019/stephanie-gunawan.jpg"
      },
      {
        "name": "Agnes Natasya",
        "role": "Member",
        "division": "Education",
        "study": "Computational Biology ’22",
        "image": "/images/team/2019/agnes-natasya.jpg"
      },
      {
        "name": "Felita Eleonora",
        "role": "Member",
        "division": "Education",
        "study": "Harp Performance ’22",
        "image": "/images/team/2019/felita-eleonora.jpg"
      },
      {
        "name": "James Nicholas",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’20",
        "image": "/images/team/2019/james-nicholas.jpg"
      },
      {
        "name": "Raymond Victorio",
        "role": "Member",
        "division": "Education",
        "study": "Information Systems ’22",
        "image": "/images/team/2019/raymond-victorio.jpg"
      },
      {
        "name": "Shania Kesuma",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’22",
        "image": "/images/team/2019/shania-kesuma.jpg"
      },
      {
        "name": "Evelyn Aliansyah",
        "role": "Head",
        "division": "Publicity & Marketing",
        "study": "Pharmacy ’21",
        "image": "/images/team/2019/evelyn-aliansyah.jpg"
      },
      {
        "name": "Aldo Maximillian",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2019/aldo-maximillian.jpg"
      },
      {
        "name": "Clarissa Edeline Yu",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Environmental Studies ’22",
        "image": "/images/team/2019/clarissa-edeline-yu.jpg"
      },
      {
        "name": "Gabriela Leilani",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Industrial Systems Engineering ’21",
        "image": "/images/team/2019/gabriela-leilani.jpg"
      },
      {
        "name": "Winny Tjong",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Food Science & Technology ’21",
        "image": "/images/team/2019/winny-tjong.jpg"
      }
    ]
  },
  {
    "year": 2020,
    "members": [
      {
        "name": "Eric Santoso",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’21",
        "image": "/images/team/2020/eric-santoso.jpg"
      },
      {
        "name": "Shania Kesuma",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration ’22",
        "image": "/images/team/2020/shania-kesuma.jpg"
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2020/hokiewan-thezeus.jpg"
      },
      {
        "name": "Michelle Vania",
        "role": "Programme Head",
        "division": "Community Empowerment",
        "study": "Architecture ’22",
        "image": "/images/team/2020/michelle-vania.jpg"
      },
      {
        "name": "Alicia Rachel",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Mechanical Engineering ’23",
        "image": "/images/team/2020/alicia-rachel.jpg"
      },
      {
        "name": "Austen Jeremy",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Mechanical Engineering ’23",
        "image": "/images/team/2020/austen-jeremy.jpg"
      },
      {
        "name": "Joe Teddy",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Computer Science ’23",
        "image": "/images/team/2020/joe-teddy.jpg"
      },
      {
        "name": "Nathanael Septianto",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Mechanical Engineering ’22",
        "image": "/images/team/2020/nathanael-septianto.jpg"
      },
      {
        "name": "Rahmani Nitiyudo",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Communication and New Media ’22",
        "image": "/images/team/2020/rahmani-nitiyudo.jpg"
      },
      {
        "name": "Aldo Maximillian",
        "role": "Programme Head",
        "division": "Technology",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/aldo-maximillian.jpg"
      },
      {
        "name": "Francisco Chensan",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/francisco-chensan.jpg"
      },
      {
        "name": "Hubertus Adhy",
        "role": "Member",
        "division": "Technology",
        "study": "Information Security ’23",
        "image": "/images/team/2020/hubertus-adhy.jpg"
      },
      {
        "name": "Johanna",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’22",
        "image": "/images/team/2020/johanna.jpg"
      },
      {
        "name": "Jusuf Nathanael",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/jusuf-nathanael.jpg"
      },
      {
        "name": "Samuel Kristianto",
        "role": "Programme Head",
        "division": "Education",
        "study": "Data Science ’23",
        "image": "/images/team/2020/samuel-kristianto.jpg"
      },
      {
        "name": "Aileen",
        "role": "Member",
        "division": "Education",
        "study": "Nursing ’23",
        "image": "/images/team/2020/aileen.jpg"
      },
      {
        "name": "Aldrich Williams",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’23",
        "image": "/images/team/2020/aldrich-williams.jpg"
      },
      {
        "name": "Azza Sekarnova",
        "role": "Member",
        "division": "Education",
        "study": "Business Analytics ’23",
        "image": "/images/team/2020/azza-sekarnova.jpg"
      },
      {
        "name": "Livia Anjaneth",
        "role": "Member",
        "division": "Education",
        "study": "Medicine ’24",
        "image": "/images/team/2020/livia-anjaneth.jpg"
      },
      {
        "name": "Philip Alexander",
        "role": "Member",
        "division": "Education",
        "study": "Computer Science ’22",
        "image": null
      },
      {
        "name": "Hans Sebastian",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2020/hans-sebastian.jpg"
      },
      {
        "name": "Nadya Devani",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Data Science ’22",
        "image": "/images/team/2020/nadya-devani.jpg"
      },
      {
        "name": "Ivander Jonathan",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/ivander-jonathan.jpg"
      },
      {
        "name": "Ayu Utami Intaran",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Computational Biology ’24",
        "image": null
      }
    ]
  },
  {
    "year": 2021,
    "members": [
      {
        "name": "Shania Kesuma",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration ’22",
        "image": "/images/team/2021/shania-kesuma.jpg"
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2021/hokiewan-thezeus.jpg"
      },
      {
        "name": "Adhy Pratama",
        "role": "Content Production",
        "division": "Content Production",
        "study": "Information Security ’23",
        "image": "/images/team/2021/adhy-pratama.jpg"
      },
      {
        "name": "Dipasukha Edbert",
        "role": "Content Production",
        "division": "Content Production",
        "study": "Statistics ’23",
        "image": "/images/team/2021/dipasukha-edbert.jpg"
      },
      {
        "name": "Nicholas Lowie",
        "role": "Content Production",
        "division": "Content Production",
        "study": "Information System ’22",
        "image": "/images/team/2021/nicholas-lowie.jpg"
      },
      {
        "name": "Aldo",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2021/aldo.jpg"
      },
      {
        "name": "Audrey Gunawan",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Life Science ’25",
        "image": "/images/team/2021/audrey-gunawan.jpg"
      },
      {
        "name": "Gwyneth Guo",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Business Analytics ’25",
        "image": "/images/team/2021/gwyneth-guo.jpg"
      },
      {
        "name": "Jeremy Citrawira",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Data Science and Analytics ’25",
        "image": "/images/team/2021/jeremy-citrawira.jpg"
      },
      {
        "name": "Felishia Darianne",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Business Administration ’25",
        "image": "/images/team/2021/felishia-darianne.jpg"
      }
    ]
  },
  {
    "year": 2024,
    "members": [
      {
        "name": "Caren Harry Ho",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration (Accountancy) ’26",
        "image": "/images/team/2024/caren-harry-ho.jpg"
      },
      {
        "name": "William Arthur Mantofa",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration ’27",
        "image": "/images/team/2024/william-arthur-mantofa.jpg"
      },
      {
        "name": "Narita Chrysant Lautama",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Mechanical Engineering ’26",
        "image": "/images/team/2024/narita-chrysant-lautama.jpg"
      },
      {
        "name": "Novenda Ermina Fatra",
        "role": "Programme Head",
        "division": "Education",
        "study": "Chemical Engineering ’27",
        "image": "/images/team/2024/novenda-ermina-fatra.jpg"
      },
      {
        "name": "Cathlin Theophilus",
        "role": "Member",
        "division": "Education",
        "study": "Biomedical Engineering ’25",
        "image": "/images/team/2024/cathlin-theophilus.jpg"
      },
      {
        "name": "Richelle Darlene Putri Susanto",
        "role": "Member",
        "division": "Education",
        "study": "Life Science ’27",
        "image": "/images/team/2024/richelle-darlene-putri-susanto.jpg"
      },
      {
        "name": "Haruka Angeline Kosugi",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’26",
        "image": "/images/team/2024/haruka-angeline-kosugi.jpg"
      },
      {
        "name": "Felix Gilang Claychia",
        "role": "Member",
        "division": "Education",
        "study": "Mechanical Engineering ’27",
        "image": "/images/team/2024/felix-gilang-claychia-portrait.jpg"
      },
      {
        "name": "John Howard Wijaya",
        "role": "Programme Head",
        "division": "Technology",
        "study": "Mechanical Engineering ’27",
        "image": "/images/team/2024/john-howard-wijaya.jpg"
      },
      {
        "name": "Nicholas Jimmy Alden",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’25",
        "image": null
      },
      {
        "name": "Albert Ariel Widiaatmaja",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’25",
        "image": "/images/team/2024/albert-ariel-widiaatmaja.jpg"
      },
      {
        "name": "Bianca Diva",
        "role": "Member",
        "division": "Technology",
        "study": "Environmental Engineering ’26",
        "image": "/images/team/2024/bianca-diva.jpg"
      },
      {
        "name": "Cullen Sean",
        "role": "Member",
        "division": "Technology",
        "study": "Mechanical Engineering ’26",
        "image": "/images/team/2024/cullen-sean.jpg"
      },
      {
        "name": "Christopher Clement Sukandi",
        "role": "Member",
        "division": "Technology",
        "study": "Biomedical Engineering ’27",
        "image": null
      },
      {
        "name": "Andrian Hasif Tambunan",
        "role": "Member",
        "division": "Publicity",
        "study": "Communications and New Media ’26",
        "image": "/images/team/2024/andrian-hasif-tambunan.jpg"
      },
      {
        "name": "Catherine Liang",
        "role": "Member",
        "division": "Publicity",
        "study": "Computer Science ’26",
        "image": "/images/team/2024/catherine-liang.jpg"
      },
      {
        "name": "Fatima Hidaia Purawan",
        "role": "Member",
        "division": "Publicity",
        "study": "English Literature ’26",
        "image": "/images/team/2024/fatima-hidaia-purawan.jpg"
      },
      {
        "name": "Edward Jeremy Lo",
        "role": "Member",
        "division": "Public Relations",
        "study": "Yale-NUS Economics ’24",
        "image": "/images/team/2024/edward-jeremy-lo.jpg"
      },
      {
        "name": "Jonathan Christian Jacob",
        "role": "Member",
        "division": "Public Relations",
        "study": "Business Administration ’27",
        "image": "/images/team/2024/jonathan-christian-jacob.jpg"
      },
      {
        "name": "Melisa Abigail Thevandi",
        "role": "Member",
        "division": "Public Relations",
        "study": "Data Science and Analytics ’27",
        "image": "/images/team/2024/melisa-abigail-thevandi.jpg"
      },
      {
        "name": "Jayson Ng",
        "role": "Member",
        "division": "Public Relations",
        "study": "Data Science and Analytics ’27",
        "image": "/images/team/2024/jayson-ng.jpg"
      }
    ]
  }
];
