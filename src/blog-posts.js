export const getPosts = () => {
  return [
    {
      title: "Hello, a bit about me ",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      // date: "july 2020"
    },
    {
      title: "TECHNICAL TOOLBOX",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      // date: "july 2020"
    },
    // {
    //   title: "Merhaba dünya!",
    //   slug: "merhaba",
    //   details: require("./posts/merhaba.md").default,
    //   date: "july 2020"
    // }
  ];
};
