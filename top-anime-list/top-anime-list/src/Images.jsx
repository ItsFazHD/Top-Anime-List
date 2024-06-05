import Carousel from "./Carousel";

function Images() {
  const images = [
    {
      src: "/src/assets/images/romance/ a silent voice.jpg",
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
      <Carousel images={images} />
    </>
  );
}

export default Images;
