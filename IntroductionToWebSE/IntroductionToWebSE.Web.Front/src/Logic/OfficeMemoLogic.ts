import { Layout } from "@docsvision/webclient/System/Layout";
import { $OfficeMemoService } from "../Services/Interfaces/IOfficeMemoService";
import { $MessageBox } from "@docsvision/webclient/System/$MessageBox";

export class OfficeMemoLogic {
    async performAction(layout: Layout) {
        const response = await layout.getService($OfficeMemoService).GetOfficeMemoName({
            documentId: layout.cardInfo.id
        });
        layout.getService($MessageBox).showInfo(response.content, "Содержание карточки"); 
    }
}