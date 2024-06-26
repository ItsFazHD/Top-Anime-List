import Header from "./Header";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Carousel from "./Carousel";

// eslint-disable-next-line no-unused-vars
import { object } from "prop-types";
function App() {
  const images1 = [
    {
      src: "images/romance/a silent voice.jpg",
      description: "Anime Name: A Silent Voice",
      descriptionText:
        "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.",
      objectPosition: "center",
    },

    {
      src: "images/romance/horimiya.png",
      description: "Anime Name: Horimiya",
      descriptionText:
        "On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people's minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent. Having opposite personalities yet sharing odd similarities, the two quickly become friends and often spend time together in Hori's home. As they both emerge from their shells, they share with each other a side of themselves concealed from the outside world.",
      objectPosition: "center top",
    },

    {
      src: "images/romance/your name.png",
      description: "Anime Name: Your Name",
      descriptionText:
        "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture. One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another. Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.",
      objectPosition: "center",
    },

    {
      src: "images/romance/clannad.jpg",
      description: "Anime Name: Clannad",
      descriptionText:
        "Tomoya Okazaki is a delinquent who finds life dull and believes he'll never amount to anything. Along with his friend Youhei Sunohara, he skips school and plans to waste his high school days away. One day while walking to school, Tomoya passes a young girl muttering quietly to herself. Without warning she exclaims Anpan! (a popular Japanese food) which catches Tomoya's attention. He soon discovers the girl's name is Nagisa Furukawa and that she exclaims things she likes in order to motivate herself. Nagisa claims they are now friends, but Tomoya walks away passing the encounter off as nothing. However, Tomoya finds he is noticing Nagisa more and more around school. Eventually he concedes and befriends her. Tomoya learns Nagisa has been held back a year due to a severe illness and that her dream is to revive the school's drama club.",
      objectPosition: "center top",
    },

    {
      src: "images/romance/the dangers in my heart.jpeg",
      description: "Anime Name: Dangers In My Heart",
      descriptionText:
        "Kyoutarou Ichikawa may look like a shy and reserved middle school student, but deep within his heart is a bloodthirsty killer. His ultimate desire is to see his classmate Anna Yamada's beautiful face writhing in pain before he ends her life. But this fantasy may never come to fruition, as Ichikawa starts to see an entirely different side to Yamada. Often seeking refuge in the library, Ichikawa frequently runs into Yamada. It is during these encounters that Ichikawa realizes his model classmate is actually an airhead who can never read the room. As they spend more time together, the boy cannot help but feel not only a sense of endearment toward the very girl he wishes to murder but also a desire to protect her at all costs. Is it possible that this sudden change in Ichikawa's perspective could lead to something more?",
      objectPosition: "center top",
    },
  ];

  const images2 = [
    {
      src: "images/isekai/the eminence in shadow.jpeg",
      description: "Anime Name: The Eminence In Shadow",
      descriptionText:
        "For as long as he can remember, Minoru Kagenou has been fixated on becoming as strong as possible, which has led him to undertake all kinds of rigorous training. This wish, however, does not stem from a desire to be recognized by others; rather, Minoru does everything he can to blend in with the crowd. So, while pretending to be a completely average student during the day, he arms himself with a crowbar and ruthlessly thrashes local biker gangs at night. Yet when Minoru finds himself in a truck accident, his ambitions seemingly come to a sudden end. In his final moments, he laments his powerlessness—no matter how much he trained, there was nothing he could do to overcome his human limitations. But instead of dying, Minoru reawakens as Cid, the second child of the noble Kagenou family, in another world—one where magic is commonplace. With the power he so desired finally within his grasp, he dons the moniker Shadow and establishes Shadow Garden: a group whose sole purpose is to combat the enigmatic Cult of Diablos, an organization born from Cid's imagination.",
      objectPosition: "center",
    },

    {
      src: "images/isekai/cheat skill.jpeg",
      description:
        "Anime Name: I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
      descriptionText:
        "All his life, Yuuya Tenjou has been the subject of resentment and contempt from everyone around him, even from his parents. To make matters worse, his grandfather—the only person who ever showed him affection—suddenly dies, leaving Yuuya truly alone. Despite facing many adversities, Yuuya does what he can to offer kindness to those who need it—but even the most good-natured people can only tolerate so much abuse. Just when he reaches his breaking point, a flicker of hope appears in the form of a hidden door in his bathroom. This door provides two-way access to an abandoned house in another world, where he instantly gains game-like stats and skills. Moreover, the house once belonged to a sage, which gives Yuuya access to remarkable weapons, equipment, and crops with extraordinary effects. With these newfound blessings, the once-undesirable Yuuya may just reach his true potential and become unstoppable.",
      objectPosition: "center",
    },

    {
      src: "images/isekai/healing magic.png",
      description: "Anime Name: The Wrong Way to Use Healing Magic",
      descriptionText:
        "Ken Usato is a normal high-schooler in every sense of the word—average grades, dreams, and a tendency to dislike extraordinary people. However, when he encounters the president and the vice president of the student council, both popular and extraordinary, he immediately befriends them. All of this is interrupted when Ken's new friends are summoned into another world—and he accidentally gets summoned as well! Dejected and with no way to return, he resigns himself to staying quietly in the new world—until he finds out he has an affinity for healing magic, a very rare form of magic which gives him both self-confidence and the attention of all mages. However, not all attention is good, which is something Ken realizes when he is noticed by a crazy fellow healing magic user...",
      objectPosition: "center top",
    },

    {
      src: "images/isekai/strongest.jpeg",
      description: "Anime Name: Am I Actually the Strongest?",
      descriptionText:
        "A 20-year-old shut-in is suddenly transported from his apartment, only to appear in front of a goddess who offers him a second chance at life. Although she grants him overpowered magical abilities in this new world, when he awakes as the newborn Prince Reinhardt, his talents are only measured at Level 2. Thinking their child to be an abysmal failure, his royal parents abandon him in the woods. There, the prince, who names himself Haruto, encounters Flay, a Flame Fenrir who decides to devote her life in service to him. Haruto's relative, Gold Zenfis, meets them both in the woods and decides to adopt the child as his own. Nine years pass with Haruto under the care of the Zenfis family. His mastery over his overpowered barrier magic increases by the day, though Haruto would rather not use it to help others. He practices his magic in secret, preferring to have his family believe that he is weak. However, his younger sister, Charlotte, discovers his strength, and with the assistance of Flay, Haruto protects her and the rest of the Zenfis family from harm.",
      objectPosition: "center top",
    },

    {
      src: "images/isekai/villainess 99.jpeg",
      description:
        "Anime Name: Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord",
      descriptionText:
        "The beginning of Light Magic and the Hero, an otome RPG, unfolds fairly normally: the heroine, Alicia Ehnleit, meets her three love interests one after another and then inevitably comes face-to-face with the villainess. Yumiella Dolkness may be of noble descent, but her dark hair and rare dark-type magic—both associated with the Demon Lord—spark fear in anyone who sees her. When she is five years old, Yumiella regains memories of her previous life in modern Japan, also realizing that her fate is to become the hidden boss that appears after Alicia and her suitors defeat the Demon Lord. Yumiella refuses to live as the game dictates and, as she prefers the game's fantasy elements over its romance, she decides to cultivate her magical skills and level up in secret. However, everything falls apart on the day of the Royal Academy's entrance ceremony. Yumiella's powers are measured at level 99—something thought impossible even for the royal knights, let alone a 15-year-old girl.",
      objectPosition: "center",
    },
  ];
  const images3 = [
    {
      src: "images/slice of life/mr villain.png",
      description: "Anime Name: Mr. Villain's day off",
      descriptionText:
        "As a member of a malevolent organization, the General is tasked with invading Earth and wiping out humanity. Even an extraterrestrial being like him, however, needs a chance to rest. Not even the Rangers—a team solely dedicated to defeating the General and his colleagues—will stand in the way of him visiting pandas at the zoo, buying ice cream at the convenience store, and enjoying his well-deserved day off from committing evil deeds.",
      objectPosition: "center",
    },

    {
      src: "images/slice of life/spy x family.jpeg",
      description: "Anime Name: Spy X Family",
      descriptionText:
        "For the agent known as Twilight, no order is too tall if it is for the sake of peace. Operating as Westalis' master spy, Twilight works tirelessly to prevent extremists from sparking a war with neighboring country Ostania. For his latest mission, he must investigate Ostanian politician Donovan Desmond by infiltrating his son's school: the prestigious Eden Academy. Thus, the agent faces the most difficult task of his career: get married, have a child, and play family. Twilight, or Loid Forger, quickly adopts the unassuming orphan Anya to play the role of a six-year-old daughter and prospective Eden Academy student. For a wife, he comes across Yor Briar, an absent-minded office worker who needs a pretend partner of her own to impress her friends. However, Loid is not the only one with a hidden nature. Yor moonlights as the lethal assassin Thorn Princess. For her, marrying Loid creates the perfect cover. Meanwhile, Anya is not the ordinary girl she appears to be; she is an esper, the product of secret experiments that allow her to read minds.",
      objectPosition: "center top",
    },

    {
      src: "images/slice of life/guide to babysitting.png",
      description: "Anime Name: The Yakuza's Guide To Babysitting",
      descriptionText:
        "Tooru Kirishima's notoriety is spread far and wide in the underworld. He is most commonly known as The Demon of Sakuragi—a man who is not afraid to resort to violence if deemed necessary. After almost jeopardizing a peace treaty, his boss tasks him with the most difficult job he has ever had: taking care of seven-year-old Yaeka Sakuragi—the boss' precious daughter—so that Tooru understands what it means to be responsible for another life. At first, the two do not seem to meet eye to eye, as Tooru has no clue on how to communicate with Yaeka, and the young girl is not used to expressing her emotions. However, as time goes on, they come to understand each other despite their differences. The fearsome right-hand man of a yakuza boss and the child he must protect are about to learn that family is not always bound by blood.",
      objectPosition: "center top",
    },

    {
      src: "images/slice of life/househusband.png",
      description: "Anime Name: The Way Of The Househusband",
      descriptionText:
        "Immortal Tatsu, the legendary yakuza who single-handedly defeated a rival gang with a lead pipe, is a name known to strike fear in both hardened police officers and vicious criminals. Soon after his sudden disappearance, he resurfaces with a slight change in profession. Now equipped with an apron, Tatsu has given up violence and is trying to make an honest living as a house husband. While adapting to mundane household tasks, Tatsu finds that being a house husband has its own challenges, from the battlefield known as supermarket sales to failures in the kitchen. Despite living peacefully, misunderstandings seem to follow him left and right. Gokushufudou follows the daily life of the comically serious ex-yakuza as he leaves behind his dangerous previous life to become a stay-at-home husband.",
      objectPosition: "center top",
    },

    {
      src: "images/slice of life/bunny drop.png",
      description: "Anime Name: Bunny Drop",
      descriptionText:
        "Daikichi Kawachi is a 30-year-old bachelor working a respectable job but otherwise wandering aimlessly through life. When his grandfather suddenly passes away, he returns to the family home to pay his respects. Upon arriving at the house, he meets a mysterious young girl named Rin who, to Daikichi’s astonishment, is his grandfather's illegitimate daughter! The shy and unapproachable girl is deemed an embarrassment to the family, and finds herself ostracized by her father's relatives, all of them refusing to take care of her in the wake of his death. Daikichi, angered by their coldness towards Rin, announces that he will take her in—despite the fact that he is a young, single man with no prior childcare experience. Usagi Drop is the story of Daikichi's journey through fatherhood as he raises Rin with his gentle and affectionate nature, as well as an exploration of the warmth and interdependence that are at the heart of a happy, close-knit family.",
      objectPosition: "center top",
    },
  ];

  const images4 = [
    {
      src: "images/shounen/dbz.jpg",
      description: "Anime Name: Dragon Ball Z",
      descriptionText:
        "Five years after winning the World Martial Arts tournament, SON-Goku is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Goku's long-lost brother. He reveals that Goku is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Goku's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others. With his failed attempt at forcibly recruiting Goku as an ally, Raditz warns Goku's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z.",
      objectPosition: "center top",
    },

    {
      src: "images/shounen/jjk.jpeg",
      description: "Anime Name: Jujutsu Kaisen",
      descriptionText:
        "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses. Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.",
      objectPosition: "center top",
    },

    {
      src: "images/shounen/mashle.jpeg",
      description: "Anime Name: Mashle: Magic and Muscles",
      descriptionText:
        "In this magical world, one is easily identified as having magical abilities by a distinctive mark on their face. Those unable to practice magic are swiftly exterminated to maintain the magical integrity of society. However, deep within a forest lies an anomaly in Mash Burnedead, who can be found pumping iron with one arm and lifting a cream puff with the other. This aloof boy with superhuman strength—but no magical abilities—leads a quiet life with his father, far removed from society. Mash's peace is soon disturbed when the authorities discover his lack of magical powers. They issue him an ultimatum: compete to become a Divine Visionary, which would force everyone to accept him, or be persecuted forever. To protect his family, he enrolls in the prestigious Easton Magic Academy, which only the most elite and gifted students are allowed to attend. Now, Mash must overcome his shortcomings as a magicless being and surpass the other students—relying solely on his muscles.",
      objectPosition: "center top",
    },

    {
      src: "images/shounen/aot.jpg",
      description: "Anime Name: Attack On Titan",
      descriptionText:
        "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls.",
      objectPosition: "center top",
    },

    {
      src: "images/shounen/hells paradise.jpeg",
      description: "Anime Name: Hell's Paradise",
      descriptionText:
        "Sentenced to death, ninja Gabimaru the Hollow finds himself apathetic. After leading a blood-soaked life, Gabimaru believes he deserves to die. However, every attempt to execute him inexplicably fails. Finally, Sagiri Yamada Asaemon, a fledgling member of a famed executioner clan, is asked to take Gabimaru's life; yet Sagiri makes no move to kill him as requested. Insisting that Gabimaru will not die because of his love for his wife, Sagiri instead offers him the chance to obtain a full pardon for his crimes. If he can travel to the island of Shinsekyo and obtain the Elixir of Life—which supposedly grants immortality—and bring it back for the shogun, then his freedom will be assured. But of the many who have traveled to Shinsekyo in search of the mythical Elixir, not a single person has returned sound of mind, if at all. Though unaware of the numerous dangers ahead, Gabimaru decides to accept the offer—alongside ten other death row convicts—in hope that he and his wife may finally live in peace.",
      objectPosition: "center top",
    },
  ];

  const images5 = [
    {
      src: "images/comedy/aho girl.png",
      description: "Anime Name: Aho-Girl",
      descriptionText:
        "Yoshiko Hanabatake is an idiot beyond all belief. Somehow managing to consistently score zeroes on all of her tests and consumed by an absurd obsession with bananas, her senseless acts have caused even her own mother to lose all hope. Only one person is up to the task of keeping her insanity in check: childhood friend Akuru A-kun Akutsu. Though he bemoans the ridiculous behavior he has to endure, the studious but terrifying A-kun is always ready to put an end to any stupidity Yoshiko gets up to, with no qualms about using physical force. Unfortunately, no matter how many times he attempts to knock some sense into her, the girl bounces right back to her usual shenanigans, even dragging in some other eccentrics along for the ride. Try as he might to rein in her nonsense, every moment is unpredictable with Yoshiko and her profound idiocy on the loose. ",
      objectPosition: "center bottom",
    },

    {
      src: "images/comedy/himouto.jpg",
      description: "Anime Name: Himouto! Umaru-chan",
      descriptionText:
        "People are not always who they appear to be, as is the case with Umaru Doma, the perfect high school girl—that is, until she gets home! Once the front door closes, the real fun begins. When she dons her hamster hoodie, she transforms from a refined, over-achieving student into a lazy, junk food-eating otaku, leaving all the housework to her responsible older brother Taihei. Whether she's hanging out with her friends Nana Ebina and Kirie Motoba, or competing with her self-proclaimed rival Sylphinford Tachibana, Umaru knows how to kick back and have some fun! Himouto! Umaru-chan is a cute story that follows the daily adventures of Umaru and Taihei, as they take care of—and put up with—each other the best they can, as well as the unbreakable bonds between friends and siblings.",
      objectPosition: "center",
    },

    {
      src: "images/comedy/toture princess.png",
      description: "Anime Name: Tis Time for Torture, Princess",
      descriptionText:
        "The princess who's been held captive by the Demon Lord's army is scheduled to be executed by the Demon Lord's relentless torture!",
      objectPosition: "center",
    },

    {
      src: "images/comedy/monster girls.png",
      description: "Anime Name: Interviews With Monster Girls",
      descriptionText:
        "High school biology teacher Tetsuo Takahashi may look like your average everyday instructor, but beneath his gentle appearance lies something less ordinary: his fascination for the Ajin, more commonly known as Demi. Although these half-human, half-monster beings have integrated into human society, Takahashi believes that much about them will remain unknown unless he interacts with them firsthand. Demi-chan wa Kataritai follows Takahashi's daily life in Shibasaki High School together with his three Demi students—Hikari Takanashi, an energetic vampire; Kyouko Machi, a gentle dullahan; and Yuki Kusakabe, the shy snow woman. Along the way, Takahashi also meets fellow teacher Sakie Satou, a succubus with an aversion towards men. To fulfill his goal of learning more about the Demi, Takahashi decides to conduct casual interviews with the girls to learn more about their abilities, psyche, and interaction with human society. As Takahashi strengthens his bond with his students, he soon discovers that the Demi are not as unusual as he initially believed.",
      objectPosition: "center top",
    },

    {
      src: "images/comedy/cool guys.jpg",
      description: "Anime Name: Play It Cool, Guys",
      descriptionText:
        "Despite their distinctive personalities, Souma Shiki, Hayate Ichikura, Shun Futami, and Takayuki Mima all have one thing in common: though naturally clumsy, the four disguise their embarrassment from tiny slip-ups by maintaining a composed demeanor. However, it is actually the guys' airheaded natures that makes the girls' hearts throb. No matter what happens in their daily lives, the boys do their best not to lose their cool! ",
      objectPosition: "center top",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-start justify-start">
        <h1 className="text-4xl font-Fuzzy text-gray-200 mt-5">
          Top 5 Romance Anime:
        </h1>
        <Carousel images={images1} />
        <h1 className="text-4xl font-Fuzzy text-gray-200 mt-5">
          Top 5 Isekai Anime:
        </h1>
        <Carousel images={images2} />
        <h1 className="text-4xl font-Fuzzy text-gray-200 mt-5">
          Top 5 Slice Of Life Anime:
        </h1>
        <Carousel images={images3} />
        <h1 className="text-4xl font-Fuzzy text-gray-200 mt-5">
          Top 5 Shounen Anime:
        </h1>
        <Carousel images={images4} />
        <h1 className="text-4xl font-Fuzzy text-gray-200 mt-5">
          Top 5 Comedy Anime:
        </h1>
        <Carousel images={images5} />
      </div>
    </>
  );
}

export default App;
