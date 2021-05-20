exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/home/)) {
    page.matchPath = '/home/';

    // update the page
    createPage(page);
  }

  createPage(page);
};
