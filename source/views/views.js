/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/
var type;
var color;
var count = 0;

var countCar = 0;
var countPickup = 0;
var countDTruck = 0;
var countRV = 0;

var countBK = 0;
var countWT = 0;
var countSL = 0;
var countBL = 0;

enyo.kind({
	name: "myapp.MainView",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Lets count cars!"},
		{kind: "current"},
		{kind: "enyo.Scroller", fit: true, components: [
			{tag: "div", 
			 name: "results", 
			 count: 0,
			 components: [
			 	{tag: "h2", name: "total", content: "You have not picked yet"},
				{kind: "enyo.Control", name: "totCars", content: "Nothing Yet"},
				{kind: "enyo.Control", name: "totPickups", content: "Nothing Yet"},
				{kind: "enyo.Control", name: "totDT", content: "Nothing Yet"},
				{kind: "enyo.Control", name: "totRV", content: "Nothing Yet"},

				{kind: "enyo.Control", name: "totBlack", content: "Nothing Yet"},
				{kind: "enyo.Control", name: "totSilver", content: "Nothing Yet"},
				{kind: "enyo.Control", name: "totWhite", content: "Nothing Yet"},
				{kind: "enyo.Control", name: "totBlue", content: "Nothing Yet"}
			],
			countChanged: function (oldValue) {    // Called when count changes
            // $.totCars.setContent('Total cars =' + count);
            console.log("count changed to " + count)
        },
			 bindings: [
            {from: 'this.$.results.count', to: '$.totCars.content', transform: function (val) {
                return 'Total cars =' + val;
            }}
          ]
      },
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
		{kind: "onyx.Toolbar", components: [
			{ kind: "onyx.PickerDecorator", components: [
			            {style: "min-width: 150px;"},
			            { name: "TypeCar", kind: "onyx.Picker", components: [
			                { content: "car" },
			                { content: "pickup", active: true },
			                { content: "delivery truck" },
			                { content: "RV" }
			            ]}
			        ]},
			{ kind: "onyx.PickerDecorator", components: [
			            {style: "min-width: 150px;"},
			            { name: "ColorCar", kind: "onyx.Picker", components: [
			                { content: "black" },
			                { content: "white", active: true },
			                { content: "silver" },
			                { content: "blue" }
			            ]}
			        ]},
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.setContent("");
		this.$.main.addContent("<br/>The button was tapped.<br/>");
		type = this.$.TypeCar.getSelected().getContent();
		switch (type)
			{
		    case "car":
		   			countCar += 1;
		   			break;
		   	case "pickup":
		   			countPickup += 1;
		   			break;
		   	case "delivery truck":
		   			countDTruck += 1;
		   			break;
		   	case "RV":
		   			countRV += 1;
		   			break;
		    default: 
		        alert('No Type Selected');
			}
		count += 1;
		this.$.results.set('count', count);
		this.$.current.set('type', type);

		this.$.total.setContent('Total vehicles = ' + count);
		this.$.totCars.setContent('Total cars = ' + countCar);
		this.$.totPickups.setContent('Total pickups = ' + countPickup);
		this.$.totDT.setContent('Total delivery trucks = ' + countDTruck);
		this.$.totRV.setContent('Total RVs = ' + countRV);


		color = this.$.ColorCar.getSelected().getContent();
		switch (color)
			{
		    case "black":
		   			countBK += 1;
		   			break;
		   	case "white":
		   			countWT += 1;
		   			break;
		   	case "silver":
		   			countSL += 1;
		   			break;
		   	case "blue":
		   			countBL += 1;
		   			break;
		    default: 
		        alert('No Type Selected');
			}
			this.$.current.set('color', color);

			this.$.totBlack.setContent('Total Black =' + countBK);
			this.$.totSilver.setContent('Total Silver =' + countSL);
			this.$.totWhite.setContent('Total White =' + countWT);
			this.$.totBlue.setContent('Total Blue =' + countBL);

			// logging stuff
		this.$.main.addContent(color + "<br/>");
		this.$.main.addContent(type + "<br/>");
		console.log(count);
		console.log(this.$.results.count);
		console.log("current colour kind is " + this.$.current.color);
		console.log(this.$.totCars.content);
	}
});

enyo.kind({
		 	name: "current",
      color: 'none',
      type: 'none',
      components: [
          {kind: "enyo.Control", name: "forecastLabel", content: "Hats"},
          // To be used in future, refactoring
	    //     {kind: "enyo.Control", name: "total", content: "Nada"},
					// {kind: "enyo.Control", name: "totCars", content: "Nothing Yet"},
					// {kind: "enyo.Control", name: "totPickups", content: "Nothing Yet"},
					// {kind: "enyo.Control", name: "totDT", content: "Nothing Yet"},
					// {kind: "enyo.Control", name: "totRV", content: "Nothing Yet"},

					// {kind: "enyo.Control", name: "totBlack", content: "Nothing Yet"},
					// {kind: "enyo.Control", name: "totSilver", content: "Nothing Yet"},
					// {kind: "enyo.Control", name: "totWhite", content: "Nothing Yet"},
					// {kind: "enyo.Control", name: "totBlue", content: "Nothing Yet"}
	      ],
      bindings: [
          {from: 'forecast', to: '$.forecastLabel.content'}
      ],
      computed: [
          { method: 'forecast', path: ['color', 'type'] }    // 'forecast' method depends on properties in list
      ],
      forecast: function () {
          return 'You picked a ' + this.get('type') + ' that is ' + this.get('color') + " in color!"
      }
    });