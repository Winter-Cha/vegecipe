          import "package:test/bootstrap/browser.dart";

          import "firebase_api_test.dart" as test;

          void main() {
            internalBootstrapBrowserTest(() => test.main);
          }
        