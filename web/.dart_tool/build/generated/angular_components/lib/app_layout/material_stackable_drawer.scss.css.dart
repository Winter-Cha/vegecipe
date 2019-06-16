final List<dynamic> styles = [':host {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: transparent;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 1;\n}\n\n:host(.mat-drawer-expanded) {\n  pointer-events: auto;\n}\n\n:host([overlay].mat-drawer-expanded) {\n  background-color: rgba(0, 0, 0, 0.38);\n  transition-duration: 225ms;\n}\n\n:host([overlay]) {\n  background-color: transparent;\n  transition: background-color 195ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host > .drawer-content {\n  background-color: #fff;\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  box-shadow: none;\n  transform: translateX(0);\n  pointer-events: auto;\n  transition-property: box-shadow, left, right, transform, width;\n  transition-duration: 195ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n:host(.mat-drawer-expanded) > .drawer-content {\n  /*! @noflip */\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition-duration: 225ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n:host ::ng-deep > .drawer-content {\n  left: -256px;\n  width: 256px;\n}\n\n:host(.mat-drawer-expanded) ::ng-deep > .drawer-content {\n  transform: translateX(100%);\n}\n\n:host([end]) ::ng-deep > .drawer-content {\n  left: initial;\n  right: -256px;\n}\n\n:host([end].mat-drawer-expanded) ::ng-deep > .drawer-content {\n  transform: translateX(-100%);\n}\n\n:host ::ng-deep > .drawer-content.drawer-content-expanded {\n  left: -100%;\n  width: 100%;\n}\n\n:host(.mat-drawer-expanded) ::ng-deep > .drawer-content.drawer-content-expanded {\n  transform: translateX(100%);\n}\n\n:host([end]) ::ng-deep > .drawer-content.drawer-content-expanded {\n  left: initial;\n  right: -100%;\n}\n\n:host([end].mat-drawer-expanded) ::ng-deep > .drawer-content.drawer-content-expanded {\n  transform: translateX(-100%);\n}\n'];