import React from "react";

import { Carrousel, ContentTitle } from "src/components";

import { Container, Session } from "./styles";

import Image1 from "src/assets/images/blog_image_1.svg";
import Image2 from "src/assets/images/bloco_image_2.svg";
import Image3 from "src/assets/images/bloco_image_3.svg";
import Image4 from "src/assets/images/bloco_image_4.svg";

import Profile1 from "src/assets/images/profile1.svg";
import Profile2 from "src/assets/images/profile2.svg";
import Profile3 from "src/assets/images/profile3.svg";
import Profile4 from "src/assets/images/profile4.svg";

const Blog: React.FC = () => {
  const data = [
    {
      image: Image1,
      title: "Quick-start guide to nuts and seeds",
      profile: {
        image: Profile1,
        name: "Kevin Ibrahim",
      },
    },
    {
      image: Image2,
      title: "Nutrition: Tips for Improving Your Health",
      profile: {
        image: Profile2,
        name: "Mike Jackson",
      },
    },
    {
      image: Image3,
      title: "The top 10 benefits of eating healthy",
      profile: {
        image: Profile3,
        name: "Bryan McGregor",
      },
    },
    {
      image: Image4,
      title: "What Makes a Healthy Diet?",
      profile: {
        image: Profile4,
        name: "Jashua",
      },
    },
  ];

  return (
    <Session id="blog">
      <Container>
        <ContentTitle
          title="Read Our Blog"
          subTitle=" Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts."
        />
        <Carrousel data={data} />
      </Container>
    </Session>
  );
};

export default Blog;
