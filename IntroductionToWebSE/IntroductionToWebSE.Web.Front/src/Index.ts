/*import * as ApplicationPurchaseEquipmentHandlers from "./EventHandlers/ApplicationPurchaseEquipmentHandlers";*/
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";

import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { ExtensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { $OfficeMemoService } from "./Services/Interfaces/IOfficeMemoService";
import * as OfficeMemoHandlers from "./EventHandlers/OfficeMemoHandlers";
import { Service } from "@docsvision/webclient/System/Service";
//import { services } from "@docsvision/webclient/Platform/TestUtils";
import { OfficeMemoService } from "./Services/OfficeMemoService";

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

extensionManager.registerExtension({
    name: "IntroductionToWebSE.Web.Front",
    version: "0.0.1",
    globalEventHandlers: [
        OfficeMemoHandlers],
    layoutServices: [
        Service.fromFactory($OfficeMemoService, (services: $RequestManager) => new OfficeMemoService(services)),
    ],
    controls: []
})