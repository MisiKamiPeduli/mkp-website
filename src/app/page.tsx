import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";

const primaryButton = "inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff4148] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d92e36] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4148]";
const secondaryButton = "inline-flex items-center justify-center gap-2 rounded-lg bg-[#223275] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#152254] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#223275]";

// Figures and copy follow the supplied design. Photo/map/logo slots await original assets.
const missions = [
  "To encourage collaboration between Indonesian students, local NGOs and partner organizations in a joint community service project.",
  "To identify socio-economic problems through a sharing of experience and ideas to propose solutions to mitigate these problems.",
  "To take active roles in promoting sustainable support to increase the standard of living.",
];
const stories = [
  { category: "Education", color: "text-[#df6a73] bg-[#fff0f1]", role: "From our education partners", label: "Education & community", caption: "Approved testimonial to be added." },
  { category: "Clean water", color: "text-[#53699b] bg-[#edf1f9]", role: "From our volunteers", label: "Village survey", caption: "Approved testimonial to be added." },
  { category: "Community", color: "text-[#a77642] bg-[#faf0e5]", role: "From our communities", label: "Field partnership", caption: "Approved testimonial to be added." },
];
const sponsorGroups = [
  { title: "Partner Organization", count: 5 },
  { title: "Diamond Sponsors", count: 3 },
  { title: "Gold Sponsors", count: 3 },
  { title: "Bronze Sponsors", count: 3 },
];

