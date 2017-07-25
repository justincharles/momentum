import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";

export default class Links extends React.Component {
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
            <br />
          </div>
        </div>
      </div>
    );
  }
}
