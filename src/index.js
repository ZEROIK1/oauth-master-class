window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "734cca9a236d4485bc6de5df7c0b85cb",
        response_type: "token",
        redirect_uri: "https://examplesite.com/suggest/token",
      },
      "https://examplesite.com",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};
