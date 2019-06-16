final List<dynamic> styles = ['nav {\n  position: fixed;\n  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-around;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 68px;\n  opacity: 1;\n  transition: opacity 350ms ease, bottom 350ms ease;\n}\nnav.hidden {\n  opacity: 0;\n  bottom: -60px;\n}\n\nnav a {\n  padding: 10px 16px 2px 16px;\n  text-decoration: none;\n  text-align: center;\n  user-select: none;\n}\nnav a .icon {\n  width: 28px;\n  height: 28px;\n  opacity: 0.6;\n  transition: opacity 0.15s linear;\n}\nnav a span {\n  display: flex;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 0 2px 5px 2px;\n  font-size: 14px;\n  transition: border-bottom-width 0.15s linear, padding-bottom 0.15s linear, color 0.15s linear;\n}\nnav a.active-route {\n  color: #fff;\n  padding-bottom: 0;\n}\nnav a.active-route .icon {\n  opacity: 1;\n}\nnav a.active-route span {\n  padding-bottom: 0;\n  color: #ffffff;\n}\n\n@media only screen and (min-width: 768px) {\n  nav {\n    margin-left: 40px;\n    height: 60px;\n    position: unset;\n    box-shadow: none;\n    justify-content: unset;\n    background: unset;\n    width: unset;\n  }\n  nav a {\n    padding-bottom: 0;\n  }\n  nav a span {\n    height: 100%;\n    font-size: 16px;\n    border-bottom: 0 solid #fdbd2c;\n  }\n  nav .icon {\n    display: none;\n  }\n  nav .active-route span {\n    border-bottom-width: 5px;\n  }\n}\n'];