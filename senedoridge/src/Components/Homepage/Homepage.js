import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Gallery from "../Gallery/Gallery";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Home", url: "#" },
  { title: "About Us", url: "#" },
  { title: "Contact Us", url: "#" },
  { title: "Events", url: "#" },
  { title: "Wine Shop", url: "#" },
  { title: "Gallery", url: "#" },
];

const mainFeaturedPost = {
  title: "Senedo Ridge Vineyard",
  description:
    "Senedo Ridge Vineyard was founded in 2016 by Jonathan Church with a simple idea in mind:",
  description1: "To Leave Something Behind Bigger Than Oneself.",

  image: "https://i.imgur.com/hRMV0G1.jpg",
  imgText: "main image description",
  linkText: "Browse Wines",
};

const featuredPosts = [
  {
    title: "About Us",
    date: "",
    description:
      "Senedo Ridge is family owned and operated by the Church family. Our wine is estate grown and produced among the foothills of the Shenandoah Valley. The Vineyard operates on two acres of a sloping mountainside with high quality clay-based soil. ",
    image: "https://i.imgur.com/Rd7jJDR.jpg",
    imageText: "Image Text",
  },
];

const contactUs = [
  {
    title: "Contact Us",
    date: "",
    description:
      "If you would like to get in contact, either for feedback or to join our wine club, please fill out the form below. ",
    image: "",
    imageText: "Image Text",
  },
];

//   {
//     title: "Contact Us",
//     date: "",
//     description:
//       "If you would like to get in contact, either for feedback or to join our wine club, please fill out the form below ",
//     image: "https://i.imgur.com/Rd7jJDR.jpg",
//     imageText: "Image Text",
//   },
// ];

export default function Homepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Senedo Ridge Vineyard" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={4}>
            {contactUs.map((post) => (
              <ContactUs key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Senedo Ridge Vineyard"
        description="Estate Grown & Operated"
      />
    </React.Fragment>
  );
}
