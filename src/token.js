window.onload = () => {
  YaSendSuggestToken("https://oauth-master-class-nine.vercel.app/")

  window.YaAuthSuggest.init(
      {
        client_id: "c46f0c53093440c39f12eff95a9f2f93",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-nine.vercel.app/token.html",
      },
      "https://oauth-master-class-lake.vercel.app",
      {
        parentId: "buttonContainer",
        view: "button",
        buttonTheme: "light",
        buttonSize: "xs",
        buttonBorderRadius: 20,
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
};
