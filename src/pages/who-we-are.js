import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import jared from "../assets/jared-abbott.png";
import christian from "../assets/christian-bowe.png";
import jeremy from "../assets/jeremy-gong.jpg";
import dustin from "../assets/dustin-guastella.jpg";
import catherine from "../assets/catherine-hoffman.jpg";
import ella from "../assets/ella-mahony.jpg";
import chris from "../assets/chris-maisano.jpg";
import natalie from "../assets/natalie-midiri.jpg";

export default class WhoWeAre extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main__row">
          <h3 className="main__page-title">Who We Are</h3>
          <div className="main__body-copy">
            <section className="main__bio">
              <p className="main__paragraph">
                DSA Momentum is a group of committed and experienced DSA
                member-leaders who together have more than 30 years of
                experience in socialist and political organizing. We have worked
                on a number of national DSA committees, including the editorial
                board of Democratic Left, the We Need Bernie campaign, DSA’s
                Political Education committee, the Program and Local Development
                Committee, DSA’s social media team, and the DSA Convention
                Resolutions and Planning Committees. Our candidates are also
                leaders in DSA locals in Boston, Chicago, Detroit, East Bay
                (CA), New Jersey, New York City, and Philadelphia.
              </p>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="jared-abbott">
                Jared Abbott (Boston)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={jared} alt="Jared Abbott" />
                </figure>
                <p className="main__paragraph">
                  My name is Jared Abbott, and I’m running for the National
                  Political Committee (NPC) on the DSA Momentum slate. I’ve been
                  a DSA activist, officer and/or chair of several different
                  locals over the past seven years (New York City, Philly, and
                  Boston). I have had the privilege of serving on the NPC for
                  the last four years, the last two of which I’ve served as
                  chair of the NPC’s Steering Committee. On the NPC, I’ve been
                  involved in a wide range of projects from coordinating work
                  between the NPC and DSA staff, organizing and conducting
                  monthly DSA stakeholder calls; organizing and project managing
                  DSA’s new Rose Radio podcast, organizing various parts of
                  DSA’s conventions and conferences; and helping to craft
                  national DSA’s strategic or tactical orientation. I’ve been
                  involved a range of national committees and working groups,
                  including the Program and Local Development Committee. This is
                  by far my favorite DSA work, because it’s given me the chance
                  to get to know and work with nearly 20 new DSA locals in the
                  last year.
                </p>
                <p className="main__paragraph">
                  When not doing DSA work, I am a PhD candidate in political
                  science focusing on Latin American social movements and
                  political parties, and an organizer for the Harvard University
                  Graduate Students Union (HGSU-UAW). I have been active in
                  political and social movement work for nearly 20 years,
                  ranging from graduate student organizing and anti-war
                  organizing to international solidarity work with South
                  American trade unionists and immigrant-rights organizing I was
                  also heavily involved in the Bernie Sanders campaign as a
                  campaign canvasser/phonebanker and also as a public speaker on
                  behalf of DSA.
                </p>
                <p className="main__paragraph">
                  DSA has made incredible strides over the past year. DSA’s
                  growth has allowed us to undertake a bewildering range of work
                  that includes defending the most vulnerable communities in our
                  country from right-wing attacks, as well as building on the
                  momentum of the Bernie Sanders campaign to elect more
                  democratic socialists to office and fight for transformative
                  reforms like Medicare-for-All and the Fight for $15.
                </p>
                <p className="main__paragraph">
                  Despite all we’ve achieved, DSA faces important challenges.
                  There is no guarantee that the gains we’ve made will be
                  consolidated and sustained, much less expanded upon, in the
                  coming years. Many of our chapters, particularly newer
                  chapters in areas that have tended to be less hospitable to
                  socialism than others, aren’t receiving the support they need
                  from national DSA to effectively integrate new members; carry
                  out organizing campaigns; do political education; and build
                  the kind of organizing infrastructure necessary to turn DSA
                  into a truly mass socialist political organization.
                </p>
                <p className="main__paragraph">
                  DSA has done an impressive job of increasing our generational
                  diversity, but with several notable exceptions DSA locals (and
                  the membership as a whole) continue to be largely white,
                  significantly male, and relatively well-educated. While we
                  shouldn’t expect DSA’s demographic makeup to change overnight
                  (something any organization would struggle to do), we should
                  be very clear that DSA won’t become a truly mass organization
                  of the working class unless we make significant progress on
                  this front. Finally, we still have a long way to go in
                  thinking about the direction of our strategy in the South and
                  in rural areas. We need an organization-wide discussion about
                  how to create a relatively coherent national DSA strategy in a
                  country the size of a continent, and whose political contexts
                  vary dramatically from region to region.
                </p>
                <p className="main__paragraph">
                  In this time of massive transition, my unique experiences in
                  DSA give me the capacity to make a meaningful contribution to
                  addressing these issues, as well as the ability to build
                  bridges between different political currents in DSA. I would
                  also bring significant and much-needed institutional memory to
                  the NPC while also being honest about mistakes we’ve made. I
                  am eager to learn from those mistakes and work with members
                  throughout the country to turn DSA into the organization it
                  can and should be.
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="christian-bowe">
                Christian Bowe (Central New Jersey)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={christian} alt="Christian Bowe" />
                </figure>
                <p className="main__paragraph">
                  My name is Christian Bowe and I’m a member of the Central New
                  Jersey (CNJ) local. Prior to running for the NPC, I was the
                  chair of the CNJ chapter and helped bring it to existence last
                  summer. After working on the Bernie Sanders campaign in
                  Pennsylvania, New York and New Jersey, I followed his call to
                  continue the political revolution and started to build DSA
                  both nationally and in my home state. Before DSA adopted a 50
                  state strategy, I began to recruit new members specifically in
                  the Rust Belt and Appalachia to build upon the success the
                  Sanders campaign had in these areas. Nothing has brought me
                  greater pride over the last year than seeing new chapters form
                  in places like Kentucky and West Virginia getting organized.
                  Our growth in the South and Rust Belt is the most exciting
                  part of our organization’s work and it’s at the center of all
                  my national organizing.
                </p>
                <p className="main__paragraph">
                  In New Jersey, DSA went from a dozen committed people
                  statewide to a place where we now have 500 members in three
                  chapters, two organizing committees and two YDS chapters
                  covering every part of the state.
                </p>
                <p className="main__paragraph">
                  As chair of our CNJ chapter, I worked alongside fellow members
                  in a number of different campaigns: the Fight for $15 campaign
                  to organize mall workers; a sanctuary county campaign with
                  local Latino action networks; a Medicare-for-All campaign
                  involving block walks in important election districts; support
                  for Communications Workers of America members during the 2016
                  Verizon strike; and winning paid sick leave ordinances at the
                  city level. At the national level, I serve on the
                  internationalism, religious socialism and labor working groups
                  as well as the social media committee.
                </p>
                <p className="main__paragraph">
                  I’ve also been active in helping to lead DSA’s embrace of a
                  distributed digital model of recruitment. Together with
                  on-the-ground organizing, digital recruitment has helped to
                  drive one of the biggest membership surges in DSA’s history.
                  DSA now reaches over 10 million people per month online - 15
                  times the number of people we did before. This has played a
                  critical role in helping DSA become a truly nationwide
                  organization with chapters in all 50 states.
                </p>
                <p className="main__paragraph">
                  Digital organizing has also helped to rebuild DSA’s commitment
                  to socialist internationalism.Through it, we’ve built ties
                  with Momentum (UK), Scottish Labour Young Socialists (SYLS),
                  Die Linke (Germany), France Insoumise, Podemos (Spain), and
                  others.
                </p>
                <p className="main__paragraph">
                  If elected to the NPC, I pledge to work alongside my comrades
                  to grow DSA to at least 50,000 members and build it into the
                  largest mass membership, multi-tendency socialist organization
                  in our country’s history!
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="jeremy-gong">
                Jeremy Gong (East Bay)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={jeremy} alt="Jeremy Gong" />
                </figure>
                <p className="main__paragraph">
                  I’m Jeremy Gong, and I am the former co-chair of the DSA East
                  Bay chapter. I joined DSA in November after the Trump
                  election, and have been extremely active since then. In June,
                  I stepped down as co-chair and was elected as an at-large
                  member of our leadership board.
                </p>
                <p className="main__paragraph">
                  In East Bay DSA, I have been a leader building the chapter
                  since it went from a couple dozen active members to a couple
                  hundred. It has been a huge challenge, often overwhelming, but
                  always very rewarding. The camaraderie here has been
                  incredible, and the growth of each and every member,
                  politically and as organizers, is truly inspiring.
                </p>
                <p className="main__paragraph">
                  In the last six months, we’ve trained hundreds of canvassers
                  to hit the streets and talk to their neighbors about single
                  payer healthcare – and socialism! Through this mass canvassing
                  work, we have trained dozens of skilled organizers, brought in
                  hundreds of new members, and built a culture of committed and
                  politically grounded organizing.
                </p>
                <p className="main__paragraph">
                  I've also helped our chapter to pilot several different
                  political education programs, the latest of which has been a
                  highly successful Socialist Summer School. These have proven
                  to me that accessible Marxist political education is not only
                  possible with new members, but is something that DSA members
                  at all levels of experience want more of. We have also had
                  many productive debates about internal democracy and
                  organizational structure, and revamped our own structures
                  while redoing our bylaws.
                </p>
                <p className="main__paragraph">
                  These experiences have encouraged me to run for the NPC and
                  co-author the{" "}
                  <a
                    href="https://dsaspringplatform.org/the-platform/"
                    target="_blank"
                  >
                    Spring Platform
                  </a>. If elected, I will work to help chapters across the
                  country build comparable organizing, political education, and
                  internal democratic activities. If we do that, I believe DSA
                  can become a fighting political force unlike anything seen on
                  the US Left in generations.
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="dustin-guastella">
                Dustin Guastella (Philadelphia)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={dustin} alt="Dustin Guastella" />
                </figure>
                <p className="main__paragraph">
                  I’m Dustin Guastella, and I’m a member of Philadelphia DSA. I
                  first joined DSA in 2011 and have been an active member in my
                  local and on national DSA committees ever since. I am
                  currently a Philly DSA Steering Committee member and a
                  coordinator on DSA’s National Design Committee. I have
                  recently become interested in investing more of my time into
                  the national organization because of DSA’s rapid growth and
                  the exciting political moment we find ourselves in.
                </p>
                <p className="main__paragraph">
                  I am running for NPC on the DSA Momentum slate because I want
                  to see our organization become a nationwide force for class
                  politics. DSA should be the natural political home for the
                  millions of workers, students and activists who are
                  disillusioned with the current system and want an alternative.
                </p>
                <p className="main__paragraph">
                  I grew up the son of a hairdresser and an electrician in
                  Northeastern Pennsylvania. Many of my childhood friends are
                  trapped in long-term unemployment or dead-end low wage jobs.
                  As a result I became interested in what could be done about
                  this through politics and collective action. Growing up, I was
                  lucky enough to have a teacher who encouraged me to go to
                  college and there I found Philly DSA.
                </p>
                <p className="main__paragraph">
                  The Occupy movement and the rapid growth of <i>Jacobin</i>{" "}
                  magazine turned me from a passive observer to an active member
                  of DSA and an advocate for a strong working class politics.
                  After I graduated from Temple University I went to work in the
                  labor movement as the regional coordinator for the
                  Southeastern Pennsylvania Area Labor Federation (AFL-CIO).
                  While there I learned the ins-and-outs of the union movement -
                  its weaknesses and shortcomings as well as its enduring
                  strengths.
                </p>
                <p className="main__paragraph">
                  In the lead-up to the 2016 presidential campaign, I served as
                  co-coordinator of DSA’s national We Need Bernie committee.
                  More recently I have worked on building and consolidating
                  Philly DSA as it works to retain and develop the huge numbers
                  who have joined as part of the “Trump bump.” I’ve worked
                  alongside Natalie Midiri, Jared Abbott (now in Boston) and Joe
                  Schwartz in our local for years, and with Jeremy Gong to build
                  a national Medicare-for-All campaign for DSA.
                </p>
                <p className="main__paragraph">
                  DSA needs a coherent vision, a political program, and a
                  strategy for achieving it. I worked with comrades across the
                  country to develop what we think the best political vision for
                  DSA is in the coming period through our DSA Momentum platform.
                  I am excited to go into DSA’s largest convention to debate our
                  perspectives and build a stronger organization together with
                  comrades from around the country. I hope you will support us!
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="catherine-hoffman">
                Catherine Hoffman (Detroit)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={catherine} alt="Catherine Hoffman" />
                </figure>
                <p className="main__paragraph">
                  I’ve been am active member of Detroit DSA since I joined as a
                  college student in the early 2000’s. I became a socialist
                  because so many of my friends and loved ones have been
                  struggling to get by working long hours for little pay. Living
                  in southeast Michigan, I grew up around people who made good
                  lives for themselves because of victories of the labor
                  movement, and I saw the devastation caused as those victories
                  have been chipped away. When I’m not doing DSA activities, I
                  work as a substitute teacher. I also work part time helping
                  several young adults with disabilities improve their daily
                  living skills. My socialism is informed by my work in our
                  public schools and my work with people who rely on medicaid
                  and medicare to survive. I’ve identified as a feminist since I
                  was a teenager, and I am also a member of the lgbtq community.
                  I know that our socialism must include strong support for
                  members of marginalized communities.
                </p>
                <p className="main__paragraph">
                  I’m running for the NPC because I greatly care about DSA and
                  our future. I want us to be an organization that is truly
                  nationwide. Here in Michigan, we have been helping to build
                  new chapters around the state, and I believe that we have a
                  model for what can work throughout the country. We are an
                  inter-generational chapter where everyone works well together,
                  and have been very successful at turning new members into
                  active participants in our chapters. I have a lot of
                  experience at both the local and national level, and would
                  like to put my skills to use continuing to help grow DSA.
                </p>
                <p className="main__paragraph">
                  I’ve been on Detroit DSA’s executive board for a number of
                  years, and have been vice-chair of the chapter for the past
                  few years. One of my first big projects with Detroit DSA was
                  to help lead a successful campaign which pressured Wayne State
                  University to adopt a policy stating that the university would
                  not produce products made in sweatshops. For about five years,
                  I handled all of my local’s social media. I also have a lot of
                  experience canvassing, doing coalition work, and working with
                  socialists who have a diverse range of opinions. Detroit DSA
                  was instrumental in helping Bernie Sanders win in Michigan’s
                  primary election and, with several other DSA members, I helped
                  run the Bernie campaign office in Pontiac. At the national
                  level, I led DSA’s Drop Student Debt campaign for the first
                  few month, helping to get that campaign off the ground. I’m a
                  very active member of our social media team, and have been
                  co-chair of that committee for the past few months. I am also
                  a member of the DSA Queer Working Group and recently created a
                  Facebook group for LGBTQ DSA members.
                </p>
                <p className="main__paragraph">
                  This is really an exciting time for DSA. We are growing and
                  now have resources we couldn’t have imagined a year ago. But,
                  we need to grow wisely. We need to ensure that we have a
                  strong group of activists who can train our new members to be
                  leaders in their newly formed chapters. We must ensure that
                  all of our chapters have a voice in the organization. Our
                  members should have the opportunity to participate in regular
                  strategy discussions about the direction DSA is going. We also
                  need to had a strong message that will resonate with people
                  around the U.S. I think being a part of a strong Medicare for
                  All campaign would give us a great opportunity to share our
                  vision with a much wider audience. I’m proud to be running as
                  a part of the Momentum State (https://www.dsamomentum.org/)
                  with a group of committed, experienced activists who have a
                  strong vision for DSA’s future.
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="ella-mahony">
                Ella Mahony (New York City)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={ella} alt="Ella Mahony" />
                </figure>
                <p className="main__paragraph">
                  My name is Ella Mahony. I grew up in Boston and have been in
                  New York since 2011.
                </p>
                <p className="main__paragraph">
                  I’ve always been interested in politics but it was through
                  student-worker solidarity activism on my campus that brought
                  me to socialism. Through that work I started organizing with
                  UNITE-HERE!, a culinary and hotel workers’ union. I spent my
                  first summer with UNITE-HERE! organizing airport workers in
                  Newark, New Jersey. This entailed long, hard months traversing
                  Newark almost entirely on foot to visit workers at home and
                  convince people to risk what little they had to try to achieve
                  something better.
                </p>
                <p className="main__paragraph">
                  That experience showed me two things that made me into a
                  socialist. The incredible barriers low-wage workers face in
                  trying to win a better life exposed the structural causes of
                  poverty to me. Despite these challenges, collective action
                  through a union showed me that workers can fight back against
                  those structures, and that this is the only path to
                  working-class liberation. From there I was lucky enough to
                  organize with the New York State Nurses Association and with
                  OUR Walmart in Dallas, Texas.
                </p>
                <p className="main__paragraph">
                  Through union organizing and a journalism class at Brooklyn
                  College, I came into contact with <i>Jacobin</i> magazine. I
                  have been working there as an assistant editor since 2015.{" "}
                  <i>Jacobin</i>
                  has been important for me because it gave me a chance to form
                  an intellectual framework to describe the ideas I had
                  cultivated through working and organizing. I think that every
                  socialist should have the chance and the space to do the same
                  - not so that we become academics, but so we can be serious
                  thinkers about the character and direction of our movement.
                  One of the main goals of socialism is to arm the working class
                  with the tools to decide its own future. Intellectual
                  formation is key for decoding the political choices at hand
                  and having a democratic debate about the best way forward.
                  This is the reason why I have been working with the national
                  Political Education Committee during the past couple of
                  months.
                </p>
                <p className="main__paragraph">
                  Finally, I will arrive to the convention from Sao Paulo where
                  I have been researching and organizing with the Brazilian left
                  for the past six months. I’m looking forward to applying this
                  experience to deepen DSA’s internationalist commitments and to
                  bring new organizing ideas from socialist struggles around the
                  world into the US context.
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="chris-maisano">
                Chris Maisano (New York City)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={chris} alt="Chris Maisano" />
                </figure>
                <p className="main__paragraph">
                  I’m Chris Maisano, and I’m a member of New York City DSA
                  (NYC-DSA). I first joined DSA as a high school student in the
                  late 1990s, and I’ve been a committed socialist ever since.
                </p>
                <p className="main__paragraph">
                  I’ve been in and around DSA for many years, and the rapid
                  growth of our organization is one of the most exciting things
                  to happen in my political lifetime. I’m running for the NPC on
                  the DSA Momentum slate because I want to consolidate our gains
                  and transform DSA into the kind of mass socialist organization
                  our country desperately needs.
                </p>
                <p className="main__paragraph">
                  My commitment to socialism flows from two main sources: my
                  life experiences and a long-standing devotion to political
                  self-education. My family followed a classic working-class
                  immigrant trajectory: from Italy to New Jersey by way of
                  Brooklyn. Watching my parents fight every day to provide for
                  my sisters and I taught me the harsh lesson that hard work
                  isn’t always rewarded, and stimulated my interest in learning
                  why the world is the way it is.
                </p>
                <p className="main__paragraph">
                  That interest was furthered by a somewhat unlikely source:
                  Catholic school. I went to both public and Catholic schools
                  growing up, and it was the Church that first exposed me to
                  critical perspectives on capitalism and militarism. Learning
                  about Catholic social teaching, as well as our government’s
                  support for right-wing death squads that killed priests and
                  nuns in Central America, set me on a path that eventually lead
                  to socialism and internationalism. I have long since left the
                  Church, but I’m grateful for the important role in played in
                  developing my political perspectives and my hunger for justice
                  in the world.
                </p>
                <p className="main__paragraph">
                  I went to college at Rutgers, and during that time I
                  participated in the anti-globalization and anti-war movements.
                  After graduation I went to work as a union organizer, and then
                  obtained a degree in library science. I worked for about five
                  years as a public librarian in Brooklyn, and was a
                  rank-and-file activist in AFSCME District Council 37 (DC 37),
                  Local 1482. From there I went to work as a research staffer
                  for DC 37, and today I work for a nurses’ union in New York.
                  Altogether, I have about a decade’s worth of experience in the
                  labor movement in a variety of different roles and settings.
                </p>
                <p className="main__paragraph">
                  Over the last year, I have worked alongside many dedicated
                  comrades to help build NYC-DSA into the strong and dynamic
                  local of 2,000 members it is today. I just finished a one-year
                  term on our local’s Steering Committee, and am active in our
                  labor organizing and political education activities. I worked
                  on the Bernie Sanders campaign in New York and Philadelphia;
                  helped to coordinate our strike solidarity efforts during the
                  2016 Verizon strike; worked with fellow members to organize an
                  extremely successful holiday fundraiser; and served on the
                  planning committee of the recent NYC-DSA Socialist Day School,
                  a day-long political education event.
                </p>
                <p className="main__paragraph">
                  I have also been a contributing editor for <i>Jacobin</i>{" "}
                  magazine since its first issue, and strongly believe that
                  socialist activists must be thinkers (and writers!) as well as
                  fighters. An organization like DSA is lost without a coherent
                  political vision that unites all members behind a common
                  project and allows us to speak clearly and confidently to the
                  people at large. This is what distinguishes us politically
                  from liberals and progressives, and prevents us from lapsing
                  into just another activist group.
                </p>
                <p className="main__paragraph">
                  For me, there is no socialist movement without a strong and
                  militant labor movement. If elected to the NPC, I pledge to
                  work closely with all DSA members who share an interest in
                  rebuilding working class power in an extremely hostile
                  climate. I am very proud to be running on the DSA Momentum
                  slate, and I thank everyone who supports us!
                </p>
              </div>
            </section>
            <section className="main__bio">
              <h4 className="main__bio-name" id="natalie-midiri">
                Natalie Midiri (Philadelphia)
              </h4>
              <div className="main__bio-row">
                <figure className="main__bio-photo">
                  <img src={natalie} alt="Natalie Midiri" />
                </figure>
                <p className="main__paragraph">
                  I’m Natalie Midiri - community organizer, educator, and
                  Co-Chair of Philadelphia DSA. From 2013-2016 I was a teacher
                  at the Collingswood Playschool, a democratically run member
                  cooperative daycare program. I’ve worked on SEIU’s Fight for
                  $15 fast food worker campaign and at the Philadelphia
                  Unemployment Project, an unemployed worker’s council for
                  low-income Philadelphians. In DSA, I’ve served on the
                  Amendments and Resolutions Committee for the 2015 and 2017
                  National Conventions, helped organize Young Democratic
                  Socialists conferences, and worked to launch Philly DSA’s
                  leadership bootcamp.
                </p>
              </div>
            </section>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
