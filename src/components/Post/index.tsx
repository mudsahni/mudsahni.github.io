import ReactMarkdown from 'react-markdown'

import * as React from 'react'
import { Container } from '../Container';
import './style.css'

interface PostProps {

}

export const Post: React.FC<PostProps> = ({ }) => {
    return (
        <Container>
            <div className="post">

                <div className="title-section">
                    <span>
                        2021/01/01</span>
                    <span>there's someone in my head and it's not me</span>
                </div>
                <div className="post-section">
                    <p>
                        Honestly, I have <em>no idea</em> what I am talking about. Whatever it is that I am trying to write, is just an attempt for me to collect &#8216;my&#8217; thoughts and try and &#8216;think&#8217; out loud by writing.
                        I have no background in neuroscience nor any great depth of knowledge. I can barely even pronounce (or spell) amygdala, let alone try to understand
                        things like the conscious mind and free will and all that lot. But I will have you know that I am reading <a href="https://en.wikipedia.org/wiki/Incognito:_The_Secret_Lives_of_the_Brain" target="_blank">Incognito by David Eagleman</a> right now,
                        I have heard many podcasts by <a href="https://samharris.org" target="_blank">Sam Harris</a>, I have tried to leaf through several <a href="https://en.wikipedia.org/wiki/Daniel_Dennett" target="_blank">Daniel Dennet</a> books,
                        and <em>most importantly</em>, I have authoritatively expressed my opinion&mdash;for hours&mdash;on this subject to my <em>even less</em> literate friends and gotten a lot of bewildered looks from them. I think that alone qualifies me to talk about this subject.
                        </p>
                    <p>
                        And if I have learned anything so far, it is that we are not much in control of anything we are doing!
                        So I absolve all responsibility in trying to write about a topic I don't know much about, and lay all the blame squarely on my brain, forcing me to make a fool of myself.
                    </p>
                    <p>
                        Incognito is one of those books which puts you in a state of constant epiphanic high, especially if you've ever thought even a little about the subject matter.
                        I can't recommend it enough. Some of the ideas are by the author himself, while others are collected from people in the field and presented
                        in a way which would be palatable for even a generally uninterested layperson. I'll try and condense some of my learnings from the book and hope it doesn't come out too much like gibberish.
                        </p>
                    <p className="post-titles">we are only getting the headlines</p>
                    <p>
                        Our brains are not monoliths and the &#8216;us&#8217; in our heads&mdash;our conscious minds&mdash;who we, perhaps erroneously, believe to be in charge, are not one and the same as our brains.
                        Our brains are more like congested cities&mdash;crazy networks of interconnected roads which link to different parts of the city and are constantly bustling with activity.
                            </p>
                    <p>
                        You can say that our conscious minds are the boss of this metropolis, but just like a CEO or a Mayor, we don't&mdash;and probably can't and shouldn't&mdash;know too much about what's going on in our city or company.
                                we are there to give direction, come to action if something unexpected happens, but we are not there to know <em>which</em> software team is coding <em>what</em> at any particular point of the day or <em>which</em> private citizen is driving to
                                purchase <em>what</em> groceries. And if we <em>do</em> try and poke our noses in these areas, we might find that we've become a hindrance, a clumsily placed wedge in the smooth functioning of our company or city.
                            </p>
                    <p>I change my laptop password every ninety days. For the first few days of changing my password, I have to make an effort to recall it or read it from somewhere to input it. After a couple of days though, my brain knows the keystrokes I make to input that password.
                    Opening my laptop with my password becomes an action which my conscious mind doesn't involve itself in. Yet, let's say after twenty days my conscious mind decides to step in and enter the password itself, it doesn't remember it at all. The password, or the keystroke encoding of it, is there in my brain.
                    It's being used every day without fail. But when my conscious mind needs to access it, it can't. It's quite bewildering to know that there is information in our heads, which <em>we</em> can't access at times!
                    </p>
                    <p>
                        Essentially, our conscious mind is the last to know when our brain decides something. <em>We</em> primarily read the headlines of the day. The action or inaction or chaos has already occurred, mostly without our knowledge.
                                When you first saw the girl or boy or elf of your dreams, just that first glance, did you really <em>know</em> what it was that hit you with such force <em>at that moment</em>? Your brain had already processed <em>n</em> number of external and internal
                                stimuli and decided to trigger the love-at-first-sight subroutine by the time your conscious mind even realized that you were standing with your mouth ajar, and drool dripping on the floor. Sure, you may be able to connect a few dots
                                retroactively&mdash;maybe it was the way the light hit her face; or how he accidentally bumped into you; or how their long thin ears caught your eye&mdash;but that would just be a very late post hoc analysis of a decision your brain took in the moment.
                                And you will never be able to connect <em>all</em> the dots.
                            </p>
                    <p className="post-titles">There are a lot of voices in our heads</p>

                    <p>
                        Just like most healthy modern cities, our brain is not a dictatorship. It's a very vocal democracy with a lot of rival factions fighting to get their bills passed.
                        The age-old adage of an angel and the devil on your shoulder makes a lot of sense if we think about it as rival circuits of the brain pulling us in different directions.
                        If we are trying to lose weight or become healthier, then a portion of our brain sends out signals to try and discourage us from reaching out for that slice of dark chocolate
                        sponge cake. But another, sometimes more powerful portion of our brain tells us &#8216;the hell with it, what's the point of life if you can't indulge so go and smash your face in that monstrosity&#8217;.
                        From what I understood, this tug of war is actually healthy as this back and forth is what helps us &#8216;reason&#8217; out a decision.
                            </p>

                    <p>
                        Although that&#8216;s not to say that our decision always lands on the correct side of the aisle.
                        It's always going to be a function of which section has stronger interconnectivity with the rest of our brain at that point of time. If more heavy-hitting neural networks get lit up
                        for a certain decision, then all those lit neural networks vote up that particular decision. If you've just eaten and you're frightened silly by the prospect of dying from a heart attack at
                        33 like your aunt&mdash;the faction advocating for a healthier you might win&mdash;else, your tastebuds are going to enjoy heaven.
                    </p>
                    <p className="post-titles">Does redundancy drives optimisation?</p>

                    <p>
                        In computer science, and perhaps in many other domains, redundancy is an enemy everyone is always looking to eliminate. From the ideas of this book,
                        I have learned that redundancy might be the best friend which helps our brain and mind develop and evolve and improve plasticity.
                        In computer science, we often find the most optimal solution and make that our default, and sometimes only, choice. Our brain, however, has several solutions for the same problem and
                                this redundancy gives our brain the chance to experiment with different solutions based on the problem, and sometimes, find and evolve <em>better</em> solutions for specific problems.
                                Also, it helps to have a B team if the A team becomes incapacitated. In the event of damage to a certain portion of our brain, these redundancies help us retain our memory, retain our cognitive abilities, retain our sight, our speech, etc.
                            </p>
                    <p className="post-titles">Are we in there?</p>

                    <p>
                        And finally, do we have free will? Even though we called our conscious mind the CEO of our brain, is it <em>really</em> making decisions? Or is it merely under the illusion that it is deciding the next path to take when
                                in reality it is merely the avatar, like in a game, being controlled by the invisible hands of the subconscious brain?
                            </p>
                    <p>The author uses several case studies of people with some form of brain damage who started
                                exhibiting extraordinarily out of character, and many times horrible, behaviour as a consequence. One example is of <a href="https://en.wikipedia.org/wiki/Charles_Whitman" target="_blank">Charles Whiteman</a>, an American mass murderer form the 60's
                                who on self-reflection, had no idea why he was killing everyone around him. He was self-aware enough to know that what he was doing was horrible and reprehensible, but was almost paralyzed by the need to do it. He wanted his brain to be autopsied after his death,
                                and when he did die at the hands of the police, the autopsy on his brain revealed that he had a tumour pressing against his <a href="https://en.wikipedia.org/wiki/Amygdala" target="_blank">amygdala</a>, a part of the brain related to anxiety and fight-or-flight responses.
                                There are several more examples like a person taking to paedophila because of a tumour and reverting to a normal sexual appetite after the tumour was removed<sup>
                            <a href="https://www.newscientist.com/article/dn2943-brain-tumour-causes-uncontrollable-paedophilia/#:~:text=The%20sudden%20and%20uncontrollable%20paedophilia,%2C%20his%20sex%2Dobsession%20disappeared.">[ref]</a></sup>; parkinson patients becoming degenerate gamblers
                                    due to medicines which help activate their dopamine receptors. Yikes. Are <em>we</em> really in control?</p>
                    <p>
                        And not just in the context of brain damage, what about nurture <em>and</em> nature? Prisons populations across the world are dominated by people who have one particular gene which makes them extraordinarily more violent&mdash;the Y chromosome.
                                How different would a person be if they were abused as a child? Or went to war? Is whatever we do the cumulative and continuous effects of different dials and knobs being adjusted to different levels due to genetic and environmental factors? But doesn't the very fact that we can ask these questions tell us that we have free will and the ability to make choices?
                            </p>
                    <p>
                        These are rather mind-bending things to ponder about and perhaps these are the areas where we hit our mental limits. After all, we didn't evolve to solve the riddles of the universe or our minds, it's just great that we can. But there just might be a hard limit. I often wonder if we are feeling the literal walls at the edges of our brains
                         when we ask questions about free will, or if we are asked to think of a new colour, or what is &#8216;outside&#8217; of the big bang (which just might be a silly question in terms of physics, but to our primitive three-dimensional brains trying to make sense of a probably multi-dimensional universe, it almost seems like an <em>unthinkable</em> thought).
                    </p>
                    <p>
                        Looking for an opportunity to regurgitate my newly found insights into the mind, I inconspicuously asked a friend &#8216;do you think we have free will?&#8217;.
                        His response of &#8216;uhhhh what?&#8217; was all I needed to launch into answering my own question.
                        Which I did by quoting <a href="https://en.wikipedia.org/wiki/Christopher_Hitchens" target="_blank">Christopher Hitchens</a> when asked the same question:
                        &#8216;Yes, I believe I have free will. I have no choice in the matter.&#8217; (On a humorous aside, when asked what would a religious person say to the same question, Hitchens believed they would say yes, they have free will. Because they've been given it.)
                    </p>
                    <p>
                        I guess that is a practical way to think about free will. What else can we do but live life like we do have free will? We have no choice. <a href="https://en.wikipedia.org/wiki/Benjamin_Libet" target="_blank">Benjamin Libet</a> posited that we possibly have
                    free will because even though our thoughts and choices our bubbling up from our brain without the direct involvement of our conscious minds, we still have the power to <em>veto</em> them and not act on them. At least, we do if we don't suffer some kind of brain damage which compels us like Charles Whitman.
                        That's a thin slice to rest free will on. Is our free will only the ability to not select an option? And can we even do that?

                    </p>
                    <p>
                        Maybe we both have free will and don't. Our conscious mind is not awake for all the nondescript, routine, predictable things we do every day. But whenever we encounter something
                        unpredictable, it comes online. When our brains can't do the job, &#8216;we&#8217; come online and start searching our brains for solutions?
                        Does that mean free will is like a searching and sorting algorithm resting on top of an always running mechanical process?
                    </p>
                    <p>
                        One of the most pivotal arguments I read in the book against free will was a neuroanatomical one. As far as we can tell,
                        all activity in the brain is driven by other activity in the brain. Everything is interconnected and drives everything else. You don't just decide to like apple pie, you like it because
                        it tastes good, it smells like your childhood garden with an apple tree, you're hungry, your mom made apple pies all the time, etc there are going to be <em>n</em> driving factors making you like apple pie. There is no room for a ghost in the machine
                        to just appear and tell you to like apple pie. For free will to exist, it has to influence the ongoing brain activity. And to do that, it needs to be physically connected to the brain. Yet every part of the brain is driven by other parts of the brain. It's a densely interconnected network and no individual part is just having a one-way street.
                    </p>
                    <p>
                        But that does that mean, we are not more than the sum of our parts? What about imagination then? Are we not creating things which didn't previously exist when we imagine something? If I think of a gopher riding a potato while wearing a sock on its head right now, is that not a new creation? Sure, parts of it have been influenced from other parts of
                        my brain, but the potato riding sock headed gopher by itself is more than the sum of knowledge about gophers and socks and potatoes, is it not?
                    </p>
                    <p>Anyway, I could go on and on about these conflicting questions. I think this was helpful. I enjoyed writing about it. I think it's helped me augment what I have learned so far with some of <em>my very own thoughts</em>! Ha! Though I suspect I have primarily only ended up summarising the book.
                    I'll leave you with the question I asked my friend (which in turn I heard Sam Harris ask in one of his podcasts): Can you predict your next thought? Or is it already there before you can know it's there?
                    The answer, unfortunately, is fairly obvious. As soon as you try this activity you will realise that team free will...is just a construct of your brain.</p>
                </div>
            </div>
        </Container>
    );
}