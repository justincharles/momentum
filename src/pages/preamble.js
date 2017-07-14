import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";

export default class Preamble extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main__row">
          <h3 className="main__page-title">
            For a Mass Socialist Movement in the United States
          </h3>
          <div className="main__body-copy">
            <div className="main__members">
              <div className="main__member">Jared Abbott (Boston)</div>
              <div className="main__member">Christian Bowe (Central NJ)</div>
              <div className="main__member">Jeremy Gong (East Bay)</div>
              <div className="main__member">Dustin Guastella (Philly)</div>
              <div className="main__member">Catherine Hoffman (Detroit)</div>
              <div className="main__member">Ella Mahony (NYC)</div>
              <div className="main__member">Chris Maisano (NYC)</div>
              <div className="main__member">Natalie Midiri (Philly)</div>
              <div className="main__member">Delé Balogun (Chicago)</div>
            </div>
            <p className="main__paragraph">
              <span className="main__first-sentence">
                We live in a time of uncertainty and turmoil, at home and around
                the world.
              </span>{" "}
              A period of rising class consciousness and dangerous xenophobic
              populism. Of downward mobility for young workers and hostile labor
              markets for all. These conditions have prompted a search for
              alternatives, bringing us to the end of that long, frustrating
              cycle in which socialism was “the ideology that dare not speak its
              name.” We are finally entering a time in which fighting openly as
              socialists is not only exciting, but a sound political strategy.
              In this situation, the Left must fortify our claim to being the
              only genuine alternative. If we don’t, we'll allow the far right
              to falsely present itself as the only source of opposition to the
              status quo.
            </p>

            <p className="main__paragraph">
              DSA’s rapid growth can be attributed to two main sources, one born
              of hope - the Bernie Sanders campaign - and the other of fear -
              the election of Donald Trump. This growth, however, has created
              number of challenges. Today, DSA boasts some 23,000 socialists and
              150-plus chapters. All of us have worked hard to harness this wave
              of new members, and we are very proud of what DSA has become.
            </p>

            <p className="main__paragraph">
              At the same time, our organization often feels uncoordinated and
              fragmented. We aim to transform DSA into a united organization
              with a vision and a game plan, something more than the sum of its
              parts. We believe the best way to do this is through a political
              strategy that involves nationally coordinated strategic campaigns
              organized in tandem with local affiliates and the National
              Political Committee (NPC).
            </p>

            <p className="main__paragraph">
              Socialists can never achieve our goals exclusively through
              legislative and electoral efforts. Our ability to win
              working-class demands ultimately derives from our social and labor
              power. With it, we can win reforms that materially improve
              people’s lives and point toward a larger vision of life beyond
              capitalism. Without it, whatever gains we make can be overturned
              by forces whose control of fundamental economic resources grants
              them the ability to undermine popular democracy.
            </p>

            <p className="main__paragraph">
              Our organization must be rooted in a strong social base. That
              base, however, cannot simply be called into being. First, we need
              to define it. Second, we need to build strategic campaigns that
              speak to broadly-felt needs, unites us around concrete tasks, and
              develops our ability to act collectively.
            </p>

            <p className="main__paragraph">
              The answer to the first question is clear: we must become the
              political home for the 13 million people who voted for Bernie
              Sanders in the Democratic primary elections.
            </p>

            <p className="main__paragraph">
              Imagine if even a fraction of those people were organizing in
              their workplaces and neighborhoods, or uniting behind a mass
              movement for Medicare For All! DSA can be the vehicle for
              organizing that force into the kind of mass socialist movement
              that has been sorely missing from American politics for decades —
              one that has the potential to transform American society.
            </p>

            <p className="main__paragraph">
              DSA Momentum offers six programmatic planks aimed at making that
              aspiration a reality. A national campaign for Medicare For All is
              at the heart of this project. That campaign ties into our slate’s
              five other programmatic planks:
            </p>
            <ul className="main__list">
              <li className="main__list-item">
                A rank-and-file labor strategy that encourages DSAers to enter
                the labor movement as rank-and-file workers; win leadership in
                unions where possible; and organize the unorganized where
                necessary.
              </li>
              <li className="main__list-item">
                An electoral strategy that encourages the development of
                independent socialist political formations, provides us leverage
                in our extra-electoral fights, and gives us a platform for
                speaking to the working class.
              </li>
              <li className="main__list-item">
                Forging a new internationalism, which is central to fighting
                economic nationalism at home and learning from socialist
                movements abroad.
              </li>
              <li className="main__list-item">
                Deepening the internal democracy of DSA to empower new members
                and invest them in DSA’s political future.
              </li>
              <li className="main__list-item">
                A political education program that arms every member with a
                strong sense of what we’re fighting for and why.
              </li>
            </ul>
            <br />
            <Link to="/platform">Read the platform</Link>
          </div>
        </div>
      </div>
    );
  }
}
