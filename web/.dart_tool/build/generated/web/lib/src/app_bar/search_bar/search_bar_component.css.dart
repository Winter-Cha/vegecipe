final List<dynamic> styles = ['.app-bar-button {\n  width: 56px;\n  height: 56px;\n  padding: 14px;\n  cursor: pointer;\n  user-select: none;\n  transition: background-color 250ms ease, opacity 150ms ease, transform 250ms ease;\n}\n.app-bar-button.active {\n  background: #152451;\n}\n@media only screen and (min-width: 768px) {\n  .app-bar-button {\n    width: 60px;\n    height: 60px;\n  }\n}\n\n.scrolling-blocked {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.page-title {\n  display: none;\n}\n@media only screen and (min-width: 768px) {\n  .page-title {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 20px;\n  }\n  .page-title h3 {\n    color: #ffffff;\n    font-weight: 600;\n    font-size: 30px;\n    text-transform: uppercase;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .content-wrapper {\n    margin: 0 auto;\n    width: 70%;\n    min-width: 850px;\n    padding: 100px 0;\n  }\n}\n:host {\n  display: flex;\n  background: #f4f7f4;\n}\n:host[expanded] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n@media only screen and (min-width: 768px) {\n  :host[expanded] {\n    position: unset;\n  }\n}\n\n.back {\n  display: none;\n}\n.back.visible {\n  display: block;\n  padding-left: 16px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 768px) {\n  .back.visible {\n    display: none;\n  }\n}\n\ninput {\n  display: none;\n  background: transparent;\n  width: 100%;\n  color: #020202;\n  font-size: 16px;\n  padding: 8px;\n}\ninput, input:focus {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\ninput::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\ninput.visible {\n  display: block;\n}\n\n.buttons {\n  position: relative;\n  width: 56px;\n  height: 56px;\n}\n@media only screen and (min-width: 768px) {\n  .buttons {\n    width: 56px;\n    height: 56px;\n  }\n}\n\n.buttons img {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  transform: scale(0.2);\n}\n.buttons img.visible {\n  opacity: 1;\n  transform: scale(1);\n}\n'];