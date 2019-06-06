          import "package:test/bootstrap/node.dart";

          import "sample_test.dart" as test;

          void main() {
            internalBootstrapNodeTest(() => test.main);
          }
        