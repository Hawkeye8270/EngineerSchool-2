using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using DocsVision.BackOffice.CardLib.CardDefs;
using DocsVision.BackOffice.ObjectModel;
using DocsVision.Platform.WebClient;
using IntroductionToWebSE.Web.SE.Model;

namespace IntroductionToWebSE.Web.SE.Services { 

public class OfficeMemoService : IOfficeMemoService {

        public OfficeMemoNameModel GetOfficeMemoName(SessionContext sessionContext, Guid cardId) {
			var card = sessionContext.ObjectContext.GetObject<Document>(cardId) 
            ?? throw new ArgumentException("Invalid card id", nameof(cardId));

            //var content = card.MainInfo[CardDocument.MainInfo.Content] as string;
            var content = card.MainInfo[CardDocument.MainInfo.Name] as string;
            return new OfficeMemoNameModel { Content = content };
  
	}

        public void InitOfficeMemo(SessionContext sessionContext, Guid cardId)
        {
            var card = sessionContext.ObjectContext.GetObject<Document>(cardId);
            card.MainInfo[CardDocument.MainInfo.Content] = "This content is filled in card by life cycle";
            sessionContext.ObjectContext.SaveObject(card); 
        }
    }
}

//return new OfficeMemoNameModel { Content = content };
//return new OfficeMemoNameModel { content = content };