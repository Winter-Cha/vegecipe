// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:source_gen/builder.dart' as _i2;
import 'package:sass_builder/sass_builder.dart' as _i3;
import 'package:build/build.dart' as _i4;
import 'package:angular/src/build.dart' as _i5;
import 'package:build_test/builder.dart' as _i6;
import 'package:build_config/build_config.dart' as _i7;
import 'package:build_modules/builders.dart' as _i8;
import 'package:build_web_compilers/builders.dart' as _i9;
import 'dart:isolate' as _i10;
import 'package:build_runner/build_runner.dart' as _i11;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('source_gen:combining_builder', [_i2.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen:part_cleanup']),
  _i1.apply('sass_builder:sass_builder', [_i3.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true,
      defaultReleaseOptions: _i4.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: ['sass_builder:sass_source_cleanup']),
  _i1.apply(
      'angular:angular',
      [_i5.templatePlaceholder, _i5.templateCompiler, _i5.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'angular:placeholder_cleanup',
        'angular:component_source_cleanup'
      ]),
  _i1.apply(
      'build_test:test_bootstrap',
      [_i6.debugIndexBuilder, _i6.debugTestBuilder, _i6.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i7.InputSet(include: ['test/**'])),
  _i1.apply('build_modules:module_library', [_i8.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:vm',
      [
        _i8.metaModuleBuilderFactoryForPlatform('vm'),
        _i8.metaModuleCleanBuilderFactoryForPlatform('vm'),
        _i8.moduleBuilderFactoryForPlatform('vm')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:dart2js',
      [
        _i8.metaModuleBuilderFactoryForPlatform('dart2js'),
        _i8.metaModuleCleanBuilderFactoryForPlatform('dart2js'),
        _i8.moduleBuilderFactoryForPlatform('dart2js')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:dartdevc',
      [
        _i8.metaModuleBuilderFactoryForPlatform('dartdevc'),
        _i8.metaModuleCleanBuilderFactoryForPlatform('dartdevc'),
        _i8.moduleBuilderFactoryForPlatform('dartdevc'),
        _i8.unlinkedSummaryBuilderForPlatform('dartdevc'),
        _i8.linkedSummaryBuilderForPlatform('dartdevc')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:ddc', [_i9.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers:dart_source_cleanup',
        'build_modules:dartdevc',
        'build_modules:dart2js'
      ]),
  _i1.apply('build_web_compilers:entrypoint', [_i9.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i7.InputSet(include: [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i4.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: _i4.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers:dart2js_archive_extractor']),
  _i1.applyPostProcess('source_gen:part_cleanup', _i2.partCleanup,
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess('angular:placeholder_cleanup', _i5.placeholderCleanup,
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess(
      'angular:component_source_cleanup', _i5.componentSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i7.InputSet(include: ['lib/**'])),
  _i1.applyPostProcess('build_modules:module_cleanup', _i8.moduleCleanup,
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:dart_source_cleanup', _i9.dartSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess('build_web_compilers:dart2js_archive_extractor',
      _i9.dart2JsArchiveExtractor,
      defaultReleaseOptions: _i4.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess(
      'sass_builder:sass_source_cleanup', _i3.sassSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i7.InputSet())
];
main(List<String> args, [_i10.SendPort sendPort]) async {
  var result = await _i11.run(args, _builders);
  sendPort?.send(result);
}
