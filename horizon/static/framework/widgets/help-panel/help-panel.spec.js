(function () {
  'use strict';

  describe('horizon.framework.widgets.help-panel module', function () {
    it('should have been defined', function () {
      expect(angular.module('horizon.framework.widgets.help-panel')).toBeDefined();
    });
  });

  describe('help-panel directive', function () {
    var $compile,
        $scope,
        element;

    beforeEach(module('templates'));
    beforeEach(module('horizon.framework.widgets'));
    beforeEach(module('horizon.framework.widgets.help-panel'));
    beforeEach(inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $compile = $injector.get('$compile');
      element = $compile('<help-panel>Help</help-panel>')($scope);
      $scope.$digest();
    }));

    it('should be compiled', function () {
      expect(element.html().trim()).not.toBe('Help');
      expect(element.text().trim()).toBe('Help');
    });

    it('should be closed by default', function () {
      expect(element[0].querySelector('.help-panel').className).toBe('help-panel');
    });

    it('should add "open" to class name if $scope.openHelp is true', function () {
      $scope.openHelp = true;
      $scope.$digest();
      expect(element[0].querySelector('.help-panel').className).toBe('help-panel open');
    });

    it('should remove "open" from class name if $scope.openHelp is false', function () {
      $scope.openHelp = true;
      $scope.$digest();
      $scope.openHelp = false;
      $scope.$digest();
      expect(element[0].querySelector('.help-panel').className).toBe('help-panel');
    });
  });

})();
