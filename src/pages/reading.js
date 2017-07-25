import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

export default class Reading extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main__row">
          <h3 className="main__page-title">For Further Reading</h3>
          <div className="main__body-copy">
            <section className="main__links-section">
              <p className="main__links-intro">
                Here is a list of readings of interest to all DSA members,
                organized by subject. This list is not meant to be exhaustive,
                but rather to supplement the ideas and perspectives offered in
                the DSA Momentum Platform, and to offer some guidance to members
                looking to further their socialist self-education.
              </p>
            </section>
            <section className="main__links-section">
              <h4 className="main__links-section-title">
                Racism, Race, and Class Struggle
              </h4>
              <ul className="main__links-list">
                <li className="main__links-list-item">
                  William P. Jones,{" "}
                  <a
                    href="https://www.jacobinmag.com/2015/08/debs-socialism-race-du-bois-socialist-party-black-liberation/"
                    target="_blank"
                  >
                    “Something to Offer”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Robin D.G. Kelley,{" "}
                  <a
                    href="https://www.jacobinmag.com/2015/08/alabama-hammer-and-hoe-robin-kelley-communist-party/"
                    target="_blank"
                  >
                    “The Black Belt Communists”
                  </a>
                </li>
                <li className="main__links-list-item">
                  A. Philip Randolph and Bayard Rustin,{" "}
                  <a
                    href="http://www.prrac.org/pdf/FreedomBudget.pdf"
                    target="_blank"
                  >
                    “A ‘Freedom Budget’ for All Americans: A Summary”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Touré F. Reed,{" "}
                  <a
                    href="https://www.jacobinmag.com/2015/08/bernie-sanders-black-lives-matter-civil-rights-movement"
                    target="_blank"
                  >
                    “Why Liberals Separate Race from Class”
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/01/supreme-court-scalia-fisher-texas-bakke-affirmative-action-civil-rights/"
                    target="_blank"
                  >
                    “Affirmative Action’s Labor Roots”
                  </a>
                </li>
              </ul>
            </section>
            <section className="main__links-section">
              <h4 className="main__links-section-title">
                Socialist and Labor Feminism
              </h4>
              <ul className="main__links-list">
                <li className="main__links-list-item">
                  Eileen Boris and Anelise Orleck,{" "}
                  <a
                    href="http://newlaborforum.cuny.edu/2011/01/03/feminism-and-the-labor-movement-a-century-of-collaboration-and-conflict/"
                    target="_blank"
                  >
                    “Feminism and the Labor Movement: A Century of Collaboration
                    and Conflict”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Johanna Brenner,{" "}
                  <a
                    href="https://www.jacobinmag.com/2014/09/the-promise-of-socialist-feminism/"
                    target="_blank"
                  >
                    “The Promise of Socialist Feminism”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Barbara Ehrenreich,{" "}
                  <a
                    href="https://www.marxists.org/subject/women/authors/ehrenreich-barbara/socialist-feminism.htm"
                    target="_blank"
                  >
                    “What is Socialist Feminism?”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Nancy Fraser,{" "}
                  <a
                    href="https://www.theguardian.com/commentisfree/2013/oct/14/feminism-capitalist-handmaiden-neoliberal"
                    target="_blank"
                  >
                    “How Feminism Became Capitalism’s Handmaiden - And How to
                    Reclaim It”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Nancy Holmstrom,{" "}
                  <a
                    href="https://monthlyreview.org/2003/03/01/the-socialist-feminist-project/"
                    target="_blank"
                  >
                    “The Socialist Feminist Project”
                  </a>
                </li>
              </ul>
            </section>
            <section className="main__links-section">
              <h4 className="main__links-section-title">
                Workers, Unions, and the Labor Movement
              </h4>
              <ul className="main__links-list">
                <li className="main__links-list-item">
                  Vivek Chibber,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/03/working-class-capitalism-socialists-strike-power/"
                    target="_blank"
                  >
                    “Why the Working Class?”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Sam Gindin,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/08/beyond-social-movement-unionism"
                    target="_blank"
                  >
                    “Beyond Social Movement Unionism”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Jane McAlevey,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/09/everything-old-is-new-again-mcaveley/"
                    target="_blank"
                  >
                    “Everything Old is New Again”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Chris Maisano,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/01/friedrichs-public-sector-unions-abood-right-to-work/"
                    target="_blank"
                  >
                    “The Road to <i>Friedrichs</i>”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Kim Moody,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/06/precariat-labor-us-workers-uber-walmart-gig-economy"
                    target="_blank"
                  >
                    “The State of American Labor”
                  </a>{" "}
                  and{" "}
                  <a
                    href="http://www.labornotes.org/2016/07/interview-busting-myths-workerless-future"
                    target="_blank"
                  >
                    “Busting the Myths of a Workerless Future”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Charlie Post,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/08/the-forgotten-militants"
                    target="_blank"
                  >
                    “The Forgotten Militants”
                  </a>
                </li>
              </ul>
            </section>
            <section className="main__links-section">
              <h4 className="main__links-section-title">
                The Dilemmas of Social Democracy
              </h4>
              <ul className="main__links-list">
                <li className="main__links-list-item">
                  Robert Brenner,{" "}
                  <a
                    href="https://www.versobooks.com/blogs/2508-the-paradox-of-social-democracy-the-american-case-part-one"
                    target="_blank"
                  >
                    “The Paradox of Social Democracy”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Peter Frase,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/06/social-democracy-polanyi-great-transformation-welfare-state"
                    target="_blank"
                  >
                    “Social Democracy’s Breaking Point”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Ralph Miliband and Marcel Liebman,{" "}
                  <a
                    href="https://www.marxists.org/archive/miliband/1985/xx/beyondsd.htm"
                    target="_blank"
                  >
                    “Beyond Social Democracy”
                  </a>
                </li>
              </ul>
            </section>
            <section className="main__links-section">
              <h4 className="main__links-section-title">
                Parties, Elections, and Electoral Strategy
              </h4>
              <ul className="main__links-list">
                <li className="main__links-list-item">
                  Seth Ackerman,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/11/bernie-sanders-democratic-labor-party-ackerman/"
                    target="_blank"
                  >
                    “A Blueprint For A New Party”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Walter Dean Burnham,{" "}
                  <a
                    href="http://rooseveltinstitute.org/democracy-peril-dangerous-voter-turnout-trends/"
                    target="_blank"
                  >
                    “Democracy in Peril: The American Turnout Problem and the
                    Path to Plutocracy”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Paul Heideman,{" "}
                  <a
                    href="https://www.jacobinmag.com/2016/02/democratic-party-realignment-civil-rights-mcgovern-meany-rustin-sanders"
                    target="_blank"
                  >
                    “It’s Their Party”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Neal Meyer,{" "}
                  <a
                    href="https://www.solidarity-us.org/node/4690"
                    target="_blank"
                  >
                    “Electoral Strategy After Bernie’s Campaign”
                  </a>
                </li>
              </ul>
            </section>
            <section className="main__links-section">
              <h4 className="main__links-section-title">
                The Challenge of Socialist Internationalism
              </h4>
              <ul className="main__links-list">
                <li className="main__links-list-item">
                  John Bellamy Foster,{" "}
                  <a
                    href="https://monthlyreview.org/2000/07/01/marx-and-lnternationalism/"
                    target="_blank"
                  >
                    “Marx and Internationalism”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Ella Mahony,{" "}
                  <a
                    href="http://www.dsausa.org/beyond_the_socialist_international_report_back_on_the_acampamento_internacional"
                    target="_blank"
                  >
                    “Beyond the Socialist International”
                  </a>
                </li>
                <li className="main__links-list-item">
                  Chris Maisano and Joseph Schwartz,{" "}
                  <a
                    href="https://drive.google.com/open?id=0Byh5jKbk0CCdY1ZLNEx1TFZ3WTg"
                    target="_blank"
                  >
                    “Which Side are We On? Why DSA Must Leave the Socialist
                    International”
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
