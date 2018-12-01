module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/common/sass/common.scss";
            @import "@/common/sass/global.scss";
          `
        }
      }
    }
}