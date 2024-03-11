import React from "react";

type Props = {};

enum Team {
  Manage,
  Core,
  Creative,
}

const data = [
  {
    name: "Jethro Au",
    title: "CEO & CTO",
    image: "https://www.dstudio.digital/team/aditya.svg",
    team: Team.Manage,
  },
  {
    name: "Pranaw Kumar",
    title: "Co-Founder & Art Director",
    image: "https://www.dstudio.digital/team/pranav.svg",
    team: Team.Manage,
  },
  {
    name: "Aakash K.",
    title: "Head UX & Account",
    image: "https://www.dstudio.digital/team/akash.svg",
    team: Team.Core,
  },
  {
    name: "Gaurabh S.",
    title: "CA, Accounting, Finance",
    image: "https://www.dstudio.digital/team/gaurabh.svg",
    team: Team.Core,
  },
  {
    name: "Shashi K.",
    title: "Head of Development",
    image: "https://www.dstudio.digital/team/shak.svg",
    team: Team.Core,
  },
  {
    name: "Anthony E.",
    title: "Webflow Developer",
    image: "https://www.dstudio.digital/team/Anthony.svg",
    team: Team.Core,
  },
  {
    name: "Shweta K.",
    title: "Sales Partner, India",
    image: "https://www.dstudio.digital/team/shweta.svg",
    team: Team.Core,
  },
  {
    name: "Shivang Mehra",
    title: "Senior Consultant UI/UX",
    image: "https://www.dstudio.digital/team/shivang.svg",
    team: Team.Creative,
  },
  {
    name: "Yash Mourya",
    title: "Sr. Product Designer",
    image: "https://www.dstudio.digital/team/yash.svg",
    team: Team.Creative,
  },
  {
    name: "Urvashi S.",
    title: "Sr. Visual Designer",
    image: "https://www.dstudio.digital/team/urvashi.svg",
    team: Team.Creative,
  },
  {
    name: "Vrushali Bakre",
    title: "Jr. Brand / UI Designer",
    image: "https://www.dstudio.digital/team/vrushali.svg",
    team: Team.Creative,
  },
  {
    name: "Saksham Kumar",
    title: "Jr. UI Designer",
    image: "https://www.dstudio.digital/team/saksham.svg",
    team: Team.Creative,
  },
  {
    name: "Sachin Kumar",
    title: "Senior Motion Designer",
    image: "https://www.dstudio.digital/team/sachin.svg",
    team: Team.Creative,
  },
];

export const TeamSection = (props: Props) => {
  const managementTeam = data.filter((person) => person.team === Team.Manage);
  const coreTeam = data.filter((person) => person.team === Team.Core);
  const creativeTeam = data.filter((person) => person.team === Team.Creative);

  return (
    <section>
      <div className="container px-4">
        <div className="mb-8 mt-24">
          <h2 className="text-black font-semibold text-5xl font-workSans">
            Management Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
          {managementTeam.map((person, i) => (
            <div key={i} className="">
              <div>
                <img src={person.image} alt={person.name} className="w-full" />
              </div>
              <h3 className="pt-4 text-center text-2xl font-semibold font-workSans">
                {person.name}
              </h3>
              <div className="text-center">
                <div className="inline-block border-[#D9D9D9] text-sm text-muted-foreground font-light px-4 py-2">
                  {person.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 mt-24">
          <h2 className="text-black font-semibold text-5xl font-workSans">
            Core Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
          {coreTeam.map((person, i) => (
            <div key={i} className="">
              <div>
                <img src={person.image} className="w-full" />
              </div>
              <h3 className="pt-4 text-center text-2xl font-semibold font-workSans">
                {person.name}
              </h3>
              <div className="text-center">
                <div className="inline-block border-[#D9D9D9] text-sm text-muted-foreground font-light px-4 py-2">
                  {person.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 mt-24">
          <h2 className="text-black font-semibold text-5xl font-workSans">
            Creative Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
          {creativeTeam.map((person, i) => (
            <div key={i} className="">
              <div>
                <img src={person.image} className="w-full" />
              </div>
              <h3 className="pt-4 text-center text-2xl font-semibold font-workSans">
                {person.name}
              </h3>
              <div className="text-center">
                <div className="inline-block border-[#D9D9D9] text-sm text-muted-foreground font-light px-4 py-2">
                  {person.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
