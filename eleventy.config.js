import { glob } from 'glob'

export default async function(eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

  const files = await glob('**/*', { cwd: 'src/stuff', nodir: true });
  
  console.log('Here are all the files:');
  console.log(files);

  eleventyConfig.addGlobalData("files", files);
  eleventyConfig.addPassthroughCopy("src/stuff/!(.gitkeep)");

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    pathPrefix: "/hostglorb/"
  };
};


