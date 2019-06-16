final List<dynamic> styles = ['.app-bar-button {\n  width: 56px;\n  height: 56px;\n  padding: 14px;\n  cursor: pointer;\n  user-select: none;\n  transition: background-color 250ms ease, opacity 150ms ease, transform 250ms ease;\n}\n.app-bar-button.active {\n  background: #152451;\n}\n@media only screen and (min-width: 768px) {\n  .app-bar-button {\n    width: 60px;\n    height: 60px;\n  }\n}\n\n.scrolling-blocked {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.page-title {\n  display: none;\n}\n@media only screen and (min-width: 768px) {\n  .page-title {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 20px;\n  }\n  .page-title h3 {\n    color: #ffffff;\n    font-weight: 600;\n    font-size: 30px;\n    text-transform: uppercase;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .content-wrapper {\n    margin: 0 auto;\n    width: 70%;\n    min-width: 850px;\n    padding: 100px 0;\n  }\n}\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  bottom: unset;\n  background: #f0f0f0;\n  min-height: 100%;\n  max-width: 100%;\n  opacity: 0;\n  transition: opacity 500ms ease;\n}\n.container.visible {\n  opacity: 1;\n}\n\n.back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  z-index: 3;\n  width: 68px;\n  height: 68px;\n  padding: 20px;\n}\n\n.vegenews-header {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  margin: -50px 20px 0 20px;\n  position: relative;\n  z-index: 3;\n}\n\nvegenews-poster {\n  flex: 1;\n  min-width: 125px;\n  max-width: 200px;\n  box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.35);\n}\n\n.vegenews-information {\n  flex: 2;\n  margin: 60px 0 0 15px;\n}\n.vegenews-information .title {\n  color: #1D1D1B;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1.3;\n}\n.vegenews-information .body {\n  font-size: 14px;\n  margin-top: 10px;\n}\n.vegenews-information .body .length {\n  margin-bottom: 5px;\n}\n.vegenews-information .body .writtenBy {\n  margin-bottom: 10px;\n}\n\n.centered-content {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.actor-section .centered-content {\n  margin: 0;\n}\n.actor-section .centered-content h3 {\n  margin: 0 20px 8px 20px;\n}\n\n.section {\n  margin-top: 10px;\n  padding: 20px 0 15px 0;\n}\n.section.top-shadow {\n  box-shadow: 0px -2px 30px rgba(0, 0, 0, 0.1);\n}\n.section.white {\n  background: #ffffff;\n}\n.section.footer {\n  background: url("images/background-image.jpg") no-repeat bottom fixed;\n  background-size: cover;\n  margin-top: 0;\n  padding-bottom: 80px;\n}\n.section h3 {\n  color: #1D1D1B;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n.section p {\n  color: #1D1D1B;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.footer {\n  background: linear-gradient(#1C306D, #141e56) no-repeat fixed;\n}\n.footer h3 {\n  color: #FEFEFE;\n}\n\n.gallery {\n  margin-top: 20px;\n}\n.gallery img {\n  margin-right: 30px;\n  margin-bottom: 30px;\n  width: calc(100% / 2 - 20px);\n  min-height: 90px;\n  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.35);\n}\n\n.gallery img:nth-child(2n) {\n  margin-right: 0;\n}\n\n.content {\n  white-space: pre-wrap;\n}\n\n@media only screen and (min-width: 412px) {\n  .gallery img {\n    min-height: 124px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .vegenews-information {\n    margin-left: 25px;\n  }\n  .vegenews-information .title {\n    font-size: 30px;\n    line-height: 1.5;\n  }\n  .vegenews-information .body {\n    font-size: 16px;\n  }\n\n  .gallery img {\n    min-height: 258px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .vegenews-header {\n    margin: -225px auto 0 auto;\n    width: 70%;\n  }\n\n  vegenews-poster {\n    flex: unset;\n    min-width: unset;\n    max-width: unset;\n    width: 300px;\n    height: 450px;\n  }\n\n  .vegenews-information {\n    margin-top: 240px;\n    margin-left: 30px;\n  }\n\n  .centered-content {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .actor-section .centered-content {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .actor-section .centered-content h3 {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .section {\n    margin-top: 30px;\n    padding: 30px 0 40px 0;\n  }\n  .section h3 {\n    font-size: 30px;\n  }\n  .section p {\n    font-size: 16px;\n  }\n\n  .gallery img {\n    width: calc(100% / 3 - 20px);\n    min-height: 164px;\n  }\n  .gallery img:nth-child(2n) {\n    margin-right: 30px;\n  }\n  .gallery img:nth-child(3n) {\n    margin-right: 0;\n  }\n}\n'];