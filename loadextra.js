window.onload = function () {
  const elements = document.getElementsByClassName("loadMe");
  async function func() {

    await Promise.all(
      Array.from(elements).map((element) => {
        // Get the URL from data-url attribute
        const url = element.getAttribute("file");
        if (url) {
          return fetch(url)
            .then((response) => {
              if (!response) {
                console.log("failed " + url);
                return Promise.resolve(true);
              }
              console.log("loaded " + url);
              return response.text().then((html) => {

                element.innerHTML = html;
                return Promise.resolve(true);
              });
            })
            .catch((error) => {
              console.error(`Error loading ${url}:`, error);
              return Promise.resolve(true);
            });
        }
      })
    ).then(() => {
      console.log("starting blockly...");
      Code.startBlockly();
    });
  }
  func();
};
