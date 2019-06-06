          import "package:test/bootstrap/browser.dart";

          import "sample_test.dart" as test;

          void main() {
            internalBootstrapBrowserTest(() => test.main);
          }
        