function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-end justify-start bg-[#d6ded3] p-3 ${className}`}>
      <span className="text-[10px] font-medium text-[#465342]">{label}<br />Photo placeholder</span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="inline-block -rotate-3 bg-[#ff4148] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">{children}</span>;
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white text-[#171717]">
      <section aria-labelledby="hero-heading" className="relative bg-[#3f4c43] text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(110deg,#25372f_0%,#586652_55%,#788466_100%)]" />
        <SiteContainer>
          <div className="relative mx-auto flex min-h-[370px] max-w-3xl flex-col items-center justify-center py-14 text-center md:min-h-[420px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em]">Sustainable Development</p>
            <h1 id="hero-heading" className="mt-4 text-3xl leading-[1.2] sm:text-4xl lg:text-[46px]">Help bring sustainable<br className="hidden sm:block" /> development to Desa Afia.</h1>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-white/90 sm:text-sm">We work alongside Indonesian communities to create long-term solutions for a brighter, more resilient future.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="#contact" className={secondaryButton}>♡ Support MKP</Link>
              <Link href="/programs/past" className={primaryButton}>Learn more <span aria-hidden="true">→</span></Link>
            </div>
            <p className="mt-7 text-[10px] text-white/75">Hero photo placeholder · Desa Afia program</p>
          </div>
        </SiteContainer>
      </section>

      <section aria-label="MKP at a glance" className="bg-[#223275] text-white">
        <SiteContainer>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 py-7 text-center sm:py-8">
            {[{ value: "12", label: "Villages Transformed" }, { value: "150+", label: "Student Volunteers" }, { value: "2009", label: "Founded since" }].map((stat) => (
              <div key={stat.label}><p className="font-heading text-2xl sm:text-4xl">{stat.value}</p><p className="mt-2 text-[10px] sm:text-xs">{stat.label}</p></div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section aria-labelledby="about-heading" className="pb-14 pt-14 sm:pb-20 sm:pt-20">
        <SiteContainer>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 id="about-heading" className="text-2xl sm:text-3xl">About <em className="font-normal">MKP</em></h2>
              <p className="mt-5 text-xs leading-[1.8]"><strong>Misi Kami Peduli (MKP), or Mission: We Care,</strong> is a social initiative by Indonesian students at the National University of Singapore. We are motivated by an awareness of the socio-economic challenges in Indonesia and a desire to give back to our home country.</p>
              <p className="mt-4 text-xs leading-[1.8]">Today, MKP is a <strong>platform for Indonesian students in NUS to reach out to less privileged communities.</strong> Every year, our team visits a village in Indonesia and works with local partners on programs that help improve residents’ standard of living.</p>
              <Link href="/about" className={`${primaryButton} mt-5`}>Learn more <span aria-hidden="true">→</span></Link>
            </div>
            <div>
              <SectionLabel>Vision</SectionLabel>
              <h3 className="mt-3 text-xl italic leading-snug sm:text-2xl">Building Bonds, Empowering Communities,<br className="hidden lg:block" /> Improving Lives.</h3>
              <div className="mt-6"><SectionLabel>Mission</SectionLabel></div>
              <ol className="mt-4 space-y-3">
                {missions.map((mission, index) => <li key={mission} className="flex gap-3 text-xs leading-relaxed"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#223275] text-[10px] font-semibold text-white">{index + 1}</span><span>{mission}</span></li>)}
              </ol>
            </div>
          </div>
          <div className="relative mt-14 grid gap-7 md:mt-20 md:grid-cols-3 md:gap-0 md:px-3">
            {stories.map((story, index) => (
              <div key={story.category} className={`relative pb-14 ${index === 1 ? "md:translate-y-8" : ""}`}>
                <PhotoSlot label={story.label} className={`h-64 w-[85%] border-4 border-white shadow-sm lg:h-72 ${index === 1 ? "rotate-6" : "-rotate-6"}`} />
                <div className={`absolute right-0 top-14 w-[58%] bg-[#f3cf43] px-5 py-5 shadow-md ${index === 1 ? "md:top-28" : ""}`}>
                  <span aria-hidden="true" className="font-heading text-3xl leading-none">“</span>
                  <p className="mt-1 text-xs italic leading-relaxed">{story.caption}</p>
                  <p className="mt-5 text-[10px] leading-relaxed">— {story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section id="current-program" aria-labelledby="program-heading" className="scroll-mt-24 pb-16 pt-10 sm:pb-20 sm:pt-16">
        <SiteContainer>
          <div className="relative mx-auto max-w-5xl px-3 sm:px-6">
            <div className="flex aspect-[2.8/1] min-h-44 items-center justify-center rounded-2xl bg-[#e5e5e5] px-8 text-center text-sm text-[#686868]" role="img" aria-label="Placeholder for the Indonesia map highlighting Way Kambas, Lampung">Indonesia map · Way Kambas location<br />Original map asset to be added</div>
            <PhotoSlot label="Field moments" className="absolute -bottom-6 left-0 h-24 w-24 -rotate-6 border-4 border-white shadow-md sm:h-32 sm:w-32" />
            <PhotoSlot label="Community" className="absolute -top-6 right-0 h-24 w-24 rotate-3 border-4 border-white shadow-md sm:h-32 sm:w-32" />
          </div>
          <div className="relative mx-auto mt-12 max-w-3xl text-center">
            <h2 id="program-heading" className="text-2xl leading-snug sm:text-3xl">MKP 2027: <em>Way Kambas, Lampung</em></h2>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed">This year, MKP is heading to Way Kambas, Lampung. Follow our journey as we prepare community programs in education and technology.</p>
            <p className="mt-5 text-xs">Discover our journey on <span className="font-semibold text-[#ff4148]">@misikamipeduli</span></p>
            <div className="mt-6 flex flex-wrap justify-center gap-3"><Link href="#contact" className={secondaryButton}>♡ Support MKP</Link><Link href="/programs" className={primaryButton}>Learn more <span aria-hidden="true">→</span></Link></div>
          </div>
        </SiteContainer>
      </section>

      <section aria-labelledby="voices-heading" className="bg-[#f8f8f8] py-14 sm:py-20">
        <SiteContainer>
          <div className="text-center">
            <h2 id="voices-heading" className="text-2xl sm:text-3xl">Voices of Hope &amp; Community Impact</h2>
            <div aria-hidden="true" className="mx-auto mt-4 h-0.5 w-24 bg-[#ff4148]" />
            <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-[#777]">Real stories from partner educators, social work leaders, and village beneficiaries who continue to steward the positive change catalyzed by MKP.</p>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.category} className="flex min-h-64 flex-col rounded-xl bg-white p-6 shadow-[0_5px_24px_#00000008]">
                <div className="flex items-center justify-between gap-3"><span aria-hidden="true" className="font-heading text-3xl text-[#e8dddd]">“</span><span className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${story.color}`}>{story.category}</span></div>
                <p className="mt-4 flex-1 text-xs italic leading-[1.8] text-[#777]">{story.caption}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#f2f2f2] pt-4"><span aria-hidden="true" className="h-8 w-8 shrink-0 rounded-full bg-[#d6ded3]" /><div><p className="text-[11px] font-semibold">{story.role}</p><p className="mt-1 text-[10px] text-[#777]">Name and role to be added</p></div></div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-[10px] text-[#888]">Photos and approved testimonials to be added.</p>
        </SiteContainer>
      </section>

      <section aria-labelledby="sponsors-heading" className="py-14 sm:py-20">
        <SiteContainer>
          <h2 id="sponsors-heading" className="text-center text-2xl sm:text-3xl">Meet Our Sponsors</h2>
          <div className="mx-auto mt-8 max-w-4xl">
            {sponsorGroups.map((group) => (
              <div key={group.title} className="py-3">
                <div className="flex items-center gap-4"><span className="h-px flex-1 bg-[#ececec]" /><h3 className="font-sans text-[11px] font-medium uppercase">{group.title}</h3><span className="h-px flex-1 bg-[#ececec]" /></div>
                <div className={`grid items-center gap-3 py-5 ${group.count === 5 ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-3"}`}>
                  {Array.from({ length: group.count }, (_, index) => <div key={index} className="flex h-16 items-center justify-center text-center text-[10px] text-[#888]">Logo placeholder<br />{group.title} {index + 1}</div>)}
                </div>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 bg-[#f5f5f9] py-14 sm:py-20">
        <SiteContainer>
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <div>
              <h2 id="contact-heading" className="text-3xl leading-snug sm:text-4xl">Get in Touch<br />With Us</h2>
              <div className="mt-7 flex flex-wrap gap-6 text-xs">
                <div><p className="font-semibold">Email Us</p><p className="mt-1 text-[10px] text-[#777]">Contact details to be added</p></div>
                <div><p className="font-semibold">Call Us</p><p className="mt-1 text-[10px] text-[#777]">Contact details to be added</p></div>
              </div>
              <p className="mt-8 text-[11px] font-semibold">Follow Us: <span className="ml-2 font-normal text-[#777]">Social links to be added</span></p>
            </div>
            <div>
              <fieldset disabled aria-describedby="contact-preview" className="space-y-4">
                <legend className="sr-only">Contact form preview</legend>
                {[{ label: "Name", type: "text" }, { label: "Email", type: "email" }, { label: "Subject", type: "text" }].map((field) => <label key={field.label} className="block"><span className="sr-only">{field.label}</span><input type={field.type} placeholder={field.label} className="w-full rounded-sm border-0 bg-[#e9eaf0] px-4 py-3 text-xs placeholder:text-[#777]" /></label>)}
                <label className="block"><span className="sr-only">Message</span><textarea rows={6} placeholder="Enter your message" className="w-full resize-none rounded-sm border-0 bg-[#e9eaf0] px-4 py-3 text-xs placeholder:text-[#777]" /></label>
                <button type="button" className={`${primaryButton} cursor-not-allowed opacity-60`}>Send message <span aria-hidden="true">→</span></button>
              </fieldset>
              <p id="contact-preview" className="mt-3 text-[10px] text-[#777]">Form preview only. Sending messages is not available yet.</p>
            </div>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}
