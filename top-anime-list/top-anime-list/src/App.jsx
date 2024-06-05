import Header from "./Header";
import React from "react";
import Carousel from "./Carousel";

import Footer from "./Footer";
import { object } from "prop-types";
function App() {
  const images1 = [
    {
      src: "/src/assets/images/romance/a silent voice.jpg",
      description: "Anime Name: A Silent Voice",
      descriptionText:
        "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.",
      objectPosition: "center",
    },
    {
      src: "/src/assets/images/romance/horimiya.png",
      description: "Anime Name: Horimiya",
      descriptionText:
        "On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people's minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent. Having opposite personalities yet sharing odd similarities, the two quickly become friends and often spend time together in Hori's home. As they both emerge from their shells, they share with each other a side of themselves concealed from the outside world.",
      objectPosition: "center top",
    },
    {
      src: "/src/assets/images/romance/your name.jpg",
      description: "Your Name:",
      descriptionText:
        "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture. One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another. Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.",
      objectPosition: "center bottom",
    },
    {
      src: "/src/assets/images/romance/clannad.jpg",
      description: "Clannad:",
      descriptionText:
        "Tomoya Okazaki is a delinquent who finds life dull and believes he'll never amount to anything. Along with his friend Youhei Sunohara, he skips school and plans to waste his high school days away. One day while walking to school, Tomoya passes a young girl muttering quietly to herself. Without warning she exclaims Anpan! (a popular Japanese food) which catches Tomoya's attention. He soon discovers the girl's name is Nagisa Furukawa and that she exclaims things she likes in order to motivate herself. Nagisa claims they are now friends, but Tomoya walks away passing the encounter off as nothing. However, Tomoya finds he is noticing Nagisa more and more around school. Eventually he concedes and befriends her. Tomoya learns Nagisa has been held back a year due to a severe illness and that her dream is to revive the school's drama club. Claiming he has nothing better to do, he decides to help her achieve this goal along with the help of four other girls. As Tomoya spends more time with the girls, he learns more about them and their problems. As he attempts to help each girl overcome her respective obstacle, he begins to realize life isn't as dull as he once thought. ",
      objectPosition: "center top",
    },
    {
      src: "/src/assets/images/romance/the dangers in my heart.jpeg",
      description: "Dangers In My Heart:",
      descriptionText:
        "Kyoutarou Ichikawa may look like a shy and reserved middle school student, but deep within his heart is a bloodthirsty killer. His ultimate desire is to see his classmate Anna Yamada's beautiful face writhing in pain before he ends her life. But this fantasy may never come to fruition, as Ichikawa starts to see an entirely different side to Yamada. Often seeking refuge in the library, Ichikawa frequently runs into Yamada. It is during these encounters that Ichikawa realizes his model classmate is actually an airhead who can never read the room. As they spend more time together, the boy cannot help but feel not only a sense of endearment toward the very girl he wishes to murder but also a desire to protect her at all costs. Is it possible that this sudden change in Ichikawa's perspective could lead to something more?",
      objectPosition: "center top",
    },
  ];

  const images2 = [
    {
      src: "/src/assets/images/",
      description: "Anime Name:",
      descriptionText: "",
      objectPosition: "center top",
    },
    {
      src: "/src/assets/images/",
      description: "Anime Name:",
      descriptionText: "",
      objectPosition: "center top",
    },
    {
      src: "/src/assets/images/",
      description: "Anime Name:",
      descriptionText: "",
      objectPosition: "center top",
    },
    {
      src: "/src/assets/images/",
      description: "Anime Name:",
      descriptionText: "",
      objectPosition: "center top",
    },
    {
      src: "/src/assets/images/",
      description: "Anime Name:",
      descriptionText: "",
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
      </div>
    </>
  );
}

export default App;
