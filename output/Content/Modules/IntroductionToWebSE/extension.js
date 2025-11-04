define(['@docsvision/webclient/System/ExtensionManager', '@docsvision/webclient/System/ServiceUtils', 'tslib', '@docsvision/webclient/System/$MessageBox', '@docsvision/webclient/System/Service', '@docsvision/webclient/System/ControllerBase'], (function (ExtensionManager, ServiceUtils, tslib, $MessageBox, Service, ControllerBase) { 'use strict';

  var $OfficeMemoService = ServiceUtils.serviceName(function (x) { return x.activityPlanService; });
  // export type $OfficeMemoServiceType = { activityPlanService: IOfficeMemoService };
  // export const $OfficeMemoService = serviceName<$OfficeMemoServiceType, IOfficeMemoService>(x => x.activityPlanService);

  var OfficeMemoLogic = /** @class */ (function () {
      function OfficeMemoLogic() {
      }
      OfficeMemoLogic.prototype.performAction = function (layout) {
          return tslib.__awaiter(this, void 0, void 0, function () {
              var response;
              return tslib.__generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, layout.getService($OfficeMemoService).GetOfficeMemoName({
                              documentId: layout.cardInfo.id
                          })];
                      case 1:
                          response = _a.sent();
                          layout.getService($MessageBox.$MessageBox).showInfo(response.content, "Содержание карточки");
                          return [2 /*return*/];
                  }
              });
          });
      };
      return OfficeMemoLogic;
  }());

  function ddOfficeMemo_action1_onClick(sender) {
      return tslib.__awaiter(this, void 0, void 0, function () {
          return tslib.__generator(this, function (_a) {
              new OfficeMemoLogic().performAction(sender.layout);
              return [2 /*return*/];
          });
      });
  }

  var OfficeMemoHandlers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ddOfficeMemo_action1_onClick: ddOfficeMemo_action1_onClick
  });

  var OfficeMemoService = /** @class */ (function (_super) {
      tslib.__extends(OfficeMemoService, _super);
      function OfficeMemoService(services) {
          var _this = _super.call(this, services) || this;
          _this.services = services;
          _this.controllerName = "OfficeMemo";
          return _this;
      }
      OfficeMemoService.prototype.GetOfficeMemoName = function (model) {
          return _super.prototype.doRequest.call(this, {
              controller: this.controllerName,
              action: 'GetOfficeMemoName',
              isApi: true,
              method: ControllerBase.HttpMethods.Post,
              data: { model: model },
              options: { isShowOverlay: true }
          });
      };
      return OfficeMemoService;
  }(ControllerBase.ControllerBase));

  /*import * as ApplicationPurchaseEquipmentHandlers from "./EventHandlers/ApplicationPurchaseEquipmentHandlers";*/
  // Главная входная точка всего расширения
  // Данный файл должен импортировать прямо или косвенно все остальные файлы, 
  // чтобы rollup смог собрать их все в один бандл.
  // Регистрация расширения позволяет корректно установить все
  // обработчики событий, сервисы и прочие сущности web-приложения.
  // // было до 02.11
  // extensionManager.registerExtension({
  //     name: "ExampleWebExtension",
  //     version: "1.0",
  //     globalEventHandlers: [ ApplicationPurchaseEquipmentHandlers ],
  //     layoutServices: [],
  //     controls: []
  ExtensionManager.extensionManager.registerExtension({
      name: "IntroductionToWebSE.Web.Front",
      version: "0.0.1",
      globalEventHandlers: [
          OfficeMemoHandlers
      ],
      layoutServices: [
          Service.Service.fromFactory($OfficeMemoService, function (services) { return new OfficeMemoService(services); }),
      ],
      controls: []
  });

}));
//# sourceMappingURL=extension.js.map
