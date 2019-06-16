final List<dynamic> styles = [':host {\n  position: relative;\n  z-index: 2001;\n}\n\n.button {\n  position: relative;\n  width: 100%;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #717DAD;\n  border-radius: 5px;\n  padding: 6px;\n  user-select: none;\n  cursor: pointer;\n}\n.button img {\n  width: 24px;\n  height: 24px;\n}\n.button .button-text {\n  flex-grow: 1;\n  font-size: 16px;\n  padding: 0 8px;\n  color: #FEFEFE;\n}\n\n.menu {\n  display: none;\n  position: absolute;\n  top: 36px;\n  width: 100%;\n  height: 400px;\n}\n.menu.visible {\n  display: block;\n}\n\n@media only screen and (min-width: 650px) {\n  :host {\n    min-width: 250px;\n  }\n}\n'];