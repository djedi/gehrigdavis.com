// .eleventy.js

module.exports = function (eleventyConfig) {
  // You can configure other settings here

  // Copy static assets (like images, CSS, etc.) to the output directory
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/.htaccess");

  // Set the template engine to Nunjucks (you can use other templating engines like Liquid, Handlebars, etc.)
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);

  eleventyConfig.addFilter("formatDate", function (date) {
    // Ensure the input is a Date object
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the month, day, and year
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Function to add the appropriate suffix to the day
    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return day + "th";
      }
      switch (day % 10) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    }

    const formattedDate = `${month} ${getDayWithSuffix(day)}, ${year}`;
    return formattedDate;
  });

  return {
    dir: {
      input: "src", // Source code directory
      output: "dist", // Output directory
    },
  };
};
