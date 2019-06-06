final List<dynamic> styles = ['.container {\n  position: relative;\n  height: 100vh;\n}\n\n.loading-content {\n  position: absolute;\n  width: 100%;\n  height: 75%;\n  transition: opacity 150ms ease;\n}\n.loading-content.visible {\n  opacity: 1;\n}\n\n.error-content {\n  position: absolute;\n  width: 100%;\n  height: 75%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 450ms ease;\n}\n.error-content.visible {\n  opacity: 1;\n}\n\n.success-content {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 450ms ease;\n}\n.success-content.visible {\n  opacity: 1;\n}\n\n.icon {\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.12);\n}\n.icon img {\n  display: block;\n  width: 96px;\n  height: 96px;\n}\n\n.title {\n  margin-top: 16px;\n  max-width: 350px;\n  text-align: center;\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.message {\n  margin-top: 8px;\n  max-width: 250px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.try-again {\n  margin-top: 12px;\n  color: #ffffff;\n  padding: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  user-select: none;\n}\n'];