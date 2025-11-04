import { CustomButton } from "@docsvision/webclient/Platform/CustomButton";
import { OfficeMemoLogic } from "../Logic/OfficeMemoLogic";

export async function ddOfficeMemo_action1_onClick(sender: CustomButton) {
    new OfficeMemoLogic().performAction(sender.layout);
}