          import "package:test/bootstrap/node.dart";

          import "firebase_api_test.dart" as test;

          void main() {
            internalBootstrapNodeTest(() => test.main);
          }
        