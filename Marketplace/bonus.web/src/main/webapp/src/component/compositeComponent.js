/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['component/bonusComponent', 'component/purchaseComponent'], function(bonusComponent, purchaseComponent) {
    App.Component.CompositeComponent = App.Component.BasicComponent.extend({
        initialize: function() {
            this.componentId = App.Utils.randomInteger();
            this.name = "Bonus";

            this.setupBonusComponent();
            this.setupPurchaseComponent();
        },
        render: function(domElementId) {
			if (domElementId) {
				var rootElement = $("#"+domElementId)
                                rootElement.append("<div id='main1' class='col-md-8'></div>");
				rootElement.append("<div id='bonus' class='col-md-4'></div>");

				this.purchaseComponent.render("main1");
                                this.bonusComponent.render("bonus");
			}
        },
        setupPurchaseComponent: function() {
            this.purchaseComponent = new purchaseComponent();
            this.purchaseComponent.initialize();
            //this.purchaseComponent.masterComponent.clearGlobalActions();
            this.purchaseComponent.setReadOnly(true);          
        },
        setupBonusComponent: function() {
            this.bonusComponent = new bonusComponent();
            this.bonusComponent.initialize();
            this.bonusComponent.clearRecordActions();
            this.bonusComponent.addRecordAction({
                name: 'buy',
                icon: 'glyphicon-shopping-cart',
                displayName: 'Apply Bonus',
                show: true,
                menu: 'utils'
            },
            this.applyBonus,
            this);
           
        },
        applyBonus: function() {

            
        }
    });
    return App.Component.CompositeComponent;
});

