import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";

export default class FAQ extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main__row">
          <h3 className="main__page-title">Frequently Asked Questions</h3>
          <div className="main__body-copy">
            <section className="main__faq-section">
              <p className="main__faq-intro">
                This is a living document that attempts to address DSA members’ biggest questions and concerns about the proposals and perspectives contained in the DSA Momentum platform. We will continue to add to this document should it become necessary.
              </p>
              <p className="main__faq-question">
              Q: I like and support the idea of a nationally-coordinated Medicare-for-All campaign. But I’m skeptical about the platform’s identification of a national March on Washington as a central aspect of that campaign, at least right now. Can I still support the DSA Momentum slate?
              </p>
              <p className="main__faq-answer">
                <span className="main__faq-letter">A:</span> Yes, you can! Since the release of our platform and our resolution there has been a heated discussion inside DSA about our proposal to make a March on Washington a goal of a nationally coordinated Medicare-For-All campaign.
              </p>

              <p className="main__faq-answer">
                The thinking behind the tactic was twofold. First, we believe it’s of utmost importance that a DSA Medicare-for-All campaign be a nationally coordinated one, among other reasons to balance leverage from promising state-based campaigns with the barriers to state-level legislation in Republican-controlled states. Second, we believe any successful Medicare-for-All campaign will require tight coordination with labor, a force that at this stage many locals have not had a chance to build relationships with. We saw a March on Washington as a way to give a campaign a national character while also providing a mobilization target that could act as a concrete project for locals to coalesce labor partners around.
              </p>

              <p className="main__faq-answer">
                The internal DSA opposition to the March on Washington tactic has been thoughtful and articulated in good faith. Members have raised concerns about how smaller and newer locals, or locals far from Washington, would contribute. They have questioned how this march would be different from the cascade of other Marches on Washington this year. And many expressed that they would like to work with us on a national campaign so long as it did not center on this specific tactic.
              </p>

              <p className="main__faq-answer">
                As such we’ve decided to shift away from the March on Washington tactic. We propose to amend the original campaign plan, and instead have the national Medicare-for-All campaign culminate in a nationally coordinated Day of Action, with DSA’s national organization planning major actions in a few different regions simultaneously. A Day of Action would give us the ability to experiment with a diverse range of tactics while still providing a focal point around which locals can mobilize labor and community allies. And it would mean the national organization could work with chapters from where they are right now.
              </p>

              <p className="main__faq-answer">
                This amended proposal will hopefully bring a much larger base of DSA members on board with a campaign plan that they can get excited about. We know that no campaign in a volunteer political organization will be successful unless the vast majority of members are on board, able to argue on behalf of the strategy and are ready to carry it out in chapters across the country.
              </p>

              <p className="main__faq-answer">
                If elected to the NPC, we will also push to initiate an organization-wide discussion to generate ideas for creative strategies and tactics that would add a new dimension to the movement for Medicare-for-All. To date, the movement has focused almost exclusively on lobbying and legislation in pursuit of universal health care. This is good and necessary work, and we cannot ultimately win this demand unless it is enshrined in law. But it is not enough, and socialists should find new ways to raise the social, economic, and political costs of leaving millions of Americans without access to health care.
              </p>
            </section>

            <section className="main__faq-section">
              <p className="main__faq-question">
              Q: The labor movement is threatened by the push for so-called “right-to-work” laws and court rulings, but your platform seems soft on this question. What does your slate actually think about this issue?
              </p>
              <p className="main__faq-answer">
                <span className="main__faq-letter">A:</span> The spread of so-called “right-to-work” laws to a majority of the states, as well as the Supreme Court’s likely imposition of a national public sector right-to-work regime in the Janus v. AFSCME case, are definitely setbacks for an already weakened labor movement.
              </p>

              <p className="main__faq-answer">
                But these setbacks are not insurmountable, and labor movement activists should not view them in apocalyptic terms. We need to remember that in our history, it was mass struggles from below that won organizing rights and forced the government to change bad labor laws. The biggest organizational gains in our history were made during periods in which the legal environment was even more unfavorable than it is now, and when workplace militants were routinely met with violent repression by hired goons and the state. During the 1930s, private sector industrial workers won their biggest gains before the implementation of the National Labor Relations Act through citywide general strikes, illegal mass picketing, and sit-down strikes. In the 1960s and 1970s, public sector workers often won the right to organize through illegal strike action and mass demonstrations.
              </p>

              <p className="main__faq-answer">
                The right-to-work drive will, in many respects, make labor’s already difficult situation that much harder. DSA labor activists should fight attempts to pass right-to-work laws in their states and cities, and push their unions to make adequate preparations for an adverse decision in the Janus case. But we need to deal with the fact that right-to-work is likely to be the reality for most of us sooner rather than later. Some union leaders will double down on business as usual and use right-to-work as an excuse to deepen their commitment to concessions, quick fixes, management partnerships, and electoral alliances with Democratic officeholders. Other rank-and-file workers, stewards and local officers - probably a militant minority at the beginning -  will seek to fight back. We should be in the front lines of that fightback, which must include the election of new, militant leadership in our unions when necessary.
              </p>

              <p className="main__faq-answer">
                This does not mean we think that right-to-work is “good.” It means that we are making a realistic assessment of the situation facing the labor movement, and recognizing that our ability to make gains is not ultimately dependent on the law.
              </p>
            </section>

            <br />
          </div>
        </div>
      </div>
    );
  }
}
