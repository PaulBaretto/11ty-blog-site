const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("postDate", (dataobj) => {
        return DateTime.fromJSDate(dataobj).toLocaleString(DateTime.DATE_MED)
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}