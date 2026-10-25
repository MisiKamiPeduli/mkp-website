export type TeamMember = {
  name: string;
  role: string;
  image: string;
  degree?: string;
  quote?: string;
};

export type TeamCohort = {
  year: number;
  members: TeamMember[];
};

export const TEAM_ARCHIVE_SOURCE =
  "https://directorsmkp.wixsite.com/misikamipeduli/meet-the-team";

// Names, roles, cohorts, and portraits follow MKP's original Wix team archive.
// These are historical teams, not the MKP 2027 roster. Newest cohort first.
export const teamCohorts: TeamCohort[] = [
  {
    "year": 2024,
    "members": [
      {
        "name": "Caren Harry Ho",
        "role": "Co-Project Director",
        "image": "/images/team/caren-harry-ho.jpg",
        "degree": "Business Administration (Accountancy) '26"
      },
      {
        "name": "William Arthur Mantofa",
        "role": "Co-Project Director",
        "image": "/images/team/william-arthur-mantofa.jpg",
        "degree": "Business Administration '27"
      },
      {
        "name": "Narita Chrysant Lautama",
        "role": "Co-Project Director",
        "image": "/images/team/narita-chrysant-lautama.jpg",
        "degree": "Mechanical Engineering '26"
      },
      {
        "name": "Novenda Ermina Fatra",
        "role": "Programme Head (Education)",
        "image": "/images/team/novenda-ermina-fatra.jpg",
        "degree": "Chemical Engineering '27"
      },
      {
        "name": "John Howard Wijaya",
        "role": "Programme Head (Technology)",
        "image": "/images/team/john-howard-wijaya.jpg",
        "degree": "Mechanical Engineering '27"
      },
      {
        "name": "Andrian Hasif Tambunan",
        "role": "Member (Publicity)",
        "image": "/images/team/andrian-hasif-tambunan.jpg",
        "degree": "Communications and New Media '26"
      },
      {
        "name": "Edward Jeremy Lo",
        "role": "Member (Public Relations)",
        "image": "/images/team/edward-jeremy-lo.jpg",
        "degree": "Yale-NUS Economics '24"
      },
      {
        "name": "Cathlin Theophilus",
        "role": "Member (Education)",
        "image": "/images/team/cathlin-theophilus.jpg",
        "degree": "Biomedical Engineering '25"
      },
      {
        "name": "Richelle Darlene Putri Susanto",
        "role": "Member (Education)",
        "image": "/images/team/richelle-darlene-putri-susanto.jpg",
        "degree": "Life Science '27"
      },
      {
        "name": "Haruka Angeline Kosugi",
        "role": "Member (Education)",
        "image": "/images/team/haruka-angeline-kosugi.jpg",
        "degree": "Business Administration '26"
      },
      {
        "name": "Felix Gilang Claychia",
        "role": "Member (Education)",
        "image": "/images/team/felix-gilang-claychia.jpg",
        "degree": "Mechanical Engineering '27"
      },
      {
        "name": "Nicholas Jimmy Alden",
        "role": "Member (Technology)",
        "image": "/images/team/nicholas-jimmy-alden.jpg",
        "degree": "Computer Science '25"
      },
      {
        "name": "Albert Ariel Widiaatmaja",
        "role": "Member (Technology)",
        "image": "/images/team/albert-ariel-widiaatmaja.jpg",
        "degree": "Computer Science '25"
      },
      {
        "name": "Bianca Diva",
        "role": "Member (Technology)",
        "image": "/images/team/bianca-diva.jpg",
        "degree": "Environmental Engineering '26"
      },
      {
        "name": "Cullen Sean",
        "role": "Member (Technology)",
        "image": "/images/team/cullen-sean.jpg",
        "degree": "Mechanical Engineering '26"
      },
      {
        "name": "Christopher Clement Sukandi",
        "role": "Member (Technology)",
        "image": "/images/team/nicholas-jimmy-alden.jpg",
        "degree": "Biomedical Engineering '27"
      },
      {
        "name": "Catherine Liang",
        "role": "Member (Publicity)",
        "image": "/images/team/catherine-liang.jpg",
        "degree": "Computer Science '26"
      },
      {
        "name": "Fatima Hidaia Purawan",
        "role": "Member (Publicity)",
        "image": "/images/team/fatima-hidaia-purawan.jpg",
        "degree": "English Literature '26"
      },
      {
        "name": "Jonathan Christian Jacob",
        "role": "Member (Public Relations)",
        "image": "/images/team/jonathan-christian-jacob.jpg",
        "degree": "Business Administration '27"
      },
      {
        "name": "Melisa Abigail Thevandi",
        "role": "Member (Public Relations)",
        "image": "/images/team/melisa-abigail-thevandi.jpg",
        "degree": "Data Science and Analytics '27"
      },
      {
        "name": "Jayson Ng",
        "role": "Member (Public Relations)",
        "image": "/images/team/jayson-ng.jpg",
        "degree": "Data Science and Analytics '27"
      }
    ]
  },
  {
    "year": 2021,
    "members": [
      {
        "name": "Shania Kesuma",
        "role": "Co-Project Director",
        "image": "/images/team/shania-kesuma.jpg",
        "degree": "Business Administration '22",
        "quote": "I wish to be a panda zookeeper"
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Co-Project Director",
        "image": "/images/team/hokiewan-thezeus.jpg",
        "degree": "Industrial Systems Engineering '22",
        "quote": "Always in need of anime recommendation"
      },
      {
        "name": "Adhy Pratama",
        "role": "Content Production",
        "image": "/images/team/adhy-pratama.jpg",
        "degree": "Information Security '23",
        "quote": "Due tomorrow? Do tomorrow"
      },
      {
        "name": "Dipasukha Edbert",
        "role": "Content Production",
        "image": "/images/team/dipasukha-edbert.jpg",
        "degree": "Statistics '23",
        "quote": "Marathon is just breathing with extra steps"
      },
      {
        "name": "Nicholas Lowie",
        "role": "Content Production",
        "image": "/images/team/nicholas-lowie.jpg",
        "degree": "Information System '22",
        "quote": "Just a boy who loves 2000s movies"
      },
      {
        "name": "Aldo",
        "role": "Training and Development",
        "image": "/images/team/aldo.jpg",
        "degree": "Industrial Systems Engineering '22",
        "quote": "Don’t forget to have fun"
      },
      {
        "name": "Audrey Gunawan",
        "role": "Training and Development",
        "image": "/images/team/audrey-gunawan.jpg",
        "degree": "Life Science '25",
        "quote": "10 years of mandarin lessons and still can't speak chinese"
      },
      {
        "name": "Gwyneth Guo",
        "role": "Training and Development",
        "image": "/images/team/gwyneth-guo.jpg",
        "degree": "Business Analytics '25",
        "quote": "Brb listening to kpop songs on repeat"
      },
      {
        "name": "Jeremy Citrawira",
        "role": "Training and Development",
        "image": "/images/team/jeremy-citrawira.jpg",
        "degree": "Data Sciene and Analytics '25",
        "quote": "Addicted to bubble tea"
      },
      {
        "name": "Felishia Darianne",
        "role": "Training and Development",
        "image": "/images/team/felishia-darianne.jpg",
        "degree": "Business Administration '25",
        "quote": "*changes outfit 27 times* *goes with first option*"
      }
    ]
  },
  {
    "year": 2020,
    "members": [
      {
        "name": "Eric Santoso",
        "role": "Co-Project Director",
        "image": "/images/team/eric-santoso.jpg",
        "degree": "Chemical Engineering '21"
      },
      {
        "name": "Shania Kesuma",
        "role": "Co-Project Director",
        "image": "/images/team/shania-kesuma.jpg",
        "degree": "Business Administration '22"
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Co-Project Director",
        "image": "/images/team/hokiewan-thezeus-2020.jpg",
        "degree": "Industrial Systems Engineering '22"
      },
      {
        "name": "Michelle Vania",
        "role": "Programme Head (Community Empowerment)",
        "image": "/images/team/michelle-vania.jpg",
        "degree": "Architecture '22"
      },
      {
        "name": "Aldo Maximillian",
        "role": "Programme Head (Technology)",
        "image": "/images/team/aldo-maximillian.jpg",
        "degree": "Computer Engineering '23"
      },
      {
        "name": "Samuel Kristianto",
        "role": "Programme Head (Education)",
        "image": "/images/team/samuel-kristianto.jpg",
        "degree": "Data Science '23"
      },
      {
        "name": "Hans Sebastian",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/hans-sebastian.jpg",
        "degree": "Industrial Systems Engineering '22"
      },
      {
        "name": "Alicia Rachel",
        "role": "Member (Community Empowerment)",
        "image": "/images/team/alicia-rachel.jpg",
        "degree": "Mechanical Engineering '23"
      },
      {
        "name": "Austen Jeremy",
        "role": "Member (Community Empowerment)",
        "image": "/images/team/austen-jeremy.jpg",
        "degree": "Mechanical Engineering '23"
      },
      {
        "name": "Joe Teddy",
        "role": "Member (Community Empowerment)",
        "image": "/images/team/joe-teddy.jpg",
        "degree": "Computer Science '23"
      },
      {
        "name": "Nathanael Septianto",
        "role": "Member (Community Empowerment)",
        "image": "/images/team/nathanael-septianto.jpg",
        "degree": "Mechanical Engineering '22"
      },
      {
        "name": "Rahmani Nitiyudo",
        "role": "Member (Community Empowerment)",
        "image": "/images/team/rahmani-nitiyudo.jpg",
        "degree": "Communication and New Media '22"
      },
      {
        "name": "Francisco Chensan",
        "role": "Member (Technology)",
        "image": "/images/team/francisco-chensan.jpg",
        "degree": "Computer Engineering '23"
      },
      {
        "name": "Hubertus Adhy",
        "role": "Member (Technology)",
        "image": "/images/team/hubertus-adhy.jpg",
        "degree": "Information Security '23"
      },
      {
        "name": "Johanna",
        "role": "Member (Technology)",
        "image": "/images/team/johanna.jpg",
        "degree": "Computer Science '22"
      },
      {
        "name": "Jusuf Nathanael",
        "role": "Member (Technology)",
        "image": "/images/team/jusuf-nathanael.jpg",
        "degree": "Computer Engineering '23"
      },
      {
        "name": "Aileen",
        "role": "Member (Education)",
        "image": "/images/team/aileen.jpg",
        "degree": "Nursing '23"
      },
      {
        "name": "Aldrich Williams",
        "role": "Member (Education)",
        "image": "/images/team/aldrich-williams.jpg",
        "degree": "Business Administration '23"
      },
      {
        "name": "Azza Sekarnova",
        "role": "Member (Education)",
        "image": "/images/team/azza-sekarnova.jpg",
        "degree": "Business Analytics '23"
      },
      {
        "name": "Livia Anjaneth",
        "role": "Member (Education)",
        "image": "/images/team/livia-anjaneth.jpg",
        "degree": "Medicine '24"
      },
      {
        "name": "Philip Alexander",
        "role": "Member (Education)",
        "image": "/images/team/philip-alexander.jpg",
        "degree": "Computer Science '22"
      },
      {
        "name": "Nadya Devani",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/nadya-devani.jpg",
        "degree": "Data Science '22"
      },
      {
        "name": "Ivander Jonathan",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/ivander-jonathan.jpg",
        "degree": "Computer Engineering '23"
      },
      {
        "name": "Ayu Utami Intaran",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/philip-alexander.jpg",
        "degree": "Computational Biology '24"
      }
    ]
  },
  {
    "year": 2019,
    "members": [
      {
        "name": "Justinus",
        "role": "Co-Project Director",
        "image": "/images/team/justinus.jpg",
        "degree": "Chemical Engineering '20"
      },
      {
        "name": "Shania Mustika",
        "role": "Co-Project Director",
        "image": "/images/team/shania-mustika.jpg",
        "degree": "Economics '21"
      },
      {
        "name": "Wilson Wongso",
        "role": "Co-Project Director",
        "image": "/images/team/wilson-wongso.jpg",
        "degree": "Chemical Engineering '21"
      },
      {
        "name": "Alvina Nathania",
        "role": "Programme Head (Infrastructure)",
        "image": "/images/team/alvina-nathania.jpg",
        "degree": "Civil Engineering '21"
      },
      {
        "name": "Radita Dionisius",
        "role": "Programme Head (Technology)",
        "image": "/images/team/radita-dionisius.jpg",
        "degree": "Industrial Systems Engineering '21"
      },
      {
        "name": "Stephanie Gunawan",
        "role": "Programme Head (Education)",
        "image": "/images/team/stephanie-gunawan.jpg",
        "degree": "Business Administration '20"
      },
      {
        "name": "Evelyn Aliansyah",
        "role": "Head (Publicity & Marketing)",
        "image": "/images/team/evelyn-aliansyah.jpg",
        "degree": "Pharmacy '21"
      },
      {
        "name": "Andrew Wijaya",
        "role": "Member (Infrastructure)",
        "image": "/images/team/andrew-wijaya.jpg",
        "degree": "Mechanical Engineering '22"
      },
      {
        "name": "Anna Yenardi",
        "role": "Member (Infrastructure)",
        "image": "/images/team/anna-yenardi.jpg",
        "degree": "Architecture '21"
      },
      {
        "name": "Eric Santoso",
        "role": "Member (Infrastructure)",
        "image": "/images/team/eric-santoso-2019.jpg",
        "degree": "Chemical Engineering '21"
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Member (Infrastructure)",
        "image": "/images/team/hokiewan-thezeus-2019.jpg",
        "degree": "Industrial Systems Engineering '22"
      },
      {
        "name": "Ryvan Firdy",
        "role": "Member (Infrastructure)",
        "image": "/images/team/ryvan-firdy.jpg",
        "degree": "Applied Mathematics '20"
      },
      {
        "name": "Alex Runako",
        "role": "Member (Technology)",
        "image": "/images/team/alex-runako.jpg",
        "degree": "Industrial Systems Engineering '22"
      },
      {
        "name": "Christopher Williams",
        "role": "Member (Technology)",
        "image": "/images/team/christopher-williams.jpg",
        "degree": "Business Administration '22"
      },
      {
        "name": "Stefina Aryani Winoto",
        "role": "Member (Technology)",
        "image": "/images/team/stefina-aryani-winoto.jpg",
        "degree": "Chemical Engineering '22"
      },
      {
        "name": "William Ryan Kusnadi",
        "role": "Member (Technology)",
        "image": "/images/team/william-ryan-kusnadi.jpg",
        "degree": "Computer Science '22"
      },
      {
        "name": "Agnes Natasya",
        "role": "Member (Education)",
        "image": "/images/team/agnes-natasya.jpg",
        "degree": "Computational Biology '22"
      },
      {
        "name": "Felita Eleonora",
        "role": "Member (Education)",
        "image": "/images/team/felita-eleonora.jpg",
        "degree": "Harp Performance '22"
      },
      {
        "name": "James Nicholas",
        "role": "Member (Education)",
        "image": "/images/team/james-nicholas.jpg",
        "degree": "Business Administration '20"
      },
      {
        "name": "Raymond Victorio",
        "role": "Member (Education)",
        "image": "/images/team/raymond-victorio.jpg",
        "degree": "Information Systems '22"
      },
      {
        "name": "Shania Kesuma",
        "role": "Member (Education)",
        "image": "/images/team/shania-kesuma-2019.jpg",
        "degree": "Business Administration '22"
      },
      {
        "name": "Aldo Maximillian",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/aldo-maximillian.jpg",
        "degree": "Computer Engineering '23"
      },
      {
        "name": "Clarissa Edeline Yu",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/clarissa-edeline-yu.jpg",
        "degree": "Environmental Studies '22"
      },
      {
        "name": "Gabriela Leilani",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/gabriela-leilani.jpg",
        "degree": "Industrial Systems Engineering '21"
      },
      {
        "name": "Winny Tjong",
        "role": "Member (Publicity & Marketing)",
        "image": "/images/team/winny-tjong.jpg",
        "degree": "Food Science & Technology '21"
      }
    ]
  }
];

export const teamMembers = teamCohorts[0].members;
