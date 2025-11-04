using DocsVision.Platform.WebClient;
using DocsVision.WebClientLibrary.ObjectModel.Services.EntityLifeCycle;
using DocsVision.WebClientLibrary.ObjectModel.Services.EntityLifeCycle.Options;
using IntroductionToWebSE.Web.SE.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace IntroductionToWebSE.Web.SE.CardLifeCycle
{
    internal class DemoLifeCycle : ICardLifeCycleEx
    {
        public DemoLifeCycle(ICardLifeCycleEx baseLifeCycle, IOfficeMemoService service)
        {
            this.BaseLifeCycle = baseLifeCycle;
            this.OfficeMemoService = service;
        }

        protected ICardLifeCycleEx BaseLifeCycle { get; }
        protected IOfficeMemoService OfficeMemoService { get; }



        public Guid CardTypeId => BaseLifeCycle.CardTypeId; 

        public Guid Create(SessionContext sessionContext, CardCreateLifeCycleOptions options) {
            var cardId = BaseLifeCycle.Create(sessionContext, options);
            //if (options.CardKindId == Const.OfficeMemoKindId) {
            //    OfficeMemoService.InitMyCardKind(sessionContext, cardId);
            //}
            return cardId;
        }

        public string GetDigest(SessionContext sessionContext, CardDigestLifeCycleOptions options)
        {
            throw new NotImplementedException();
        }

        public void OnDelete(SessionContext sessionContext, CardDeleteLifeCycleOptions options)
        {
            throw new NotImplementedException();
        }

        public void OnSave(SessionContext sessionContext, CardSaveLifeCycleOptions options)
        {
            throw new NotImplementedException();
        }

        public bool Validate(SessionContext sessionContext, CardValidateLifeCycleOptions options, out List<ValidationResult> validationResults)
        {
            throw new NotImplementedException();
        }

        public bool CanDelete(SessionContext sessionContext, CardDeleteLifeCycleOptions options, out string message)
        {
            return BaseLifeCycle.CanDelete(sessionContext, options, out message);
        }
    }


}